import React, { useState } from 'react';
import { Clock, MessageSquare, Sparkles, Check, ArrowRight, ShieldCheck, TrendingDown } from 'lucide-react';
import { createWhatsAppUrl } from '../constants';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('popular');

  const popularServices = [
    {
      id: 'mini',
      title: 'МИНИ ТАТУ',
      price: 'от 1 200 ₽',
      oldPrice: '1 500 ₽',
      desc: 'Лаконичные символы, тонкие линии, аккуратная микро-геометрия. Бесплатная заживляющая плёнка в подарок.',
      image: '/assets/tattoo/real/work_1.jpg',
      time: '~ 1 час',
      popular: true,
      tag: '-20% ВЫГОДА',
    },
    {
      id: 'lettering',
      title: 'НАДПИСИ И КАЛЛИГРАФИЯ',
      price: 'от 2 000 ₽',
      oldPrice: '2 500 ₽',
      desc: 'Памятные даты, фразы со смыслом и каллиграфия. Индивидуальный подбор шрифта. Обезболивание бесплатно.',
      image: '/assets/tattoo/real/work_2.jpg',
      time: '~ 1.5 часа',
      popular: false,
      tag: 'Каллиграфия',
    },
    {
      id: 'drawings',
      title: 'РИСУНКИ И ГРАФИКА',
      price: 'от 3 000 ₽',
      oldPrice: '3 800 ₽',
      desc: 'Ч/б реализм, хищники, мифология, Dark Art. Ювелирная детализация, плотный цвет. Плёнка в подарок.',
      image: '/assets/tattoo/real/work_7.jpg',
      time: 'от 2.5 часов',
      popular: true,
      tag: 'Хит сезона',
    },
  ];

  const allServices = [
    ...popularServices,
    {
      id: 'custom',
      title: 'АВТОРСКИЙ ПРОЕКТ',
      price: 'от 5 000 ₽',
      oldPrice: '6 500 ₽',
      desc: 'Индивидуальная разработка концепта, перекрытие старых работ (cover-up), маскировка шрамов.',
      image: '/assets/tattoo/real/work_11_review.jpg',
      time: 'сеансы 3–5 часов',
      popular: false,
      tag: 'Dark Art / Реализм',
    },
    {
      id: 'sleeves',
      title: 'ПОЛНЫЙ РУКАВ',
      price: 'от 15 000 ₽',
      oldPrice: '19 000 ₽',
      desc: 'Масштабная японская композиция или реализм на всю руку (самураи, Они, драконы). Плёнка на каждый сеанс.',
      image: '/assets/tattoo/real/work_3.jpg',
      time: 'от 2 сеансов',
      popular: true,
      tag: 'Масштаб',
    },
    {
      id: 'correction',
      title: 'БЕСПЛАТНАЯ КОРРЕКЦИЯ',
      price: '0 ₽ (Бесплатно)',
      oldPrice: '',
      desc: 'Каждому клиенту гарантия салона: бесплатная коррекция после заживления при необходимости.',
      image: '/assets/tattoo/real/work_8.jpg',
      time: '~ 30–60 мин',
      popular: false,
      tag: 'Гарантия студии',
    },
  ];

  const displayedServices = activeCategory === 'all' ? allServices : popularServices;

  const getWhatsAppUrl = (serviceTitle) => {
    return createWhatsAppUrl(`Здравствуйте, Арсен! Хочу записаться на консультацию по услуге «${serviceTitle}», я с сайта.`);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Head */}
        <div className="section-head">
          <div>
            <h2 className="section-title">
              <span className="font-heading">УСЛУГИ И СТОИМОСТЬ</span>
            </h2>
          </div>
          <p className="section-desc">
            Цены на 20% ниже конкурентов во Владикавказе. К каждому сеансу <strong>бесплатная заживляющая плёнка</strong> и обезболивающая мазь при необходимости.
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
                  <div style={{ textAlign: 'right' }}>
                    {service.oldPrice && (
                      <span style={{ fontSize: '0.74rem', color: '#666', textDecoration: 'line-through', display: 'block' }}>
                        {service.oldPrice}
                      </span>
                    )}
                    <span className="service-card__price font-heading" style={{ color: '#ffd966' }}>
                      {service.price}
                    </span>
                  </div>
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
