import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'line';
  className?: string;
  fullWidth?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false 
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full font-sans font-bold transition-all duration-300 shadow-md flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-accent hover:bg-[#b08d4b] text-white", // Gold
    secondary: "bg-primary hover:bg-[#4a322c] text-white", // Brown
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-white",
    whatsapp: "bg-[#25D366] hover:bg-[#128C7E] text-white",
    line: "bg-[#06C755] hover:bg-[#00B900] text-white",
  };
  
  return (
    <button 
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;