import React from 'react';
import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import { BRAND } from '../constants';
import SectionTitle from '../components/SectionTitle';

const ContactView = () => {
  return (
    <div className="pt-24 pb-20 px-6 bg-cream min-h-screen animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Contact Us" subtitle="Find Your Way" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Map */}
          <div className="h-64 md:h-auto bg-stone-200 relative">
             <iframe 
               src="https://maps.google.com/maps?q=Sarinna%20Thai%20Massage%2C%20Bangkok&t=&z=16&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
               className="absolute inset-0"
             ></iframe>
          </div>
          
          {/* Info */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
             <h3 className="font-serif text-2xl font-bold mb-6 text-primary">Visit Us</h3>
             
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <MapPin className="text-accent shrink-0 mt-1" />
                   <div>
                     <p className="font-bold text-charcoal">Sarinna Thai Massage</p>
                     <p className="text-gray-600">{BRAND.address}</p>
                     <p className="text-accent text-sm mt-2 font-semibold bg-stone-50 inline-block px-2 py-1 rounded">
                       {BRAND.trustAnchor}
                     </p>
                   </div>
                </div>

                <div className="flex items-center gap-4">
                   <Phone className="text-accent shrink-0" />
                   <a href={`tel:${BRAND.phoneIntl}`} className="text-gray-600 hover:text-primary transition-colors">
                     {BRAND.phone}
                   </a>
                </div>

                <div className="flex gap-4 pt-4 border-t border-stone-100">
                  <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="bg-stone-100 p-3 rounded-full hover:bg-accent hover:text-white transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href={BRAND.facebook} target="_blank" rel="noreferrer" className="bg-stone-100 p-3 rounded-full hover:bg-accent hover:text-white transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl mt-4">
                  <p className="text-primary font-bold mb-1">Opening Hours</p>
                  <p className="text-gray-600">Daily: 10:00 AM - 9:00 PM</p>
                  <p className="text-sm text-stone-500 mt-2">Walk-ins Welcome, Reservations Recommended.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;