import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Volume ultra-suave para o tema Day One (15%)
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("Autoplay bloqueado. Interação do usuário necessária.");
      });
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const offset = 80; // Compensação para o header fixo não cobrir o título da seção
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === '#root') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled 
        ? (isDarkMode ? 'bg-black/95 border-white/10' : 'bg-white/95 border-black/5 shadow-sm') 
        : 'bg-transparent border-transparent'
    } py-4 md:py-6`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, '#root')}
          className="hover:opacity-80 transition-opacity"
        >
          <Logo light={isDarkMode} scale={0.8} />
        </a>
        
        {/* Elemento de Áudio - Instrumental Day One (Interstellar Piano Style) */}
        <audio 
          ref={audioRef} 
          loop 
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" 
          preload="auto"
        />
        
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Soluções', link: '#servicos' },
            { name: 'O Sócio', link: '#perfil' },
            { name: 'Performance', link: '#performance' },
            { name: 'Contato', link: '#contato' }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.link} 
              onClick={(e) => scrollToSection(e, item.link)}
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-colors ${
                isDarkMode ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            {/* Music Toggle - Day One Theme Control */}
            <button 
              onClick={toggleMusic}
              className={`p-2 px-3 rounded-full transition-all flex items-center justify-center gap-3 border ${
                isMusicPlaying 
                  ? 'text-[#EFA335] bg-[#EFA335]/10 border-[#EFA335]/30' 
                  : (isDarkMode ? 'text-white/40 border-white/10 hover:text-white/70 hover:bg-white/5' : 'text-black/40 border-black/5 hover:text-black/70 hover:bg-black/5')
              }`}
              title={isMusicPlaying ? "Pausar trilha sonora" : "Ouvir Day One - Interstellar (Piano)"}
            >
              <div className="flex items-end gap-[2px] h-3">
                <div className={`w-[2px] bg-current transition-all duration-1000 ${isMusicPlaying ? 'animate-[music-bar_3.5s_infinite_ease-in-out_0.1s] h-3' : 'h-1'}`}></div>
                <div className={`w-[2px] bg-current transition-all duration-1000 ${isMusicPlaying ? 'animate-[music-bar_4.5s_infinite_ease-in-out_0.4s] h-4' : 'h-2'}`}></div>
                <div className={`w-[2px] bg-current transition-all duration-1000 ${isMusicPlaying ? 'animate-[music-bar_4s_infinite_ease-in-out_0.2s] h-2' : 'h-1'}`}></div>
              </div>
              <span className="text-[8px] uppercase tracking-[0.2em] font-bold">Day One</span>
            </button>

            {/* Theme Toggle */}
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
          </div>

          <a 
            href="#formulario"
            onClick={(e) => scrollToSection(e, '#formulario')}
            className="btn-gold px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse-gold"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      </div>

      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 4px; }
          50% { height: 10px; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;