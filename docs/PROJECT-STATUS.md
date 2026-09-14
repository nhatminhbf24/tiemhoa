# Trạng thái dự án

Cập nhật gần nhất: 2026-09-14

## Giai đoạn hiện tại

Đang xây dựng và kiểm tra MVP landing page Dâu Dâu sau khi Dâu xác nhận bản chốt cuối cùng.

## Đã hoàn thành

- Thống nhất rằng chủ dự án là người dùng no-code và cần được giải thích bằng tiếng Việt đơn giản.
- Thống nhất phải làm rõ đủ các quyết định quan trọng và được chủ dự án xác nhận trước khi code.
- Tạo bộ khung tài liệu ghi nhớ cho dự án.
- Tạo danh sách nội dung cần trao đổi khi bắt đầu một dự án mới.
- Xác nhận tên shop Dâu Dâu, địa chỉ và các nhóm dịch vụ chính.
- Xác nhận hành động chuyển đổi chính là nhắn Zalo để đặt hàng.
- Xác nhận được dùng hình ảnh AI cho phiên bản đầu và thay dần bằng ảnh thật.
- Thu thập câu chuyện hình thành shop, ý nghĩa tên Dâu Dâu và điểm mạnh khiến khách quay lại.
- Thu thập số liên hệ, giờ mở cửa, khu vực giao hàng, thời gian đặt trước và định hướng giá.
- Chốt cách gọi chủ shop là “Dâu”, giọng thương hiệu dễ thương kết hợp dịu dàng và hướng mở đầu dễ thương.
- Chốt hồng cánh sen làm màu nhấn, mức chuyển động sinh động vừa phải và nhóm hoa hình ảnh gồm hồng, cúc, lan, ly.
- Chốt cách thể hiện giá chỉ ở phần kêu gọi gần cuối trang và cách trình bày trang trọng cho hoa dâng Chúa.
- Nhận logo gốc và lưu vào thư mục tài sản thương hiệu của dự án.
- Chốt có nút gọi điện nhỏ, không dùng Google Stitch và tạm hoãn phần đánh giá khách hàng.
- Chủ dự án đồng ý với cấu trúc câu chuyện tám chương đã đề xuất.
- Nhận logo tách nền 512 × 512 và chốt được bổ sung logo chữ Dâu Dâu.
- Chốt dùng hình đôi bàn tay trong bản đầu, menu cuộn theo phần, nút chỉ đường, nhận cắm theo yêu cầu và chỉ dùng tiếng Việt.
- Kiểm tra tài liệu Tenten Vibe Code Hosting: hỗ trợ GitHub và framework Node.js phổ biến như React.
- Dâu đã duyệt bản nội dung tám chương và kế hoạch hình ảnh/chuyển động.
- Đã tạo hai hình thử bằng ImageGen: hero v1 và đôi bàn tay cắm hoa v1; đã lưu trong dự án và ghi lại prompt.
- Dâu duyệt phong cách tổng thể; yêu cầu chỉnh đôi bàn tay để phù hợp cô gái 25 tuổi có làn da trẻ, mềm mại.
- Đã tạo `hands-concept-v2.png`, giữ nguyên hoa/bố cục và thay đôi bàn tay theo yêu cầu.
- Dâu đã duyệt ảnh đôi bàn tay v2.
- Đã tạo sáu hình còn lại bằng ImageGen, lưu trong dự án và ghi lại toàn bộ prompt.
- Dâu đã duyệt sáu hình còn lại; toàn bộ bộ hình dùng cho phiên bản đầu đã được duyệt.
- Đã xác nhận Node.js 24 đáp ứng yêu cầu phiên bản hiện tại của Vite; bản build Vite mặc định xuất ra thư mục `dist`.
- Dâu đã xác nhận yêu cầu cuối cùng và cho phép bắt đầu code.
- Đã khởi tạo ứng dụng React + Vite và xây dựng đầy đủ landing page theo tám phần nội dung.
- Đã tạo giao diện thích ứng điện thoại/máy tính, menu điện thoại, chuyển động cuộn và chế độ giảm chuyển động.
- Đã tích hợp nút Zalo, gọi điện, Google Maps và bộ hình AI đã duyệt.
- Đã tạo bản JPEG tối ưu cho tám hình; tổng dung lượng giảm từ khoảng 17 MB xuống khoảng 1,7 MB mà vẫn giữ ảnh gốc.
- Đã tạo favicon riêng từ màu và biểu tượng thương hiệu.

