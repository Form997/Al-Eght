# Kế hoạch kiểm thử và nghiệm thu Al Edu

## 1. Kiểm tra tĩnh
- Kiểm tra cú pháp JavaScript bằng `node --check app.js`.
- Kiểm tra các tệp bắt buộc, cấu trúc vùng giao diện và schema sao lưu.
- Rà soát không dùng `innerHTML` để đưa dữ liệu người dùng vào DOM.
- Kiểm tra URL nguồn chỉ chấp nhận HTTP/HTTPS.

## 2. Kiểm thử hồi quy tự động V1.1
Workflow `.github/workflows/v1.1-browser-tests.yml` chạy trên GitHub Actions với Chromium, Firefox và WebKit:
- Kiểm tra bố cục tại 320, 360, 390, 768, 1024, 1280 và 1440 CSS px; phát hiện tràn ngang.
- Tạo không gian học, tải lại trang và xác nhận dữ liệu còn nguyên.
- Tạo học liệu, tìm kiếm và lọc theo trạng thái.
- Xuất JSON, xóa dữ liệu thử nghiệm rồi nhập lại bản sao lưu.
- Vẽ bảng bằng Pointer Events, hoàn tác/làm lại, lưu và xuất PNG.
- Kiểm tra thao tác cảm ứng trong Chromium mobile emulation.

Các phép thử trình duyệt là kiểm thử tự động trên môi trường Linux CI. Chúng không thay thế việc thử trực tiếp trên điện thoại Android/iPhone/iPad và máy tính Windows/macOS/Linux thực tế.

## 3. Ma trận thiết bị và trình duyệt cần nghiệm thu trực tiếp
- Android: Chrome và Samsung Internet; kiểm tra cảm ứng, xoay màn hình, nhập/xuất JSON và bảng vẽ.
- iOS/iPadOS: Safari; kiểm tra vùng an toàn, bàn phím ảo, hộp thoại, chọn tệp và Apple Pencil/cảm ứng nếu có.
- Windows: Edge và Chrome; kiểm tra chuột, bàn phím, zoom 200%, tải PNG/JSON.
- macOS: Safari và Chrome; kiểm tra trackpad, bàn phím, hộp thoại và tải tệp.
- Linux: Firefox và Chromium; kiểm tra bàn phím, font hệ thống, tải tệp và bảng vẽ.
- Kích thước tham chiếu: 320, 360, 390, 768, 1024, 1280 và 1440 CSS px; cả dọc, ngang và zoom 200%.

Biểu mẫu từng bước, ưu tiên Samsung Galaxy A05: [docs/real-device-acceptance.md](real-device-acceptance.md).

## 4. Kiểm thử tiếp cận
- Điều hướng toàn bộ bằng bàn phím.
- Kiểm tra thứ tự focus, nhãn biểu mẫu và thông báo trạng thái.
- Kiểm tra tương phản, zoom 200%, trình đọc màn hình và cảm ứng.
- Đối chiếu WCAG 2.2 AA; chưa tuyên bố đạt chuẩn nếu chưa có báo cáo.

## 5. Cổng nghiệm thu
Chỉ phát hành ổn định sau khi:
- Tất cả job tự động đều thành công.
- Kiểm thử trực tiếp trên trình duyệt và thiết bị mục tiêu.
- Xác nhận sao lưu/khôi phục dữ liệu.
- Kiểm tra lỗi console, bảo mật và tiếp cận.
- Lưu bằng chứng kết quả, phiên bản trình duyệt, thiết bị và ngày kiểm thử.

Bản dev hoặc CI xanh không đồng nghĩa với việc mọi hệ điều hành, thiết bị đã được kiểm thử thực tế.
