import React from 'react';
import { MapPin, ArrowRight, Flame, Sparkles, TrendingDown, Gift, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO, EXTERNAL_LINKS, WHATSAPP_INTENTS } from '../constants';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headlines, Story, and Actions */}
        <div className="hero-content">
          {/* Top Value Badges */}
          <div className="hero-badge-chips">
            <span className="hero-chip hero-chip--gold">
              <TrendingDown size={14} />
              <span>Цены на 20% ниже рынка</span>
            </span>
            <span className="hero-chip hero-chip--green">
              <ShieldCheck size={14} />
              <span>Плёнка и обезбол 0 ₽</span>
            </span>
            <a href="#models" className="hero-chip hero-chip--red" title="Узнать о программе тату-моделей">
              <Sparkles size={14} />
              <span>Ищем моделей (0 ₽)</span>
            </a>
          </div>

          <h1 className="hero-title">
            <span className="hero-title__primary font-accent">ТВОЯ ИСТОРИЯ</span>
            <span className="hero-title__accent-wrap">
              <span className="hero-title__highlight font-accent">НА КОЖЕ</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Премиум тату-студия «Чёрная Борода» во Владикавказе. Индивидуальный подход, ювелирная детализация, стерильность и цены на 20% доступнее сетевых салонов.
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
              <strong className="metric-val font-heading">-20%</strong>
              <span className="metric-lbl">к ценам рынка</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-item">
              <strong className="metric-val font-heading">0 ₽</strong>
              <span className="metric-lbl">плёнка & обезбол</span>
            </div>
            <div className="hero-metric-divider"></div>
            <div className="hero-metric-item">
              <strong className="metric-val font-heading">5.0 ★</strong>
              <span className="metric-lbl">Яндекс Карты</span>
            </div>
          </div>

          <div className="hero-cta-group">
            <a 
              href={WHATSAPP_INTENTS.consultation} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-primary--lg hero-btn-cta font-heading" 
              aria-label="Написать Арсену в WhatsApp"
            >
              <span>КОНСУЛЬТАЦИЯ В WHATSAPP</span>
              <ArrowRight size={18} />
            </a>

            <a 
              href={EXTERNAL_LINKS.yandexMaps} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary font-heading hero-yandex-link"
              title="Открыть салон на Яндекс Картах"
            >
              <span className="text-gold">★ 5.0</span>
              <span>ЯНДЕКС КАРТЫ</span>
            </a>
          </div>

          <div className="hero-location-bar" style={{ marginTop: '16px' }}>
            <a href="#contacts" className="hero-location" title="Посмотреть адрес на карте">
              <MapPin size={17} className="text-red flex-shrink-0" />
              <span>{STUDIO_INFO.city}, {STUDIO_INFO.address}</span>
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
