# Al Edu

**Al Edu** là nền tảng giáo dục số mở, hướng tới mở rộng khả năng tiếp cận tri thức, hỗ trợ dạy học và học tập tương tác trên nhiều lĩnh vực.

> **Phiên bản:** V1.0 Foundation đã chốt phạm vi; V1.1 bổ sung kiểm thử hồi quy đa trình duyệt và hồ sơ nghiệm thu thiết bị thật.  
> **Kiến trúc:** website tĩnh; dữ liệu lưu trên trình duyệt, chưa có máy chủ hoặc đồng bộ tài khoản.

## Phạm vi V1
- Không gian học tập: tạo, sửa, xóa và tìm kiếm.
- Thư viện học liệu: mô tả, loại, lĩnh vực, tác giả/cơ quan, ngôn ngữ, nguồn, ngày xuất bản, phiên bản, giấy phép và trạng thái bằng chứng.
- Bảng tương tác: bút, tẩy, màu, độ dày, hoàn tác/làm lại, lưu và xuất PNG.
- Sao lưu và khôi phục dữ liệu không gian, học liệu và bảng bằng JSON có phiên bản.
- Giao diện đáp ứng cho Android, iOS, Windows, macOS và Linux thông qua trình duyệt hiện đại; có điều chỉnh vùng an toàn, cảm ứng, bàn phím, màn hình nhỏ, xoay ngang và chế độ giảm chuyển động. Đây là mục tiêu tương thích, không phải chứng nhận mọi thiết bị/trình duyệt.

## Kiểm thử V1.1
- GitHub Actions tự động kiểm thử Chromium, Firefox và WebKit trên Linux.
- Bao phủ các kích thước màn hình từ 320 đến 1440 CSS px, nghiệp vụ tạo dữ liệu, tìm kiếm/lọc, sao lưu/khôi phục, bảng vẽ và cảm ứng giả lập.
- Hồ sơ kiểm thử trực tiếp Android/iOS/Windows/macOS/Linux: [docs/real-device-acceptance.md](docs/real-device-acceptance.md).
- CI không thay thế kiểm thử trên thiết bị thật; trạng thái nghiệm thu thiết bị chỉ được cập nhật khi có bằng chứng.

## Chạy ứng dụng
Không cần cài thư viện. Mở `index.html` bằng trình duyệt hoặc triển khai thư mục gốc qua GitHub Pages.

## Triển khai GitHub Pages
1. Vào Settings → Pages của kho mã.
2. Ở Build and deployment → Source, chọn GitHub Actions.
3. Mở tab Actions, chờ workflow Deploy Al Edu V1 to GitHub Pages chạy thành công.
4. Chỉ công bố địa chỉ website sau khi GitHub xác nhận triển khai thành công.

## Dữ liệu và giới hạn
- Dữ liệu nằm trong localStorage của trình duyệt. Xóa dữ liệu trình duyệt có thể làm mất dữ liệu Al Edu.
- Sao lưu JSON là cách chuyển dữ liệu giữa thiết bị; nên lưu bản sao định kỳ ở nơi an toàn.
- Ứng dụng không tự thẩm định nội dung nguồn, giấy phép hoặc tính đúng đắn của học liệu.
- Không có đăng nhập, phân quyền nhiều người, đồng bộ đám mây hay cộng tác trong V1.
- Không nhập mật khẩu, dữ liệu nhạy cảm hoặc bí mật vào bản chạy cục bộ.

## Trạng thái bằng chứng
Các nhãn Chưa rà soát, Đã ghi nguồn, Đã rà soát, Đã xác minh, Có tranh luận và Ngừng khuyến nghị là trạng thái biên tập do người dùng khai báo. Ứng dụng không tự xác minh.

## Tài liệu
- `docs/vision.md` – Tầm nhìn
- `docs/requirements.md` – Yêu cầu sản phẩm
- `docs/educational-framework.md` – Khung giáo dục
- `docs/architecture.md` – Kiến trúc
- `docs/source-register.md` – Danh mục nguồn
- `docs/testing.md` – Kiểm thử và nghiệm thu
- `docs/real-device-acceptance.md` – Biểu mẫu nghiệm thu thiết bị thật
- `docs/user-guide.md` – Hướng dẫn sử dụng
- `CHANGELOG.md` – Nhật ký thay đổi

Ưu tiên nguồn đầu nguồn, tiêu chuẩn chính thức; phân biệt dữ kiện, diễn giải và giả thuyết; bảo toàn đơn vị, thứ nguyên và ngữ cảnh chuyên ngành. Không tuyên bố tính năng hoàn tất hoặc đạt chuẩn tiếp cận nếu chưa có bằng chứng kiểm thử.