## Quyết định đã xác nhận

- Không bắt đầu code website trong giai đoạn trao đổi cách làm việc.
- Dùng file trong dự án làm nguồn ghi nhớ lâu dài giữa các phiên làm việc.
- Dự án là landing page giới thiệu shop hoa tươi Dâu Dâu đang hoạt động tại Tân Triều, Đồng Nai.
- Khách hàng chủ yếu là khách lẻ; nhóm nhu cầu nổi bật là hoa cắm bàn thờ và hoa dâng Chúa, ngoài ra có hoa bó, sự kiện, hoa tang và hoa cưới.
- Mục tiêu chính là đưa khách sang Zalo để trao đổi và đặt hàng.
- Có thể dùng hình ảnh AI tạo phong cách cho phiên bản đầu, sau đó thay bằng ảnh thật.
- Website giữ hình ảnh một shop hoa đa nhu cầu và dành một phần riêng cho hoa dâng Chúa.
- Giá giới thiệu dự kiến từ 60.000đ; đơn cụ thể được tư vấn qua Zalo.
- Shop mở 06:00–20:00 cả tuần, giao trong Biên Hòa và nhận khách lấy trực tiếp.
- Phí giao được báo theo địa chỉ.
- Gọi người sáng lập/chủ shop trong nội dung là “Dâu”.
- Hướng thương hiệu: dễ thương và dịu dàng; hồng cánh sen làm điểm nhấn.
- Chuyển động sinh động vừa phải, có nhiều lớp hoa nhưng phải giữ nội dung dễ đọc.
- “Từ 60.000đ” chỉ xuất hiện trong phần mời nhắn Zalo gần cuối trang, không phải nhãn giá cho từng dịch vụ.
- Zalo là hành động chính; trên điện thoại có thêm nút gọi điện nhỏ.
- Không dùng Stitch; không tạo đánh giá khách hàng giả.
- Dùng logo tách nền tại `assets/brand/Logo-tachnen.png`; có thể bổ sung chữ nhưng không thay đổi biểu tượng.
- Link Google Maps do chủ dự án cung cấp: `https://maps.app.goo.gl/EFBPFzMycUPTnpTg7`.
- Runtime triển khai: Node.js 24 LTS.
- Tech stack đã duyệt: React + Vite + CSS riêng, không backend và không cơ sở dữ liệu.
- GitHub và tên miền được để lại cho giai đoạn deploy.

## Đang thực hiện

- Hoàn tất kiểm tra kỹ thuật, tài liệu và điểm lưu Git cho MVP.
- Chuẩn bị bản xem trước để Dâu duyệt giao diện chạy thật.

## Chưa quyết định hoặc để lại cho giai đoạn sau

- Font chữ cụ thể; agent được chọn phương án dễ đọc tiếng Việt và có thể thay đổi sau.
- Đường dẫn Zalo thực tế và khả năng điền sẵn lời nhắn cần được kiểm tra trên điện thoại.
- Cách Tenten nhận diện/phục vụ bản build cần được thử khi triển khai.
- Repository GitHub và tên miền sẽ sử dụng.

## Kiểm tra gần nhất

- Đã xác nhận không còn file công việc `$lichtet` trong thư mục; các tham chiếu cũ trong tài liệu trạng thái đã được dọn.
- Đã kiểm tra đủ chín file ảnh trong thư mục concept: tám ảnh dùng cho website và một ảnh bàn tay v1 được giữ làm lịch sử thử nghiệm.
- Bản build Vite đã hoàn thành thành công.
- Bản xem trước trả về trạng thái hoạt động bình thường.
- Đã kiểm tra trực quan trên màn hình máy tính và điện thoại 390 × 844 px.
- Không có cuộn ngang ngoài ý muốn trên điện thoại; menu và thanh liên hệ cố định hoạt động đúng.
- Đã phát hiện và sửa màu chữ của nút Zalo tại phần liên hệ trên điện thoại.
- Không ghi nhận lỗi hoặc cảnh báo trong trình duyệt sau khi sửa.

## Git

- Đã khởi tạo Git repository với nhánh `main`.
- Đã tạo commit MVP đầu tiên sau khi hoàn tất kiểm tra.

## Bước tiếp theo

- Dâu xem bản chạy thật và góp ý về bố cục, câu chữ hoặc mức độ chuyển động.
- Sau khi Dâu duyệt giao diện: chuẩn bị repository GitHub, triển khai thử lên Tenten và kết nối tên miền.
