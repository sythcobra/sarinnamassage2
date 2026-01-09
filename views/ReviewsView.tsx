import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND, REVIEWS } from '../constants';
import Button from '../components/Button';

const ReviewsView = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 4;
  const totalPages = Math.ceil(REVIEWS.length / reviewsPerPage);

  // Stats for visual impact
  const stats = [
    { label: "Service", score: 5.0 },
    { label: "Cleanliness", score: 5.0 },
    { label: "Atmosphere", score: 5.0 },
  ];

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = REVIEWS.slice(
    currentPage * reviewsPerPage, 
    (currentPage + 1) * reviewsPerPage
  );

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen animate-fade-in">
      {/* Header & Stats Section */}
      <div className="bg-primary text-white py-16 px-6 mb-16 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Title & Main Score */}
            <div className="text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-accent">Guest Stories</h2>
              <p className="text-stone-300 text-lg max-w-md mb-8">
                Read genuine experiences from visitors who found their sanctuary with us at Holiday Inn Sathorn.
              </p>
              
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <div className="text-5xl font-serif font-bold text-white">5.0</div>
                <div className="flex flex-col items-start">
                  <div className="flex text-accent mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <span className="text-sm text-stone-300">Based on 255+ Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Breakdown */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl w-full md:w-auto min-w-[300px] border border-white/10">
              <h3 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Rating Breakdown</h3>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="flex justify-between text-sm mb-1 text-stone-200">
                      <span>{stat.label}</span>
                      <span className="font-bold">{stat.score.toFixed(1)}</span>
                    </div>
                    <div className="w-full bg-black/20 rounded-full h-1.5">
                      <div 
                        className="bg-accent h-1.5 rounded-full shadow-[0_0_10px_rgba(197,160,89,0.5)]" 
                        style={{ width: `${(stat.score / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative">
        
        {/* Navigation Arrows (Absolute positioning on desktop) */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2 z-10 pointer-events-none">
           <button 
             onClick={handlePrev}
             className="pointer-events-auto bg-white/80 backdrop-blur text-primary p-4 rounded-full shadow-lg hover:bg-accent hover:text-white transition-all transform hover:scale-110 border border-stone-200"
           >
             <ChevronLeft size={32} />
           </button>
           <button 
             onClick={handleNext}
             className="pointer-events-auto bg-white/80 backdrop-blur text-primary p-4 rounded-full shadow-lg hover:bg-accent hover:text-white transition-all transform hover:scale-110 border border-stone-200"
           >
             <ChevronRight size={32} />
           </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 min-h-[400px]">
          {currentReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-stone-100 group relative flex flex-col animate-fade-in"
            >
              <Quote className="absolute top-8 right-8 text-stone-100 w-12 h-12 rotate-180 group-hover:text-accent/20 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl ring-4 ring-stone-50">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{review.author}</h4>
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span>{review.date}</span>
                    <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                    <span className="flex items-center gap-1 text-green-600"><CheckCircle2 size={10} /> Verified Guest</span>
                  </div>
                </div>
              </div>

              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 font-serif text-lg italic leading-relaxed mb-6 flex-grow">
                "{review.text}"
              </p>

              <div className="pt-6 border-t border-stone-100 flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 opacity-50 grayscale group-hover:grayscale-0 transition-all" />
                Posted on Google Maps
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation & Page Indicators */}
        <div className="flex flex-col items-center mt-8 gap-6">
          <div className="flex gap-2 md:hidden">
            <button onClick={handlePrev} className="bg-white text-primary p-3 rounded-full shadow hover:bg-accent hover:text-white transition-colors"><ChevronLeft /></button>
            <button onClick={handleNext} className="bg-white text-primary p-3 rounded-full shadow hover:bg-accent hover:text-white transition-colors"><ChevronRight /></button>
          </div>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === idx ? 'bg-accent w-8' : 'bg-stone-300 hover:bg-stone-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
          <p className="text-sm text-stone-400">Showing {currentPage * reviewsPerPage + 1}-{Math.min((currentPage + 1) * reviewsPerPage, REVIEWS.length)} of {REVIEWS.length} reviews</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-stone-200 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-serif text-3xl font-bold text-charcoal mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We value every piece of feedback. Your stories help us maintain the highest standards of comfort and care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={BRAND.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="outline">Read More on Google</Button>
              </a>
              <a 
                href={BRAND.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button>Write a Review</Button>
              </a>
            </div>
          </div>
          
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsView;