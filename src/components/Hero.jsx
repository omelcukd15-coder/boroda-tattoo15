import React from 'react';
import { MapPin, ArrowRight, Flame } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headlines, Story, and Actions */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title__primary font-accent">ТВОЯ ИСТОРИЯ</span>
            <span className="hero-title__accent-wrap">
              <span className="hero-title__highlight font-accent">НА КОЖЕ</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Индивидуальный подход, стерильность, опыт и мастерство. 
            Татуировки со смыслом и характером, которые остаются с тобой навсегда.
          </p>

          {/* Master Arsen Quote */}
          <div className="hero-editorial-quote">
            <div className="hero-quote-decor-line" aria-hidden="true"></div>
            <div className="hero-quote-content">
              <blockquote className="hero-quote-text">
                «Тату — это не просто рисунок. Это часть тебя, которая остаётся навсегда.»
              </blockquote>
              <div className="hero-quote-author">
                <span className="author-name font-quote">— Арсен</span>
                <span className="author-tag font-heading">ОСНОВАТЕЛЬ И МАСТЕР «ЧЁРНАЯ БОРОДА»</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-strip">
            <div className="hero-metric-item">
              <strong className="metric-val font-heading">10+</strong>
              <span className="metric-lbl">лет опыта</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-item">
              <strong className="metric-val font-heading">1 500+</strong>
              <span className="metric-lbl">татуировок</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-item">
              <strong className="metric-val font-heading">100%</strong>
              <span className="metric-lbl">стерильность</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <a 
              href="https://wa.me/79888374501?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E+%D0%BA+%D0%90%D1%80%D1%81%D0%B5%D0%BD%D1%83" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary--lg hero-btn-cta font-heading" 
              aria-label="Написать Арсену в WhatsApp"
            >
              <span>КОНСУЛЬТАЦИЯ В WHATSAPP</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href="https://yandex.ru/maps/-/CXfkURkr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary font-heading"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              title="Рейтинг 5.0 на Яндекс Картах"
            >
              <span className="text-red">★ 5.0</span>
              <span>ЯНДЕКС КАРТЫ</span>
            </a>
          </div>

          <div className="hero-location-bar" style={{ marginTop: '16px' }}>
            <a href="#contacts" className="hero-location" title="Посмотреть адрес на карте">
              <MapPin size={17} className="text-red flex-shrink-0" />
              <span>Владикавказ, проспект Мира, 53</span>
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual with Original Master Arsen */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/assets/tattoo/hero-artist.webp"
              alt="Тату-мастер Арсен за работой в салоне Чёрная Борода"
              className="hero-artist-img"
              loading="eager"
            />
            <div className="hero-image-overlay"></div>

            <div className="hero-artist-badge-bar font-heading">
              <Flame size={15} className="text-red" />
              <span>АРСЕН • МАСТЕР И ОСНОВАТЕЛЬ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
