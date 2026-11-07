import React from 'react';
import { Gift, Trophy, Star, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { GIVEAWAYS_DATA } from '../data/promotionsData';
import { EXTERNAL_LINKS, WHATSAPP_INTENTS } from '../constants';

const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function GiveawaysSection() {
  const handleParticipateWhatsApp = () => {
    window.open(WHATSAPP_INTENTS.giveaway, '_blank');
  };

  return (
    <section id="giveaways" className="giveaways-section">
      <div className="container">
        {/* Section Head matching the site style */}
        <div className="section-head text-center">
          <span className="section-pill">
            <Gift size={14} className="text-red" />
            <span>РОЗЫГРЫШИ И ПОДАРКИ</span>
          </span>
          <h2 className="section-title">
            <span className="font-heading">РЕГУЛЯРНЫЕ </span>
            <span className="font-accent text-red">РОЗЫГРЫШИ</span>
            <span className="font-heading"> БЕСПЛАТНЫХ ТАТУ</span>
          </h2>
          <p className="section-desc centered-desc">
            Каждый месяц студия «Чёрная Борода» проводит открытые розыгрыши среди подписчиков во Владикавказе и Северной Осетии.
          </p>
        </div>

        {/* 3 Prize Cards in site's dark aesthetic */}
        <div className="giveaway-prizes-grid">
          {GIVEAWAYS_DATA.prizes.map((prize, idx) => (
            <div 
              key={idx} 
              className={`giveaway-prize-card ${idx === 0 ? 'giveaway-prize-card--grand' : ''}`}
            >
              <div className="giveaway-card-header">
                <div className={`prize-place-badge font-heading ${idx === 0 ? 'prize-place-badge--grand' : ''}`}>
                  {idx === 0 && <Trophy size={15} className="text-gold" />}
                  {idx === 1 && <Star size={15} className="text-red" />}
                  {idx === 2 && <Sparkles size={15} className="text-red" />}
                  <span>{prize.place}</span>
                </div>
                {idx === 0 && <span className="prize-top-tag font-heading">ТОП ПРИЗ</span>}
              </div>

              <h3 className="prize-reward font-heading">{prize.reward}</h3>
              <p className="prize-desc">{prize.desc}</p>

              <div className="prize-value-footer">
                <span className="prize-val-label font-heading">ЦЕННОСТЬ:</span>
                <span className={`prize-val-amount font-heading ${idx === 0 ? 'text-gold' : idx === 1 ? 'text-gold' : 'text-red'}`}>
                  {prize.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Participation instructions & action CTA */}
        <div className="giveaway-action-card">
          <div className="giveaway-steps">
            <h4 className="font-heading giveaway-steps-title">
              <span className="text-red font-heading">КАК ПРИНЯТЬ УЧАСТИЕ:</span>
            </h4>
            <div className="giveaway-steps-list">
              {GIVEAWAYS_DATA.howToParticipate.map((step, i) => (
                <div key={i} className="giveaway-step-item">
                  <span className="step-num font-heading">{i + 1}</span>
                  <span className="step-text">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="giveaway-buttons-group">
            <button
              onClick={handleParticipateWhatsApp}
              className="btn-primary giveaway-btn font-heading"
              aria-label="Узнать о розыгрыше в WhatsApp"
            >
              <MessageSquare size={17} />
              <span>УЗНАТЬ В WHATSAPP</span>
            </button>
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary giveaway-btn font-heading"
              aria-label="Открыть Instagram студии"
            >
              <InstagramIcon size={17} />
              <span>INSTAGRAM СТУДИИ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
