# Thỏa thuận làm việc của dự án

## Thông tin về chủ dự án

- Chủ dự án không biết code và chưa quen với quy trình xây dựng website.
- Luôn trao đổi bằng tiếng Việt rõ ràng, dễ hiểu.
- Khi cần dùng thuật ngữ kỹ thuật, giải thích ngắn gọn ý nghĩa, lý do và tác động.
- Không yêu cầu chủ dự án tự sửa code hoặc tự chạy lệnh nếu agent có thể thực hiện an toàn.

## Nguyên tắc trước khi code

- Không bắt đầu code khi các yêu cầu quan trọng còn thiếu, chưa rõ hoặc mâu thuẫn.
- Trước khi code, đọc `docs/PROJECT-KICKOFF.md`, `docs/PROJECT-BRIEF.md` và `docs/PROJECT-STATUS.md`.
- Hỏi các câu cần thiết về mục tiêu, người dùng, nội dung, chức năng, giao diện, dữ liệu, liên hệ, vận hành và triển khai.
- Không giới hạn máy móc số lượng câu hỏi. Hỏi tiếp khi câu trả lời làm phát sinh một quyết định quan trọng mới.
- Không hỏi lại thông tin đã được xác nhận và ghi trong tài liệu dự án.
- Với mỗi lựa chọn quan trọng, đưa ra phương án được khuyến nghị, giải thích lợi ích và đánh đổi bằng ngôn ngữ đơn giản.
- Có thể tự quyết định chi tiết nhỏ, dễ đảo ngược và không ảnh hưởng đáng kể; phải ghi rõ giả định trong bản tóm tắt.
- Khi đã đủ thông tin, tóm tắt phạm vi, quyết định, giả định, nội dung chưa làm và tiêu chí hoàn thành.
- Chỉ bắt đầu code sau khi chủ dự án xác nhận bản tóm tắt hoặc ra lệnh rõ ràng rằng có thể bắt đầu.

## Nguyên tắc trong quá trình thực hiện

- Ưu tiên MVP đơn giản, ổn định, dễ sử dụng và dễ bảo trì.
- Ưu tiên giao diện tốt trên điện thoại, tốc độ tải và khả năng truy cập cơ bản.
- Không tự thêm chức năng phức tạp, dịch vụ trả phí hoặc phạm vi mới khi chưa được đồng ý.
- Giữ nguyên thay đổi của chủ dự án và không xóa dữ liệu ngoài phạm vi được yêu cầu.
- Không lưu hoặc commit mật khẩu, token, mã OTP, khóa API hay file `.env` có dữ liệu thật.
- Kiểm tra trạng thái Git trước thay đổi lớn; xem lại file thay đổi trước khi stage hoặc commit.
- Chạy các kiểm tra phù hợp với mức độ thay đổi trước khi báo hoàn thành.
- Khi thông tin kỹ thuật có thể đã thay đổi, kiểm tra tài liệu chính thức thay vì đoán.

## Git và các điểm khôi phục

- Tạo `.gitignore` phù hợp trước commit đầu tiên.
- Chỉ stage những file đã được kiểm tra và thuộc phạm vi dự án.
- Tạo commit tại các mốc ổn định: MVP chạy được, sửa xong lỗi lớn, hoàn thành tính năng, trước thay đổi cấu trúc lớn và trước deploy.
- Không dùng thao tác Git phá hủy lịch sử hoặc làm mất thay đổi nếu chưa có sự đồng ý rõ ràng.

## Cách báo cáo

Sau mỗi phần việc, báo cáo ngắn gọn:

1. Đã làm gì.
2. Đã kiểm tra gì và kết quả.
3. Chủ dự án cần xem hoặc quyết định điều gì.
4. Rủi ro hoặc giới hạn còn lại.
5. Bước tiếp theo được đề xuất.

## Trước khi kết thúc một phiên làm việc

- Cập nhật `docs/PROJECT-STATUS.md` với tiến độ, quyết định mới, vấn đề còn lại, trạng thái kiểm tra và bước tiếp theo.
- Cập nhật các tài liệu khác nếu quyết định liên quan đã thay đổi.
- Không ghi một quyết định là “đã chốt” nếu chủ dự án chưa xác nhận.

## Khi bắt đầu một phiên làm việc mới

- Đọc file này và các tài liệu liên quan trong `docs/`.
- Kiểm tra trạng thái Git và các commit gần nhất nếu repository đã được khởi tạo.
- Tóm tắt hiểu biết hiện tại trước khi tiếp tục.
- Nếu tài liệu thiếu hoặc mâu thuẫn, hỏi lại; không tự suy đoán một quyết định quan trọng.

