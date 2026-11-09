# Đặc tả yêu cầu sản phẩm – Al Edu V1.0

## 1. Mục đích
Xác định phạm vi tối thiểu có thể nghiệm thu của phiên bản V1.0. Tài liệu này là cơ sở thiết kế, triển khai và kiểm thử.

## 2. Nhóm người dùng
- Người học tự học.
- Giáo viên/người hướng dẫn.
- Người biên soạn học liệu.
- Quản trị viên hệ thống.

Vai trò có thể được một người dùng đảm nhiệm đồng thời; quyền phải được kiểm soát theo nguyên tắc đặc quyền tối thiểu.

## 3. Yêu cầu chức năng
| Mã | Yêu cầu | Tiêu chí chấp nhận |
|---|---|---|
| FR-01 | Điều hướng nền tảng | Truy cập khu vực chính bằng chuột, cảm ứng và bàn phím |
| FR-02 | Không gian học tập | Tạo, xem, đổi tên và lưu không gian học |
| FR-03 | Học liệu | Tạo, nhập, phân loại, tìm và mở học liệu được hỗ trợ |
| FR-04 | Siêu dữ liệu | Có tiêu đề, mô tả, loại, ngôn ngữ, tác giả/nguồn và ngày cập nhật khi có |
| FR-05 | Bảng tương tác | Viết/vẽ, chọn công cụ, xóa nét, hoàn tác và làm lại |
| FR-06 | Lưu bảng | Lưu và mở lại nội dung bảng mà không sai thứ tự thao tác |
| FR-07 | Hồ sơ nguồn | Ghi nguồn và trạng thái xác minh cho nội dung tri thức |
| FR-08 | Xuất dữ liệu | Có phương án xuất dữ liệu người dùng ở định dạng được công bố |
| FR-09 | Xử lý lỗi | Hiển thị thông báo dễ hiểu; không âm thầm làm mất dữ liệu |
| FR-10 | Tiếp cận | Có nhãn điều khiển, thứ tự tiêu điểm hợp lý, tương phản và thao tác bàn phím |

### Trạng thái triển khai hiện tại
- Đã triển khai bảng vẽ cơ bản, bút/tẩy, chọn màu/độ dày, hoàn tác/làm lại, lưu cục bộ và xuất PNG.
- FR-02, FR-03, FR-07 và FR-08 ở phạm vi quản lý dữ liệu/học liệu tổng quát chưa được nghiệm thu đầy đủ. Xuất PNG chỉ đáp ứng xuất ảnh bảng, không thay thế xuất toàn bộ dữ liệu người dùng.
- FR-10 mới là mục tiêu thiết kế; chưa có báo cáo đánh giá WCAG 2.2.

## 4. Yêu cầu phi chức năng
- **Khả năng sử dụng:** giao diện nhất quán, phản hồi rõ trạng thái thao tác.
- **Tương thích:** thiết kế đáp ứng cho điện thoại, máy tính bảng, máy tính và màn hình cảm ứng.
- **Tiếp cận:** dùng WCAG 2.2 mức AA làm mục tiêu thiết kế và kiểm thử; chỉ tuyên bố phù hợp sau đánh giá.
- **Bảo mật:** xác thực và phân quyền khi có tài khoản; bảo vệ dữ liệu theo nguyên tắc tối thiểu cần thiết.
- **Độ tin cậy:** thao tác lưu có trạng thái thành công/thất bại rõ ràng.
- **Bảo trì:** mô-đun có ranh giới trách nhiệm và kiểm thử độc lập.
- **Hiệu năng:** thiết lập ngưỡng sau khi xác định thiết bị mục tiêu và bộ dữ liệu thử nghiệm.

## 5. Ngoài phạm vi nghiệm thu V1.0
- Giáo viên ảo và avatar hội thoại.
- Nhận dạng tiếng nói/chữ viết tự động.
- Phòng học video trực tuyến.
- Mô phỏng 3D nâng cao.
- Cá nhân hóa bằng mô hình AI tự động.

## 6. Quy tắc thay đổi yêu cầu
Mọi thay đổi phải ghi lý do, tác động giáo dục, tác động dữ liệu/bảo mật, tiêu chí chấp nhận mới và kiểm thử hồi quy. Không mở rộng phạm vi chỉ để chạy theo xu hướng công nghệ.
