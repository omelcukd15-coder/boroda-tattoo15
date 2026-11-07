import React from 'react';
import { TrendingDown, ShieldCheck, Sparkles, Gift, Camera, CheckCircle2 } from 'lucide-react';

export default function BenefitsBar({ onOpenModel, onOpenGiveaways }) {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Цены на 20% ниже',
      subtitle: 'Без салонных наценок Владикавказа',
      badge: 'ВЫГОДА',
      badgeClass: 'badge-gold',
    },
    {
      icon: ShieldCheck,
      title: 'Плёнка в подарок',
      subtitle: 'Медицинская мембрана Suprasorb F',
      badge: '0 ₽ БЕСПЛАТНО',
      badgeClass: 'badge-green',
    },
    {
      icon: Sparkles,
      title: 'Обезболивающая мазь',
      subtitle: 'Комфортный сеанс без мучений',
      badge: 'БЕЗ БОЛИ',
      badgeClass: 'badge-blue',
    },
    {
      icon: Gift,
      title: 'Розыгрыши тату',
      subtitle: 'Бесплатные сеансы и сертификаты',
      badge: 'УЧАСТВОВАТЬ',
      badgeClass: 'badge-red',
      onClick: onOpenGiveaways,
    },
    {
      icon: Camera,
      title: 'Тату-модели',
      subtitle: 'Заработай или сделай тату 0 ₽',
      badge: 'ИЩЕМ МОДЕЛЕЙ',
      badgeClass: 'badge-gold-glow',
      onClick: onOpenModel,
    },
    {
      icon: CheckCircle2,
      title: 'Бесплатная коррекция',
      subtitle: 'Гарантия качества на всю жизнь',
      badge: 'ГАРАНТИЯ',
      badgeClass: 'badge-gray',
    },
  ];

  return (
    <div className="benefits-bar-wrapper">
      <div className="container">
        <div className="benefits-bar-grid">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            const isClickable = Boolean(item.onClick);
            return (
              <div
                key={idx}
                className={`benefit-item-card ${isClickable ? 'benefit-item-card--clickable' : ''}`}
                onClick={item.onClick}
                role={isClickable ? 'button' : undefined}
                tabIndex={isClickable ? 0 : undefined}
                onKeyDown={(e) => {
                  if (isClickable && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
              >
                <div className="benefit-icon-wrapper">
                  <Icon size={22} className="benefit-icon" />
                </div>
                <div className="benefit-content">
                  <div className="benefit-header-row">
                    <h4 className="benefit-title font-heading">{item.title}</h4>
                    <span className={`benefit-badge ${item.badgeClass}`}>{item.badge}</span>
                  </div>
                  <p className="benefit-subtitle">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
