# Mô tả dự án

Trạng thái: **Dâu đã xác nhận yêu cầu cuối cùng và cho phép bắt đầu code ngày 2026-09-14**.

## Mục tiêu

Tạo một landing page giới thiệu shop hoa tươi Dâu Dâu, kể câu chuyện giàu cảm xúc và dẫn khách sang Zalo để đặt hàng.

## Người dùng mục tiêu

- Khách lẻ tại khu vực Tân Triều, Đồng Nai và vùng lân cận.
- Nhu cầu nổi bật do shop ở gần nhà thờ: hoa cắm bàn thờ và hoa dâng Chúa.
- Các nhóm nhu cầu bổ sung: hoa bó, hoa sự kiện, hoa tang và hoa cưới.

## Hành động chính mong muốn từ người dùng

Nhấn nút để chuyển sang Zalo và trao đổi trực tiếp với shop về đơn hoa.

## Phạm vi MVP

- Một landing page giới thiệu shop hoa tươi.
- Nội dung được dẫn dắt như một câu chuyện khi người xem cuộn từ trên xuống.
- Giao diện sinh động, có chuyển động hấp dẫn nhưng vẫn cần dễ sử dụng và tải tốt.
- Nội dung gồm tám chương đã duyệt trong `docs/CONTENT-DRAFT.md`.

## Ngoài phạm vi MVP

- Chưa mặc định có giỏ hàng, thanh toán trực tuyến, đăng nhập, cơ sở dữ liệu hoặc trang quản trị.
- Không có Facebook, TikTok, Google Business hoặc bản đồ nhúng trong bản đầu; vẫn có nút mở đường đi bằng liên kết Google Maps đã cung cấp.

## Yêu cầu giao diện

- Hình ảnh giàu cảm xúc, phù hợp câu chuyện của shop hoa.
- Có chuyển động theo hành trình cuộn trang.
- Giọng thương hiệu kết hợp dễ thương với dịu dàng.
- Hồng cánh sen là màu điểm nhấn; nền kem sáng, xanh lá tự nhiên và một lượng nhỏ đỏ rượu/nâu trầm làm màu hỗ trợ.
- Mức độ chuyển động sinh động vừa phải: có nhiều lớp hoa và ảnh thay đổi theo câu chuyện nhưng nội dung vẫn dễ đọc.
- Hoa đặc trưng dùng trong hình ảnh: hoa hồng, hoa cúc, hoa lan và hoa ly.
- Phần hoa dâng Chúa chỉ dùng hình hoa và nội dung trang trọng, không dùng hình không gian nhà thờ hoặc biểu tượng tôn giáo trong bản đầu.
- Không sử dụng Google Stitch; giao diện sẽ được thiết kế và duyệt trực tiếp trong dự án.
- Logo hiện có là biểu tượng hoa cách điệu bao quanh trái tim, màu hồng cánh sen trên nền trắng.
- Đã có phiên bản logo tách nền PNG 512 × 512 tại `assets/brand/Logo-tachnen.png`; được phép bổ sung chữ “Dâu Dâu” và tagline mà không thay đổi biểu tượng gốc.

## Yêu cầu chức năng và dữ liệu

- Chủ dự án hiện chưa có hình ảnh và nội dung hoàn chỉnh.
- Agent được phép đề xuất và viết toàn bộ nội dung sau khi làm rõ câu chuyện thật của shop.
- Chủ dự án đồng ý sử dụng hình ảnh AI để tạo phong cách cho phiên bản đầu, sau đó thay dần bằng ảnh thật.
- Website cần có đường dẫn sang Zalo để khách trao đổi và đặt hàng.
- Số điện thoại/Zalo: 0798 408 406; cho phép gọi trực tiếp.
- Nút Zalo cần hỗ trợ lời nhắn mở đầu được soạn sẵn nếu nền tảng cho phép và sau khi xác minh cách liên kết chính thức.
- Trên điện thoại có một nút gọi điện nhỏ; Zalo vẫn là hành động chính.
- Menu gồm Câu chuyện, Hoa của Dâu, Dâng hoa, Liên hệ và nút Zalo.
- Có nút xem đường đến shop dùng liên kết Google Maps do chủ dự án cung cấp.
- Shop nhận cắm theo dịp, màu sắc và ngân sách của khách.
- Website chỉ dùng tiếng Việt trong MVP.
- Khu vực giao: Biên Hòa; nhận khách lấy trực tiếp và có giao trong ngày.
- Giờ mở cửa: 06:00–20:00, cả tuần; có thể nhận đơn gấp hoặc ngoài giờ tùy khả năng.

## Giải pháp kỹ thuật

- Runtime hosting đã xác nhận từ giao diện của chủ dự án: Node.js 24 LTS.
- Đã duyệt: React + Vite, giao diện CSS riêng, JavaScript/React cho chuyển động cuộn; không có backend hoặc cơ sở dữ liệu trong MVP.
- Ưu tiên CSS và API trình duyệt cho hiệu ứng; chỉ thêm thư viện animation nếu chuyển động đã duyệt thực sự cần.
- Triển khai từ GitHub lên Tenten Vibe Code Hosting.

## Tiêu chí hoàn thành

