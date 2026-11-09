# Hồ sơ nghiệm thu thiết bị thực tế – Al Edu V1.1

## 1. Mục đích và nguyên tắc

Tài liệu này ghi nhận kiểm thử thủ công trên thiết bị và trình duyệt thật. Không đánh dấu đạt chỉ vì giao diện mở được. Mỗi kết quả phải kèm thiết bị, phiên bản hệ điều hành, trình duyệt, ngày thử và ghi chú/lỗi quan sát được.

- Môi trường CI Chromium/Firefox/WebKit là kiểm thử tự động trên Linux, không thay thế thiết bị thật.
- Không xóa dữ liệu trình duyệt, bộ nhớ trang web hoặc cache trong lúc thử nếu chưa xuất bản sao lưu JSON.
- Chỉ dùng dữ liệu giả lập, không nhập thông tin cá nhân hoặc nội dung nhạy cảm.
- Trạng thái: Chưa thử / Đạt / Không đạt / Không áp dụng.

## 2. Hồ sơ thiết bị

| Trường | Ghi nhận |
|---|---|
| Thiết bị | Samsung Galaxy A05 |
| Hệ điều hành | Android (ghi phiên bản thực tế trước khi thử) |
| Trình duyệt 1 | Google Chrome (ghi phiên bản) |
| Trình duyệt 2 | Samsung Internet (ghi phiên bản) |
| Ngày và giờ | Ghi ngày giờ thực tế |
| URL | https://form997.github.io/Al-Eght/ |
| Người kiểm thử | Ghi người thực hiện |

Không tự điền phiên bản hệ điều hành/trình duyệt nếu chưa kiểm tra trong phần Cài đặt hoặc Thông tin ứng dụng.

## 3. Chuẩn bị an toàn

1. Mở Al Edu và xác nhận đúng địa chỉ website.
2. Nếu đã có dữ liệu cần giữ, vào chức năng sao lưu và xuất JSON.
3. Lưu tệp JSON vào thư mục dễ tìm, chẳng hạn Downloads.
4. Tạo một bộ dữ liệu thử có tên dễ nhận biết, ví dụ `KIEM-THU-A05`.
5. Không dùng chức năng xóa dữ liệu trình duyệt hoặc gỡ trình duyệt trong bài thử này.

## 4. Danh sách kiểm thử Samsung A05

| ID | Thao tác | Kết quả mong đợi | Trạng thái |
|---|---|---|---|
| A05-01 | Mở website bằng Chrome | Trang tải đủ, không vỡ bố cục | Chưa thử |
| A05-02 | Mở website bằng Samsung Internet | Trang tải đủ, không vỡ bố cục | Chưa thử |
| A05-03 | Xem ở chiều dọc | Không có cuộn ngang toàn trang ngoài vùng điều hướng được thiết kế | Chưa thử |
| A05-04 | Xoay sang chiều ngang | Nội dung và nút vẫn truy cập được | Chưa thử |
| A05-05 | Thu phóng trang nếu trình duyệt hỗ trợ | Nội dung không bị che hoặc mất thao tác chính | Chưa thử |
| A05-06 | Mở từng khu vực và cuộn | Tiêu đề, nội dung, nút không chồng lấn | Chưa thử |
| A05-07 | Tạo, sửa, tìm và xóa một không gian thử | Các thao tác phản hồi đúng | Chưa thử |
| A05-08 | Tạo học liệu thử và tìm kiếm/lọc | Nội dung hiển thị đúng, không mất trường | Chưa thử |
| A05-09 | Chạm các nút và trường nhập | Nút nhận chạm; bàn phím ảo không che mất thao tác cần thiết | Chưa thử |
| A05-10 | Vẽ vài nét trên bảng | Nét vẽ theo ngón tay, không cuộn trang ngoài ý muốn trong vùng vẽ | Chưa thử |
| A05-11 | Dùng tẩy, đổi màu/độ dày, undo/redo | Công cụ hoạt động đúng | Chưa thử |
| A05-12 | Tải bảng vẽ PNG | Tệp PNG được tạo và mở được | Chưa thử |
| A05-13 | Xuất bản sao lưu JSON | Tệp JSON được tải xuống | Chưa thử |
| A05-14 | Mở lại hoặc tải lại trang | Dữ liệu cục bộ còn nguyên trong cùng trình duyệt | Chưa thử |
| A05-15 | Thử khôi phục từ JSON đã xuất | Dữ liệu thử được khôi phục đúng | Chưa thử |
| A05-16 | Thử nút quay lại và tải lại trang | Không kẹt giao diện hoặc mất dữ liệu đã lưu | Chưa thử |

## 5. Kiểm thử iPhone/iPad và máy tính

Lặp lại các bài phù hợp trên thiết bị thật:

- iPhone/iPad: Safari; kiểm tra vùng an toàn, bàn phím ảo, chọn tệp JSON, tải PNG, cảm ứng và Apple Pencil nếu có.
- Windows: Edge/Chrome; chuột, bàn phím, zoom 200%, tải và nhập tệp.
- macOS: Safari/Chrome; trackpad, bàn phím, hộp thoại chọn tệp và tải tệp.
- Linux: Firefox/Chromium; bàn phím, font hệ thống, tải và nhập tệp.

## 6. Ghi nhận lỗi

Với mỗi lỗi, ghi:
- ID bài thử.
- Thiết bị, hệ điều hành và phiên bản trình duyệt.
- Các bước tái hiện ngắn gọn.
- Kết quả thực tế và kết quả mong đợi.
- Ảnh chụp màn hình nếu có (che thông tin riêng tư).
- Mức độ: Chặn phát hành / Nghiêm trọng / Trung bình / Nhẹ.

Không sửa lỗi chỉ trên thiết bị đang thử bằng CSS/JS tạm thời; cần tái hiện và kiểm thử hồi quy trước khi đưa bản sửa vào nhánh.

## 7. Cổng nghiệm thu V1.1

Chỉ ghi nhận nghiệm thu thiết bị khi:
- Tất cả bài bắt buộc trên thiết bị mục tiêu đã có trạng thái.
- Không còn lỗi Chặn phát hành hoặc Nghiêm trọng.
- Sao lưu và khôi phục JSON đã được thử thành công.
- PNG xuất ra mở được.
- Có thông tin phiên bản thiết bị, hệ điều hành, trình duyệt và ngày thử.
- Các lỗi phát hiện đã được ghi nhận và có kết quả kiểm tra lại.

**Tình trạng ban đầu:** Chưa nghiệm thu thiết bị thật. Tài liệu này là biểu mẫu ghi nhận, không phải bằng chứng rằng Samsung A05 hoặc các thiết bị khác đã vượt qua kiểm thử.
