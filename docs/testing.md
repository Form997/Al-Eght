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

## Kiểm thử tiếp cận
- Điều hướng toàn bộ bằng bàn phím.
- Kiểm tra thứ tự focus, nhãn biểu mẫu và thông báo trạng thái.
- Kiểm tra tương phản, zoom 200%, trình đọc màn hình và cảm ứng.
- Đối chiếu WCAG 2.2 AA; chưa tuyên bố đạt chuẩn nếu chưa có báo cáo.

## Cổng nghiệm thu
Chỉ phát hành ổn định sau khi kiểm thử trên trình duyệt mục tiêu, Android/iOS và máy tính; xác nhận khôi phục dữ liệu; kiểm tra lỗi console; rà soát bảo mật và đánh giá tiếp cận. Bản dev không đồng nghĩa bản phát hành ổn định.
