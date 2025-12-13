import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-10 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/aegislogo.png"
        alt="Aegis Keystone Holdings"
        className="h-full w-auto"
      />
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-widest leading-none text-white">AEGIS</span>
        <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gold-DEFAULT uppercase">Keystone Holdings</span>
      </div>
    </div>
  );
};

export default Logo;