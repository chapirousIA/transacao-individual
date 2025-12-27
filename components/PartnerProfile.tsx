
import React from 'react';

interface PartnerProfileProps {
  isDarkMode: boolean;
}

const PartnerProfile: React.FC<PartnerProfileProps> = ({ isDarkMode }) => {
  return (
    <section className={`py-24 md:py-32 overflow-hidden transition-colors duration-500 ${isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#FFFFFF]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Coluna da Imagem/Foto */}
          <div className="lg:col-span-5 relative">
            <div className={`relative z-10 w-full max-w-[400px] mx-auto lg:ml-0 aspect-[4/5] border p-2 transition-colors duration-500 ${
              isDarkMode ? 'border-white/10 bg-white/[0.02]' : 'border-black/5 bg-slate-50 shadow-2xl'
            }`}>
              {/* Foto do Dr. Fábio Pedrosa */}
              <div className="w-full h-full bg-slate-900 relative overflow-hidden group">
                <img 
                  src="fabio-pedrosa.jpg" 
                  alt="Dr. Fábio Pedrosa" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  onError={(e) => {
                    // Fallback visual caso a imagem não carregue
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                
                {/* Overlay Informativa sobre a foto */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <p className="text-white text-[10px] uppercase tracking-[0.3em] font-bold">Dr. Fábio Pedrosa</p>
                  <p className="text-[#EFA335] text-[8px] uppercase tracking-[0.2em]">OAB-CE 16.743</p>
                </div>
              </div>
            </div>
            {/* Elemento decorativo atrás da foto */}
            <div className={`absolute -top-6 -right-6 lg:-right-10 w-full h-full border-t border-r -z-0 transition-colors ${
              isDarkMode ? 'border-[#EFA335]/20' : 'border-black/5'
            }`}></div>
          </div>

          {/* Coluna de Texto */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
               <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFA335] font-bold">Liderança Estratégica</span>
               <div className="h-[1px] w-12 bg-[#EFA335]/30"></div>
            </div>

            <h2 className={`serif text-4xl md:text-5xl lg:text-6xl mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Dr. Fábio Pedrosa
            </h2>
            <p className="text-[#EFA335] text-sm md:text-md font-light tracking-[0.1em] mb-8 uppercase">
              Sócio-Coordenador da Área Tributária
            </p>

            <div className={`mb-10 p-6 border-l-2 border-[#EFA335] transition-colors ${isDarkMode ? 'bg-white/[0.02]' : 'bg-slate-50'}`}>
              <p className={`serif text-xl md:text-2xl italic leading-snug ${isDarkMode ? 'text-white/90' : 'text-slate-800'}`}>
                "Experiência de Fisco. Inteligência de dados. Resultado para o cliente."
              </p>
            </div>

            <div className={`space-y-6 text-sm md:text-base font-light leading-relaxed transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
              <p>
                Procurador do Estado desde 2008 e ex-chefe da Dívida Ativa do Ceará, o <strong>Dr. Fábio Pedrosa</strong> conhece a lógica do Fisco por dentro. Essa visão privilegiada permite antecipar movimentos da PGFN e construir teses de transação com altíssima taxa de deferimento.
              </p>
              <p>
                Mestre em Gestão de Conflitos e pós-graduado em Direito Tributário pela <strong>FGV</strong>, une o rigor acadêmico à prática de mercado. Atualmente, especializa-se em <strong>Legal Operations e IA aplicada ao Direito</strong>, liderando a modernização dos processos de recuperação fiscal da Pedrosa & Peixoto.
              </p>
              <p>
                Com mais de <strong>150 diagnósticos de passivo tributário</strong> realizados em 12 setores diferentes da economia, sua atuação é pautada pela precisão técnica e pela busca incessante pela preservação do caixa das empresas.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-8 border-white/5">
               <div>
                  <p className="text-[#EFA335] text-xs font-bold tracking-tighter mb-1">16 ANOS+</p>
                  <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Procuradoria</p>
               </div>
               <div>
                  <p className="text-[#EFA335] text-xs font-bold tracking-tighter mb-1">FGV</p>
                  <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Pós-Graduação</p>
               </div>
               <div>
                  <p className="text-[#EFA335] text-xs font-bold tracking-tighter mb-1">150+</p>
                  <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Diagnósticos</p>
               </div>
               <div>
                  <p className="text-[#EFA335] text-xs font-bold tracking-tighter mb-1">IA & OPS</p>
                  <p className={`text-[9px] uppercase tracking-widest ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Especialização</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnerProfile;
