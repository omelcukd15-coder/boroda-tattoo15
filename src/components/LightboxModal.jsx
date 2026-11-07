import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LightboxModal({ item, items = [], currentIndex = 0, onPrev, onNext, onClose, onBookWork }) {
  const [isZoomed, setIsZoomed] = useState(false);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowLeft') {
      if (onPrev) onPrev();
    } else if (e.key === 'ArrowRight') {
      if (onNext) onNext();
    }
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setIsZoomed(false);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const currentItem = item;
  const totalItems = items.length || 1;
  const displayIndex = (currentIndex >= 0 ? currentIndex : items.findIndex(i => i.id === currentItem.id)) + 1;

  const handleToggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(prev => !prev);
  };

  return (
    <div 
      className="lightbox-backdrop" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true"
      aria-label="Просмотр работы мастера"
    >
      <div 
        className={`lightbox-container ${isZoomed ? 'lightbox-container--zoomed' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls Bar */}
        <div className="lightbox-topbar">
          <div className="lightbox-counter font-heading">
            <span className="text-red">{String(displayIndex).padStart(2, '0')}</span>
            <span className="counter-sep">/</span>
            <span>{String(totalItems).padStart(2, '0')}</span>
          </div>

          <div className="lightbox-top-actions">
            <button 
              type="button"
              className="lightbox-action-btn"
              onClick={handleToggleZoom}
              title={isZoomed ? "Уменьшить" : "Увеличить"}
              aria-label={isZoomed ? "Уменьшить изображение" : "Увеличить изображение"}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>

            <button 
              type="button"
              className="lightbox-close-btn" 
              onClick={onClose} 
              aria-label="Закрыть просмотр"
              title="Закрыть (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Prev / Next Navigation Arrows */}
        {onPrev && (
          <button 
            type="button"
            className="lightbox-nav-btn lightbox-nav-btn--prev"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Предыдущая работа (Стрелка влево)"
            title="Предыдущая"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {onNext && (
          <button 
            type="button"
            className="lightbox-nav-btn lightbox-nav-btn--next"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Следующая работа (Стрелка вправо)"
            title="Следующая"
          >
            <ChevronRight size={28} />
          </button>
        )}

        {/* Content Body */}
        <div className="lightbox-content">
          <div 
            className={`lightbox-image-box ${isZoomed ? 'lightbox-image-box--zoomed' : ''}`}
            onClick={handleToggleZoom}
            title="Кликните для увеличения"
          >
            <img 
              src={currentItem.image} 
              alt={currentItem.title} 
              className="lightbox-image" 
            />
          </div>

          <div className="lightbox-info-box">
            <div className="lightbox-meta-head">
              <span className="lightbox-category-tag font-heading">{currentItem.categoryLabel}</span>
              <h3 className="lightbox-title font-heading">{currentItem.title}</h3>
            </div>
            
            <div className="lightbox-details">
              <div className="lightbox-detail-row">
                <span className="detail-name">Стиль:</span>
                <span className="detail-value text-red">{currentItem.style}</span>
              </div>
              <div className="lightbox-detail-row">
                <span className="detail-name">Зона нанесения:</span>
                <span className="detail-value">{currentItem.placement}</span>
              </div>
              {currentItem.time && (
                <div className="lightbox-detail-row">
                  <span className="detail-name">Длительность:</span>
                  <span className="detail-value">{currentItem.time}</span>
                </div>
              )}
              <div className="lightbox-detail-row">
                <span className="detail-name">Автор работы:</span>
                <span className="detail-value">Арсен («Чёрная Борода»)</span>
              </div>
            </div>

            <p className="lightbox-note">
              Каждая татуировка уникальна. Арсен создаст авторский индивидуальный эскиз с похожей динамикой под вашу анатомию.
            </p>

            <a
              href={`https://wa.me/79888374501?text=${encodeURIComponent(`Здравствуйте, Арсен! Хочу записаться на тату по мотивам: ${currentItem.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary lightbox-cta-btn"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none', width: '100%' }}
            >
              <MessageSquare size={16} />
              <span>Записаться в WhatsApp</span>
            </a>

            <a
              href="tel:+79888374501"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '10px', width: '100%', textDecoration: 'none' }}
            >
              <Phone size={15} />
              <span>Позвонить Арсену</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
