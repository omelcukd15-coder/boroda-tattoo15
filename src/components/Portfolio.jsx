import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ExternalLink,
  LayoutGrid, 
  SlidersHorizontal,
  Flame,
  Star,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { EXTERNAL_LINKS, createWhatsAppUrl } from '../constants';

export default function Portfolio({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const scrollContainerRef = useRef(null);

  const filtered = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.portfolio-item-card')?.offsetWidth || 300;
      const scrollOffset = direction === 'left' ? -cardWidth - 20 : cardWidth + 20;
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const getWhatsAppWorkUrl = (title) => {
    return createWhatsAppUrl(`Здравствуйте, Арсен! Понравилась ваша реальная работа «${title}» из портфолио с сайта, хочу сделать в таком же стиле.`);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <div>
            <h2 className="section-title">
              <span className="font-heading">РЕАЛЬНЫЕ РАБОТЫ (ЯНДЕКС КАРТЫ)</span>
            </h2>
            <p className="section-desc">
              Все фотографии ниже — подлинные работы мастера Арсена из карточки салона «Чёрная Борода». Без ретуши и нейросетей.
            </p>
          </div>

          <div className="portfolio-header-actions">
            <a
              href={EXTERNAL_LINKS.yandexMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-yandex-btn font-heading"
              title="Открыть профиль на Яндекс Картах"
            >
              <span className="yandex-dot" aria-hidden="true"></span>
              <span className="yandex-btn-text">РАБОТЫ НА ЯНДЕКС КАРТАХ</span>
              <ExternalLink size={15} />
            </a>

            <div className="view-mode-toggle" aria-label="Режим отображения">
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'carousel' ? 'view-toggle-btn--active' : ''}`}
                onClick={() => setViewMode('carousel')}
                title="Режим карусели"
                aria-label="Режим карусели"
              >
                <SlidersHorizontal size={17} />
              </button>
              <button
                type="button"
                className={`view-toggle-btn ${viewMode === 'grid' ? 'view-toggle-btn--active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Режим сетки"
                aria-label="Режим сетки"
              >
                <LayoutGrid size={17} />
              </button>
            </div>

            {viewMode === 'carousel' && (
              <div className="portfolio-controls">
                <button 
                  type="button"
                  className="carousel-btn" 
                  onClick={() => scrollGallery('left')}
                  aria-label="Предыдущие работы"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  type="button"
                  className="carousel-btn" 
                  onClick={() => scrollGallery('right')}
                  aria-label="Следующие работы"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="portfolio-filters-wrapper">
          <div className="portfolio-filters">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${filter === cat.id ? 'filter-pill--active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery View */}
        {viewMode === 'carousel' ? (
          <div className="portfolio-carousel" ref={scrollContainerRef}>
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item-card"
                onClick={() => onOpenLightbox(item, filtered, index)}
              >
                <div className="portfolio-item-card__img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-item-card__img"
                    loading="lazy"
                  />
                  <div className="portfolio-item-card__overlay">
                    <div className="zoom-icon-box">
                      <ZoomIn size={24} />
                    </div>
                    <span className="overlay-text font-heading">УВЕЛИЧИТЬ</span>
                  </div>
                </div>

                <div className="portfolio-item-card__meta">
                  <span className="meta-tag">{item.categoryLabel}</span>
                  <h3 className="meta-title font-heading">{item.title}</h3>
                  <div className="meta-sub">
                    <span>{item.placement}</span>
                    <span>•</span>
                    <span>{item.style}</span>
                  </div>

                  <a
                    href={getWhatsAppWorkUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-wa-btn"
                    onClick={(e) => e.stopPropagation()}
                    title="Записаться на похожую работу в WhatsApp"
                  >
                    <MessageSquare size={14} />
                    <span>Хочу такую в WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="portfolio-grid-view">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-item-card"
                onClick={() => onOpenLightbox(item, filtered, index)}
              >
                <div className="portfolio-item-card__img-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-item-card__img"
                    loading="lazy"
                  />
                  <div className="portfolio-item-card__overlay">
                    <div className="zoom-icon-box">
                      <ZoomIn size={24} />
                    </div>
                    <span className="overlay-text font-heading">УВЕЛИЧИТЬ</span>
                  </div>
                </div>

                <div className="portfolio-item-card__meta">
                  <span className="meta-tag">{item.categoryLabel}</span>
                  <h3 className="meta-title font-heading">{item.title}</h3>
                  <div className="meta-sub">
                    <span>{item.placement}</span>
                    <span>•</span>
                    <span>{item.style}</span>
                  </div>

                  <a
                    href={getWhatsAppWorkUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-wa-btn"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <MessageSquare size={14} />
                    <span>Хочу такую в WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Yandex Maps Callout Footer */}
        <div className="portfolio-footer-cta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="yandex-star-box font-heading">
              <Star size={18} fill="#e50919" color="#e50919" />
              <span>5.0</span>
            </div>
            <div>
              <strong style={{ color: '#ffffff', display: 'block', fontSize: '1rem' }}>
                Все 11+ свежих работ и отзывы на Яндекс Картах
              </strong>
              <span style={{ color: '#888888', fontSize: '0.84rem' }}>
                Тату-салон «Чёрная Борода» • Проспект Мира, 53
              </span>
            </div>
          </div>

          <a
            href={EXTERNAL_LINKS.yandexMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary font-heading"
          >
            <span>ОТКРЫТЬ НА ЯНДЕКС КАРТАХ</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
