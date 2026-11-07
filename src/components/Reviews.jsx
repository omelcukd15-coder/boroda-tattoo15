import React from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Quote } from 'lucide-react';

export default function Reviews() {
  const yandexMapsUrl = 'https://yandex.ru/maps/-/CXfkURkr';
  const whatsappUrl = 'https://wa.me/79888374501?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%85%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8E+%D0%BA+%D0%90%D1%80%D1%81%D0%B5%D0%BD%D1%83';

  const reviews = [
    {
      id: 1,
      author: 'Клиент салона',
      source: 'Яндекс Карты',
      rating: 5,
      date: 'Недавний отзыв',
      text: 'Отличный тату салон, недорогие цены, все красиво и качественно, притом коррекция бесплатная!! Очень рад',
      tag: 'Бесплатная коррекция',
    },
    {
      id: 2,
      author: 'Гость студии',
      source: 'Яндекс Карты',
      rating: 5,
      date: 'Недавний отзыв',
      text: 'Очень приятный мастер, соблюдает абсолютно все нормы гигиены, иглу поменял при мне. Работа качественная, к тому же коррекция бесплатно. Всем рекомендую!',
      tag: 'Стерильность и комфорт',
    },
    {
      id: 3,
      author: 'Посетитель',
      source: 'Яндекс Карты',
      rating: 5,
      date: 'Недавний отзыв',
      text: 'Очень хороший тату сервис, мне все понравилось. Атмосфера приятная, мастер подробно всё объяснил и сделал работу на высшем уровне.',
      tag: 'Высокое качество',
    },
  ];

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        {/* Head */}
        <div className="reviews-head">
          <div>
            <h2 className="section-title">
              <span className="font-heading">ОТЗЫВЫ С ЯНДЕКС КАРТ</span>
            </h2>
            <p className="section-desc">
              Честные впечатления наших клиентов. Рейтинг 5.0 из 5 на основе реальных отзывов в сервисе Яндекс Карты.
            </p>
          </div>

          <div className="reviews-yandex-badge">
            <div className="yandex-rating-score font-heading">
              <span className="score-num">5.0</span>
              <div className="score-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#e50919" color="#e50919" />
                ))}
              </div>
            </div>
            <div className="yandex-badge-text">
              <strong>Яндекс Карты</strong>
              <span>100% положительных отзывов</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-card-top">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#e50919" color="#e50919" />
                  ))}
                </div>
                <span className="review-source font-heading">{rev.source}</span>
              </div>

              <blockquote className="review-text">
                «{rev.text}»
              </blockquote>

              <div className="review-card-footer">
                <div className="review-author-info">
                  <span className="review-author-name font-heading">{rev.author}</span>
                  <span className="review-date">{rev.date}</span>
                </div>
                <span className="review-tag">{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="reviews-cta-banner">
          <div className="reviews-cta-left">
            <ShieldCheck size={28} className="text-red" />
            <div>
              <strong style={{ color: '#ffffff', display: 'block', fontSize: '1rem' }}>
                Хотите проконсультироваться по своей идее?
              </strong>
              <span style={{ color: '#888888', fontSize: '0.85rem' }}>
                Напишите Арсену в WhatsApp — он ответит на все вопросы и сориентирует по стоимости.
              </span>
            </div>
          </div>

          <div className="reviews-cta-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-heading"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <MessageSquare size={16} />
              <span>НАПИСАТЬ В WHATSAPP</span>
            </a>

            <a
              href={yandexMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary font-heading"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>СМОТРЕТЬ НА КАРТАХ</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
