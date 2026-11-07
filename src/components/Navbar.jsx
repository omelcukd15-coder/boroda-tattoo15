import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin } from 'lucide-react';
import { STUDIO_INFO, WHATSAPP_INTENTS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Тату-модели', href: '#models' },
    { name: 'Розыгрыши', href: '#giveaways' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Контакты', href: '#contacts' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container header-container">
          {/* Brand Logo */}
          <a href="#hero" className="brand-logo" onClick={(e) => handleLinkClick(e, '#hero')}>
            <div className="logo-icon-wrapper">
              <img 
                src="/assets/tattoo/main-logo.png" 
                alt="Чёрная Борода" 
                className="logo-img" 
                width="42" 
                height="42" 
              />
            </div>
            <div className="logo-text">
              <span className="logo-title font-heading">ЧЁРНАЯ БОРОДА</span>
              <span className="logo-subtitle">ТАТУ - САЛОН</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Right Actions */}
          <div className="header-actions">
            <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="phone-btn" title="Позвонить в салон">
              <Phone size={15} />
              <span className="phone-text">{STUDIO_INFO.phone}</span>
            </a>

            {/* Mobile burger button */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? 'mobile-toggle--active' : ''}`}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'mobile-backdrop--active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Fullscreen Mobile Drawer */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'mobile-drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
      >
        <div className="mobile-drawer__top">
          <span className="mobile-drawer__tag font-heading">НАВИГАЦИЯ</span>
          <button 
            className="mobile-drawer__close" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Закрыть меню"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer__nav">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-drawer__link font-heading"
              style={{ transitionDelay: `${idx * 0.04}s` }}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              <span className="nav-number">0{idx + 1}</span>
              <span className="nav-text">{link.name}</span>
            </a>
          ))}
        </nav>

        <div className="mobile-drawer__footer">
          <div className="mobile-drawer__contacts">
            <a href={`tel:${STUDIO_INFO.phoneRaw}`} className="mobile-drawer__phone">
              <Phone size={18} className="text-red" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <div className="mobile-drawer__address">
              <MapPin size={16} className="text-red" />
              <span>{STUDIO_INFO.address}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '16px' }}>
            <a
              href={WHATSAPP_INTENTS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <MessageSquare size={16} />
              <span>Записаться в WhatsApp</span>
            </a>

            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="btn-secondary"
              style={{ width: '100%', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Phone size={15} />
              <span>Позвонить Арсену</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
