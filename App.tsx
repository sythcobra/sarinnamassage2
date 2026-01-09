import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Instagram, Facebook, ArrowRight, CalendarCheck, Globe } from 'lucide-react';
import { BRAND } from './constants';
import { PageView } from './types';
import Button from './components/Button';
import { LanguageProvider, useLanguage } from './LanguageContext';

// Import Views
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import ReviewsView from './views/ReviewsView';
import ContactView from './views/ContactView';
import BookingView from './views/BookingView';
import VacanciesView from './views/VacanciesView';
import PolicyView from './views/PolicyView';

const MainApp = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);

    // Google Analytics Virtual Page View
    // Cast window to any to avoid TypeScript errors with gtag
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-3BVNBS9XD7', {
        page_path: `/${currentPage === 'home' ? '' : currentPage}`,
        page_title: `Sarinna Thai Massage - ${currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}`
      });
    }
  }, [currentPage]);

  const navLinks: { label: string; value: PageView }[] = [
    { label: t.nav.home, value: 'home' },
    { label: t.nav.menu, value: 'menu' },
    { label: t.nav.reviews, value: 'reviews' },
    { label: t.nav.contact, value: 'contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomeView navigate={setCurrentPage} />;
      case 'menu': return <MenuView navigate={setCurrentPage} />;
      case 'reviews': return <ReviewsView />;
      case 'contact': return <ContactView />;
      case 'booking': return <BookingView />;
      case 'vacancies': return <VacanciesView />;
      case 'policy': return <PolicyView />;
      default: return <HomeView navigate={setCurrentPage} />;
    }
  };

  // Determine navigation appearance
  // Use dark text if: Menu is CLOSED AND (Scrolled OR Not on Home page)
  const useDarkNav = !isMobileMenuOpen && (scrolled || currentPage !== 'home');

  const navContainerClass = isMobileMenuOpen 
    ? 'bg-primary' // Solid background when menu is open to match menu
    : scrolled 
      ? 'glass py-3 shadow-md' 
      : 'bg-transparent py-4 md:py-6';

  const logoMainColor = isMobileMenuOpen || !useDarkNav ? 'text-white' : 'text-primary';
  const logoSubColor = isMobileMenuOpen || !useDarkNav ? 'text-stone-200' : 'text-accent';
  const navItemColor = isMobileMenuOpen || !useDarkNav ? 'text-white/90' : 'text-charcoal';
  const navItemActiveColor = 'text-accent';
  const burgerColor = isMobileMenuOpen || !useDarkNav ? 'text-white' : 'text-charcoal';
  const langBorderColor = isMobileMenuOpen || !useDarkNav ? 'border-white/30 text-white' : 'border-charcoal/20 text-charcoal';

  return (
    <div className={`font-sans text-charcoal antialiased selection:bg-accent selection:text-white ${language === 'th' ? 'font-noto' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navContainerClass}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div 
            className="cursor-pointer flex flex-col z-50" 
            onClick={() => {
              setCurrentPage('home');
              setIsMobileMenuOpen(false);
            }}
          >
             <span className={`font-serif text-xl md:text-2xl font-bold tracking-wide transition-colors ${logoMainColor}`}>
               SARINNA
             </span>
             <span className={`text-[0.5rem] md:text-[0.6rem] uppercase tracking-[0.3em] font-bold ${logoSubColor}`}>
               Thai Massage
             </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => (
              <button 
                key={link.value}
                onClick={() => setCurrentPage(link.value)}
                className={`text-sm font-bold uppercase tracking-widest hover:text-accent transition-colors ${
                  currentPage === link.value ? navItemActiveColor : navItemColor
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full border transition-all ${
                useDarkNav
                  ? 'border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white' 
                  : 'border-white/30 text-white hover:bg-white hover:text-primary'
              }`}
            >
              <Globe size={14} />
              <span>{language === 'en' ? 'EN' : 'TH'}</span>
            </button>

            <Button onClick={() => setCurrentPage('booking')} className="px-6">{t.nav.bookNow}</Button>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-4 z-50">
             <button 
              onClick={toggleLanguage}
              className={`text-xs font-bold px-2 py-1 rounded border transition-colors ${langBorderColor}`}
            >
              {language === 'en' ? 'TH' : 'EN'}
            </button>

            <button 
              className={`transition-colors ${burgerColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-primary z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(link => (
            <button 
              key={link.value}
              onClick={() => {
                setCurrentPage(link.value);
                setIsMobileMenuOpen(false);
              }}
              className="text-2xl font-serif text-white hover:text-accent p-2 animate-fade-in"
            >
              {link.label}
            </button>
          ))}
          <Button onClick={() => {
            setCurrentPage('booking');
            setIsMobileMenuOpen(false);
          }} className="px-12 mt-4 text-xl shadow-lg shadow-black/20">{t.nav.bookNow}</Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* FLOATING BOOKING BUTTON (FAB) */}
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${scrolled && !isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <button
          onClick={() => setCurrentPage('booking')}
          className="group flex items-center gap-3 bg-accent hover:bg-[#b08d4b] text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <CalendarCheck className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
          <span className="font-bold text-base md:text-lg tracking-wide hidden sm:inline">{t.nav.bookAppt}</span>
          <span className="font-bold text-base tracking-wide sm:hidden">{t.nav.bookNow}</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h4 className="font-serif text-2xl mb-6 text-accent cursor-pointer" onClick={() => setCurrentPage('home')}>Sarinna Thai Massage</h4>
            <p className="text-stone-200/80 mb-6 leading-relaxed max-w-xs">
              {language === 'th' ? 'สถานที่พักผ่อนที่อบอุ่นและเงียบสงบ ตั้งอยู่อย่างปลอดภัยภายในโรงแรมฮอลิเดย์ อินน์ เอ็กซ์เพรส แอนด์ สวีท กรุงเทพฯ เซ็นทรัล เปียร์' : 'A cozy haven of relaxation located securely within the Holiday Inn Express & Suites Bangkok Central Pier by IHG.'}
            </p>
            <div className="flex gap-4">
               <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="hover:text-accent text-stone-200 p-2 -ml-2"><Instagram /></a>
               <a href={BRAND.facebook} target="_blank" rel="noreferrer" className="hover:text-accent text-stone-200 p-2"><Facebook /></a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
             <h5 className="font-bold text-accent uppercase tracking-widest mb-6 text-sm">{t.footer.quickLinks}</h5>
             <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.value}>
                    <button 
                      onClick={() => setCurrentPage(link.value)}
                      className="text-stone-200 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button 
                    onClick={() => setCurrentPage('booking')}
                    className="text-stone-200 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {t.nav.bookNow}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setCurrentPage('vacancies')}
                    className="text-stone-200 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 py-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    {t.footer.careers}
                  </button>
                </li>
             </ul>
          </div>

          {/* Column 3: Location */}
          <div>
            <h5 className="font-bold text-accent uppercase tracking-widest mb-6 text-sm">{t.footer.location}</h5>
            <p className="text-stone-200 mb-2 font-bold">Holiday Inn Express & Suites Bangkok Central Pier by IHG</p>
            <p className="text-stone-200/80 leading-relaxed mb-4">{BRAND.address}</p>
            <a href={BRAND.googleMapsUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline text-sm flex items-center gap-1 py-2 inline-block">
              {t.location.getDir} <ArrowRight size={14}/>
            </a>
          </div>

          {/* Column 4: Contact */}
          <div>
             <h5 className="font-bold text-accent uppercase tracking-widest mb-6 text-sm">{t.footer.contact}</h5>
             <div className="text-stone-200 mb-4 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                   <Phone size={18} className="text-accent shrink-0" /> 
                   <a href={`tel:${BRAND.phoneIntl}`} className="hover:text-white transition-colors">{BRAND.phone} (Primary)</a>
                </div>
                <div className="flex items-center gap-3">
                   <Phone size={18} className="text-transparent shrink-0" /> 
                   <a href={`tel:${BRAND.phoneSecondaryIntl}`} className="hover:text-white transition-colors">{BRAND.phoneSecondary} (Secondary)</a>
                </div>
             </div>
             
             <div className="mt-8 pt-6 border-t border-white/10">
               <p className="text-stone-200/60 text-sm mb-2">
                 &copy; {new Date().getFullYear()} Sarinna Thai Massage. {t.footer.rights}
               </p>
               <button 
                  onClick={() => setCurrentPage('policy')}
                  className="text-xs text-stone-400 hover:text-accent transition-colors underline"
                >
                  {t.footer.privacy}
                </button>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Wrap App with LanguageProvider
const App = () => (
  <LanguageProvider>
    <MainApp />
  </LanguageProvider>
);

export default App;