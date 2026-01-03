import React from 'react';
import { ShieldAlert, Clock, Info, HeartPulse, FileText } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const PolicyView = () => {
  return (
    <div className="pt-24 pb-20 px-6 bg-cream min-h-screen animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Policies & House Rules" subtitle="Terms of Service" />

        <div className="space-y-8">
          
          {/* Section 1: House Rules */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
              <ShieldAlert className="text-accent" size={24} />
              <h3 className="font-serif text-2xl font-bold text-charcoal">House Rules & Etiquette</h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-primary block mb-1">Strictly Professional Service</strong>
                Sarinna Thai Massage provides strictly therapeutic massage services. Any illicit behavior or sexual harassment towards our therapists will not be tolerated. The session will be terminated immediately with full payment required, and local authorities/hotel security may be notified.
              </p>
              <p>
                <strong className="text-primary block mb-1">Quiet Environment</strong>
                To maintain a relaxing atmosphere for all guests, please silence your mobile devices and speak softly while inside the spa premises.
              </p>
            </div>
          </div>

          {/* Section 2: Booking & Cancellation */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
              <Clock className="text-accent" size={24} />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Booking & Cancellation</h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-primary block mb-1">Arrival Time</strong>
                Please arrive 10 minutes prior to your scheduled appointment to allow time for consultation and changing.
              </p>
              <p>
                <strong className="text-primary block mb-1">Late Arrivals</strong>
                If you arrive late, your session may be shortened to ensure the next guest is not delayed. Full payment for the scheduled duration will still apply.
              </p>
              <p>
                <strong className="text-primary block mb-1">Cancellation Policy</strong>
                We respectfully request at least 2 hours notice for cancellations or rescheduling. This allows us to offer the appointment slot to other guests.
              </p>
            </div>
          </div>

          {/* Section 3: Health */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
              <HeartPulse className="text-accent" size={24} />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Health & Medical Disclaimer</h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Please inform us of any health conditions, allergies, injuries, or pregnancy before your session begins. 
              </p>
              <p>
                Our services are for relaxation and therapeutic purposes only. They do not substitute medical advice, diagnosis, or treatment. If you have specific medical concerns, please consult your physician before receiving a massage.
              </p>
            </div>
          </div>

          {/* Section 4: Privacy */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-6 border-b border-stone-100 pb-4">
              <FileText className="text-accent" size={24} />
              <h3 className="font-serif text-2xl font-bold text-charcoal">Privacy Policy</h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                <strong>Data Collection:</strong> We collect basic personal information (Name, Phone Number) solely for the purpose of managing your reservation.
              </p>
              <p>
                <strong>Data Usage:</strong> We do not sell or share your personal data with third parties. Your information is kept confidential and is used only to provide you with our services or contact you regarding your booking.
              </p>
              <p>
                <strong>Cookies:</strong> This website may use basic cookies to ensure the site functions properly. No personal tracking data is stored permanently.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PolicyView;