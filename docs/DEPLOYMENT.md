# Triển khai website

Trạng thái: **Đã cấu hình hoàn tất cho hosting Tenten Node.js**.

## GitHub

- Tài khoản: Chờ Dâu tạo repo hoặc cung cấp link repository.
- Trạng thái Git local: Đã cài Git và commit toàn bộ mã nguồn cùng thư mục `dist/` đóng gói sẵn.

## Tenten Node.js Hosting

- Nền tảng: Tenten Vibe Code Hosting (Node.js v24 LTS).
- File khởi chạy (Startup file): `app.js` (phục vụ web tĩnh từ thư mục `dist`, tự động bắt cổng qua `process.env.PORT`).
- Script khởi chạy trong `package.json`: `"start": "node app.js"`.
- Đóng gói sẵn: Thư mục `dist/` đã được commit vào mã nguồn để Tenten không phải chờ build lại.
- Hình thức tải lên hỗ trợ:
  1. **Git Repo**: Dán đường link GitHub repo vào ô "Đường dẫn Git".
  2. **Upload ZIP**: File nén `c:\Users\Admin\Desktop\daudau-website.zip` đã được tạo sẵn để tải lên trực tiếp.

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
