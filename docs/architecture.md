# Kiến trúc hệ thống – Al Edu V1.0

## 1. Nguyên tắc kiến trúc
- Phân tách giao diện, nghiệp vụ, miền tri thức và hạ tầng dữ liệu.
- Mô hình miền độc lập với nhà cung cấp lưu trữ hoặc AI.
- Hợp đồng dữ liệu rõ ràng, có phiên bản.
- Tính năng có thể kiểm thử mà không cần khởi chạy toàn bộ hệ thống.
- Ưu tiên giải pháp đơn giản đáp ứng yêu cầu; chưa tách microservices khi chưa có nhu cầu vận hành thực tế.

## 2. Các lớp logic
1. **Presentation:** giao diện web, điều hướng, trạng thái tương tác và khả năng tiếp cận.
2. **Application:** điều phối ca sử dụng như tạo không gian học, lưu bảng, quản lý học liệu.
3. **Domain:** quy tắc giáo dục, mô hình tri thức, quyền và xác thực dữ liệu nghiệp vụ.
4. **Infrastructure:** lưu trữ, cơ sở dữ liệu, nhật ký, tích hợp ngoài và sao lưu.

## 3. Các mô-đun dự kiến
- identity-access: danh tính, vai trò và quyền.
- learning-space: không gian học tập.
- learning-content: học liệu và siêu dữ liệu.
- knowledge-core: khái niệm, nguồn, quan hệ và trạng thái bằng chứng.
- whiteboard: nét vẽ, công cụ, lịch sử thao tác và lưu bảng.
- accessibility: quy tắc và thành phần hỗ trợ tiếp cận.
- audit: nhật ký hoạt động quan trọng.

## 4. Quy tắc dữ liệu
- Mỗi thực thể có định danh ổn định.
- Dữ liệu có cấu trúc và có thể xuất.
- Lưu thời điểm tạo/cập nhật theo chuẩn thời gian thống nhất.
- Kiểm tra quyền ở tầng nghiệp vụ, không chỉ ẩn nút trên giao diện.
- Không ghi bí mật, mật khẩu hoặc token vào log.
- Có chiến lược sao lưu và phục hồi trước khi triển khai dữ liệu người dùng thật.

## 5. Tích hợp AI trong tương lai
AI là dịch vụ hỗ trợ, không phải nguồn chân lý. Mọi đầu ra cần phân biệt nội dung do AI sinh với nội dung đã được kiểm chứng; truy xuất nguồn phải giữ liên kết tới tài liệu gốc. Có cơ chế từ chối hoặc nêu rõ giới hạn khi bằng chứng không đủ.

## 6. Quyết định công nghệ
Chưa khóa công nghệ lưu trữ, xác thực hoặc AI trước khi hoàn thành khảo sát yêu cầu triển khai và chi phí. Mọi quyết định công nghệ sẽ được ghi trong ADR (Architecture Decision Record), kèm phương án thay thế và hệ quả.
