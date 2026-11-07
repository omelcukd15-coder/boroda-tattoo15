import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, MessageSquare, MapPin, Sparkles, Gift } from 'lucide-react';
import { STUDIO_INFO, WHATSAPP_INTENTS } from '../constants';

export default function Navbar({ onOpenBooking }) {
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
    { name: 'Главная', href: '#hero' },
    { name: 'Услуги и Цены', href: '#services' },
    { name: 'Портфолио', href: '#portfolio' },
    { name: 'Тату-модели', href: '#models', badge: '0 ₽' },
    { name: 'Розыгрыши', href: '#giveaways' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Мастер', href: '#master' },
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
                src="/assets/tattoo/real/logo_altay.jpg" 
                alt="Чёрная Борода Тату Салон" 
                className="logo-img" 
                width="42" 
                height="42" 
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
            <div className="logo-text">
              <span className="logo-title font-heading">ЧЁРНАЯ БОРОДА</span>
              <span className="logo-subtitle">ТАТУ - САЛОН • ВЛАДИКАВКАЗ</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${link.badge ? 'nav-link--badge' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                <span>{link.name}</span>
                {link.badge && <span className="nav-link-pill font-heading">{link.badge}</span>}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="header-actions">
            <a 
              href={`tel:${STUDIO_INFO.phoneRaw}`} 
              className="header-phone font-heading" 
              title="Позвонить в салон"
            >
              <Phone size={15} className="text-gold" />
              <span>{STUDIO_INFO.phone}</span>
            </a>

            <a
              href={WHATSAPP_INTENTS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary header-booking-btn font-heading"
              aria-label="Записаться через WhatsApp"
            >
              <MessageSquare size={16} />
              <span>ЗАПИСАТЬСЯ</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-nav-header">
              <div className="brand-logo">
                <img 
                  src="/assets/tattoo/real/logo_altay.jpg" 
                  alt="Чёрная Борода" 
                  className="logo-img" 
                  width="36" 
                  height="36" 
                  style={{ borderRadius: '50%', objectFit: 'cover' }}
                />
                <div className="logo-text">
                  <span className="logo-title font-heading">ЧЁРНАЯ БОРОДА</span>
                  <span className="logo-subtitle">ВЛАДИКАВКАЗ</span>
                </div>
              </div>
              <button 
                className="modal-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Закрыть меню"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-nav-link font-heading"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  <span>{link.name}</span>
                  {link.badge && <span className="nav-link-pill font-heading">{link.badge}</span>}
                </a>
              ))}
            </nav>

            <div className="mobile-nav-footer">
              <div className="mobile-schedule-card">
                <MapPin size={16} className="text-red" />
                <div>
                  <strong>{STUDIO_INFO.address}</strong>
                  <p>{STUDIO_INFO.schedule}</p>
                </div>
              </div>

              <a
                href={WHATSAPP_INTENTS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mobile-nav-btn font-heading"
              >
                <MessageSquare size={18} />
                <span>НАПИСАТЬ В WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
