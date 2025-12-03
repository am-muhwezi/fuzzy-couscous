import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto text-gold-DEFAULT"
      >
        <path
          d="M50 10 L85 90 H70 L62 70 H38 L30 90 H15 L50 10Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M25 50 L50 20 L75 50"
          stroke="currentColor"
          strokeWidth="2"
        />
         <path
          d="M35 60 L65 60"
          stroke="currentColor"
          strokeWidth="4"
        />
         <path
          d="M50 60 V90"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-widest leading-none text-white">AEGIS</span>
        <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gold-DEFAULT uppercase">Keystone Holdings</span>
      </div>
    </div>
  );
};

export default Logo;