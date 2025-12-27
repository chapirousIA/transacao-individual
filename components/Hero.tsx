
import React from 'react';

const Hero: React.FC = () => {
  const whatsappMsg = encodeURIComponent("Olá! Gostaria de um diagnóstico estratégico para Transação Individual e/ou CAPAG com a Pedrosa & Peixoto.");
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden bg-[#0A0D14]">
      {/* Elementos decorativos de fundo para profundidade */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0D121A] -z-10 translate-x-1/4 skew-x-[-12deg] opacity-50" />
      <div className="absolute -bottom-40 -left-20 w-[600px] h-[600px] bg-[#EFA335]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
             <div className="w-8 h-[1px] bg-[#EFA335]"></div>
             <span className="text-[10px] uppercase tracking-[0.5em] text-[#EFA335] font-bold">
                Boutique Jurídica de Elite
             </span>
          </div>
          
          <h1 className="serif text-6xl md:text-8xl lg:text-8xl leading-[1.05] mb-8 text-white">
            Engenharia <br />
            <span className="text-[#EFA335] italic">Tributária</span> <br />
            Estratégica.
          </h1>
          
          <p className="max-w-xl text-lg text-white/70 font-light leading-relaxed mb-12 border-l-2 border-[#EFA335] pl-8">
            Especialistas em Transação Individual PGFN e Recuperação de CAPAG. 
            Garantimos a segurança jurídica necessária para empresas com passivos acima de <span className="text-white font-medium">R$ 10 Milhões</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#formulario" className="btn-gold px-12 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-center shadow-lg shadow-[#EFA335]/10">
              Diagnóstico Estratégico
            </a>
            <a 
              href={`https://wa.me/5511999999999?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-white/10 text-[11px] font-bold uppercase tracking-[0.2em] text-center hover:bg-white/[0.03] hover:border-white/30 transition-all flex items-center justify-center gap-3 group"
            >
              <span className="w-2 h-2 bg-[#EFA335] rounded-full animate-pulse"></span>
              Falar com Especialista
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 opacity-40">
            <div>
              <p className="text-[#EFA335] text-xs font-bold mb-1 tracking-widest uppercase">Performance</p>
              <p className="text-[10px] uppercase tracking-widest text-white/80">Redução de até 65%</p>
            </div>
            <div>
              <p className="text-[#EFA335] text-xs font-bold mb-1 tracking-widest uppercase">Prazos</p>
              <p className="text-[10px] uppercase tracking-widest text-white/80">Até 120 Parcelas</p>
            </div>
            <div>
              <p className="text-[#EFA335] text-xs font-bold mb-1 tracking-widest uppercase">Crédito</p>
              <p className="text-[10px] uppercase tracking-widest text-white/80">Recuperação CAPAG A/B</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 border border-white/5 p-3 bg-white/[0.02] backdrop-blur-sm group">
            <div className="overflow-hidden aspect-[4/5] relative">
              {/* Overlay suave para integrar com o dark mode */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
              
              {/* Imagem que remete à foto do escritório (concreto, madeira, lounge moderno) */}
              <img 
                src="https://images.unsplash.com/photo-1600607687940-497f27327b5e?q=80&w=2070&auto=format&fit=crop" 
                alt="Ambiente Pedrosa & Peixoto Advogados" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
            </div>
            
            {/* Elemento que simula a placa de vidro com a logo presente na foto do usuário */}
            <div className="absolute -bottom-8 -left-8 glass p-8 border-l-4 border-[#EFA335] shadow-2xl z-20 max-w-[280px] animate-fade-in">
              <div className="mb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-[1px] h-10 bg-white"></div>
                    <div className="flex flex-col">
                       <span className="text-white text-sm font-light tracking-[0.2em]">PEDROSA</span>
                       <span className="text-white text-sm font-bold tracking-[0.1em]"><span className="text-[#EFA335]">&</span> PEIXOTO</span>
                    </div>
                 </div>
              </div>
              <p className="serif text-lg italic text-white/80 leading-tight">
                "Excelência técnica em um ambiente projetado para decisões de alto impacto."
              </p>
            </div>
          </div>
          
          {/* Elemento geométrico decorativo atrás da foto */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-[#EFA335]/20 -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;