import { useEffect, useState } from 'react'
import logo from '../assets/brand/Logo-tachnen.png'
import heroImage from '../assets/images/concepts/hero-concept-v1-web.jpg'
import handsImage from '../assets/images/concepts/hands-concept-v2-web.jpg'
import everydayImage from '../assets/images/concepts/everyday-flowers-v1-web.jpg'
import bouquetImage from '../assets/images/concepts/gift-bouquet-v1-web.jpg'
import weddingImage from '../assets/images/concepts/wedding-event-v1-web.jpg'
import condolenceImage from '../assets/images/concepts/condolence-v1-web.jpg'
import devotionalImage from '../assets/images/concepts/devotional-flowers-v1-web.jpg'
import ctaImage from '../assets/images/concepts/zalo-cta-v1-web.jpg'

const ZALO_URL = 'https://zalo.me/0798408406'
const MAP_URL = 'https://maps.app.goo.gl/EFBPFzMycUPTnpTg7'
const PHONE_URL = 'tel:0798408406'

function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 10h.01M12 10h.01M16 10h.01"/></>,
  }
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function Brand({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand--light' : ''}`} href="#top" aria-label="Dâu Dâu — về đầu trang">
      <img src={logo} alt="" />
      <span><strong>Dâu Dâu</strong><small>Một chút hoa, một chút thương</small></span>
    </a>
  )
}

