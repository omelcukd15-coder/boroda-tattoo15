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
  MessageSquare,
  ShieldCheck,
  Sparkles
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
            <div className="section-pill-row">
              <span className="section-pill">РЕАЛЬНЫЕ РАБОТЫ ИЗ ЯНДЕКС КАРТ</span>
              <span className="section-pill section-pill--gold">★ 5.0 РЕЙТИНГ</span>
            </div>
            <h2 className="section-title">
              <span className="font-heading">ПОРТФОЛИО СТУДИИ</span>
            </h2>
            <p className="section-desc">
              Все фотографии ниже — подлинные работы мастера Арсена из карточки салона на Яндекс Картах. Без ретуши и нейросетей.
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
              <span className="yandex-btn-text">ЯНДЕКС КАРТЫ (ВСЕ ФОТО)</span>
              <ExternalLink size={15} />
            </a>

            <div className="view-mode-toggle" aria-label="Режим отображения">
              <button
                className={`view-mode-btn ${viewMode === 'carousel' ? 'active' : ''}`}
                onClick={() => setViewMode('carousel')}
                title="Режим карусели"
                aria-label="Режим карусели"
              >
                <SlidersHorizontal size={16} />
                <span className="view-mode-label">Слайдер</span>
              </button>
              <button
                className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="Режим сетки"
                aria-label="Режим сетки"
              >
                <LayoutGrid size={16} />
                <span className="view-mode-label">Сетка</span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories / Filter Tabs */}
        <div className="portfolio-filters-wrapper">
          <div className="portfolio-filters" role="tablist" aria-label="Фильтр стилей">
            {PORTFOLIO_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={filter === cat.id}
                className={`portfolio-filter-tab font-heading ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Studio Perks Banner */}
        <div className="portfolio-perks-banner">
          <div className="perk-tag">
            <Sparkles size={14} className="text-gold" />
            <span>Цены на 20% ниже конкурентов</span>
          </div>
          <div className="perk-tag">
            <ShieldCheck size={14} className="text-green" />
            <span>Бесплатная заживляющая плёнка</span>
          </div>
          <div className="perk-tag">
            <Star size={14} className="text-gold" />
            <span>Обезболивающая мазь в подарок</span>
          </div>
        </div>

        {/* Gallery Content */}
        {viewMode === 'carousel' ? (
          <div className="portfolio-carousel-wrapper">
            {/* Nav Arrows */}
            <button 
              className="carousel-nav-arrow carousel-nav-prev"
              onClick={() => scrollGallery('left')}
              aria-label="Предыдущие работы"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="carousel-nav-arrow carousel-nav-next"
              onClick={() => scrollGallery('right')}
              aria-label="Следующие работы"
            >
              <ChevronRight size={24} />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollContainerRef} 
              className="portfolio-carousel-track scrollbar-hide"
            >
              {filtered.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`portfolio-item-card ${item.highlight ? 'portfolio-item-card--highlight' : ''}`}
                >
                  <div 
                    className="portfolio-image-wrapper"
                    onClick={() => onOpenLightbox(item, filtered, index)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Увеличить: ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onOpenLightbox(item, filtered, index);
                      }
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="portfolio-image"
                      loading="lazy"
                    />
                    
                    <div className="portfolio-image-overlay">
                      <div className="zoom-indicator font-heading">
                        <ZoomIn size={18} />
                        <span>УВЕЛИЧИТЬ</span>
                      </div>
                    </div>

                    <span className="portfolio-category-badge font-heading">
                      {item.categoryLabel}
                    </span>

                    {item.highlight && (
                      <span className="portfolio-highlight-badge font-heading" title="Особая авторская работа">
                        <Flame size={12} />
                        <span>ТОП РАБОТА</span>
                      </span>
                    )}
                  </div>

                  <div className="portfolio-card-body">
                    <h3 className="portfolio-item-title font-heading">{item.title}</h3>
                    <p className="portfolio-item-style">{item.style}</p>
                    {item.desc && <p className="portfolio-item-desc">{item.desc}</p>}
                    
                    <div className="portfolio-item-meta">
                      <span className="meta-tag">{item.placement}</span>
                      <span className="meta-tag meta-tag-time">{item.time}</span>
                    </div>

                    <a 
                      href={getWhatsAppWorkUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="portfolio-item-cta font-heading"
                    >
                      <MessageSquare size={14} />
                      <span>ХОЧУ В ЭТОМ СТИЛЕ</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="portfolio-grid-layout">
            {filtered.map((item, index) => (
              <div 
                key={item.id} 
                className={`portfolio-item-card ${item.highlight ? 'portfolio-item-card--highlight' : ''}`}
              >
                <div 
                  className="portfolio-image-wrapper"
                  onClick={() => onOpenLightbox(item, filtered, index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Увеличить: ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(item, filtered, index);
                    }
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="portfolio-image"
                    loading="lazy"
                  />
                  
                  <div className="portfolio-image-overlay">
                    <div className="zoom-indicator font-heading">
                      <ZoomIn size={18} />
                      <span>УВЕЛИЧИТЬ</span>
                    </div>
                  </div>

                  <span className="portfolio-category-badge font-heading">
                    {item.categoryLabel}
                  </span>

                  {item.highlight && (
                    <span className="portfolio-highlight-badge font-heading">
                      <Flame size={12} />
                      <span>ТОП РАБОТА</span>
                    </span>
                  )}
                </div>

                <div className="portfolio-card-body">
                  <h3 className="portfolio-item-title font-heading">{item.title}</h3>
                  <p className="portfolio-item-style">{item.style}</p>
                  {item.desc && <p className="portfolio-item-desc">{item.desc}</p>}
                  
                  <div className="portfolio-item-meta">
                    <span className="meta-tag">{item.placement}</span>
                    <span className="meta-tag meta-tag-time">{item.time}</span>
                  </div>

                  <a 
                    href={getWhatsAppWorkUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-item-cta font-heading"
                  >
                    <MessageSquare size={14} />
                    <span>ХОЧУ В ЭТОМ СТИЛЕ</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer info note */}
        <div className="portfolio-bottom-note">
          <p>
            🔥 Понравилась работа или хотите авторский проект по своей идее? 
            Напишите мастеру Арсену — консультация и примерка эскиза <strong>бесплатны</strong>!
          </p>
        </div>
      </div>
    </section>
  );
}
