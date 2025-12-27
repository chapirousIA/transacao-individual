
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import IntelligenceStats from './components/IntelligenceStats';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0A0B] text-[#E2E2E2]' : 'bg-[#F9F9FB] text-[#1A1A1C]'} selection:bg-[#EFA335] selection:text-black`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main>
        <Hero isDarkMode={isDarkMode} />
        
        {/* Trust/Logo Section */}
        <section className={`py-20 border-y transition-colors duration-500 ${isDarkMode ? 'border-white/5 bg-black' : 'border-black/5 bg-white'} overflow-hidden`}>
          <div className="max-w-7xl mx-auto px-6">
            <p className={`text-center text-[9px] uppercase tracking-[0.6em] mb-12 ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>Instituições Parceiras e Esferas de Atuação</p>
            <div className={`flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {['PGFN', 'BNDES', 'RECEITA FEDERAL', 'CARF', 'TESOURO NACIONAL'].map(logo => (
                <span key={logo} className="serif text-xl font-bold tracking-[0.2em]">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        <Services isDarkMode={isDarkMode} />
        
        <IntelligenceStats isDarkMode={isDarkMode} />

        {/* Philosophy Section */}
        <section className={`py-40 relative transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
           <div className={`absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-black'}`}>
             <span className="serif text-[15vw] leading-none uppercase">Pedrosa</span>
           </div>
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFA335] mb-10 block font-bold">Nossa Filosofia</span>
              <h2 className={`serif text-4xl md:text-6xl leading-tight mb-12 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                "O Direito Tributário deve ser o pilar que sustenta a expansão, nunca o peso que impede o voo da empresa."
              </h2>
              <div className="w-12 h-[1px] bg-[#EFA335]/60 mx-auto" />
              <p className={`mt-8 text-[10px] uppercase tracking-[0.3em] font-medium transition-colors duration-500 ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>Equipe Pedrosa & Peixoto</p>
           </div>
        </section>

        <LeadForm isDarkMode={isDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
