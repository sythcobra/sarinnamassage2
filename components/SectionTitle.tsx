import React from 'react';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    {subtitle && <p className="text-accent uppercase tracking-widest text-sm font-bold mb-2">{subtitle}</p>}
    <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-bold">{title}</h2>
    <div className="w-24 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
  </div>
);

export default SectionTitle;