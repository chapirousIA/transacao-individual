
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import IntelligenceStats from './components/IntelligenceStats';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0B] selection:bg-[#EFA335] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        {/* Trust/Logo Section */}
        <section className="py-20 border-y border-white/5 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[9px] uppercase tracking-[0.6em] text-white/30 mb-12">Instituições Parceiras e Esferas de Atuação</p>
            <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale contrast-125">
              {['PGFN', 'BNDES', 'RECEITA FEDERAL', 'CARF', 'TESOURO NACIONAL'].map(logo => (
                <span key={logo} className="serif text-xl font-bold tracking-[0.2em]">{logo}</span>
              ))}
            </div>
          </div>
        </section>

        <Services />
        
        <IntelligenceStats />

        {/* Philosophy Section */}
        <section className="py-40 bg-black relative">
           <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
             <span className="serif text-[15vw] leading-none uppercase">Pedrosa</span>
           </div>
           <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFA335] mb-10 block font-bold">Nossa Filosofia</span>
              <h2 className="serif text-4xl md:text-6xl leading-tight mb-12">
                "O Direito Tributário deve ser o pilar que sustenta a expansão, nunca o peso que impede o voo da empresa."
              </h2>
              <div className="w-12 h-[1px] bg-[#EFA335]/60 mx-auto" />
              <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Equipe Pedrosa & Peixoto</p>
           </div>
        </section>

        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;