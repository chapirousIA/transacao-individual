
import React from 'react';

interface LogoProps {
  light?: boolean;
  scale?: number;
}

const Logo: React.FC<LogoProps> = ({ light = false, scale = 1 }) => {
  return (
    <div className="flex items-center gap-4" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <div className={`w-[2px] h-12 ${light ? 'bg-white/80' : 'bg-[#1D2631]'}`}></div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-light tracking-[0.15em] ${light ? 'text-white' : 'text-[#1D2631]'}`}>
          PEDROSA
        </span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-xl font-bold text-[#EFA335]">&</span>
          <span className={`text-xl font-bold tracking-[0.1em] ${light ? 'text-white' : 'text-[#1D2631]'}`}>
            PEIXOTO
          </span>
        </div>
        <span className="text-[7px] tracking-[0.6em] text-[#EFA335] mt-1 font-medium">
          ADVOGADOS
        </span>
      </div>
    </div>
  );
};

export default Logo;