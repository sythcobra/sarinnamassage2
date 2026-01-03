import React from 'react';

const ProgressBar = ({ label, value, max = 10, colorClass = "bg-accent" }: { label: string, value: number, max?: number, colorClass?: string }) => (
  <div className="mb-2">
    <div className="flex justify-between text-xs uppercase tracking-wide text-gray-500 mb-1">
      <span>{label}</span>
      <span>{value}/{max}</span>
    </div>
    <div className="w-full bg-stone-200 rounded-full h-1.5">
      <div className={`${colorClass} h-1.5 rounded-full`} style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
  </div>
);

export default ProgressBar;