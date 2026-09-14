# Yêu cầu đã chốt trước khi code

Trạng thái: **Dâu đã xác nhận và cho phép bắt đầu code ngày 2026-09-14**.

## Mục tiêu

Tạo landing page tiếng Việt cho tiệm hoa Dâu Dâu, kể một câu chuyện dễ thương và dịu dàng khi khách cuộn trang, từ đó dẫn khách sang Zalo để được Dâu tư vấn và đặt hoa.

## Trải nghiệm và nội dung

- Tám chương nội dung dùng theo `docs/CONTENT-DRAFT.md`.
- Phong cách gần gũi, trẻ trung, không quá xa xỉ; hồng cánh sen là màu nhấn, kết hợp nền kem và xanh lá tự nhiên.
- Chuyển động vừa phải, nhiều lớp hoa nhưng chữ luôn dễ đọc; giảm hiệu ứng trên điện thoại yếu và khi người dùng bật chế độ giảm chuyển động.
- Dùng bộ ảnh AI đã duyệt trong `assets/images/concepts/`; ảnh bàn tay dùng bản v2.
- Có ghi chú một số hình là hình minh họa và thiết kế sao cho dễ thay bằng ảnh thật sau này.

## Cấu trúc và chức năng

- Menu: Câu chuyện, Hoa của Dâu, Dâng hoa, Liên hệ và nút Zalo.
- Các nhóm nhu cầu: hoa thường ngày/bàn thờ, hoa bó và hoa tặng, hoa cưới/sự kiện, hoa chia buồn, hoa dâng Chúa.
- Phần hoa dâng Chúa trang trọng, chỉ dùng hình hoa, không dùng biểu tượng tôn giáo trong ảnh AI.
- Zalo là nút chính; có nút gọi nhỏ trên điện thoại và nút mở Google Maps.
- Khách được hướng dẫn gửi dịp, màu sắc, ngân sách, thời gian và địa chỉ nhận hoa.
- Giá “Một bình hoa nhỏ xinh từ 60.000đ” chỉ đặt gần cuối trang, không gắn lên từng dịch vụ.

## Kỹ thuật

- React + Vite + CSS riêng, chạy với Node.js 24.
- Không backend, cơ sở dữ liệu, đăng nhập, giỏ hàng hoặc thanh toán trực tuyến.
- Ưu tiên giải pháp nhẹ, tải nhanh, dùng tốt trên điện thoại và dễ bảo trì.
- Chuẩn bị mã nguồn để đưa lên GitHub và triển khai Tenten; GitHub và tên miền được tạo sau.

## Việc được hoàn thiện trong lúc dựng

- Agent chọn font chữ phù hợp theo tiêu chí đã duyệt; Dâu xem lại trên bản chạy thật.
- Link Zalo, lời nhắn gợi ý và Google Maps được kiểm tra trong giai đoạn chạy thử; khả năng điền sẵn tin nhắn vẫn phụ thuộc Zalo trên thiết bị của khách.
- Cấu hình Tenten được xác minh sau khi có repository và lần triển khai thử.

## Tiêu chí nghiệm thu

- Nội dung và thông tin shop đúng bản đã duyệt.
- Giao diện tốt trên điện thoại và máy tính, không có phần chữ hoặc nút bị che.
- Chuyển động đẹp nhưng không cản trở đọc hoặc thao tác.
- Các nút Zalo, gọi điện, Google Maps và menu có liên kết đúng.
- Có ghi chú hình minh họa, không tạo lời khen hoặc thông tin khách hàng giả.
- Build thành công, không có lỗi hiển thị nghiêm trọng và sẵn sàng đưa lên GitHub.

## Ngoài MVP

Đánh giá khách hàng, ảnh thật đầy đủ, danh mục sản phẩm có giá riêng, Facebook/TikTok/Google Business, giỏ hàng, thanh toán và trang quản trị sẽ chỉ được thêm khi Dâu yêu cầu ở giai đoạn sau.
