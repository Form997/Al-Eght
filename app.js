(() => {
  "use strict";
  const canvas = document.getElementById("board");
  const ctx = canvas.getContext("2d", { alpha: false });
  const colorInput = document.getElementById("inkColor");
  const sizeInput = document.getElementById("inkSize");
  const sizeValue = document.getElementById("sizeValue");
  const saveState = document.getElementById("saveState");
  const hint = document.getElementById("canvasHint");
  const undoButton = document.getElementById("undo");
  const redoButton = document.getElementById("redo");
  const STORAGE_KEY = "al-edu-v1-whiteboard";
  const HISTORY_LIMIT = 40;
  let tool = "pen";
  let drawing = false;
  let activePointer = null;
  let history = [];
  let historyIndex = -1;
  let strokes = [];
  let currentStroke = null;
  let saveTimer = null;
  let dirty = false;
  let cssWidth = 0;
  let cssHeight = 0;

  function setStatus(message) { saveState.textContent = message; }
  function setDirty(value) {
    dirty = value;
    if (value) setStatus("Có thay đổi chưa lưu");
  }
  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const oldWidth = cssWidth, oldHeight = cssHeight;
    const ratio = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
    const snapshot = oldWidth && oldHeight ? canvas.toDataURL("image/png") : null;
    cssWidth = rect.width; cssHeight = rect.height;
    canvas.width = Math.round(cssWidth * ratio);
    canvas.height = Math.round(cssHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, cssWidth, cssHeight);
    if (snapshot && oldWidth && oldHeight) {
      const image = new Image();
      image.onload = () => { ctx.drawImage(image, 0, 0, cssWidth, cssHeight); };
      image.src = snapshot;
    } else render();
  }
  function render() {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
    ctx.setTransform(canvas.width / cssWidth, 0, 0, canvas.height / cssHeight, 0, 0);
    for (const stroke of strokes) drawStroke(stroke);
    if (currentStroke) drawStroke(currentStroke);
    hint.classList.toggle("hidden", strokes.length > 0 || !!currentStroke);
    updateHistoryButtons();
  }
  function drawStroke(stroke) {
    const points = stroke.points || [];
    if (!points.length) return;
    ctx.save();
    ctx.globalCompositeOperation = stroke.tool === "eraser" ? "destination-out" : "source-over";
    ctx.strokeStyle = stroke.color;
    ctx.fillStyle = stroke.color;
    ctx.lineWidth = stroke.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (points.length === 1) {
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, stroke.width / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.stroke();
    }
    ctx.restore();
  }
  function snapshotHistory() {
    history = history.slice(0, historyIndex + 1);
    history.push(JSON.stringify(strokes));
    if (history.length > HISTORY_LIMIT) history.shift();
    historyIndex = history.length - 1;
    updateHistoryButtons();
  }
  function updateHistoryButtons() {
    undoButton.disabled = historyIndex <= 0;
    redoButton.disabled = historyIndex < 0 || historyIndex >= history.length - 1;
  }
  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return { x: Math.max(0, Math.min(rect.width, event.clientX - rect.left)), y: Math.max(0, Math.min(rect.height, event.clientY - rect.top)) };
  }
  function beginStroke(event) {
    if (event.button !== undefined && event.button !== 0) return;
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    drawing = true;
    activePointer = event.pointerId;
    const width = Number(sizeInput.value);
    currentStroke = { tool, color: colorInput.value, width: tool === "eraser" ? Math.max(12, width * 3) : width, points: [pointFromEvent(event)] };
    render();
  }
  function moveStroke(event) {
    if (!drawing || event.pointerId !== activePointer || !currentStroke) return;
    event.preventDefault();
    currentStroke.points.push(pointFromEvent(event));
    render();
  }
  function endStroke(event) {
    if (!drawing || event.pointerId !== activePointer) return;
    drawing = false;
    activePointer = null;
    if (currentStroke && currentStroke.points.length) {
      strokes.push(currentStroke);
      currentStroke = null;
      snapshotHistory();
      render();
      setDirty(true);
      scheduleAutosave();
    }
  }
  function undo() {
    if (historyIndex <= 0) return;
    historyIndex--;
    strokes = JSON.parse(history[historyIndex]);
    render(); setDirty(true); scheduleAutosave();
  }
  function redo() {
    if (historyIndex >= history.length - 1) return;
    historyIndex++;
    strokes = JSON.parse(history[historyIndex]);
    render(); setDirty(true); scheduleAutosave();
  }
  function save() {
    try {
      const payload = { schemaVersion: 1, updatedAt: new Date().toISOString(), strokes };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      dirty = false;
      setStatus("Đã lưu trên thiết bị");
      document.getElementById("boardStatus").textContent = "Đã lưu";
      return true;
    } catch (error) {
      setStatus("Không thể lưu – bộ nhớ có thể đã đầy");
      document.getElementById("boardStatus").textContent = "Lỗi lưu dữ liệu";
      return false;
    }
  }
  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const data = JSON.parse(raw);
      if (!data || data.schemaVersion !== 1 || !Array.isArray(data.strokes)) return false;
      strokes = data.strokes.filter(s => s && Array.isArray(s.points) && typeof s.width === "number");
      history = [JSON.stringify(strokes)];
      historyIndex = 0;
      render();
      setStatus("Đã khôi phục bảng đã lưu");
      return true;
    } catch (error) {
      setStatus("Không đọc được dữ liệu đã lưu");
      return false;
    }
  }
  function scheduleAutosave() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(save, 1200);
  }
  function newBoard() {
    if (dirty && !window.confirm("Bảng có thay đổi chưa lưu. Tạo bảng mới và bỏ các thay đổi này?")) return;
    strokes = [];
    history = [];
    historyIndex = -1;
    snapshotHistory();
    render();
    setDirty(true);
    scheduleAutosave();
  }
  function clearBoard() {
    if (!strokes.length) return;
    if (!window.confirm("Xóa toàn bộ nội dung trên bảng?")) return;
    strokes = [];
    snapshotHistory();
    render();
    setDirty(true);
    scheduleAutosave();
  }
  function exportPng() {
    const link = document.createElement("a");
    link.download = "al-edu-whiteboard.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  document.querySelectorAll("[data-tool]").forEach(button => {
    button.addEventListener("click", () => {
      tool = button.dataset.tool;
      document.querySelectorAll("[data-tool]").forEach(item => {
        const selected = item === button;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      canvas.style.cursor = tool === "eraser" ? "cell" : "crosshair";
    });
  });
  sizeInput.addEventListener("input", () => { sizeValue.value = sizeInput.value + " px"; });
  canvas.addEventListener("pointerdown", beginStroke);
  canvas.addEventListener("pointermove", moveStroke);
  canvas.addEventListener("pointerup", endStroke);
  canvas.addEventListener("pointercancel", endStroke);
  canvas.addEventListener("lostpointercapture", endStroke);
  undoButton.addEventListener("click", undo);
  redoButton.addEventListener("click", redo);
  document.getElementById("saveBoard").addEventListener("click", save);
  document.getElementById("newBoard").addEventListener("click", newBoard);
  document.getElementById("clearBoard").addEventListener("click", clearBoard);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("beforeunload", event => {
    if (dirty) { event.preventDefault(); event.returnValue = ""; }
  });
  resizeCanvas();
  if (!load()) snapshotHistory();
  document.getElementById("boardStatus").textContent = "Bảng sẵn sàng";
})();