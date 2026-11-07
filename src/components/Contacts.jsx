import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, ExternalLink, Calendar, Navigation, ArrowRight, Star } from 'lucide-react';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Contacts({ onOpenBooking }) {
  const address = 'г. Владикавказ, проспект Мира, 53';
  const phone = '+7 988 837-45-01';
  const yandexMapUrl = 'https://yandex.ru/maps/-/CXfkURkr';
  const whatsappUrl = `https://wa.me/79888374501?text=${encodeURIComponent("Здравствуйте, Арсен! Хочу записаться на консультацию по тату, я с сайта.")}`;

  return (
    <section id="contacts" className="contacts-section">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 className="section-title">
              <span className="font-heading">НАШИ КОНТАКТЫ</span>
            </h2>
          </div>
          <p className="section-desc">
            Ждём вас на консультацию и сеанс в самом сердце Владикавказа. Свяжитесь любым удобным способом.
          </p>
        </div>

        <div className="contacts-grid">
          {/* Left Info Panel */}
          <div className="contacts-info-card">
            <div className="contact-item">
              <div className="contact-icon-box">
                <MapPin size={20} className="text-red" />
              </div>
              <div className="contact-content">
                <span className="contact-label font-heading">АДРЕС СТУДИИ</span>
                <p className="contact-val">{address}</p>
                <span className="contact-hint">Исторический центр, удобная парковка</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Phone size={20} className="text-red" />
              </div>
              <div className="contact-content">
                <span className="contact-label font-heading">ТЕЛЕФОН</span>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="contact-val contact-link">
                  {phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <MessageSquare size={20} className="text-red" />
              </div>
              <div className="contact-content">
                <span className="contact-label font-heading">WHATSAPP АРСЕНА</span>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-val contact-link text-red">
                  <span>Написать напрямую в WhatsApp →</span>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <InstagramIcon size={20} className="text-red" />
              </div>
              <div className="contact-content">
                <span className="contact-label font-heading">INSTAGRAM</span>
                <a 
                  href="https://instagram.com/taty_vld_arsen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-val contact-link"
                >
                  <span>@taty_vld_arsen →</span>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-box">
                <Clock size={20} className="text-red" />
              </div>
              <div className="contact-content">
                <span className="contact-label font-heading">ГРАФИК РАБОТЫ</span>
                <p className="contact-val">Ежедневно: с 10:00 до 22:00</p>
                <span className="contact-hint">По предварительной записи</span>
              </div>
            </div>

            {/* Direct WhatsApp Consultation Card */}
            <div className="dikidi-banner">
              <div className="dikidi-header">
                <MessageSquare size={18} className="text-red" />
                <h4 className="dikidi-title font-heading">КОНСУЛЬТАЦИЯ В WHATSAPP</h4>
              </div>
              <p className="dikidi-desc">
                Отправьте вашу идею или референсы прямо в чат мастеру Арсену. Он сориентирует по стоимости и подберёт время.
              </p>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }} 
              >
                <span>НАПИСАТЬ В WHATSAPP</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right Map Panel with Interactive Yandex Map */}
          <div className="contacts-map-card">
            <div className="map-frame" style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', minHeight: '340px' }}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?orgid=107457770300&ll=44.679614%2C43.034267&z=17"
                width="100%"
                height="340"
                frameBorder="0"
                allowFullScreen={true}
                title="Тату-салон Чёрная Борода на Яндекс Картах"
                style={{ display: 'block', border: 0 }}
              />
            </div>

            <div className="map-actions-bar">
              <div className="map-address-box">
                <span className="map-address-label">г. Владикавказ, проспект Мира, 53</span>
                <span className="map-sub">Тату-салон «Чёрная Борода» • Рейтинг 5.0 ★</span>
              </div>
              <a
                href={yandexMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary map-route-btn font-heading"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <Navigation size={15} />
                <span>ОТКРЫТЬ В КАРТАХ</span>
              </a>
            </div>

            {/* Emotional High-Impact Final Slogan Block */}
            <div className="emotional-slogan-card">
              <div className="slogan-watermark" aria-hidden="true">
                <img src="/assets/tattoo/main-logo.png" alt="" className="slogan-watermark-img" />
              </div>
              <div className="slogan-inner-content">
                <div className="slogan-super-tag font-heading">
                  <span className="slogan-tag-dot"></span>
                  <span>ВЛАДИКАВКАЗ • АВТОРСКИЙ СТИЛЬ</span>
                </div>
                <h3 className="slogan-bold-text font-accent">
                  БОЛЬШЕ ЧЕМ <span className="text-red">ПРОСТО ТАТУ</span>
                </h3>
                <p className="slogan-sub-phrase">
                  Твой характер. Твоя история. Твоё вечное отражение.
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-primary--lg slogan-cta-button font-heading" 
                  aria-label="Написать Арсену в WhatsApp"
                >
                  <MessageSquare size={18} />
                  <span>НАПИСАТЬ АРСЕНУ В WHATSAPP</span>
                  <ArrowRight size={18} className="slogan-btn-arrow" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
