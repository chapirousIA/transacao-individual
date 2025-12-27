
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <section id="formulario" className="py-32 bg-[#0F0F10] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFA335]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="serif text-4xl md:text-5xl mb-4 text-white">Diagnóstico Estratégico</h2>
          <p className="text-white/40 font-light tracking-wide uppercase text-[10px]">Análise técnica restrita a passivos federais acima de R$ 1 milhão</p>
        </div>

        <div className="glass p-12 border-thin">
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${step >= s ? 'bg-[#EFA335] text-black border-[#EFA335]' : 'border-white/10 text-white/20'}`}>
                  0{s}
                </div>
                <span className={`text-[8px] uppercase tracking-[0.2em] font-bold ${step >= s ? 'text-[#EFA335]' : 'text-white/20'}`}>
                  {s === 1 ? 'Qualificação' : s === 2 ? 'Financeiro' : 'Conclusão'}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <p className="text-white/60 text-sm mb-4 font-light border-l border-[#EFA335] pl-4">Selecione o faturamento anual do grupo econômico:</p>
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
                      className="p-6 border border-white/5 text-left bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#EFA335]/30 transition-all group"
                    >
                      <span className="text-[10px] uppercase tracking-widest block mb-2 text-white/30 group-hover:text-[#EFA335]">Perfil</span>
                      <span className="serif text-xl text-white/90">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in space-y-8">
                <div className="space-y-6">
                  <p className="text-white/60 text-sm mb-4 font-light border-l border-[#EFA335] pl-4">Volume estimado do passivo tributário federal:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['R$ 1M - 5M', 'R$ 5M - 20M', 'Acima de R$ 20M'].map(val => (
                       <button 
                        key={val}
                        onClick={() => setStep(3)}
                        className="p-4 border border-white/10 text-center hover:border-[#EFA335] hover:text-[#EFA335] text-[11px] uppercase tracking-widest transition-all bg-white/[0.01]"
                       >
                         {val}
                       </button>
                    ))}
                  </div>
                  <div className="mt-10 p-6 bg-white/[0.02] border border-white/5">
                    <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-6 font-bold">Interesse prioritário em CAPAG?</label>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="capag" className="accent-[#EFA335]" />
                           <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Sim, necessito crédito</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                           <input type="radio" name="capag" className="accent-[#EFA335]" />
                           <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">Foco em Transação PGFN</span>
                        </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <button onClick={() => setStep(1)} className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-[#EFA335] transition-colors border-b border-transparent hover:border-[#EFA335] pb-1">
                    ← Voltar ao início
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in space-y-8">
                <p className="text-white/60 text-sm mb-4 font-light border-l border-[#EFA335] pl-4">Dados para contato direto com o setor de estratégia:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 block font-bold">Nome do Gestor/Sócio</label>
                    <input type="text" className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm text-white outline-none focus:border-[#EFA335]/50 transition-colors" placeholder="Ex: Dr. Roberto Silva" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 block font-bold">WhatsApp Corporativo</label>
                    <input type="tel" className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm text-white outline-none focus:border-[#EFA335]/50 transition-colors" placeholder="(11) 99999-9999" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-white/30 block font-bold">E-mail Corporativo</label>
                    <input type="email" className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm text-white outline-none focus:border-[#EFA335]/50 transition-colors" placeholder="gestao@empresa.com.br" />
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
