# Triển khai website

Trạng thái: **Chưa cấu hình triển khai**.

## GitHub

- Tài khoản hoặc tổ chức: _Chưa xác định._
- Repository: _Chủ dự án sẽ tạo sau, trước giai đoạn deploy._
- Public hay private: _Chưa xác định._

## Tenten

- Hình thức dự kiến: triển khai từ Git repository.
- Tên miền: _Chủ dự án sẽ tạo/chốt sau, trước giai đoạn deploy._
- Phiên bản Node.js hiển thị trong ảnh tham khảo: Node.js 24 LTS.
- Nền tảng: Tenten Vibe Code Hosting / 1-Click Launch Website.
- Tài liệu Tenten xác nhận hỗ trợ triển khai từ GitHub và các framework Node.js phổ biến, gồm React.
- Node.js 24 phù hợp với yêu cầu phiên bản Node hiện tại của Vite.
- Lệnh cài đặt dự kiến: `npm install` hoặc `npm ci`; sẽ chốt theo cơ chế tự nhận diện của Tenten sau khi tạo dự án.
- Lệnh build của Vite: `npm run build`; thư mục kết quả mặc định là `dist`.
- Cách Tenten nhận diện hoặc phục vụ thư mục `dist`: _Cần xác minh bằng lần triển khai thử._
- Biến môi trường: dự kiến không cần cho MVP vì không có backend hoặc dữ liệu bí mật.

## DNS và HTTPS

- Người quản lý DNS: _Chưa xác định._
- Trạng thái SSL/HTTPS: _Chưa triển khai._

## Danh sách kiểm tra trước deploy

- [ ] Build thành công trên máy local.
- [ ] Không có dữ liệu bí mật trong Git.
- [ ] Nội dung chính thức đã được duyệt.
- [ ] Giao diện điện thoại và máy tính đã được kiểm tra.
- [ ] Link, nút và biểu mẫu đã được kiểm tra.
- [ ] Cấu hình build/start của Tenten đã được xác minh.
- [ ] Có phương án quay lại phiên bản Git ổn định gần nhất.

## Danh sách kiểm tra sau deploy

- [ ] Tên miền truy cập được.
- [ ] HTTPS hoạt động.
- [ ] Không có lỗi trong log hosting.
- [ ] Kiểm tra lại trên điện thoại thật.
- [ ] Nút liên hệ và biểu mẫu hoạt động trên môi trường thật.
