import React from 'react';
import { ArrowRight, Check, Flame } from 'lucide-react';

// Custom SVG icons for spec items
const IconSpecialization = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tattoo Pen / Machine Art Icon */}
    <path d="M14.5 3.5l6 6-11 11H4v-5.5l10.5-11.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 5.5l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M2 22l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="6" r="1" fill="currentColor"/>
    <path d="M7 17l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconExperience = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Master 10 Years Crest & Compass */}
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  </svg>
);

const IconFormat = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* VIP Individual Studio Crown / Gem */}
    <path d="M3 8l4.5 4 4.5-6 4.5 6L21 8l-2 11H5L3 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="3" cy="7" r="1.2" fill="currentColor"/>
    <circle cx="12" cy="5" r="1.5" fill="currentColor"/>
    <circle cx="21" cy="7" r="1.2" fill="currentColor"/>
    <path d="M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconSafety = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Medical Sterility Autoclave Shield with Cross */}
    <path d="M12 2L4 5.5v6.2c0 5.4 3.4 10.5 8 11.8 4.6-1.3 8-6.4 8-11.8V5.5L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 7.5v7M8.5 11h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Master({ onOpenBooking }) {
  const specs = [
    {
      icon: IconSpecialization,
      label: 'Специализация',
      value: 'Реализм, графика, ч/б, Dark Art',
    },
    {
      icon: IconExperience,
      label: 'Опыт работы',
      value: 'Более 10 лет непрерывной практики',
    },
    {
      icon: IconFormat,
      label: 'Формат работы',
      value: 'Индивидуальный приём, работа без спешки',
    },
    {
      icon: IconSafety,
      label: 'Безопасность',
      value: 'Премиум пигменты и медицинский автоклав',
    },
  ];

  const highlights = [
    'Каждый эскиз разрабатывается с учётом анатомии и рельефа мышц',
    'Использование только оригинальных сертифицированных пигментов США/Германия',
    'Вскрытие одноразовых стерильных картриджей строго в присутствии клиента',
    'Бесплатное сопровождение и консультации на всех этапах заживления',
  ];

  return (
    <section id="master" className="master-section">
      <div className="container">
        <div className="master-card-layout">
          {/* Master Portrait Frame */}
          <div className="master-photo-column">
            <div className="master-photo-frame">
              <img
                src="/assets/tattoo/artist-portrait.webp"
                alt="Арсен — основатель и тату-мастер салона Чёрная Борода"
                className="master-photo-img"
                loading="lazy"
              />
              <div className="master-photo-vignette"></div>
              
              <div className="master-photo-badge font-heading">
                <span className="master-photo-dot"></span>
                <span>ВЕДЁТ ЗАПИСЬ НА ЭТОТ МЕСЯЦ</span>
              </div>

              <div className="master-tag-corner font-heading">
                <Flame size={14} className="text-red" />
                <span>ARSEN TATTOO ARTIST</span>
              </div>
            </div>
          </div>

          {/* Master Bio & Facts */}
          <div className="master-info-column">
            <h2 className="master-title font-heading">
              <span>АРСЕН — ТАТУ-МАСТЕР</span>
            </h2>

            <div className="master-quote-artistic">
              <div className="master-quote-red-line" aria-hidden="true"></div>
              <blockquote className="master-quote-phrase">
                «Татуировка должна гармонировать с телом, характером и стилем жизни. Я не делаю бездушные шаблоны — каждый проект создаётся с нуля под конкретного человека.»
              </blockquote>
              <span className="master-signature font-quote">— Арсен</span>
            </div>

            <p className="master-bio-text">
              Арсен создаёт авторские татуировки во Владикавказе более десяти лет. 
              Его почерк — это безупречные плавные градиенты, глубокий насыщенный чёрный цвет и ювелирная тонкость линий. 
              Каждый сеанс в студии «Чёрная Борода» — это комфортная атмосфера, внимание к деталям и результат, которым гордятся.
            </p>

            {/* Spec grid */}
            <div className="master-specs-grid">
              {specs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="spec-item">
                    <div className="spec-icon-box">
                      <Icon size={18} className="text-red" />
                    </div>
                    <div>
                      <span className="spec-label">{item.label}</span>
                      <strong className="spec-value">{item.value}</strong>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Principles checklist */}
            <div className="master-principles-list">
              {highlights.map((text, i) => (
                <div key={i} className="principle-item">
                  <Check size={16} className="text-red flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="master-cta-row">
              <a 
                href="https://wa.me/79888374501?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D1%81%D0%B5%D0%B0%D0%BD%D1%81+%D0%BA+%D0%90%D1%80%D1%81%D0%B5%D0%BD%D1%83"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary--lg master-btn-cta font-heading" 
                aria-label="Написать мастеру Арсену в WhatsApp"
              >
                <span>НАПИСАТЬ АРСЕНУ В WHATSAPP</span>
                <ArrowRight size={18} />
              </a>
              <a href="https://yandex.ru/maps/-/CXvgeXYJ" target="_blank" rel="noopener noreferrer" className="btn-secondary master-btn-sec font-heading">
                <span>ОТЗЫВЫ НА КАРТАХ (5.0 ★)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
