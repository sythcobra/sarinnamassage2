import React from 'react';
import { getServices } from '../constants';
import { PageView } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../LanguageContext';

const MenuView = ({ navigate }: { navigate: (page: PageView) => void }) => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  return (
    <div className="pt-24 pb-20 px-6 bg-cream min-h-screen animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.menu.title} subtitle={t.menu.subtitle} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row gap-8 hover:shadow-xl transition-shadow duration-300 border border-stone-100">
              {/* Info Side */}
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-primary font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                  <div className="bg-stone-50 p-2 rounded-lg border border-stone-200">
                    <span className="block text-[10px] sm:text-xs text-stone-500 uppercase">60 {t.booking.minutes}</span>
                    <span className="block font-bold text-charcoal text-sm sm:text-base">฿{service.price60}</span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-lg border border-stone-200">
                    <span className="block text-[10px] sm:text-xs text-stone-500 uppercase">90 {t.booking.minutes}</span>
                    <span className="block font-bold text-charcoal text-sm sm:text-base">฿{service.price90}</span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-lg border border-stone-200">
                    <span className="block text-[10px] sm:text-xs text-stone-500 uppercase">120 {t.booking.minutes}</span>
                    <span className="block font-bold text-charcoal text-sm sm:text-base">฿{service.price120}</span>
                  </div>
                </div>

                <Button fullWidth onClick={() => navigate('booking')}>{t.menu.bookBtn}</Button>
              </div>

              {/* Stats Side */}
              <div className="w-full md:w-48 bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col justify-center">
                <h4 className="font-serif text-charcoal font-bold mb-4 text-center">{t.menu.intensity}</h4>
                
                <ProgressBar label={t.homeMenu.relax} value={service.stats.relaxation} colorClass="bg-accent" />
                <ProgressBar label={t.homeMenu.pressure} value={service.stats.pressure} colorClass="bg-primary" />
                
                <div className="mt-4">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-2 text-center">{t.menu.bestFor}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.stats.healthFocus.map(tag => (
                      <span key={tag} className="text-[10px] bg-white border border-accent text-accent px-2 py-1 rounded-full font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuView;