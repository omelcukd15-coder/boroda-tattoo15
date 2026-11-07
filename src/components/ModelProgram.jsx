import React from 'react';
import { Camera, DollarSign, Gift, Sparkles, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { MODEL_PROGRAM } from '../data/promotionsData';
import { createWhatsAppUrl } from '../constants';

export default function ModelProgram() {
  const handleApplyClick = () => {
    window.open(createWhatsAppUrl(MODEL_PROGRAM.whatsappMessage), '_blank');
  };

  return (
    <section id="models" className="model-program-section">
      <div className="container">
        <div className="model-program-card">
          {/* Glowing subtle background gradient */}
          <div className="model-card-glow" aria-hidden="true"></div>

          <div className="model-header">
            <span className="section-pill">{MODEL_PROGRAM.badge}</span>
            <h2 className="model-title font-heading">
              ЗАРАБОТАЙ ИЛИ СДЕЛАЙ ТАТУ БЕСПЛАТНО В РОЛИ МОДЕЛИ
            </h2>
            <p className="model-desc">
              {MODEL_PROGRAM.subtitle}. Если вы давно хотели масштабную работу, но откладывали из-за бюджета — станьте частью проекта Арсена.
            </p>
          </div>

          {/* 4 Pillars of the Model Program */}
          <div className="model-benefits-grid">
            {MODEL_PROGRAM.benefits.map((b, idx) => (
              <div key={idx} className="model-benefit-box">
                <div className="model-benefit-icon-wrap">
                  {idx === 0 && <Gift size={24} className="text-gold" />}
                  {idx === 1 && <DollarSign size={24} className="text-gold" />}
                  {idx === 2 && <Camera size={24} className="text-gold" />}
                  {idx === 3 && <Sparkles size={24} className="text-gold" />}
                </div>
                <h4 className="model-benefit-title font-heading">{b.title}</h4>
                <p className="model-benefit-text">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Requirements & Wanted styles split */}
          <div className="model-details-row">
            <div className="model-info-block">
              <h3 className="model-block-title font-heading">
                <Sparkles size={18} className="text-gold" /> КАКИЕ ЭСКИЗЫ ИЩЕМ:
              </h3>
              <ul className="model-list">
                {MODEL_PROGRAM.categoriesWanted.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="model-info-block">
              <h3 className="model-block-title font-heading">
                <CheckCircle2 size={18} className="text-gold" /> ТРЕБОВАНИЯ К МОДЕЛИ:
              </h3>
              <ul className="model-list">
                {MODEL_PROGRAM.requirements.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTA */}
          <div className="model-cta-box">
            <div className="model-cta-info">
              <h4 className="font-heading">Хотите стать моделью?</h4>
              <p>Отправьте фото зоны нанесения мастеру Арсену — мы подберем авторский эскиз и согласуем дату.</p>
            </div>
            <button
              onClick={handleApplyClick}
              className="btn-primary model-apply-btn font-heading"
              aria-label="Подать заявку на модель в WhatsApp"
            >
              <MessageSquare size={18} />
              <span>{MODEL_PROGRAM.ctaText}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
