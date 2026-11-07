import React from 'react';
import { ShieldCheck, Package, PenTool, Award, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Стерильные инструменты',
      desc: 'Многоэтапная обработка и автоклав',
    },
    {
      icon: Package,
      title: 'Одноразовые расходники',
      desc: 'Вскрытие игл строго при вас',
    },
    {
      icon: PenTool,
      title: 'Индивидуальные эскизы',
      desc: 'Концепт под вашу анатомию',
    },
    {
      icon: Award,
      title: 'Опытный мастер',
      desc: 'Арсен — более 10 лет практики',
    },
    {
      icon: CheckCircle2,
      title: 'Гарантия на работу',
      desc: 'Бесплатная коррекция при необходимости',
      highlight: true,
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className={`feature-card ${item.highlight ? 'feature-card--wide' : ''}`}
              >
                <div className="feature-icon-box">
                  <Icon size={20} className="feature-icon" />
                </div>
                <div className="feature-info">
                  <h3 className="feature-title">{item.title}</h3>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
