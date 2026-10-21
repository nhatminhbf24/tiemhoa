# Triển khai website

Trạng thái: **Đã triển khai thành công lên Cloudflare Pages (Live: https://tiemhoa.pages.dev)**.

---

## 1. Cloudflare Pages (Đang chạy thực tế)

Website Dâu Dâu đã được đưa lên mạng thành công bằng **Cloudflare Pages**:
- **Trang chủ chính thức**: [https://tiemhoa.pages.dev](https://tiemhoa.pages.dev)
- **Bản build gần nhất**: [https://53db89f4.tiemhoa.pages.dev](https://53db89f4.tiemhoa.pages.dev)
- **Tốc độ & CDN**: Phân phối qua mạng lưới Edge CDN của Cloudflare, phản hồi nhanh dưới 100ms.
- **Bảo mật & HTTPS**: Tự động kích hoạt chứng chỉ SSL/HTTPS miễn phí, hỗ trợ HTTP/2 & HTTP/3.
- **Header bảo mật**: Cấu hình chống clickjacking (`SAMEORIGIN`), `nosniff`, `strict-origin-when-cross-origin`.
- **Bộ nhớ đệm (Cache)**: Các file hình ảnh và thư viện đóng gói được cache trình duyệt tối đa 1 năm.

### Cập nhật và triển khai sau này:

- **Cách 1: Triển khai tự động từ Git (GitHub)**:
  Mỗi khi bạn commit và đẩy code lên nhánh `main` của repo `nhatminhbf24/tiemhoa`, bạn có thể liên kết repo trong trang quản trị Cloudflare (Workers & Pages > tiemhoa > Settings > Builds & deployments > Connect Git) để Cloudflare tự động cập nhật web mỗi khi có code mới.
- **Cách 2: Triển khai từ máy tính bằng 1 câu lệnh**:
  ```bash
  pnpm pages:deploy
  ```
  Lệnh này sẽ tự động tải thư mục `dist` mới nhất lên thẳng `tiemhoa.pages.dev`.

---

## 2. Tenten Node.js Hosting (Phương án dự phòng)

- Nền tảng: Tenten Vibe Code Hosting (Node.js v24 LTS).
- File khởi chạy (Startup file): `app.js` (phục vụ web tĩnh từ thư mục `dist`, tự động bắt cổng qua `process.env.PORT`).
- Script khởi chạy trong `package.json`: `"start": "node app.js"`.
- Đóng gói sẵn: Thư mục `dist/` đã được build sẵn vào mã nguồn.

---

## 3. Tên miền riêng (Custom Domain)

Khi Dâu mua tên miền (ví dụ: `tiemhoadaudau.vn` hoặc `tiemhoadaudau.com`):
1. Vào Cloudflare Dashboard > **Workers & Pages** > Chọn dự án **tiemhoa**.
2. Chuyển sang thẻ **Custom domains** > Bấm **Set up a custom domain**.
3. Nhập tên miền muốn gán và làm theo hướng dẫn trỏ bản ghi DNS của Cloudflare. Hệ thống sẽ tự động kích hoạt HTTPS mà không cần cài đặt thêm chứng chỉ.

---

## Danh sách kiểm tra sau deploy

- [x] Đẩy mã nguồn lên GitHub `main` thành công.
- [x] Tạo dự án `tiemhoa` trên Cloudflare Pages thành công.
- [x] Triển khai thư mục `dist` lên Cloudflare Pages thành công.
- [x] Tên miền `https://tiemhoa.pages.dev` truy cập được với mã HTTP 200.
- [x] HTTPS/SSL hoạt động trơn tru.
- [x] Header bảo mật và cache hoạt động đúng như thiết kế.
