# Triển khai website

Trạng thái: **Đã cấu hình chuẩn hóa cho Cloudflare Pages và duy trì tương thích Tenten Node.js**.

---

## 1. Cloudflare Pages (Phương án tối ưu & khuyến nghị)

Website Dâu Dâu là trang tĩnh React + Vite (không có database hay backend phức tạp), do đó **Cloudflare Pages** là nền tảng hoàn hảo nhất:
- **Tốc độ vượt trội**: Được lưu trữ trên mạng lưới CDN toàn cầu của Cloudflare.
- **Bảo mật & HTTPS**: Tự động cấp chứng chỉ SSL/HTTPS miễn phí.
- **Tiết kiệm chi phí**: Gói miễn phí (Free Tier) thoải mái cho nhu cầu của tiệm hoa.
- **Tự động hóa**: Khi bạn cập nhật code trên GitHub, Cloudflare tự động build và cập nhật website trong vài chục giây.

### Cách A: Kết nối trực tiếp GitHub với Cloudflare Pages (Dễ nhất cho Dâu)

1. Đăng nhập vào trang quản trị Cloudflare: [dash.cloudflare.com](https://dash.cloudflare.com).
2. Ở thanh menu bên trái, chọn **Workers & Pages** > nhấn nút **Create application**.
3. Chọn thẻ **Pages** > nhấn **Connect to Git**.
4. Chọn tài khoản GitHub và chọn repository `nhatminhbf24/tiemhoa`.
5. Điền thông tin cấu hình như sau:
   - **Project name**: `tiemhoa` (hoặc `dau-dau-flower-shop`)
   - **Production branch**: `main`
   - **Framework preset**: Chọn `Vite`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: để trống (mặc định)
   - **Environment variables (Biến môi trường)**: Đặt `NODE_VERSION` = `22` (Dự án cũng đã có sẵn file `.nvmrc` và `.node-version` trỏ tới Node 22).
6. Bấm nút **Save and Deploy**. Cloudflare sẽ bắt đầu build và cấp ngay một đường link miễn phí dạng `*.pages.dev`.

### Cách B: Triển khai từ máy tính bằng Wrangler CLI

Dự án đã tích hợp sẵn công cụ `wrangler` của Cloudflare:
1. Đăng nhập tài khoản Cloudflare trên máy tính (chỉ cần làm lần đầu):
   ```bash
   pnpm exec wrangler login
   ```
2. Xem thử website trên môi trường mô phỏng Cloudflare:
   ```bash
   pnpm pages:dev
   ```
3. Đẩy website lên Cloudflare Pages trực tiếp:
   ```bash
   pnpm pages:deploy
   ```

### Cấu hình chuẩn Cloudflare đã thiết lập trong mã nguồn:
- `wrangler.jsonc`: File cấu hình định danh dự án và thư mục `dist` cho Cloudflare.
- `.nvmrc` & `.node-version`: Cố định phiên bản Node.js 22 LTS cho máy chủ build Cloudflare.
- `public/_headers`: Tối ưu cache trình duyệt (assets được cache 1 năm) và tăng cường bảo mật (chống clickjacking, nosniff, chính sách bảo vệ dữ liệu).
- `package.json`: Bổ sung lệnh `pages:dev` và `pages:deploy`.

---

## 2. Tenten Node.js Hosting (Phương án dự phòng)

- Nền tảng: Tenten Vibe Code Hosting (Node.js v24 LTS).
- File khởi chạy (Startup file): `app.js` (phục vụ web tĩnh từ thư mục `dist`, tự động bắt cổng qua `process.env.PORT`).
- Script khởi chạy trong `package.json`: `"start": "node app.js"`.
- Đóng gói sẵn: Thư mục `dist/` đã được build sẵn vào mã nguồn.

---

## 3. Tên miền riêng (Custom Domain)

Khi Dâu mua tên miền (ví dụ: `tiemhoadaudau.vn` hoặc `tiemhoadaudau.com`):
1. Vào Cloudflare Pages > Chọn dự án `tiemhoa`.
2. Chuyển sang thẻ **Custom domains** > Bấm **Set up a custom domain**.
3. Nhập tên miền muốn gán và làm theo hướng dẫn trỏ bản ghi DNS của Cloudflare. Hệ thống sẽ tự động kích hoạt HTTPS mà không cần cài đặt thêm chứng chỉ.

---

## Danh sách kiểm tra trước deploy

- [x] Build thành công trên máy local (`pnpm build`).
- [x] Kiểm tra tương thích máy chủ Cloudflare Pages (`pnpm pages:dev`).
- [x] Không có dữ liệu bí mật trong Git.
- [x] Nội dung chính thức đã được duyệt.
- [x] Giao diện điện thoại và máy tính đã được kiểm tra.
- [x] Link, nút và biểu mẫu đã được kiểm tra.
- [x] Cấu hình build Cloudflare Pages và Tenten đã được xác minh.
- [x] Có phương án quay lại phiên bản Git ổn định gần nhất.
