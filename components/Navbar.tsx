
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-black/95 py-4 border-white/10' : 'bg-transparent py-8 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo light scale={0.8} />
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Serviços', link: '#serviços' },
            { name: 'Inteligência', link: '#inteligência' },
            { name: 'Contato', link: '#contato' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.link} 
              className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/60 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#formulario" className="btn-gold px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">
            Solicitar Diagnóstico
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;