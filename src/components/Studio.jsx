import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, Check, Sparkles, HelpCircle, ArrowRight, Flame } from 'lucide-react';

export default function Studio({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(0);

  const highlights = [
    'Собственная студия в историческом центре на проспекте Мира, 53',
    'Премиальные эргономичные кресла для максимального комфорта спины и шеи',
    'Медицинский автоклав B-класса и дезинфицирующие средства последнего поколения',
    'Уютная зона ожидания с напитками, хорошей музыкой и закрытым доступом',
  ];

  const faqs = [
    {
      q: 'Насколько болезненно набивать тату?',
      a: 'Ощущения зависят от зоны нанесения: на рёбрах, шее и коленях чувствительнее, на предплечьях, плечах и бёдрах — комфортно. Арсен работает деликатно, делает необходимые перерывы и следит за вашим самочувствием на протяжении всего сеанса.',
    },
    {
      q: 'Как подготовиться к сеансу?',
      a: 'Главное — хорошо выспаться, плотно поесть за час-два до визита и пить воду. За 24 часа до сеанса категорически не рекомендуется употреблять алкоголь, энергетики и аспирин, так как они разжижают кровь и усиливают выделение сукровицы.',
    },
    {
      q: 'Можно ли прийти со своей идеей или эскизом из интернета?',
      a: 'Конечно! Вы можете принести референсы, фотографии или просто описать идею словами. Арсен не копирует чужие работы один в один, а перерабатывает замысел в авторский индивидуальный эскиз, который будет идеально гармонировать с вашей анатомией.',
    },
    {
      q: 'Как проходит заживление татуировки?',
      a: 'Сразу после завершения сеанса на свежую татуировку наклеивается профессиональная дышащая мембрана Suprasorb F (бесплатно). Она защищает от микробов и воды первые 5 дней. Затем вы снимаете плёнку и увлажняете кожу заживляющим кремом по нашей инструкции.',
    },
  ];

  return (
    <section id="studio" className="studio-section">
      <div className="container">
        {/* Studio Atmosphere Grid */}
        <div className="studio-grid">
          <div className="studio-info-side">
            <h2 className="studio-title font-heading">
              <span>СТУДИЯ «ЧЁРНАЯ БОРОДА»</span>
            </h2>
            <p className="studio-intro">
              Пространство создано так, чтобы время сеанса пролетело незаметно. 
              Никакой суеты — приватная студия, правильный свет, стерильная чистота и внимание только к вам и вашей татуировке.
            </p>

            <div className="studio-highlights-list">
              {highlights.map((item, i) => (
                <div key={i} className="highlight-item">
                  <div className="highlight-check">
                    <Check size={14} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
              <a 
                href="https://wa.me/79888374501?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%87%D1%83+%D0%BF%D1%80%D0%B8%D0%B9%D1%82%D0%B8+%D0%BD%D0%B0+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E+%D0%BA+%D0%90%D1%80%D1%81%D0%B5%D0%BD%D1%83" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary--lg studio-btn-cta font-heading"
                style={{ marginTop: 0 }}
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
              >
                <span>МАРШРУТ НА КАРТАХ</span>
              </a>
            </div>
          </div>

          <div className="studio-img-wrapper">
            <img
              src="/assets/tattoo/studio-interior.webp"
              alt="Интерьер тату-студии Чёрная Борода во Владикавказе"
              className="studio-img"
              loading="lazy"
            />
            <div className="studio-img-badge font-heading">
              <Flame size={14} className="text-red" />
              <span>ВЛАДИКАВКАЗ • ПРОСПЕКТ МИРА, 53</span>
            </div>
          </div>
        </div>

        {/* Safety & Hygiene Banner */}
        <div className="studio-hygiene-card">
          <div className="hygiene-icon-circle">
            <ShieldCheck size={32} className="text-red" />
          </div>
          <div className="hygiene-text-block">
            <h3 className="hygiene-title font-heading">
              100% БЕЗОПАСНОСТЬ И МЕДИЦИНСКАЯ СТЕРИЛЬНОСТЬ
            </h3>
            <p className="hygiene-desc">
              Все картриджи и барьерная защита вскрываются исключительно в вашем присутствии. 
              Инструменты проходят трёхэтапную дезинфекцию и автоклавирование в крафт-пакетах с индикаторами.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div className="studio-faq-block">
          <div className="faq-header-center">
            <h2 className="faq-title">
              <span className="font-heading">ЧАСТЫЕ </span>
              <span className="font-accent text-red">ВОПРОСЫ</span>
            </h2>
            <p className="faq-lead">
              Всё, что нужно знать перед визитом в салон «Чёрная Борода».
            </p>
          </div>

          <div className="faq-accordion" role="region" aria-label="Частые вопросы">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-card ${isOpen ? 'faq-card--open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-card__question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-card__q-left">
                      <span className="faq-card__num font-heading">0{index + 1}</span>
                      <span className="faq-question-text">{faq.q}</span>
                    </div>
                    <span className="faq-toggle-icon">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  <div className="faq-card__collapse">
                    <div className="faq-card__answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
