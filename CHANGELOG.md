# Nhật ký thay đổi

## [V1.1.0-dev.1] – 2026-11-09

### Kiểm thử chất lượng
- Thêm kiểm thử hồi quy tự động bằng Playwright cho Chromium, Firefox và WebKit.
- Kiểm tra bố cục tại 7 bề rộng màn hình, nghiệp vụ không gian/học liệu, tìm kiếm/lọc, sao lưu/khôi phục và bảng tương tác.
- Thêm kiểm tra cảm ứng trên Chromium mobile emulation.
- Tạo workflow CI riêng để không làm thay đổi cổng triển khai V1 hiện hữu.

### Tài liệu và phạm vi
- Chuẩn hóa ma trận kiểm thử thủ công trên Android, iOS/iPadOS, Windows, macOS và Linux.
- Phân biệt rõ kiểm thử giả lập trên CI với nghiệm thu trực tiếp thiết bị thật.
- Không tuyên bố đã kiểm thử thực tế mọi thiết bị hoặc đạt WCAG 2.2 AA.

### Quy mô và phụ thuộc
- Thêm Playwright 1.56.1 chỉ trong môi trường CI; ứng dụng phát hành vẫn không tải thư viện bên thứ ba.
- Quy mô mã nguồn thay đổi được Git ghi nhận theo commit; không đưa số KB/MB ước lượng khi chưa đo artifact.