- Có đủ tám phần nội dung đã duyệt và đúng thông tin thực tế của shop.
- Hiển thị tốt trên điện thoại và máy tính; menu cuộn đúng phần, chữ dễ đọc và nút không che nội dung.
- Chuyển động sinh động vừa phải, giảm trên thiết bị yếu và tôn trọng cài đặt giảm chuyển động.
- Nút Zalo là hành động chính; nút gọi điện và Google Maps hoạt động trên thiết bị phù hợp.
- Mức giá “từ 60.000đ” chỉ xuất hiện tại lời mời gần cuối trang.
- Bộ ảnh AI đã duyệt được tối ưu cho web và có ghi chú đây là hình minh họa.
- Website không có giỏ hàng, thanh toán, đăng nhập, backend, cơ sở dữ liệu hoặc đánh giá khách hàng giả.
- Bản build hoàn tất không báo lỗi; các nút, liên kết và khả năng sử dụng bàn phím cơ bản được kiểm tra.
- Mã nguồn có tài liệu chạy, `.gitignore` phù hợp và sẵn sàng đưa lên GitHub để triển khai Tenten.

## Quyết định đã được xác nhận

- Chủ dự án muốn tiếp tục trao đổi về cách cộng tác trước khi đi vào nội dung website.
- Agent phải hỏi đến khi đủ các dữ liệu quan trọng, tóm tắt yêu cầu và nhận xác nhận trước khi bắt đầu code.
- Loại dự án: landing page giới thiệu shop nhỏ cắm hoa tươi.
- Mong muốn trải nghiệm: sinh động, có chuyển động hấp dẫn và kể chuyện xuyên suốt khi cuộn trang.
- Chủ dự án chưa có sẵn nội dung hoặc hình ảnh.
- Tên shop: Dâu Dâu.
- Shop đang hoạt động thực tế.
- Địa chỉ: 93/41, hẻm 1160 Nguyễn Ái Quốc, Tân Triều, Đồng Nai.
- Khách hàng chủ yếu là khách lẻ; nhu cầu nổi bật gồm hoa cắm bàn thờ và hoa dâng Chúa do shop gần nhà thờ.
- Shop cũng nhận hoa bó, hoa sự kiện, hoa tang và hoa cưới.
- Hành động chính của landing page: chuyển khách sang Zalo để đặt hàng.
- Chủ dự án đồng ý dùng hình ảnh AI trong giai đoạn đầu và thay bằng ảnh thật sau.
- Shop do một mình chủ shop sáng lập và trực tiếp cắm hoa; đã hoạt động khoảng một năm.
- Shop bắt đầu từ cơ duyên tình cờ, sự hứng thú với cắm hoa và nhu cầu của địa phương.
- Tên “Dâu Dâu” thể hiện cảm giác dễ thương và gắn với sắc hồng cánh sen.
- Điểm mạnh thực tế: nhiệt tình, giao tiếp dễ thương, có nhiều hoa cắm sẵn để mua nhanh và vị trí thuận tiện gần Nhà thờ Thái Hiệp.
- Website giữ hình ảnh chung của shop hoa; dành một phần riêng cho hoa dâng Chúa.
- Giá “từ 60.000đ” chỉ xuất hiện ở phần kêu gọi liên hệ gần cuối hành trình; không gắn mức giá này lên từng dịch vụ hoặc hình sản phẩm.
- Đơn thông thường nên đặt trước ít nhất 5 giờ; hoa cưới, sự kiện và hoa tang nên đặt trước ít nhất 1 ngày.
- Chủ dự án đồng ý với cấu trúc câu chuyện tám chương và hướng mở đầu “Dâu Dâu — một chút hoa, một chút thương”.
- Không hiển thị lời khen/đánh giá khách hàng trong bản đầu; chỉ thêm sau khi có đánh giá thật được lưu lại.
- Không dùng Google Stitch.
- Logo gốc đã được lưu trong dự án tại `assets/brand/dau-dau-logo-original.png`.
- Bản logo tách nền chính thức đã được chủ dự án cung cấp tại `assets/brand/Logo-tachnen.png`.
- Dùng hình đôi bàn tay cắm hoa trong bản đầu; có thể thay bằng ảnh thật của Dâu sau.
- Được bổ sung chữ “Dâu Dâu” đi cùng biểu tượng logo.
- Có menu cuộn theo phần, nút gọi nhỏ trên điện thoại và nút chỉ đường bằng Google Maps.
- Nhận cắm theo yêu cầu; website MVP chỉ dùng tiếng Việt.

## Câu hỏi và quyết định còn mở

- Font chữ cụ thể sẽ được chọn trong lúc dựng giao diện, theo tiêu chí dịu dàng, dễ đọc tiếng Việt và dễ thay đổi.
- Cách mở Zalo và khả năng điền sẵn lời nhắn cần thử trên điện thoại; nếu Zalo không hỗ trợ điền sẵn ổn định, website sẽ hiển thị lời nhắn gợi ý để khách sao chép.
- Cấu hình triển khai chính xác của Tenten cần xác minh bằng bản build thực tế.
- Tài khoản GitHub, repository và tên miền sẽ được Dâu tạo/chốt sau, trước giai đoạn deploy.
