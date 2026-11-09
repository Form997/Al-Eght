# Kế hoạch kiểm thử và nghiệm thu Al Edu V1

## Kiểm tra tĩnh
- Kiểm tra cú pháp JavaScript bằng lệnh node --check app.js.
- Kiểm tra HTML hợp lệ và đường dẫn tài nguyên.
- Rà soát không dùng innerHTML cho dữ liệu người dùng.
- Kiểm tra URL nguồn chỉ chấp nhận HTTP/HTTPS.

## Kiểm thử chức năng
| Khu vực | Ca kiểm thử | Kết quả mong đợi |
|---|---|---|
| Điều hướng | Chuyển qua ba khu vực | Chỉ hiển thị đúng khu vực |
| Không gian | Tạo/sửa/xóa/tìm kiếm | Danh sách và thống kê cập nhật; xóa có xác nhận |
| Học liệu | Thêm/sửa/xóa/tìm kiếm/lọc | Metadata hiển thị đúng; còn sau tải lại |
| Nguồn | URL sai và URL HTTPS hợp lệ | URL sai bị từ chối; không tự gắn nhãn xác minh |
| Bảng | Vẽ, tẩy, undo, redo, lưu, tải lại | Nét và thứ tự lịch sử chính xác |
| Sao lưu | Xuất rồi nhập JSON | Khôi phục đúng không gian, học liệu và bảng |
| Dữ liệu sai | JSON lỗi, sai schema, ID trùng | Từ chối; không ghi đè dữ liệu hiện có |
| Responsive | Màn hình hẹp và rộng | Không tràn ngang; nút thao tác dùng được |

## Ma trận thiết bị và trình duyệt cần nghiệm thu\n- Android: Chrome và Samsung Internet; kiểm tra cảm ứng, xoay màn hình, nhập/xuất JSON và bảng vẽ.\n- iOS/iPadOS: Safari; kiểm tra vùng an toàn tai thỏ, bàn phím ảo, hộp thoại, chọn tệp và thao tác Apple Pencil/cảm ứng nếu có.\n- Windows: Edge và Chrome; kiểm tra chuột, bàn phím, phóng to 200%, tải PNG/JSON.\n- macOS: Safari và Chrome; kiểm tra trackpad, bàn phím, hộp thoại và tải tệp.\n- Linux: Firefox và Chromium; kiểm tra phím tắt, font hệ thống, tải tệp và bảng vẽ.\n- Kích thước tham chiếu: 320, 360, 390, 768, 1024, 1280 và 1440 CSS px; cả dọc, ngang và zoom 200%.\n- Trình duyệt phải bật JavaScript, hỗ trợ localStorage, Pointer Events, Canvas 2D, dialog và File API.\n\n## Kiểm thử tiếp cận
- Điều hướng toàn bộ bằng bàn phím.
- Kiểm tra thứ tự focus, nhãn biểu mẫu và thông báo trạng thái.
- Kiểm tra tương phản, zoom 200%, trình đọc màn hình và cảm ứng.
- Đối chiếu WCAG 2.2 AA; chưa tuyên bố đạt chuẩn nếu chưa có báo cáo.

## Cổng nghiệm thu
Chỉ phát hành ổn định sau khi kiểm thử trên trình duyệt mục tiêu, Android/iOS và máy tính; xác nhận khôi phục dữ liệu; kiểm tra lỗi console; rà soát bảo mật và đánh giá tiếp cận. Bản dev không đồng nghĩa bản phát hành ổn định.
