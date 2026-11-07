import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ModelProgram from './components/ModelProgram';
import GiveawaysSection from './components/GiveawaysSection';
import Reviews from './components/Reviews';
import Master from './components/Master';
import Studio from './components/Studio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';
import { MessageSquare, Phone } from 'lucide-react';
import { STUDIO_INFO, WHATSAPP_INTENTS } from './constants';
import './App.css';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxItems, setLightboxItems] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating mobile CTA when user scrolls past Hero
      setShowFloatingCta(window.scrollY > 380);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenWhatsApp = (serviceName = 'Консультация') => {
    const text = `Здравствуйте! Хочу записаться на тату к Арсену в салон «Чёрная Борода» (${serviceName}), я с официального сайта.`;
    window.open(`https://wa.me/${STUDIO_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleScrollTo = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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

  return (
    <div className="site-wrapper">
      {/* Header */}
      <Navbar onOpenBooking={() => handleOpenWhatsApp('Главное меню')} />

      {/* Main Content */}
      <main id="main-content">
        <Hero onOpenBooking={handleOpenWhatsApp} />
        

        {/* Services & Prices */}
        <Services onSelectService={(service) => handleOpenWhatsApp(service)} />

        {/* Real Yandex Maps Portfolio */}
        <Portfolio 
          onOpenLightbox={handleOpenLightbox} 
          onOpenBooking={() => handleOpenWhatsApp('Портфолио')} 
        />

        {/* Tattoo Model Program: Earn or get 100% free tattoo */}
        <ModelProgram />

        {/* Giveaways & Promotions */}
        <GiveawaysSection />

        {/* Reviews from Yandex */}
        <Reviews />

        {/* Master Arsen */}
        <Master onOpenBooking={handleOpenWhatsApp} />

        {/* Studio & Sterility */}
        <Studio onOpenBooking={handleOpenWhatsApp} />

        {/* Location & Contacts */}
        <Contacts onOpenBooking={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
        onClose={handleCloseLightbox}
      />

      {/* Mobile Floating Action Dock */}
      {showFloatingCta && !lightboxItem && (
        <aside className="mobile-floating-dock" aria-label="Быстрые действия">
          <a 
            href={`tel:${STUDIO_INFO.phoneRaw}`} 
            className="floating-dock-phone-btn font-heading"
            title="Позвонить в салон"
            aria-label="Позвонить в салон"
          >
            <Phone size={16} />
            <span>ПОЗВОНИТЬ</span>
          </a>
          <a 
            href={WHATSAPP_INTENTS.general} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="floating-dock-book-btn font-heading"
            title="Записаться через WhatsApp"
            aria-label="Записаться через WhatsApp"
          >
            <MessageSquare size={16} />
            <span>WHATSAPP (-20%)</span>
          </a>
        </aside>
      )}
    </div>
  );
}
