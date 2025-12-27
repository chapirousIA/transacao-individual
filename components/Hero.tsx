
import React from 'react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const waNumber = "5585994059821";
  const diagMsg = encodeURIComponent("Olá! Gostaria de um diagnóstico estratégico para Transação Individual e/ou CAPAG com a Pedrosa & Peixoto.");
  const specialistMsg = encodeURIComponent("Olá! Gostaria de falar com um especialista sobre a regularização do passivo tributário federal da minha empresa.");
  
  const trackWhatsAppClick = (location: string) => {
    const win = window as any;
    if (typeof win.gtag === 'function') {
      win.gtag('event', 'contact', {
        'event_category': 'whatsapp',
        'event_label': `hero_${location}`
      });
      // Se tiver um ID de conversão específico do Google Ads para clique em WhatsApp, insira aqui:
      // win.gtag('event', 'conversion', { 'send_to': 'AW-801482985/LABEL_AQUI' });
    }
    if (typeof win.fbq === 'function') {
      win.fbq('track', 'Contact', { content_category: 'whatsapp', content_name: `hero_${location}` });
    }
  };

  return (
    <section className={`relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-20 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0A0D14]' : 'bg-[#FDFDFD]'}`}>
      {/* Background decoration */}
      <div className={`absolute top-0 right-0 w-1/2 h-full transition-colors duration-500 -z-10 translate-x-1/4 skew-x-[-12deg] ${isDarkMode ? 'bg-[#0D121A] opacity-50' : 'bg-slate-50 opacity-100'}`} />
      <div className={`absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full blur-[150px] transition-opacity duration-500 ${isDarkMode ? 'bg-[#EFA335]/5 opacity-100' : 'bg-[#EFA335]/10 opacity-50'}`} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 z-10">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
             <div className="w-8 h-[1px] bg-[#EFA335]"></div>
             <span className="text-[10px] uppercase tracking-[0.5em] text-[#EFA335] font-bold">
                Boutique Jurídica de Elite
             </span>
          </div>
          
          <h1 className={`serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Engenharia <br />
            <span className="text-[#EFA335] italic">Tributária</span> <br />
            Estratégica.
          </h1>
          
          <p className={`max-w-xl text-lg font-light leading-relaxed mb-12 border-l-2 border-[#EFA335] pl-8 transition-colors duration-500 ${isDarkMode ? 'text-white/70' : 'text-slate-600'}`}>
            Especialistas em Transação Individual PGFN e Recuperação de CAPAG. 
            Garantimos a segurança jurídica necessária para empresas com passivos acima de <span className={`font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>R$ 10 Milhões</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href={`https://wa.me/${waNumber}?text=${diagMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('diagnostico')}
              className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-center shadow-lg shadow-[#EFA335]/10"
            >
              Diagnóstico Estratégico
            </a>
            <a 
              href={`https://wa.me/${waNumber}?text=${specialistMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('especialista')}
              className={`px-10 py-5 border text-[11px] font-bold uppercase tracking-[0.2em] text-center transition-all flex items-center justify-center gap-3 group ${
                isDarkMode 
                  ? 'border-white/10 text-white hover:bg-white/[0.03] hover:border-white/30' 
                  : 'border-black/10 text-slate-800 hover:bg-black/[0.03] hover:border-black/30'
              }`}
            >
              <span className="w-2 h-2 bg-[#EFA335] rounded-full animate-pulse"></span>
              Falar com Especialista
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 opacity-40">
            <div>
              <p className="text-[#EFA335] text-[10px] font-bold mb-1 tracking-widest uppercase">Performance</p>
              <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>Redução 65%</p>
            </div>
            <div>
              <p className="text-[#EFA335] text-[10px] font-bold mb-1 tracking-widest uppercase">Prazos</p>
              <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>120 Parcelas</p>
            </div>
            <div>
              <p className="text-[#EFA335] text-[10px] font-bold mb-1 tracking-widest uppercase">Crédito</p>
              <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>Rating A/B</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <div className={`relative z-10 border p-2 transition-colors duration-500 group ${
            isDarkMode ? 'border-white/5 bg-white/[0.02]' : 'border-black/5 bg-black/[0.01] shadow-2xl'
          } backdrop-blur-sm max-w-[440px] w-full`}>
            <div className="overflow-hidden aspect-[9/16] relative bg-slate-900">
              <div className={`absolute inset-0 transition-all duration-700 z-10 ${isDarkMode ? 'bg-black/10 group-hover:bg-transparent' : 'bg-transparent'}`}></div>
              <img 
                src="office-hero.jpg" 
                alt="Sede Pedrosa & Peixoto Advogados" 
                className={`w-full h-full object-cover transition-all duration-1000 ${isDarkMode ? 'grayscale-[0.05] group-hover:grayscale-0' : ''} group-hover:scale-105`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop";
                }}
                loading="eager"
              />
            </div>
            
            <div className={`absolute -bottom-6 -left-6 md:-left-12 p-6 md:p-8 border-l-4 border-[#EFA335] shadow-2xl z-20 max-w-[240px] md:max-w-[300px] animate-fade-in glass ${
              isDarkMode ? 'text-white/80' : 'bg-white/95 text-slate-700 border-y border-r border-black/5'
            }`}>
              <div className="mb-4">
                 <div className="flex items-center gap-3">
                    <div className={`w-[1px] h-8 md:h-10 ${isDarkMode ? 'bg-white' : 'bg-slate-900'}`}></div>
                    <div className="flex flex-col">
                       <span className={`text-xs md:text-sm font-light tracking-[0.2em] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>PEDROSA</span>
                       <span className={`text-xs md:text-sm font-bold tracking-[0.1em] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}><span className="text-[#EFA335]">&</span> PEIXOTO</span>
                    </div>
                 </div>
              </div>
              <p className="serif text-base md:text-lg italic leading-tight">
                "Excelência técnica em um ambiente projetado para decisões de alto impacto."
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-[#EFA335]/20 -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
