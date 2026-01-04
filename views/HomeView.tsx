import React from 'react';
import { ArrowRight, Star, MapPin, Clock, Quote, Sparkles } from 'lucide-react';
import { BRAND, getServices, REVIEWS } from '../constants';
import { PageView } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProgressBar from '../components/ProgressBar';
import { useLanguage } from '../LanguageContext';

const HomeView = ({ navigate }: { navigate: (page: PageView) => void }) => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  // Select top 3 distinct services for the teaser
  const featuredServices = [services[0], services[1], services[4]]; 
  // Select 2 impactful reviews
  const featuredReviews = [REVIEWS[0], REVIEWS[1]]; 

  return (
    <div className="animate-fade-in w-full overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 md:px-6 max-w-5xl mt-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-stone-100">{t.hero.badge}</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            {t.hero.titleLine1} <br /> 
            <span className="text-accent italic">{t.hero.titleLine2}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-stone-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={() => navigate('booking')} className="w-full sm:w-auto min-w-[200px] text-lg py-4 shadow-[0_0_20px_rgba(197,160,89,0.5)] animate-pulse hover:animate-none">{t.hero.ctaReserve}</Button>
            <Button variant="outline" onClick={() => navigate('menu')} className="w-full sm:w-auto min-w-[200px] text-lg py-4 bg-transparent hover:bg-white hover:!text-primary border-white text-white transition-colors duration-300">{t.hero.ctaMenu}</Button>
          </div>
        </div>
      </div>

      {/* --- ABOUT / INTRO SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-3xl translate-x-4 translate-y-4 hidden md:block"></div>
            <img 
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop" 
              alt="Spa Interior" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[300px] md:h-[500px]"
            />
            <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
              <p className="font-serif text-xl italic text-primary">"The body heals with play, the mind heals with laughter, and the spirit heals with joy."</p>
            </div>
          </div>
          
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">{t.about.philosophy}</span>
            <h2 className="font-serif text-3xl md:text-5xl text-charcoal font-bold mb-6">{t.about.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.about.desc1}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.desc2}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                 <div className="bg-stone-100 p-2 rounded-full text-primary"><MapPin size={20}/></div>
                 <div>
                   <h4 className="font-bold text-charcoal">{t.about.location}</h4>
                   <p className="text-sm text-gray-500">Holiday Inn Express Sathorn</p>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <div className="bg-stone-100 p-2 rounded-full text-primary"><Clock size={20}/></div>
                 <div>
                   <h4 className="font-bold text-charcoal">{t.about.openDaily}</h4>
                   <p className="text-sm text-gray-500">10:00 AM - 9:00 PM</p>
                 </div>
              </div>
            </div>

            <Button variant="secondary" onClick={() => navigate('contact')}>{t.about.findUs}</Button>
          </div>
        </div>
      </section>

      {/* --- MENU TEASER SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-white relative">
         <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div className="max-w-xl">
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">{t.homeMenu.tag}</span>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold">{t.homeMenu.title}</h2>
             </div>
             <button onClick={() => navigate('menu')} className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors mt-4 md:mt-0">
               {t.homeMenu.viewFull} <ArrowRight size={20} />
             </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {featuredServices.map(service => (
               <div key={service.id} className="group bg-cream rounded-2xl p-6 border border-stone-100 hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex flex-col h-full cursor-pointer" onClick={() => navigate('booking')}>
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-stone-500 text-sm mt-2 line-clamp-2">{service.description}</p>
                  </div>
                  
                  {/* Visual Stats Teaser */}
                  <div className="bg-white p-4 rounded-xl border border-stone-100 mb-6">
                    <ProgressBar label={t.homeMenu.relax} value={service.stats.relaxation} max={10} colorClass="bg-accent" />
                    <ProgressBar label={t.homeMenu.pressure} value={service.stats.pressure} max={10} colorClass="bg-primary" />
                  </div>

                  <div className="mt-auto pt-4 border-t border-stone-200 flex justify-between items-center">
                    <div>
                      <span className="text-xs text-stone-400 uppercase tracking-wide block">{t.homeMenu.startsFrom}</span>
                      <span className="font-serif text-xl font-bold text-primary">฿{service.price60}</span>
                    </div>
                    <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm text-stone-400 group-hover:bg-primary group-hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </div>
               </div>
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Button variant="outline" fullWidth onClick={() => navigate('menu')}>{t.homeMenu.viewFull}</Button>
           </div>
         </div>
      </section>

      {/* --- REVIEWS TEASER SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionTitle title={t.reviews.title} subtitle={t.reviews.subtitle} />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
             {/* Left: Summary */}
             <div className="text-center lg:text-left">
                <div className="inline-block bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                   <span className="text-6xl font-serif font-bold text-white block mb-2">5.0</span>
                   <div className="flex gap-1 text-accent justify-center mb-4">
                     {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
                   </div>
                   <p className="text-stone-300">{t.reviews.avgRating}</p>
                </div>
                <div className="mt-8">
                  <Button variant="outline" onClick={() => navigate('reviews')} className="border-white text-white hover:bg-white hover:!text-primary transition-colors duration-300">
                    {t.reviews.readAll}
                  </Button>
                </div>
             </div>

             {/* Right: Featured Cards */}
             <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredReviews.map(review => (
                  <div key={review.id} className="bg-white text-charcoal p-8 rounded-2xl shadow-lg relative">
                     <Quote className="text-accent/20 absolute top-4 right-4 w-10 h-10 rotate-180" />
                     <div className="flex text-accent mb-4">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                     </div>
                     <p className="font-serif italic text-lg mb-6 leading-relaxed">"{review.text}"</p>
                     <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center font-bold text-primary">
                         {review.author.charAt(0)}
                       </div>
                       <div>
                         <p className="font-bold text-sm">{review.author}</p>
                         <p className="text-xs text-gray-500">{review.date}</p>
                       </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- LOCATION / CTA SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-stone-100">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Side: Map + Address Info */}
          <div className="md:w-1/2 flex flex-col">
             {/* Map Container */}
             <div className="h-[300px] relative bg-stone-200">
                 <iframe 
                   src="https://maps.google.com/maps?q=Sarinna%20Thai%20Massage%2C%20Bangkok&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                   width="100%" 
                   height="100%" 
                   style={{border:0}} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   className="absolute inset-0 w-full h-full"
                 ></iframe>
             </div>
             
             {/* Info Container (Moved from overlay to below map) */}
             <div className="bg-primary text-white p-8 text-center flex-1 flex flex-col justify-center items-center">
                  <MapPin size={32} className="text-accent mb-3" />
                  <h3 className="font-serif text-2xl font-bold mb-2">{t.location.visit}</h3>
                  <p className="text-stone-200 mb-6 text-sm max-w-xs">{BRAND.trustAnchor}</p>
                  <Button variant="outline" onClick={() => navigate('contact')} className="border-white text-white hover:bg-white hover:!text-primary transition-colors duration-300">
                    {t.location.getDir}
                  </Button>
             </div>
          </div>
          
          {/* Right Side: CTA (Existing) */}
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center md:text-left">
             <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">{t.location.ready}</h2>
             <p className="text-gray-600 mb-8 text-lg">
               {t.location.readyDesc}
             </p>
             <div className="space-y-4">
                <Button fullWidth onClick={() => navigate('booking')}>{t.nav.bookAppt}</Button>
                <p className="text-center text-sm text-stone-400">
                  {t.location.orCall} <a href={`tel:${BRAND.phoneIntl}`} className="text-primary font-bold hover:underline">{BRAND.phone}</a>
                </p>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeView;