import React from 'react';
import { Clock, MessageSquare, Sparkles, Check, TrendingDown, ShieldCheck, Flame } from 'lucide-react';
import { SERVICES_LIST, STUDIO_BENEFITS } from '../data/servicesData';
import { createWhatsAppUrl } from '../constants';

export default function Services({ onSelectService }) {
  const getWhatsAppUrl = (serviceTitle) => {
    return createWhatsAppUrl(`Здравствуйте, Арсен! Хочу записаться на консультацию по услуге «${serviceTitle}», я с сайта.`);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Head */}
        <div className="section-head">
          <div className="section-pill-row">
            <span className="section-pill">ЧЕСТНЫЙ ПРАЙС БЕЗ САЛОННЫХ НАЦЕНОК</span>
            <span className="section-pill section-pill--gold">ВЫГОДА ДО 20%</span>
          </div>
          <h2 className="section-title">
            <span className="font-heading">УСЛУГИ И СТОИМОСТЬ</span>
          </h2>
          <p className="section-desc">
            Наши цены на 20% ниже конкурентов по Владикавказу. В стоимость каждого сеанса <strong>уже бесплатно включены</strong> заживляющая мембрана, обезболивающая мазь и консультация мастера.
          </p>
        </div>

        {/* 4 Core Value Propositions */}
        <div className="services-benefits-banner">
          {STUDIO_BENEFITS.map((b) => (
            <div key={b.id} className="service-benefit-badge">
              <span className="benefit-badge-pill font-heading">{b.badge}</span>
              <div className="benefit-badge-texts">
                <strong>{b.title}</strong>
                <span>{b.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Services Cards with Real Photos */}
        <div className="services-cards-grid">
          {SERVICES_LIST.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${service.popular ? 'service-card--featured' : ''}`}
            >
              {/* Photo of real work under this service */}
              <div className="service-card-media">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-card-img"
                  loading="lazy" 
                />
                <div className="service-media-overlay"></div>
                <div className="service-badge-stack">
                  <span className="service-tag font-heading">{service.tag}</span>
                  {service.discountBadge && (
                    <span className="service-discount-tag font-heading">
                      <TrendingDown size={12} />
                      <span>{service.discountBadge}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="service-card-content">
                <div className="service-header-row">
                  <h3 className="service-title font-heading">{service.title}</h3>
                  <div className="service-price-block">
                    {service.oldPrice && (
                      <span className="service-old-price">{service.oldPrice}</span>
                    )}
                    <span className="service-price font-heading">{service.price}</span>
                  </div>
                </div>

                <p className="service-desc">{service.desc}</p>

                {/* Free inclusions list */}
                {service.includes && service.includes.length > 0 && (
                  <div className="service-includes-box">
                    <span className="includes-label font-heading">БЕСПЛАТНО В СЕАНСЕ:</span>
                    <ul className="includes-list">
                      {service.includes.map((inc, i) => (
                        <li key={i}>
                          <Check size={14} className="text-gold" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="service-meta-footer">
                  <div className="service-time">
                    <Clock size={15} />
                    <span>{service.time}</span>
                  </div>

                  <a 
                    href={getWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-book-btn font-heading"
                    aria-label={`Записаться на услугу ${service.title}`}
                  >
                    <MessageSquare size={16} />
                    <span>ЗАПИСАТЬСЯ</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free consultation banner */}
        <div className="services-free-consult-card">
          <div className="consult-card-glow" aria-hidden="true"></div>
          <div className="consult-card-body">
            <div>
              <span className="badge-gold font-heading">0 ₽ КОНСУЛЬТАЦИЯ</span>
              <h3 className="consult-card-title font-heading">НЕ УВЕРЕНЫ В СТОИМОСТИ ИЛИ РАЗМЕРЕ?</h3>
              <p className="consult-card-desc">
                Пришлите фото или идею в WhatsApp — мастер Арсен сделает бесплатный расчет стоимости с учетом -20% скидки и покажет, как татуировка будет смотреться на вашем теле.
              </p>
            </div>
            <a
              href={createWhatsAppUrl('Здравствуйте, Арсен! Хочу узнать точную стоимость татуировки по своей идее.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary consult-btn font-heading"
            >
              <MessageSquare size={18} />
              <span>РАССЧИТАТЬ В WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
