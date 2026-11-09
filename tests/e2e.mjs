import { chromium, firefox, webkit } from "playwright";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const engineName = process.argv[2] || "chromium";
const engines = { chromium, firefox, webkit };
const engine = engines[engineName];
if (!engine) throw new Error(`Unsupported browser: ${engineName}`);

const browser = await engine.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await context.newPage();
const pageErrors = [];
page.on("pageerror", error => pageErrors.push(error.message));

try {
  await page.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
  assert.equal(await page.title(), "Al Edu | Không gian học tập");

  // Responsive regression sweep: narrow phones through desktop widths.
  for (const width of [320, 360, 390, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(80);
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth
    }));
    assert.ok(
      dimensions.content <= dimensions.viewport + 1,
      `Horizontal overflow at ${width}px: ${JSON.stringify(dimensions)}`
    );
  }
  await page.setViewportSize({ width: 1280, height: 900 });

  // Create a learning space and verify persistence.
  await page.locator("#addSpace").click();
  await page.locator("#spaceName").fill("Kiểm thử V1.1");
  await page.locator("#spaceDescription").fill("Không gian kiểm thử tự động.");
  await page.locator("#spaceDomain").fill("Công nghệ");
  await page.locator("#spaceForm button[type=submit]").click();
  await page.getByText("Kiểm thử V1.1", { exact: true }).waitFor();
  await page.reload();
  await page.getByText("Kiểm thử V1.1", { exact: true }).waitFor();

  // Create a source-linked resource and exercise search/filter.
  await page.locator('[data-view="library"]').click();
  await page.locator("#addResource").click();
  await page.locator("#resourceTitle").fill("Tài liệu kiểm thử");
  await page.locator("#resourceDomain").fill("Giáo dục");
  await page.locator("#resourceAuthor").fill("Al Edu QA");
  await page.locator("#resourceUrl").fill("https://example.org/reference");
  await page.locator("#resourceStatus").selectOption("source-linked");
  await page.locator("#resourceForm button[type=submit]").click();
  await page.getByText("Tài liệu kiểm thử", { exact: true }).waitFor();
  await page.locator("#statusFilter").selectOption("source-linked");
  await page.getByText("Tài liệu kiểm thử", { exact: true }).waitFor();
  await page.locator("#resourceSearch").fill("không-có-kết-quả");
  await page.getByText("Không có học liệu phù hợp bộ lọc.").waitFor();
  await page.locator("#resourceSearch").fill("");

  // Export JSON, remove a resource, then restore the exported data.
  const [jsonDownload] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#exportData").click()
  ]);
  const jsonPath = await jsonDownload.path();
  assert.ok(jsonPath, "JSON backup should be downloaded");
  const backup = await readFile(jsonPath);
  const backupData = JSON.parse(backup.toString("utf8"));
  assert.equal(backupData.application, "Al Edu");
  assert.equal(backupData.schemaVersion, 1);
  assert.ok(backupData.resources.some(item => item.title === "Tài liệu kiểm thử"));

  page.once("dialog", dialog => dialog.accept());
  await page.locator('#resourceList button[data-action="delete-resource"]').click();
  await page.getByText("Thư viện đang trống. Hãy thêm học liệu có nguồn.").waitFor();
  page.once("dialog", dialog => dialog.accept());
  await page.locator("#importData").setInputFiles({
    name: "al-edu-backup.json",
    mimeType: "application/json",
    buffer: backup
  });
  await page.getByText("Tài liệu kiểm thử", { exact: true }).waitFor();

  // Exercise canvas pointer drawing, undo/redo and PNG export.
  await page.locator('[data-view="board"]').click();
  const canvas = page.locator("#board");
  const bounds = await canvas.boundingBox();
  assert.ok(bounds && bounds.width > 0 && bounds.height > 0, "Canvas should be visible");
  await page.mouse.move(bounds.x + 40, bounds.y + 40);
  await page.mouse.down();
  await page.mouse.move(bounds.x + 120, bounds.y + 90, { steps: 5 });
  await page.mouse.up();
  await page.locator("#saveBoard").click();
  let board = await page.evaluate(() => JSON.parse(localStorage.getItem("al-edu-v1-whiteboard")));
  assert.ok(board.strokes.length > 0, "Canvas stroke should be saved");
  await page.locator("#undo").click();
  await page.locator("#redo").click();
  const [pngDownload] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#exportPng").click()
  ]);
  assert.match(pngDownload.suggestedFilename(), /\.png$/);

  await page.reload();
  await page.locator('[data-view="board"]').click();
  board = await page.evaluate(() => JSON.parse(localStorage.getItem("al-edu-v1-whiteboard")));
  assert.ok(board.strokes.length > 0, "Whiteboard should persist after reload");

  assert.deepEqual(pageErrors, [], `Uncaught browser errors: ${pageErrors.join("; ")}`);
  console.log(`PASS ${engineName}: responsive widths, CRUD, filtering, backup/restore, canvas, persistence`);
} finally {
  await context.close();
  await browser.close();
}

// Chromium-only touch smoke test using a mobile browser context.
if (engineName === "chromium") {
  const mobileBrowser = await chromium.launch({ headless: true });
  const mobileContext = await mobileBrowser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  const mobileErrors = [];
  mobilePage.on("pageerror", error => mobileErrors.push(error.message));
  try {
    await mobilePage.goto("http://127.0.0.1:4173", { waitUntil: "networkidle" });
    await mobilePage.locator('[data-view="board"]').tap();
    const mobileCanvas = mobilePage.locator("#board");
    const rect = await mobileCanvas.boundingBox();
    assert.ok(rect && rect.width > 0, "Mobile canvas should be visible");
    await mobilePage.touchscreen.tap(rect.x + rect.width / 2, rect.y + rect.height / 2);
    await mobilePage.locator("#saveBoard").tap();
    const mobileBoard = await mobilePage.evaluate(() => JSON.parse(localStorage.getItem("al-edu-v1-whiteboard")));
    assert.ok(mobileBoard.strokes.length > 0, "Touch input should create a canvas stroke");
    assert.deepEqual(mobileErrors, []);
    console.log("PASS chromium mobile: touch input and mobile layout");
  } finally {
    await mobileContext.close();
    await mobileBrowser.close();
  }
}