function ZaloButton({ children = 'Nhắn Dâu qua Zalo', pale = false }) {
  return <a className={`button button--primary ${pale ? 'button--pale' : ''}`} href={ZALO_URL} target="_blank" rel="noreferrer"><Icon name="message" />{children}<Icon name="arrow" /></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })
    revealItems.forEach((item) => revealObserver.observe(item))

    let frame
    const updateScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
      })
    }
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => {
      revealObserver.disconnect()
      window.removeEventListener('scroll', updateScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <Brand />
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span/><span/><span/>
        </button>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Điều hướng chính">
          <a href="#cau-chuyen" onClick={closeMenu}>Câu chuyện</a>
          <a href="#hoa-cua-dau" onClick={closeMenu}>Hoa của Dâu</a>
          <a href="#dang-hoa" onClick={closeMenu}>Dâng hoa</a>
          <a href="#lien-he" onClick={closeMenu}>Liên hệ</a>
          <a className="nav-zalo" href={ZALO_URL} target="_blank" rel="noreferrer">Nhắn Zalo <Icon name="arrow" size={17}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <img className="hero__image" src={heroImage} alt="Bình hoa hồng, cúc, lan và ly trong ánh sáng dịu" />
          <div className="hero__veil" />
          <div className="petal petal--one"/><div className="petal petal--two"/><div className="petal petal--three"/>
          <div className="hero__content" data-reveal>
            <p className="eyebrow">Tiệm hoa nhỏ ở Tân Triều, Biên Hòa</p>
            <h1>Dâu Dâu</h1>
            <p className="hero__tagline">Một chút hoa,<br/><em>một chút thương.</em></p>
            <p className="hero__intro">Dâu cắm từng bó hoa bằng sự dịu dàng, để mỗi ngày bình thường cũng có thể trở nên xinh xắn hơn một chút.</p>
            <div className="button-row">
              <ZaloButton />
              <a className="text-link" href="#cau-chuyen">Ghé qua câu chuyện của Dâu <span>↓</span></a>
            </div>
          </div>
          <span className="hero__note">Hoa tươi · Cắm theo yêu cầu · Giao trong Biên Hòa</span>
        </section>

        <section className="story section" id="cau-chuyen">
          <div className="story__image image-frame" data-reveal>
            <img src={handsImage} alt="Đôi bàn tay trẻ đang nhẹ nhàng cắm một bó hoa" loading="lazy" />
            <span className="image-label">Tự tay Dâu chuẩn bị</span>
          </div>
          <div className="story__copy" data-reveal>
            <p className="chapter">01 · Câu chuyện của Dâu</p>
            <h2>Một cơ duyên tình cờ,<br/><em>rồi thành niềm vui mỗi ngày.</em></h2>
            <p>Dâu đến với việc cắm hoa từ một cơ duyên rất tình cờ. Ban đầu chỉ là sự tò mò và niềm vui khi tự tay sắp xếp từng cành hoa. Rồi Dâu nhận ra quanh mình luôn có những người cần một bình hoa cho gia đình, một bó hoa để mang theo, hay một món quà nhỏ để gửi điều khó nói thành lời.</p>
            <p>Thế là Dâu Dâu ra đời. Một tiệm hoa nhỏ do chính Dâu tư vấn, chọn hoa và cắm từng đơn — gần gũi, nhiệt tình và luôn có một chút dễ thương rất riêng.</p>
            <div className="signature"><span>Được cắm bằng</span><strong>đôi tay &amp; tấm lòng của Dâu</strong></div>
          </div>
        </section>

        <section className="everyday section section--wide" id="hoa-cua-dau">
          <div className="section-heading" data-reveal>
            <p className="chapter">02 · Hoa cho những ngày thật gần</p>
            <h2>Đôi khi, một bình hoa nhỏ<br/>là đủ làm ngày hôm ấy <em>dịu lại.</em></h2>
          </div>
          <div className="everyday__layout">
            <div className="everyday__photo image-frame" data-reveal><img src={everydayImage} alt="Những bình hoa nhỏ xinh cho gia đình" loading="lazy" /></div>
            <div className="everyday__card" data-reveal>
              <p>Dâu thường chuẩn bị sẵn những bình và bó hoa nhỏ xinh để khách có thể ghé chọn rồi mang đi.</p>
              <ul className="soft-list">
                <li><span>01</span>Hoa cho bàn thờ, góc nhà thân quen</li>
                <li><span>02</span>Hoa mang theo trên đường đi lễ</li>
                <li><span>03</span>Cắm theo màu sắc, dịp và ngân sách</li>
              </ul>
              <div className="location-note"><Icon name="map"/><span>Gần Nhà thờ Thái Hiệp — thuận tiện ghé lấy hoa trước khi đi lễ hoặc trên đường vào trung tâm.</span></div>
            </div>
          </div>
        </section>

        <section className="offerings section--wide">
          <div className="section-heading section-heading--center" data-reveal>
            <p className="chapter">03 · Hoa để gửi trao</p>
            <h2>Mỗi bó hoa đều bắt đầu từ<br/><em>một điều bạn muốn gửi đến ai đó.</em></h2>
          </div>
          <div className="service-grid">
            <article className="service-card" data-reveal>
              <div className="service-card__image"><img src={bouquetImage} alt="Bó hoa tặng dịu dàng" loading="lazy"/><span>01</span></div>
              <div><h3>Hoa bó &amp; hoa tặng</h3><p>Cho sinh nhật, lời cảm ơn, lời chúc mừng, một cuộc hẹn hoặc một ngày chẳng cần lý do.</p></div>
            </article>
            <article className="service-card service-card--down" data-reveal>
              <div className="service-card__image"><img src={weddingImage} alt="Hoa cưới và sự kiện thanh lịch" loading="lazy"/><span>02</span></div>
              <div><h3>Hoa cưới &amp; sự kiện</h3><p>Từ bó hoa cầm tay đến những điểm hoa được chuẩn bị theo màu sắc và câu chuyện riêng của ngày vui.</p></div>
            </article>
            <article className="service-card" data-reveal>
              <div className="service-card__image"><img src={condolenceImage} alt="Hoa chia buồn trang trọng" loading="lazy"/><span>03</span></div>
              <div><h3>Hoa chia buồn</h3><p>Chỉn chu, trang trọng và phù hợp hoàn cảnh — thay lời sẻ chia trong những lúc cần sự tinh tế.</p></div>
            </article>
          </div>
          <p className="advance-note"><Icon name="clock"/> Hoa cưới, sự kiện và hoa tang nên liên hệ trước ít nhất một ngày để Dâu chuẩn bị chu đáo hơn.</p>
        </section>

        <section className="devotional" id="dang-hoa">
          <div className="devotional__image"><img src={devotionalImage} alt="Bình hoa ly, lan và cúc trang trọng trong ánh sáng dịu" loading="lazy"/></div>
          <div className="devotional__copy" data-reveal>
            <p className="chapter">04 · Hoa dâng Chúa</p>
            <h2>Những đóa hoa được chuẩn bị<br/><em>bằng sự chỉn chu và thành kính.</em></h2>
            <p>Dâu Dâu nhận chuẩn bị hoa dâng Chúa và hoa dành cho bàn thờ với màu sắc hài hòa, cách cắm trang trọng và phù hợp với từng dịp.</p>
            <p>Dâu luôn lắng nghe mong muốn của khách để gợi ý loại hoa, kích thước và cách phối phù hợp.</p>
            <a className="text-link text-link--light" href={ZALO_URL} target="_blank" rel="noreferrer">Trao đổi với Dâu <Icon name="arrow"/></a>
          </div>
        </section>

        <section className="order section section--wide">
          <div className="order__intro" data-reveal>
            <p className="chapter">05 · Đặt hoa thật đơn giản</p>
            <h2>Kể Dâu nghe về bó hoa<br/><em>bạn đang nghĩ đến.</em></h2>
            <p>Chỉ cần vài thông tin nhỏ, Dâu sẽ dễ dàng gợi ý một mẫu hoa phù hợp hơn với mong muốn của bạn.</p>
            <ZaloButton />
          </div>
          <ol className="order-steps" data-reveal>
            <li><span>01</span><div><strong>Dịp cần hoa</strong><small>Sinh nhật, đi lễ, ngày cưới…</small></div></li>
            <li><span>02</span><div><strong>Màu sắc yêu thích</strong><small>Hoặc để Dâu gợi ý giúp bạn</small></div></li>
            <li><span>03</span><div><strong>Ngân sách dự kiến</strong><small>Để mẫu hoa vừa đẹp, vừa phù hợp</small></div></li>
            <li><span>04</span><div><strong>Thời gian cần nhận</strong><small>Đơn thường nên đặt trước từ 5 giờ</small></div></li>
            <li><span>05</span><div><strong>Nhận hoa thế nào?</strong><small>Giao tại Biên Hòa hoặc đến lấy tại tiệm</small></div></li>
          </ol>
          <div className="order__details" data-reveal>
            <span>Giao trong ngày</span><span>Phí giao báo theo địa chỉ</span><span>Đơn gấp tùy khả năng chuẩn bị</span>
          </div>
        </section>

        <section className="price-invite section--wide">
          <div className="price-invite__image"><img src={ctaImage} alt="Bình hoa nhỏ xinh bên khung cửa sáng" loading="lazy"/></div>
          <div className="price-invite__copy" data-reveal>
            <p className="chapter">06 · Một lời mời nhỏ</p>
            <p className="price-kicker">Một bình hoa nhỏ xinh</p>
            <h2>từ <strong>60.000đ</strong></h2>
            <p>Mỗi mùa sẽ có những loại hoa và vẻ đẹp khác nhau. Hãy kể Dâu nghe dịp bạn cần, màu bạn thích và ngân sách mong muốn — Dâu sẽ gợi ý mẫu phù hợp.</p>
            <ZaloButton />
            <div className="message-suggestion"><Icon name="message"/><span><small>Tin nhắn gợi ý</small>“Chào Dâu, mình đang xem website và muốn được tư vấn một mẫu hoa. Dịp mình cần là…”</span></div>
          </div>
        </section>

        <section className="contact" id="lien-he">
          <div className="contact__top" data-reveal>
            <Brand light />
            <h2>Ghé Dâu Dâu<br/><em>mang một chút hoa về nhé.</em></h2>
          </div>
          <div className="contact__grid">
            <div className="contact__address" data-reveal>
              <p className="chapter">07 · Ghé tiệm</p>
              <address>93/41, hẻm 1160 Nguyễn Ái Quốc,<br/>Tân Triều, Đồng Nai</address>
              <p className="nearby"><Icon name="map"/> Gần Nhà thờ Thái Hiệp</p>
              <a className="button button--outline-light" href={MAP_URL} target="_blank" rel="noreferrer"><Icon name="map"/> Xem đường đến tiệm <Icon name="arrow"/></a>
            </div>
            <div className="contact__info" data-reveal>
              <div><small>Mở cửa</small><strong>06:00 — 20:00</strong><span>Tất cả các ngày trong tuần</span></div>
              <div><small>Điện thoại / Zalo</small><a href={PHONE_URL}>0798 408 406</a><span>Nhận giao hoa trong Biên Hòa</span></div>
              <div className="contact__actions"><ZaloButton pale/><a className="round-call" href={PHONE_URL} aria-label="Gọi điện cho Dâu"><Icon name="phone"/></a></div>
            </div>
          </div>
          <div className="contact__bottom">
            <p>© {new Date().getFullYear()} Dâu Dâu. Hoa được cắm bằng yêu thương.</p>
            <p>Một số hình ảnh trên website được dùng để minh họa phong cách hoa.</p>
          </div>
        </section>
      </main>

      <div className="mobile-actions" aria-label="Liên hệ nhanh">
        <a className="mobile-actions__call" href={PHONE_URL} aria-label="Gọi cho Dâu"><Icon name="phone"/></a>
        <a className="mobile-actions__zalo" href={ZALO_URL} target="_blank" rel="noreferrer"><Icon name="message"/> Nhắn Dâu qua Zalo</a>
      </div>
    </>
  )
}

export default App
