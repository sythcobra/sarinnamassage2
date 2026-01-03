import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, ChevronRight, ChevronLeft, ShieldCheck, Star } from 'lucide-react';
import { BRAND, getServices } from '../constants';
import { BookingState } from '../types';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../LanguageContext';

const BookingView = () => {
  const { t, language } = useLanguage();
  const services = getServices(language);

  const [booking, setBooking] = useState<BookingState>({
    step: 1,
    date: '',
    time: '',
    duration: '',
    treatment: ''
  });

  const nextStep = () => setBooking(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setBooking(prev => ({ ...prev, step: prev.step - 1 }));

  // Generate next 7 days
  const getDates = () => {
    const dates = [];
    for(let i=0; i<7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const timeSlots = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
  const durations = [`60 ${t.booking.minutes}`, `90 ${t.booking.minutes}`, `120 ${t.booking.minutes}`];

  const generateWhatsAppLink = () => {
    // Keep message in English format for international reception standards, or could be translated if preferred.
    // Generally easier for staff if standardized.
    const text = `Hello, I would like to book a ${booking.treatment} for ${booking.duration} on ${booking.date} at ${booking.time}.`;
    return `https://wa.me/${BRAND.phoneIntl}?text=${encodeURIComponent(text)}`;
  };
  
  const generateLineLink = () => {
     return `https://line.me/ti/p/~${BRAND.phone}`; 
  };

  // Progress Bar Component
  const Steps = () => (
    <div className="flex justify-between mb-8 relative">
      <div className="absolute top-1/2 left-0 w-full h-1 bg-stone-100 -z-10 -translate-y-1/2 rounded-full"></div>
      <div className="absolute top-1/2 left-0 h-1 bg-accent -z-10 -translate-y-1/2 rounded-full transition-all duration-500" style={{width: `${((booking.step - 1) / 4) * 100}%`}}></div>
      {[1, 2, 3, 4, 5].map(num => (
        <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
          booking.step >= num ? 'bg-accent text-white shadow-lg scale-110' : 'bg-stone-100 text-stone-400'
        }`}>
          {num}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pt-24 pb-20 px-4 md:px-6 bg-cream min-h-screen animate-fade-in flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px] border border-stone-100">
        
        {/* LEFT SIDE: Visuals & Trust (Hidden on small mobile if needed, but good for trust) */}
        <div className="hidden lg:flex w-2/5 relative bg-primary text-white p-10 flex-col justify-between overflow-hidden">
          {/* Background Image overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight whitespace-pre-line">{t.booking.leftTitle}</h2>
            <p className="text-stone-300 text-sm">{t.booking.leftSubtitle}</p>
          </div>

          <div className="relative z-10 space-y-6 mt-10 lg:mt-0">
             <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
               <div className="flex items-center gap-2 mb-2 text-accent">
                 <ShieldCheck size={20} />
                 <span className="font-bold text-sm uppercase tracking-wider">{t.booking.benefits}</span>
               </div>
               <ul className="text-sm text-stone-200 space-y-2">
                 <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> {t.booking.benefit1}</li>
                 <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> {t.booking.benefit2}</li>
                 <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-400"/> {t.booking.benefit3}</li>
               </ul>
             </div>

             <div className="flex items-center gap-3">
               <div className="flex -space-x-2">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full bg-stone-200 border-2 border-primary overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                   </div>
                 ))}
               </div>
               <div className="text-xs text-stone-300">
                 <span className="font-bold text-white block">12 {t.booking.peopleBooked}</span>
                 {t.booking.inLast24}
               </div>
             </div>
          </div>
        </div>

        {/* RIGHT SIDE: The Wizard */}
        <div className="w-full lg:w-3/5 p-6 md:p-10 lg:p-14 flex flex-col">
          {/* Mobile Header (Only visible on mobile when left panel is hidden) */}
          <div className="lg:hidden mb-6 text-center">
             <h2 className="font-serif text-2xl font-bold text-charcoal">{t.booking.leftTitle}</h2>
             <p className="text-sm text-stone-500">{t.booking.leftSubtitle}</p>
          </div>

          <Steps />

          <div className="flex-1 flex flex-col">
            {/* STEP 1: DATE */}
            {booking.step === 1 && (
              <div className="animate-fade-in flex-1">
                <h3 className="text-2xl font-serif font-bold mb-6 text-charcoal">{t.booking.step1}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {getDates().map((date, idx) => {
                     const isSelected = booking.date === date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
                     return (
                      <button 
                        key={idx}
                        onClick={() => {
                          setBooking(prev => ({ ...prev, date: date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' }) }));
                          nextStep();
                        }}
                        className={`p-4 rounded-xl border transition-all text-center group ${isSelected ? 'border-accent bg-accent text-white shadow-md' : 'border-stone-200 hover:border-accent hover:bg-stone-50'}`}
                      >
                        <span className={`block text-xs uppercase font-bold mb-1 ${isSelected ? 'text-white/80' : 'text-stone-400'}`}>{date.toLocaleDateString(language === 'th' ? 'th-TH' : 'en-US', { weekday: 'short' })}</span>
                        <span className={`block text-2xl font-serif font-bold ${isSelected ? 'text-white' : 'text-primary'}`}>{date.getDate()}</span>
                        <span className={`block text-xs ${isSelected ? 'text-white/80' : 'text-stone-400'}`}>{date.toLocaleDateString(language === 'th' ? 'th-TH' : 'en-US', { month: 'short' })}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: TIME */}
            {booking.step === 2 && (
               <div className="animate-fade-in flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-charcoal">{t.booking.step2}</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button 
                        key={time}
                        onClick={() => {
                          setBooking(prev => ({ ...prev, time }));
                          nextStep();
                        }}
                        className="py-4 px-2 rounded-xl border border-stone-200 hover:border-accent hover:bg-primary hover:text-white transition-all font-sans font-bold text-gray-600 shadow-sm hover:shadow-md text-sm md:text-base"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
               </div>
            )}

             {/* STEP 3: DURATION */}
             {booking.step === 3 && (
               <div className="animate-fade-in flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-charcoal">{t.booking.step3}</h3>
                  <div className="space-y-4">
                    {durations.map((dur) => (
                      <button 
                        key={dur}
                        onClick={() => {
                          setBooking(prev => ({ ...prev, duration: dur }));
                          nextStep();
                        }}
                        className="w-full py-5 px-6 md:px-8 rounded-2xl border border-stone-200 hover:border-accent hover:bg-stone-50 flex justify-between items-center group transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <div className="flex items-center gap-4">
                           <Clock className="text-stone-300 group-hover:text-accent transition-colors shrink-0" />
                           <span className="font-bold text-lg text-gray-700 group-hover:text-primary">{dur}</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                           <ChevronRight size={16} />
                        </div>
                      </button>
                    ))}
                  </div>
               </div>
            )}

            {/* STEP 4: TREATMENT */}
            {booking.step === 4 && (
               <div className="animate-fade-in flex-1 flex flex-col h-full">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-charcoal">{t.booking.step4}</h3>
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3 max-h-[400px]">
                    {services.map((s) => (
                      <button 
                        key={s.id}
                        onClick={() => {
                          setBooking(prev => ({ ...prev, treatment: s.name }));
                          nextStep();
                        }}
                        className="w-full p-5 rounded-2xl border border-stone-200 hover:border-accent hover:bg-stone-50 text-left transition-all group shadow-sm hover:shadow-md bg-white"
                      >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                           <span className="font-bold text-lg text-primary group-hover:text-accent transition-colors">{s.name}</span>
                           <span className="text-sm font-bold text-stone-400 bg-stone-100 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{t.booking.from} ฿{s.price60}</span>
                        </div>
                        <span className="text-sm text-stone-500 leading-relaxed block">{s.description}</span>
                      </button>
                    ))}
                  </div>
               </div>
            )}

            {/* STEP 5: CONFIRM */}
            {booking.step === 5 && (
               <div className="animate-fade-in flex-1 flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce-slow">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-charcoal mb-2">{t.booking.step5}</h3>
                  <p className="text-gray-500 mb-8">{t.booking.reviewDetails}</p>
                  
                  <div className="w-full bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                    <div className="space-y-3 text-sm md:text-base">
                      <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-500">{t.booking.service}</span>
                        <span className="font-bold text-primary text-right">{booking.treatment}</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-200 pb-2">
                        <span className="text-stone-500">{t.booking.dateTime}</span>
                        <span className="font-bold text-primary text-right">{booking.date} at {booking.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">{t.booking.duration}</span>
                        <span className="font-bold text-primary text-right">{booking.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full space-y-3">
                    <a href={generateWhatsAppLink()} target="_blank" rel="noreferrer" className="block w-full">
                      <Button fullWidth variant="whatsapp" className="py-4 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        {t.booking.confirmWa}
                      </Button>
                    </a>
                    <a href={generateLineLink()} target="_blank" rel="noreferrer" className="block w-full">
                      <Button fullWidth variant="line" className="py-4 text-lg">
                         {t.booking.confirmLine}
                      </Button>
                    </a>
                  </div>
               </div>
            )}
            
            {/* Back Button (Only for steps 2-4) */}
            {booking.step > 1 && booking.step < 5 && (
              <div className="mt-6 pt-4 border-t border-stone-100">
                <button 
                  onClick={prevStep} 
                  className="flex items-center gap-2 text-stone-400 hover:text-charcoal font-bold text-sm transition-colors"
                >
                  <ChevronLeft size={16} /> {t.booking.prevStep}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingView;