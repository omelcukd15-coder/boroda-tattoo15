import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Calendar, Send, ExternalLink, CheckCircle, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [activeTab, setActiveTab] = useState('whatsapp'); // 'whatsapp' | 'dikidi' | 'instagram'
  const [selectedService, setSelectedService] = useState(initialService || 'Мини-тату');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSentSuccess(false);
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const services = [
    'Мини-тату (от 1 500 ₽)',
    'Надписи и каллиграфия (от 2 500 ₽)',
    'Авторские рисунки (от 3 000 ₽)',
    'Индивидуальный проект (от 5 000 ₽)',
    'Рукав / Масштабный проект',
    'Консультация с мастером (Бесплатно)',
  ];

  // Exact required pre-filled WhatsApp message
  const handleWhatsAppQuickClick = () => {
    const baseText = "Здравствуйте, хочу записаться на тату, я из веб-сайта.";
    const url = `https://wa.me/79888374501?text=${encodeURIComponent(baseText)}`;
    window.open(url, '_blank');
  };

  const handleWhatsAppFormSubmit = (e) => {
    e.preventDefault();
    let text = "Здравствуйте, хочу записаться на тату, я из веб-сайта.";
    if (selectedService) text += `\n- Услуга: ${selectedService}`;
    if (name) text += `\n- Имя: ${name}`;
    if (phone) text += `\n- Телефон: ${phone}`;
    if (comment) text += `\n- Пожелания: ${comment}`;

    const url = `https://wa.me/79888374501?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSentSuccess(true);
  };

  const handleDikidiClick = () => {
    window.open('https://dikidi.net', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/taty_vld_arsen', '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Запись в тату-салон">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Закрыть модальное окно">
          <X size={20} />
        </button>

        {sentSuccess ? (
          <div className="modal-success">
            <CheckCircle size={48} className="text-red" />
            <h3 className="modal-title font-heading">ДИАЛОГ СФОРМИРОВАН</h3>
            <p className="modal-desc">
              Мы открыли WhatsApp с вашими данными. Арсен ответит в ближайшее время, сориентирует по стоимости и забронирует время.
            </p>
            <button className="btn-primary" onClick={onClose} style={{ marginTop: '20px', width: '100%' }}>
              Вернуться на сайт
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h3 className="modal-title font-heading">
                ЗАПИСЬ В <span className="text-red">«ЧЁРНУЮ БОРОДУ»</span>
              </h3>
              <p className="modal-desc">
                Выберите удобный способ связи с мастером Арсеном для консультации и бронирования.
              </p>
            </div>

            {/* Channels Switcher Tabs */}
            <div className="modal-channel-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'whatsapp'}
                className={`channel-tab-btn ${activeTab === 'whatsapp' ? 'channel-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('whatsapp')}
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'dikidi'}
                className={`channel-tab-btn ${activeTab === 'dikidi' ? 'channel-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('dikidi')}
              >
                <Calendar size={16} />
                <span>DIKIDI онлайн</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'instagram'}
                className={`channel-tab-btn ${activeTab === 'instagram' ? 'channel-tab-btn--active' : ''}`}
                onClick={() => setActiveTab('instagram')}
              >
                <InstagramIcon size={16} />
                <span>Instagram</span>
              </button>
            </div>

            {/* Tab 1: WhatsApp Booking Form + Quick Direct Button */}
            {activeTab === 'whatsapp' && (
              <div className="modal-tab-content">
                <div className="modal-quick-action-box">
                  <div className="quick-action-info">
                    <span className="quick-title font-heading">БЫСТРЫЙ ДИАЛОГ</span>
                    <span className="quick-sub">Открыть чат сразу с готовым сообщением</span>
                  </div>
                  <button 
                    type="button"
                    onClick={handleWhatsAppQuickClick} 
                    className="btn-whatsapp-direct"
                    title="Открыть WhatsApp сразу"
                  >
                    <span>Написать сразу</span>
                    <ExternalLink size={14} />
                  </button>
                </div>

                <div className="booking-or-divider">
                  <span>или укажите данные для точного расчёта</span>
                </div>

                <form onSubmit={handleWhatsAppFormSubmit} className="booking-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-service">Направление / услуга:</label>
                    <select
                      id="booking-service"
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="form-input form-select"
                    >
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-name">Ваше имя:</label>
                    <input
                      id="booking-name"
                      type="text"
                      placeholder="Как вас зовут?"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-input"
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-phone">Номер телефона:</label>
                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-input"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="booking-notes">Пожелания или идея эскиза:</label>
                    <textarea
                      id="booking-notes"
                      rows="2"
                      placeholder="Размер, место нанесения, свои мысли..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="form-input form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    <MessageCircle size={18} />
                    <span>Отправить заявку в WhatsApp</span>
                  </button>
                </form>
              </div>
            )}

            {/* Tab 2: DIKIDI Online Booking */}
            {activeTab === 'dikidi' && (
              <div className="modal-tab-content modal-dikidi-screen">
                <div className="dikidi-hero-badge">
                  <Calendar size={36} className="text-red" />
                </div>
                <h4 className="dikidi-screen-title font-heading">
                  ОНЛАЙН-БРОНИРОВАНИЕ В DIKIDI
                </h4>
                <p className="dikidi-screen-desc">
                  В сервисе DIKIDI вы можете в реальном времени посмотреть доступное расписание Арсена, выбрать дату и зарезервировать удобное время для визита в салон на проспекте Мира, 53.
                </p>
                <div className="dikidi-features-list">
                  <div className="dikidi-feature">✓ Актуальный график мастера</div>
                  <div className="dikidi-feature">✓ Выбор услуг и длительности</div>
                  <div className="dikidi-feature">✓ Мгновенное подтверждение записи</div>
                </div>

                <button 
                  type="button" 
                  onClick={handleDikidiClick} 
                  className="btn-primary btn-primary--lg" 
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  <span>Перейти к онлайн-записи DIKIDI</span>
                  <ExternalLink size={17} />
                </button>
              </div>
            )}

            {/* Tab 3: Instagram Direct */}
            {activeTab === 'instagram' && (
              <div className="modal-tab-content modal-instagram-screen">
                <div className="instagram-hero-badge">
                  <InstagramIcon size={36} className="text-red" />
                </div>
                <h4 className="instagram-screen-title font-heading">
                  INSTAGRAM МАСТЕРА: @taty_vld_arsen
                </h4>
                <p className="instagram-screen-desc">
                  Отправьте фото понравившегося эскиза, фото татуировки или опишите свою задумку прямо в Direct. Арсен лично отвечает на сообщения и помогает определиться со стилем.
                </p>
                <div className="instagram-handle-box">
                  <span className="handle-label">Официальный аккаунт:</span>
                  <strong className="handle-tag text-red font-heading">@taty_vld_arsen</strong>
                </div>

                <button 
                  type="button" 
                  onClick={handleInstagramClick} 
                  className="btn-primary btn-primary--lg" 
                  style={{ width: '100%', marginTop: '20px' }}
                >
                  <span>Открыть профиль в Instagram</span>
                  <ExternalLink size={17} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
