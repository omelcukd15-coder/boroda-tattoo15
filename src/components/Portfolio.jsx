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

export default function Portfolio({ onOpenLightbox }) {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const scrollContainerRef = useRef(null);

  const yandexMapsUrl = 'https://yandex.ru/maps/-/CXfkURkr';

  // Verified studio works
  const portfolioItems = [
    {
      id: 1,
      title: 'Сибирский тигр',
      category: 'realism',
      categoryLabel: 'Реализм',
      image: '/assets/tattoo/portfolio-tiger.webp',
      style: 'Ч/Б Реализм',
      placement: 'Предплечье',
      time: '~ 4 часа',
    },
    {
      id: 2,
      title: 'Готический череп и розы',
      category: 'dark',
      categoryLabel: 'Dark Art',
      image: '/assets/tattoo/portfolio-dark-skull.webp',
      style: 'Dark Art / Графика',
      placement: 'Плечо',
      time: '~ 4.5 часа',
    },
    {
      id: 3,
      title: 'Зевс и громовержцы',
      category: 'myth',
      categoryLabel: 'Мифология',
      image: '/assets/tattoo/portfolio-zeus.webp',
      style: 'Ч/Б Реализм',
      placement: 'Предплечье',
      time: '~ 5 часов',
    },
    {
      id: 4,
      title: 'Череп в терновом венце',
      category: 'dark',
      categoryLabel: 'Dark Art',
      image: '/assets/tattoo/portfolio-skull.webp',
      style: 'Графика / Теневая прорисовка',
      placement: 'Рукав',
      time: '~ 3.5 часа',
    },
    {
      id: 5,
      title: 'Лес, полнолуние и странник',
      category: 'graphics',
      categoryLabel: 'Графика',
      image: '/assets/tattoo/portfolio-forest.webp',
      style: 'Гравюра / Ч/Б Графика',
      placement: 'Предплечье',
      time: '~ 3 часа',
    },
    {
      id: 6,
      title: 'Око времени и клинок',
      category: 'dark',
      categoryLabel: 'Символизм',
      image: '/assets/tattoo/portfolio-eye.webp',
      style: 'Реализм / Детализация',
      placement: 'Рукав',
      time: '~ 4 часа',
    },
    {
      id: 7,
      title: 'Коронованный лев',
      category: 'realism',
      categoryLabel: 'Реализм',
      image: '/assets/tattoo/portfolio-lion.webp',
      style: 'Детализированный реализм',
      placement: 'Плечо',
      time: '~ 4.5 часа',
    },
    {
      id: 8,
      title: 'Полный рукав воина',
      category: 'sleeves',
      categoryLabel: 'Рукава',
      image: '/assets/tattoo/portfolio-sleeve.webp',
      style: 'Масштабная авторская композиция',
      placement: 'Полная рука',
      time: '3 сеанса',
    },
    {
      id: 9,
      title: 'Оскал северного волка',
      category: 'graphics',
      categoryLabel: 'Животные',
      image: '/assets/tattoo/portfolio-wolf.webp',
      style: 'Графика',
      placement: 'Предплечье',
      time: '~ 3 часа',
    },
    {
      id: 10,
      title: 'Скорбящая монахиня',
      category: 'dark',
      categoryLabel: 'Dark Art',
      image: '/assets/tattoo/portfolio-nun.webp',
      style: 'Ч/Б Реализм',
      placement: 'Предплечье',
      time: '~ 4 часа',
    },
    {
      id: 11,
      title: 'Готический собор',
      category: 'graphics',
      categoryLabel: 'Архитектура',
      image: '/assets/tattoo/portfolio-cathedral.webp',
      style: 'Архитектурная гравюра',
      placement: 'Икра',
      time: '~ 3.5 часа',
    },
    {
      id: 12,
      title: 'Маска они и демон',
      category: 'myth',
      categoryLabel: 'Мифология',
      image: '/assets/tattoo/portfolio-demon.webp',
      style: 'Японская мифология',
      placement: 'Предплечье',
      time: '~ 3.5 часа',
    },
  ];

  const categories = [
    { id: 'all', label: 'Все работы' },
    { id: 'realism', label: 'Реализм' },
    { id: 'dark', label: 'Dark Art' },
    { id: 'graphics', label: 'Графика' },
    { id: 'sleeves', label: 'Рукава' },
    { id: 'myth', label: 'Мифология' },
  ];

  const filtered = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.portfolio-item-card')?.offsetWidth || 300;
      const scrollOffset = direction === 'left' ? -cardWidth - 20 : cardWidth + 20;
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  const getWhatsAppWorkUrl = (title) => {
    return `https://wa.me/79888374501?text=${encodeURIComponent(
      `Здравствуйте, Арсен! Понравилась работа «${title}» из портфолио, хочу сделать в похожем стиле.`
    )}`;
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Header */}
        <div className="portfolio-header">
          <div>
            <h2 className="section-title">
              <span className="font-heading">НАШИ РАБОТЫ</span>
            </h2>
            <p className="section-desc">
              Реальные работы мастера Арсена без ретуши и фильтров. Нажмите на работу для просмотра деталей.
            </p>
          </div>

          <div className="portfolio-header-actions">
            <a
              href={yandexMapsUrl}
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
            {categories.map((cat) => (
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
                Все свежие работы и отзывы на Яндекс Картах
              </strong>
              <span style={{ color: '#888888', fontSize: '0.84rem' }}>
                Тату-салон «Чёрная Борода» • Проспект Мира, 53
              </span>
            </div>
          </div>

          <a
            href={yandexMapsUrl}
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
