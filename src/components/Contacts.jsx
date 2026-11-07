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
  const yandexMapUrl = 'https://yandex.ru/maps/-/CXvgeXYJ';
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
          <div className="contacts-map-card reveal-on-scroll">
            <div className="map-frame-wrapper" style={{ position: 'relative', overflow: 'hidden', borderRadius: '14px', border: '1px solid rgba(229, 9, 20, 0.25)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
              <div style={{ position: 'relative', width: '100%', height: '360px' }}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=44.681700%2C43.024400&z=16&pt=44.681700,43.024400,pm2rdm~44.681700,43.024400,org"
                  width="100%"
                  height="360"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="Тату-салон Чёрная Борода на Яндекс Картах: Владикавказ, пр. Мира, 53"
                  style={{ display: 'block', border: 0 }}
                />
              </div>
            </div>

            <div className="map-actions-bar" style={{ marginTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="map-address-box">
                <span className="map-address-label font-heading" style={{ display: 'block', fontSize: '1.05rem', color: '#fff' }}>г. Владикавказ, проспект Мира, 53</span>
                <span className="map-sub" style={{ fontSize: '0.85rem', color: '#888' }}>Тату-салон «Чёрная Борода» • Вход с пр. Мира</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <a
                  href="https://yandex.ru/maps/?rtext=~43.0244,44.6817"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary map-route-btn font-heading"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <Navigation size={14} className="text-red" />
                  <span>ЯНДЕКС МАРШРУТ</span>
                </a>
                <a
                  href="https://2gis.ru/vladikavkaz/search/%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary map-route-btn font-heading"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={14} />
                  <span>2GIS</span>
                </a>
              </div>
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
