import React from 'react';
import { ArrowUp, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/79888374501?text=${encodeURIComponent("Здравствуйте, хочу записаться на тату, я из веб-сайта")}`;

  return (
    <footer className="site-footer">
      <div className="footer-texture-overlay" aria-hidden="true"></div>
      
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-column">
            <div className="footer-logo">
              <div className="footer-logo-img-box">
                <img src="/assets/tattoo/main-logo.png" alt="Чёрная Борода" className="footer-logo-img" />
              </div>
              <div>
                <span className="footer-logo-title font-heading">ЧЁРНАЯ БОРОДА</span>
                <span className="footer-logo-sub">TATTOO STUDIO • VLADIKAVKAZ</span>
              </div>
            </div>

            <p className="footer-mission-text">
              Профессиональная тату-студия Арсена во Владикавказе. Стерильность медицинской лаборатории, 
              авторские эскизы и татуировки со смыслом, которые остаются с вами на всю жизнь.
            </p>

            <div className="footer-pirate-sign">
              <span className="pirate-motto font-heading">DARKENED INK • HONORED CRAFT</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-column">
            <h4 className="footer-col-title font-heading">НАВИГАЦИЯ</h4>
            <ul className="footer-nav-list">
              <li><a href="#hero">Главный экран</a></li>
              <li><a href="#services">Популярные услуги</a></li>
              <li><a href="#portfolio">Галерея работ</a></li>
              <li><a href="#reviews">Отзывы клиентов (5.0 ★)</a></li>
              <li><a href="#master">О мастере Арсене</a></li>
              <li><a href="#studio">Студия и FAQ</a></li>
              <li><a href="#contacts">Локация и контакты</a></li>
            </ul>
          </div>

          {/* Contacts & Socials */}
          <div className="footer-contacts-column">
            <h4 className="footer-col-title font-heading">КОНТАКТЫ И СВЯЗЬ</h4>
            
            <div className="footer-contact-row">
              <MapPin size={16} className="text-red flex-shrink-0" />
              <span>г. Владикавказ, проспект Мира, 53</span>
            </div>

            <div className="footer-contact-row">
              <Phone size={16} className="text-red flex-shrink-0" />
              <a href="tel:+79888374501" className="footer-link-val">+7 988 837-45-01</a>
            </div>

            <div className="footer-contact-row">
              <Clock size={16} className="text-red flex-shrink-0" />
              <span>Ежедневно: 10:00 — 22:00 (по записи)</span>
            </div>

            <div className="footer-social-strip">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                title="Написать в WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare size={17} />
              </a>
              <a 
                href="https://instagram.com/taty_vld_arsen" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn" 
                title="Instagram мастера @taty_vld_arsen"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a 
                href="tel:+79888374501" 
                className="footer-social-btn" 
                title="Позвонить в салон"
                aria-label="Телефон"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-note">
            © 2026 Тату-салон «Чёрная Борода». Все права защищены. Владикавказ, пр-т Мира, 53.
          </p>
          
          <button 
            type="button"
            className="footer-scroll-top font-heading" 
            onClick={scrollToTop} 
            title="Вернуться наверх"
            aria-label="Вернуться наверх страницы"
          >
            <span>НАВЕРХ</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
