import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal-950 focus:ring-gold-DEFAULT";
  
  const variants = {
    primary: "bg-gold-DEFAULT text-charcoal-950 hover:bg-white hover:text-charcoal-950 shadow-lg shadow-gold-DEFAULT/20",
    outline: "border border-gold-DEFAULT text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-charcoal-950",
    ghost: "text-slate-400 hover:text-gold-DEFAULT hover:bg-white/5"
  };

  const content = (
    <motion.span whileTap={{ scale: 0.98 }}>
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default Button;