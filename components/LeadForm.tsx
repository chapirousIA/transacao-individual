import React, { useState } from 'react';

interface LeadFormProps {
  isDarkMode: boolean;
}

interface FormData {
  faturamento: string;
  passivo: string;
  interesseCapag: string;
  nome: string;
  whatsapp: string;
  email: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ isDarkMode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    faturamento: '',
    passivo: '',
    interesseCapag: 'Não informado',
    nome: '',
    whatsapp: '',
    email: ''
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStep1 = (val: string) => {
    updateField('faturamento', val);
    setStep(2);
  };

  const handleStep2 = (val: string) => {
    updateField('passivo', val);
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TRACKING CONVERSIONS
    const win = window as any;
    if (typeof win.gtag === 'function') {
      // Evento genérico para Analytics
      win.gtag('event', 'generate_lead', {
        'event_category': 'form',
        'event_label': 'diagnostico_estrategico'
      });

      // CONVERSÃO ESPECÍFICA GOOGLE ADS: Enviar formulário de lead GOOGLE STUDIO
      win.gtag('event', 'conversion', {
        'send_to': 'AW-801482985/-Q4HCNHatNgbEOnRlv4C'
      });
    }

    // META PIXEL LEAD
    if (typeof win.fbq === 'function') {
      win.fbq('track', 'Lead', {
        content_name: 'Diagnóstico Estratégico',
        value: 0,
        currency: 'BRL'
      });
    }

    const message = `*Novo Diagnóstico Estratégico - Pedrosa & Peixoto*
---------------------------------------
*DADOS DO GRUPO ECONÔMICO:*
• *Faturamento:* ${formData.faturamento}
• *Passivo Estimado:* ${formData.passivo}
• *Interesse em CAPAG:* ${formData.interesseCapag}

*CONTATO DO GESTOR:*
• *Nome:* ${formData.nome}
• *WhatsApp:* ${formData.whatsapp}
• *E-mail:* ${formData.email}
---------------------------------------
_Lead originado via formulário do site._`;

    const waUrl = `https://wa.me/5585994059821?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="formulario" className={`py-32 transition-colors duration-500 relative overflow-hidden ${isDarkMode ? 'bg-[#0F0F10]' : 'bg-[#F9F9FB]'
      }`}>
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] -mr-48 -mt-48 transition-opacity ${isDarkMode ? 'bg-[#EFA335]/5 opacity-100' : 'bg-[#EFA335]/10 opacity-40'
        }`} />

      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFA335] mb-4 block font-bold">Inicie sua Regularização</span>
          <h2 className={`serif text-4xl md:text-5xl mb-4 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Diagnóstico Estratégico</h2>
          <p className={`font-light tracking-wide uppercase text-[10px] transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>
            Preencha os dados abaixo para que nossos especialistas analisem seu caso.
          </p>
        </div>

        <div className={`p-12 border-thin transition-all ${isDarkMode ? 'glass' : 'bg-white border-slate-200 shadow-xl'
          }`}>
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[11px] font-bold transition-all duration-500 ${step >= s
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

          <form onSubmit={handleSubmit} className="space-y-8">
            {step === 1 && (
              <div className="animate-fade-in space-y-6">
                <p className={`text-sm mb-4 font-light border-l border-[#EFA335] pl-4 transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>Selecione o faturamento anual do grupo econômico:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {[
                    'Até R$ 15 Milhões',
                    'R$ 15M - R$ 50 Milhões',
                    'Acima de R$ 50 Milhões',
                    'Holding / Private Equity'
                  ].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => handleStep1(opt)}
                      className={`p-6 border text-left transition-all group ${isDarkMode
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
                        type="button"
                        onClick={() => handleStep2(val)}
                        className={`p-4 border text-center text-[11px] uppercase tracking-widest transition-all ${isDarkMode
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
                    <div className="flex flex-wrap gap-6">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="capag"
                          className="accent-[#EFA335]"
                          onChange={() => updateField('interesseCapag', 'Sim, necessito crédito')}
                        />
                        <span className={`text-[10px] uppercase tracking-widest group-hover:text-[#EFA335] transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-500'}`}>Sim, necessito crédito</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="capag"
                          className="accent-[#EFA335]"
                          onChange={() => updateField('interesseCapag', 'Foco em Transação PGFN')}
                        />
                        <span className={`text-[10px] uppercase tracking-widest group-hover:text-[#EFA335] transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-500'}`}>Foco em Transação PGFN</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <button type="button" onClick={() => setStep(1)} className={`text-[10px] uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-[#EFA335] pb-1 ${isDarkMode ? 'text-white/40 hover:text-[#EFA335]' : 'text-slate-400 hover:text-[#EFA335]'}`}>
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
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => updateField('nome', e.target.value)}
                      className={`w-full border p-4 text-sm outline-none focus:border-[#EFA335]/50 transition-colors ${isDarkMode ? 'bg-white/[0.03] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      placeholder="Ex: Dr. Roberto Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={`text-[10px] uppercase tracking-widest block font-bold transition-colors ${isDarkMode ? 'text-white/30' : 'text-slate-400'}`}>WhatsApp Corporativo</label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => updateField('whatsapp', e.target.value)}
                      className={`w-full border p-4 text-sm outline-none focus:border-[#EFA335]/50 transition-colors ${isDarkMode ? 'bg-white/[0.03] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                        }`}
                      placeholder="(85) 99999-9999"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className={`text-[10px] uppercase tracking-widest block font-bold transition-colors ${isDarkMode ? 'text-white/30' : 'text-slate-400'}`}>E-mail Corporativo</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full border p-4 text-sm outline-none focus:border-[#EFA335]/50 transition-colors ${isDarkMode ? 'bg-white/[0.03] border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    placeholder="gestao@empresa.com.br"
                  />
                </div>
                <div className="space-y-4">
                  <button
                    type="submit"
                    className="btn-gold w-full py-5 text-[11px] font-bold uppercase tracking-[0.4em] shadow-xl shadow-[#EFA335]/10"
                  >
                    Agendar Análise Técnica
                  </button>
                  <p className={`text-[8px] text-center uppercase tracking-widest ${isDarkMode ? 'text-white/20' : 'text-slate-400'}`}>
                    Ao clicar, você será direcionado para o WhatsApp da nossa equipe de estratégia.
                  </p>
                </div>
                <div className="flex justify-start">
                  <button type="button" onClick={() => setStep(2)} className={`text-[10px] uppercase tracking-[0.2em] transition-colors border-b border-transparent hover:border-[#EFA335] pb-1 ${isDarkMode ? 'text-white/40 hover:text-[#EFA335]' : 'text-slate-400 hover:text-[#EFA335]'}`}>
                    ← Voltar ao financeiro
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;