import React from 'react';
import { Gift, Trophy, Star, ArrowRight, MessageSquare } from 'lucide-react';
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
        <div className="section-head text-center">
          <span className="section-pill">{GIVEAWAYS_DATA.badge}</span>
          <h2 className="section-title">
            <span className="font-heading">{GIVEAWAYS_DATA.title.toUpperCase()}</span>
          </h2>
          <p className="section-desc centered-desc">
            {GIVEAWAYS_DATA.subtitle}. Участвовать может любой житель Владикавказа и Республики Северная Осетия!
          </p>
        </div>

        {/* Prizes Cards */}
        <div className="giveaway-prizes-grid">
          {GIVEAWAYS_DATA.prizes.map((prize, idx) => (
            <div key={idx} className={`giveaway-prize-card ${idx === 0 ? 'giveaway-prize-card--grand' : ''}`}>
              <div className="prize-place-badge font-heading">
                {idx === 0 ? <Trophy size={16} className="text-gold" /> : <Star size={16} />}
                <span>{prize.place}</span>
              </div>
              <h3 className="prize-reward font-heading">{prize.reward}</h3>
              <p className="prize-desc">{prize.desc}</p>
              <div className="prize-value-tag font-heading">{prize.value}</div>
            </div>
          ))}
        </div>

        {/* Rules & Participation Box */}
        <div className="giveaway-action-card">
          <div className="giveaway-steps">
            <h4 className="font-heading giveaway-steps-title">КАК ПРИНЯТЬ УЧАСТИЕ:</h4>
            <div className="giveaway-steps-list">
              {GIVEAWAYS_DATA.howToParticipate.map((step, i) => (
                <div key={i} className="giveaway-step-item">
                  <span className="step-num">{i + 1}</span>
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
              <MessageSquare size={18} />
              <span>УЗНАТЬ В WHATSAPP</span>
            </button>
            <a
              href={EXTERNAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary giveaway-btn font-heading"
              aria-label="Открыть Instagram студии"
            >
              <InstagramIcon size={18} />
              <span>INSTAGRAM СТУДИИ</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
