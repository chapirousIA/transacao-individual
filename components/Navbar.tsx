
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/5585994059821?text=" + encodeURIComponent("Olá! Gostaria de solicitar um diagnóstico estratégico para minha empresa com a Pedrosa & Peixoto.");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled 
        ? (isDarkMode ? 'bg-black/95 border-white/10' : 'bg-white/95 border-black/5 shadow-sm') 
        : 'bg-transparent border-transparent'
    } py-4 md:py-6`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo light={isDarkMode} scale={0.8} />
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
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
                isDarkMode ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10 text-white/70' : 'hover:bg-black/5 text-black/70'}`}
            title={isDarkMode ? "Ativar Modo Claro" : "Ativar Modo Escuro"}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>

          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
