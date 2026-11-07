import React from 'react';
import { Camera, DollarSign, Gift, Sparkles, Check, MessageSquare, ArrowRight, Flame } from 'lucide-react';
import { MODEL_PROGRAM } from '../data/promotionsData';
import { createWhatsAppUrl } from '../constants';

export default function ModelProgram() {
  const handleApplyClick = () => {
    window.open(createWhatsAppUrl(MODEL_PROGRAM.whatsappMessage), '_blank');
  };

  const getBenefitIcon = (index) => {
    switch (index) {
      case 0:
        return <Gift size={22} className="text-red" />;
      case 1:
        return <DollarSign size={22} className="text-gold" />;
      case 2:
        return <Camera size={22} className="text-red" />;
      default:
        return <Sparkles size={22} className="text-gold" />;
    }
  };

  const benefitTags = ['0 ₽ БЕСПЛАТНО', 'ГОНОРАР', 'КОНТЕНТ', 'VIP УХОД'];

  return (
    <section id="models" className="model-program-section">
      <div className="container">
        {/* Section Head matching the site style */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Flame size={14} className="text-red" />
            <span>ПРОГРАММА ДЛЯ ТАТУ-МОДЕЛЕЙ</span>
          </span>
          <h2 className="section-title">
            <span className="font-heading">ЗАРАБОТАЙ ИЛИ СДЕЛАЙ ТАТУ </span>
            <span className="font-accent text-red">БЕСПЛАТНО</span>
          </h2>
          <p className="section-desc centered-desc">
            Мастер Арсен регулярно ищет моделей для реализации эффектных художественных проектов и пополнения портфолио.
          </p>
        </div>

        {/* 4 Benefit Cards in site's dark aesthetic */}
        <div className="model-cards-grid">
          {MODEL_PROGRAM.benefits.map((b, idx) => (
            <div key={idx} className="model-feature-card">
              <div className="model-card-top-row">
                <div className="model-icon-bubble">
                  {getBenefitIcon(idx)}
                </div>
                <span className={`model-pill-tag ${idx === 0 || idx === 2 ? 'model-pill-tag--red' : 'model-pill-tag--gold'}`}>
                  {benefitTags[idx]}
                </span>
              </div>
              <h3 className="model-feature-title font-heading">{b.title}</h3>
              <p className="model-feature-desc">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* 2 Detail Blocks: Wanted styles & Requirements */}
        <div className="model-spec-grid">
          <div className="model-spec-card">
            <h3 className="model-spec-title font-heading">
              <Sparkles size={18} className="text-gold" />
              <span>КАКИЕ ЭСКИЗЫ ИЩЕМ:</span>
            </h3>
            <ul className="model-spec-list">
              {MODEL_PROGRAM.categoriesWanted.map((item, i) => (
                <li key={i}>
                  <div className="spec-check-icon">
                    <Check size={14} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="model-spec-card">
            <h3 className="model-spec-title font-heading">
              <Check size={18} className="text-red" />
              <span>ТРЕБОВАНИЯ К МОДЕЛИ:</span>
            </h3>
            <ul className="model-spec-list">
              {MODEL_PROGRAM.requirements.map((item, i) => (
                <li key={i}>
                  <div className="spec-check-icon">
                    <Check size={14} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="model-banner-cta">
          <div className="model-banner-texts">
            <span className="badge-red-soft font-heading">НАБОР ОТКРЫТ</span>
            <h3 className="model-banner-title font-heading">ХОТИТЕ СТАТЬ МОДЕЛЬЮ?</h3>
            <p className="model-banner-desc">
              Отправьте фото зоны нанесения мастеру Арсену — мы подберем авторский эскиз и согласуем дату.
            </p>
          </div>
          <button
            onClick={handleApplyClick}
            className="btn-primary btn-primary--lg model-banner-btn font-heading"
            aria-label="Подать заявку на модель в WhatsApp"
          >
            <MessageSquare size={18} />
            <span>ПОДАТЬ ЗАЯВКУ В WHATSAPP</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
