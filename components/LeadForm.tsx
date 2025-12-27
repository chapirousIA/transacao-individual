
import React, { useState } from 'react';

interface LeadFormProps {
  isDarkMode: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ isDarkMode }) => {
  const [step, setStep] = useState(1);

  return (
    <section id="formulario" className={`py-32 transition-colors duration-500 relative overflow-hidden ${
      isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#F9F9FB]'
    }`}>
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] -mr-48 -mt-48 transition-opacity ${
        isDarkMode ? 'bg-[#EFA335]/5 opacity-100' : 'bg-[#EFA335]/10 opacity-40'
      }`} />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className={`serif text-4xl md:text-5xl mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Diagnóstico Estratégico</h2>
          <p className={`font-light tracking-wide uppercase text-[10px] transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Análise técnica restrita a passivos federais acima de R$ 10 milhões</p>
        </div>

        <div className={`p-12 border-thin transition-all ${
          isDarkMode ? 'glass' : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${
                  step >= s 
                    ? 'bg-[#EFA335] text-black border-[#EFA335]' 
                    : (isDarkMode ? 'border-white/10 text-white/20' : 'border-slate-200 text-slate-300')
                }`}>
                  0{s}
                </div>
                <span className={`text-[8px] uppercase tracking-[0.2em] font-bold ${step >= s ? 'text-[#EFA335]' : (isDarkMode ? 'text-white/20' : 'text-slate-300')}`}>
                  {s === 1 ? 'Qualificação' : s === 2 ? 'Financeiro' : 'Conclusão'}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <p className={`text-sm mb-4 font-light border-l border-[#EFA335] pl-4 transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>Selecione o faturamento anual do grupo econômico:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Até R$ 15 Milhões', 
                    'R$ 15M - R$ 50 Milhões', 
                    'Acima de R$ 50 Milhões', 
                    'Holding / Private Equity'
                  ].map((opt) => (
                    <button 
                      key={opt}
                      onClick={() => setStep(2)}
                      className={`p-6 border text-left transition-all group ${
                        isDarkMode 
                          ? 'border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#EFA335]/30' 
                          : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-[#EFA335]/50 hover:shadow-lg'
                      }`}
                    >
                      <span className={`text-[10px] uppercase tracking-widest block mb-2 group-hover:text-[#EFA335] transition-colors ${isDarkMode ? 'text-white/30' : 'text-slate-400'}`}>Perfil</span>
                      <span className={`serif text-xl transition-colors ${isDarkMode ? 'text-white/90' : 'text-slate-900'}`}>{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-8">
                <div className="space-y-6">
                  <p className={`text-sm mb-4 font-light border-l border-[#EFA335] pl-4 transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>Volume estimado do passivo tributário federal:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['R$ 10M - 20M', 'R$ 20M - 50M', 'Acima de R$ 50M'].map(val => (
                       <button 
                        key={val}
                        onClick={() => setStep(3)}
                        className={`p-4 border text-center text-[11px] uppercase tracking-widest transition-all ${
                          isDarkMode 
                            ? 'border-white/10 text-white/60 hover:border-[#EFA335] hover:text-[#EFA335] bg-white/[0.01]' 
                            : 'border-slate-200 text-slate-600 hover:border-[#EFA335] hover:text-[#EFA335] bg-slate-50'
                        }`}
                       >
                         {val}
                       </button>
                    ))}
                  </div>
                  <div className={`mt-10 p-6 border transition-colors ${isDarkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-100'}`}>
                    <label className={`text-[10px] uppercase tracking-widest block mb-6 font-bold transition-colors ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>Interesse prioritário em CAPAG?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="capag" className="accent-[#EFA335]" />
                           <span className={`text-[10px] uppercase tracking-widest group-hover:text-white transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-500 hover:text-slate-900'}`}>Sim, necessito crédito</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="capag" className="accent-[#EFA335]" />
                           <span className={`text-[10px] uppercase tracking-widest group-hover:text-white transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-500 hover:text-slate-900'}`}>Foco em Transação PGFN</span>
                        </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <button onClick={() => setStep(1)} className={`text-[10px] uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-[#EFA335] pb-1 ${isDarkMode ? 'text-white/40 hover:text-[#EFA335]' : 'text-slate-400 hover:text-[#EFA335]'}`}>
                    ← Voltar ao início
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-8">
                <p className={`text-sm mb-4 font-light border-l border-[#EFA335] pl-4 transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>Dados para contato direto com o setor de estratégia:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-[10px] uppercase tracking-widest block font-bold transition-colors ${isDarkMode ? 'text-white/30' : 'text-slate-400'}`}>Nome do Gestor/Sócio</label>
                    <input type="text" className={`w-full border p-4 text-sm outline-none focus:border-[#EFA335]/50 transition-colors ${
                      isDarkMode ? 'bg-white/[0.03] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`} placeholder="Ex: Dr. Roberto Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-[10px] uppercase tracking-widest block font-bold transition-colors ${isDarkMode ? 'text-white/30' : 'text-slate-400'}`}>WhatsApp Corporativo</label>
                    <input type="tel" className={`w-full border p-4 text-sm outline-none focus:border-[#EFA335]/50 transition-colors ${
                      isDarkMode ? 'bg-white/[0.03] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`} placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className={`text-[10px] uppercase tracking-widest block font-bold transition-colors ${isDarkMode ? 'text-white/30' : 'text-slate-400'}`}>E-mail Corporativo</label>
                    <input type="email" className={`w-full border p-4 text-sm outline-none focus:border-[#EFA335]/50 transition-colors ${
                      isDarkMode ? 'bg-white/[0.03] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`} placeholder="gestao@empresa.com.br" />
                </div>
                <button className="btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.4em] shadow-xl shadow-[#EFA335]/10">
                  Agendar Análise Técnica
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
