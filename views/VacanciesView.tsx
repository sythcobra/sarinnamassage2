import React from 'react';
import { Briefcase, CheckCircle, Users, Sparkles } from 'lucide-react';
import { BRAND } from '../constants';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const VacanciesView = () => {
  const whatsappLink = `https://wa.me/${BRAND.phoneIntl}?text=Hello,%20I%20am%20interested%20in%20applying%20for%20the%20Receptionist%20position.`;

  return (
    <div className="pt-24 pb-20 px-6 bg-cream min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Join Our Team" subtitle="Careers at Sarinna" />

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100">
          <div className="bg-primary p-8 md:p-12 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/flower-trail.png')]"></div>
             <div className="relative z-10">
               <Briefcase className="w-12 h-12 mx-auto mb-4 text-accent" />
               <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">We Are Hiring</h2>
               <p className="text-stone-200 text-lg max-w-2xl mx-auto">
                 Become a part of Bangkok's most trusted luxury massage team. We offer a supportive environment, competitive pay, and a safe location within the Holiday Inn Express Sathorn.
               </p>
             </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 border-b border-stone-100 pb-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal flex items-center gap-2">
                    Front Desk Receptionist
                    <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full uppercase tracking-wider font-sans font-bold">Urgent</span>
                  </h3>
                  <p className="text-gray-500 mt-1">Full Time • Holiday Inn Express Sathorn Location</p>
                </div>
                <div className="mt-4 md:mt-0">
                   <span className="font-bold text-primary text-lg">Competitive Salary + Commission</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2"><Sparkles size={18} className="text-accent"/> Responsibilities</h4>
                  <ul className="space-y-3">
                    {['Warmly welcome guests and manage walk-ins.', 'Handle bookings via Phone, WhatsApp, and LINE.', 'Coordinate schedule for therapists.', 'Process payments and manage daily cash flow.', 'Maintain a clean and luxury atmosphere.'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-4 flex items-center gap-2"><Users size={18} className="text-accent"/> Requirements</h4>
                  <ul className="space-y-3">
                    {['Friendly personality with a service mind.', 'Good command of English (Speaking & Writing).', 'Punctual, honest, and organized.', 'Experience in spa/hotel is a plus.', 'Thai Nationality.'].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckCircle size={16} className="text-green-600 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 text-center">
                <p className="text-charcoal font-bold mb-4">Interested in this position?</p>
                <p className="text-gray-500 text-sm mb-6">Please send your CV or introduce yourself via WhatsApp.</p>
                <div className="flex justify-center">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <Button variant="whatsapp">Apply via WhatsApp</Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-stone-100">
              <p className="text-stone-400 text-sm">Are you a Therapist? We are always looking for talent. Contact us to inquire.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacanciesView;