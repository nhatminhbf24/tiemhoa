# Website Dâu Dâu

Landing page tiếng Việt cho tiệm hoa tươi Dâu Dâu tại Tân Triều, Biên Hòa. Website kể câu chuyện của tiệm, giới thiệu các nhu cầu hoa và dẫn khách sang Zalo để được Dâu tư vấn.

## Tính năng chính

- Câu chuyện tám phần với hình ảnh và chuyển động theo thao tác cuộn.
- Giới thiệu hoa thường ngày, hoa tặng, hoa cưới/sự kiện, hoa chia buồn và hoa dâng Chúa.
- Nút nhắn Zalo, gọi điện và mở đường đi Google Maps.
- Giao diện thích ứng điện thoại và máy tính.
- Tôn trọng cài đặt giảm chuyển động của thiết bị.

## Công nghệ

- React
- Vite
- CSS riêng
- Node.js 24 LTS

Website không dùng backend, cơ sở dữ liệu, đăng nhập, giỏ hàng hoặc thanh toán trực tuyến.

## Chạy trên máy

1. Cài các thành phần cần thiết bằng `pnpm install`.
2. Chạy bản xem trước bằng `pnpm dev`.
3. Mở địa chỉ local do Vite hiển thị.

Tạo bản sẵn sàng triển khai bằng `pnpm build`. Kết quả nằm trong thư mục `dist`.

## Hình ảnh

Phiên bản đầu dùng hình ảnh AI đã được Dâu duyệt. Các bản ảnh gốc được giữ trong `assets/images/concepts`; website sử dụng các bản JPEG đã tối ưu dung lượng. Có thể chạy lại `scripts/optimize-images.ps1` sau khi thay ảnh nguồn.

## Triển khai

Mã nguồn được chuẩn bị để đưa lên GitHub và triển khai bằng Tenten Vibe Code Hosting. Repository GitHub và tên miền sẽ được Dâu tạo ở giai đoạn triển khai.

## Tài liệu dự án

- `AGENTS.md`: quy tắc làm việc dành cho AI agent.
- `docs/PROJECT-KICKOFF.md`: danh sách nội dung cần trao đổi khi bắt đầu một dự án mới.
- `docs/PROJECT-BRIEF.md`: yêu cầu và quyết định đã được xác nhận.
- `docs/PROJECT-STATUS.md`: trạng thái hiện tại và bước tiếp theo.
- `docs/CONTENT-DRAFT.md`: nội dung tám phần đã duyệt.
- `docs/VISUAL-PLAN.md`: kế hoạch hình ảnh và chuyển động.
- `docs/DEPLOYMENT.md`: kế hoạch đưa website lên mạng.
