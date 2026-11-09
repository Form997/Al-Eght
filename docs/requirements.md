# Đặc tả yêu cầu sản phẩm – Al Edu V1.0

## Mục đích
Định nghĩa phạm vi V1 có thể kiểm thử. Ứng dụng hiện là website tĩnh, dữ liệu lưu trong trình duyệt.

## Yêu cầu chức năng và trạng thái
| Mã | Yêu cầu | Tiêu chí chấp nhận | Trạng thái |
|---|---|---|---|
| FR-01 | Điều hướng | Ba khu vực truy cập bằng điều khiển có nhãn | Đã triển khai; cần kiểm thử bàn phím |
| FR-02 | Không gian học | Tạo, xem, sửa, xóa, tìm kiếm | Đã triển khai |
| FR-03 | Học liệu | Thêm, sửa, xóa, tìm kiếm, lọc theo loại/trạng thái | Đã triển khai |
| FR-04 | Siêu dữ liệu | Tiêu đề, mô tả, loại, ngôn ngữ, tác giả, lĩnh vực, ngày, phiên bản, giấy phép | Đã triển khai |
| FR-05 | Bảng tương tác | Bút/tẩy, màu, độ dày, hoàn tác/làm lại | Đã triển khai; cần kiểm thử thiết bị |
| FR-06 | Lưu bảng | Lưu và khôi phục trên cùng trình duyệt | Đã triển khai |
| FR-07 | Hồ sơ nguồn | Lưu URL và trạng thái bằng chứng do người dùng khai báo | Đã triển khai; không tự xác minh |
| FR-08 | Xuất/nhập dữ liệu | JSON có phiên bản và kiểm tra cấu trúc | Đã triển khai; cần kiểm thử dữ liệu biên |
| FR-09 | Xử lý lỗi | Thông báo lỗi; xác nhận trước khi xóa/ghi đè | Đã triển khai cơ bản |
| FR-10 | Tiếp cận | Nhãn, tiêu điểm, tương phản, bàn phím và công nghệ trợ giúp | Mục tiêu thiết kế; chưa được chứng nhận |

## Yêu cầu phi chức năng
- Không gửi dữ liệu người dùng lên máy chủ trong kiến trúc V1 hiện tại.
- Dữ liệu người dùng hiển thị qua textContent, không được diễn giải như HTML.
- Liên kết ngoài mở tab mới với noopener và noreferrer.
- Tệp sao lưu có schemaVersion; nhập dữ liệu phải kiểm tra trước khi thay thế.
- Hỗ trợ giao diện điện thoại và máy tính.
- Dùng WCAG 2.2 AA làm mục tiêu thiết kế, không tuyên bố đạt chuẩn trước đánh giá.

## Ngoài phạm vi
Tài khoản, phân quyền đa người, đồng bộ đám mây, lớp học trực tuyến, AI giáo viên, nhận dạng tiếng nói/chữ viết và mô phỏng 3D nâng cao.

## Quy tắc nguồn
Trạng thái nguồn là metadata biên tập. Đã ghi nguồn không đồng nghĩa nguồn đáng tin. Đã xác minh chỉ được chọn sau khi người biên soạn thực sự đối chiếu. Ứng dụng chưa lưu người rà soát hoặc biên bản xác minh.
