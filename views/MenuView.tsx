import React from 'react';
import { Plus } from 'lucide-react';
import { getServices } from '../constants';
import { PageView } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../LanguageContext';

interface PricingBlockProps {
  minutes: string;
  price: number;
  label: string;
}

const PricingBlock = ({ minutes, price, label }: PricingBlockProps) => (
  <div className="bg-stone-50 p-2 rounded-lg border border-stone-200 min-w-[70px] sm:min-w-[80px] flex-1">
    <span className="block text-[10px] sm:text-xs text-stone-500 uppercase">{minutes} {label}</span>
    <span className="block font-bold text-charcoal text-sm sm:text-base">฿{price}</span>
  </div>
);

const MenuView = ({ navigate }: { navigate: (page: PageView) => void }) => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  const mainServices = services.filter(s => s.price60);
  const addonServices = services.filter(s => !s.price60 && s.price30);

  return (
    <div className="pt-24 pb-20 px-6 bg-cream min-h-screen animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t.menu.title} subtitle={t.menu.subtitle} />
        
        {/* Main Services Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col md:flex-row gap-8 hover:shadow-xl transition-shadow duration-300 border border-stone-100">
                {/* Info Side */}
                <div className="flex-1 flex flex-col">
                  <h3 className="font-serif text-2xl text-primary font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 text-center">
                    {service.price60 && <PricingBlock minutes="60" price={service.price60} label={t.booking.minutes} />}
                    {service.price90 && <PricingBlock minutes="90" price={service.price90} label={t.booking.minutes} />}
                  </div>

                  <div className="mt-auto">
                      <Button fullWidth onClick={() => navigate('booking')}>{t.menu.bookBtn}</Button>
                  </div>
                </div>

                {/* Stats Side */}
                <div className="w-full md:w-48 bg-stone-50 rounded-xl p-4 border border-stone-200 flex flex-col justify-center shrink-0">
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

        {/* Add-on Services Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-charcoal">Add-on Enhancements</h3>
            <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/20">
               Only available with main treatment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addonServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:border-accent transition-colors flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-primary text-lg">{service.name}</h4>
                  <div className="bg-stone-50 px-2 py-1 rounded text-xs font-bold text-charcoal whitespace-nowrap">
                    30 min
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-grow">{service.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                  <span className="font-bold text-lg text-accent">฿{service.price30}</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-stone-400 uppercase">
                    <Plus size={14} /> Add-on
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MenuView;