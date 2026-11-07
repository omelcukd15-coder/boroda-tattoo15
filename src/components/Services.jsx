import React, { useState } from 'react';
import { Clock, MessageSquare, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('popular');

  const popularServices = [
    {
      id: 'mini',
      title: 'МИНИ ТАТУ',
      price: 'от 1 500 ₽',
      desc: 'Лаконичные символы, тонкие линии, аккуратная геометрия. Идеально для первого сеанса.',
      image: '/assets/tattoo/service-mini.webp',
      time: '~ 1 час',
      popular: true,
      tag: 'Хит сезона',
    },
    {
      id: 'lettering',
      title: 'НАДПИСИ',
      price: 'от 2 500 ₽',
      desc: 'Памятные даты, цитаты и каллиграфия. Индивидуальный подбор шрифта под вашу анатомию.',
      image: '/assets/tattoo/service-lettering.webp',
      time: '~ 1.5 часа',
      popular: false,
      tag: 'Каллиграфия',
    },
    {
      id: 'drawings',
      title: 'РИСУНКИ И ГРАФИКА',
      price: 'от 3 500 ₽',
      desc: 'Ч/б реализм, мифология, животные, Dark Art. Ювелирная детализация и стойкий плотный цвет.',
      image: '/assets/tattoo/portfolio-tiger.webp',
      time: 'от 2 часов',
      popular: true,
      tag: 'Авторский стиль',
    },
  ];

  const allServices = [
    ...popularServices,
    {
      id: 'custom',
      title: 'АВТОРСКИЙ ПРОЕКТ',
      price: 'от 6 000 ₽',
      desc: 'Индивидуальная разработка эскиза с нуля, перекрытие старых татуировок (cover-up), шрамов.',
      image: '/assets/tattoo/portfolio-statue.webp',
      time: 'сеансы 3–5 часов',
      popular: false,
      tag: 'Сложный проект',
    },
    {
      id: 'sleeves',
      title: 'ПОЛНЫЙ РУКАВ',
      price: 'от 18 000 ₽',
      desc: 'Масштабная единая композиция на всю руку в стиле реализм или Dark Art с гармоничными переходами.',
      image: '/assets/tattoo/portfolio-sleeve.webp',
      time: 'от 3 сеансов',
      popular: true,
      tag: 'Dark Art / Реализм',
    },
    {
      id: 'correction',
      title: 'БЕСПЛАТНАЯ КОРРЕКЦИЯ',
      price: '0 ₽ (Бесплатно)',
      desc: 'Каждому клиенту салона «Чёрная Борода» гарантия и бесплатная коррекция работы при необходимости.',
      image: '/assets/tattoo/portfolio-demon.webp',
      time: '~ 30–60 мин',
      popular: false,
      tag: 'Гарантия студии',
    },
  ];

  const displayedServices = activeCategory === 'all' ? allServices : popularServices;

  const getWhatsAppUrl = (serviceTitle) => {
    return `https://wa.me/79888374501?text=${encodeURIComponent(
      `Здравствуйте, Арсен! Хочу записаться на консультацию по услуге «${serviceTitle}», я с сайта.`
    )}`;
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Head */}
        <div className="section-head">
          <div>
            <h2 className="section-title">
              <span className="font-heading">ПОПУЛЯРНЫЕ УСЛУГИ</span>
            </h2>
          </div>
          <p className="section-desc">
            Консультация и примерка эскиза бесплатны. Выберите направление и напишите напрямую мастеру Арсену в WhatsApp.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="services-tabs-wrapper">
          <div className="services-tabs">
            <button
              type="button"
              className={`service-tab-btn ${activeCategory === 'popular' ? 'service-tab-btn--active' : ''}`}
              onClick={() => setActiveCategory('popular')}
            >
              Популярные (3)
            </button>
            <button
              type="button"
              className={`service-tab-btn ${activeCategory === 'all' ? 'service-tab-btn--active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Все направления ({allServices.length})
            </button>
          </div>
        </div>

        {/* Grid of clean styled cards */}
        <div className="services-grid">
          {displayedServices.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__image-box">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card__img"
                  loading="lazy"
                />
                {service.popular && (
                  <span className="service-card__popular-badge">
                    {service.tag}
                  </span>
                )}
                <span className="service-card__badge">
                  <Clock size={12} />
                  <span>{service.time}</span>
                </span>
              </div>

              <div className="service-card__body">
                <div className="service-card__top">
                  <h3 className="service-card__title font-heading">{service.title}</h3>
                  <span className="service-card__price font-heading">{service.price}</span>
                </div>

                <p className="service-card__desc">{service.desc}</p>

                <a
                  href={getWhatsAppUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card__btn font-heading"
                  title="Написать в WhatsApp Арсену"
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MessageSquare size={16} />
                    <span>КОНСУЛЬТАЦИЯ В WHATSAPP</span>
                  </span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
