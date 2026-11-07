import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import Master from './components/Master';
import Studio from './components/Studio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import { MessageSquare, Phone } from 'lucide-react';
import './App.css';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA only when user scrolls past Hero section (> 380px)
      const scrolledPastHero = window.scrollY > 380;
      setShowFloatingCta(scrolledPastHero);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenWhatsApp = (serviceName = 'Консультация') => {
    const text = `Здравствуйте, хочу записаться на тату к Арсену (${serviceName}), я с веб-сайта.`;
    window.open(`https://wa.me/79888374501?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleOpenLightbox = (item, items = [], index = 0) => {
    setLightboxItem(item);
    setLightboxItems(items && items.length > 0 ? items : [item]);
    setLightboxIndex(index >= 0 ? index : 0);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  const handleLightboxPrev = () => {
    if (lightboxItems.length <= 1) return;
    const prevIdx = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    setLightboxIndex(prevIdx);
    setLightboxItem(lightboxItems[prevIdx]);
  };

  const handleLightboxNext = () => {
    if (lightboxItems.length <= 1) return;
    const nextIdx = (lightboxIndex + 1) % lightboxItems.length;
    setLightboxIndex(nextIdx);
    setLightboxItem(lightboxItems[nextIdx]);
  };

  const whatsappUrl = `https://wa.me/79888374501?text=${encodeURIComponent("Здравствуйте, хочу записаться на тату к Арсену, я с веб-сайта")}`;

  return (
    <div className="site-wrapper">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenWhatsApp('Главное меню')} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenWhatsApp} />
        <Features />
        <Services onSelectService={(service) => handleOpenWhatsApp(service)} />
        <Portfolio 
          onOpenLightbox={handleOpenLightbox} 
          onOpenBooking={() => handleOpenWhatsApp('Портфолио')} 
        />
        <Reviews />
        <Master onOpenBooking={handleOpenWhatsApp} />
        <Studio onOpenBooking={handleOpenWhatsApp} />
        <Contacts onOpenBooking={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox for zooming works */}
      <LightboxModal
        item={lightboxItem}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
        onClose={handleCloseLightbox}
      />

      {/* Sleek Floating Mobile Dock: Direct WhatsApp & Call */}
      {showFloatingCta && !lightboxItem && (
        <aside className="mobile-floating-dock" aria-label="Быстрые действия">
          <a 
            href="tel:+79888374501" 
            className="floating-dock-phone-btn font-heading"
            title="Позвонить Арсену"
            aria-label="Позвонить Арсену"
          >
            <Phone size={16} />
            <span>ПОЗВОНИТЬ</span>
          </a>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="floating-dock-book-btn font-heading"
            title="Записаться через WhatsApp"
            aria-label="Записаться через WhatsApp"
          >
            <MessageSquare size={16} />
            <span>WHATSAPP</span>
          </a>
        </aside>
      )}
    </div>
  );
}
