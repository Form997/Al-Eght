# Kiểm thử và nghiệm thu V1.0

## 1. Nguyên tắc
Không xem việc chạy được trên máy phát triển là bằng chứng đủ để phát hành. Mỗi yêu cầu phải liên kết với ít nhất một trường hợp kiểm thử.

## 2. Các tầng kiểm thử
- **Unit:** quy tắc nghiệp vụ, mô hình dữ liệu, kiểm tra đơn vị và thứ nguyên.
- **Integration:** lưu/mở dữ liệu, quyền truy cập, trao đổi giữa các mô-đun.
- **End-to-end:** luồng người dùng từ tạo không gian học đến lưu và mở lại bảng.
- **Accessibility:** bàn phím, tiêu điểm, nhãn, tương phản, phóng to và công nghệ trợ giúp.
- **Responsive/device:** kích thước màn hình, cảm ứng, chuột và bút khi có thiết bị thử.
- **Security:** xác thực, phân quyền, kiểm tra đầu vào, rò rỉ dữ liệu và cấu hình.
- **Recovery:** lỗi mạng, lưu thất bại, tải lại trang và phục hồi dữ liệu.

## 3. Tiêu chí nghiệm thu
| Nhóm | Điều kiện tối thiểu |
|---|---|
| Chức năng | Tất cả yêu cầu bắt buộc có kết quả kiểm thử đạt |
| Dữ liệu | Không mất hoặc biến dạng dữ liệu trong luồng đã xác định |
| Tiếp cận | Không có lỗi nghiêm trọng chưa xử lý trong phạm vi đánh giá |
| Bảo mật | Không có lỗi nghiêm trọng/cao chưa xử lý |
| Hiệu năng | Đạt ngưỡng được xác định bằng thiết bị và dữ liệu thử nghiệm |
| Tài liệu | Hướng dẫn cài đặt, sử dụng, cấu hình và khôi phục được cập nhật |

## 4. Báo cáo kiểm thử
Mỗi báo cáo ghi: mã bản dựng/commit, môi trường, thiết bị/trình duyệt, dữ liệu thử, bước tái hiện, kết quả mong đợi, kết quả thực tế, ảnh/log minh chứng, mức độ lỗi và người xác nhận.

## 5. Điều kiện phát hành
Chỉ gắn nhãn phát hành khi toàn bộ tiêu chí bắt buộc đạt, các lỗi còn lại được phân loại và chấp thuận rõ ràng, tài liệu phát hành và phương án quay lui đã sẵn sàng.
