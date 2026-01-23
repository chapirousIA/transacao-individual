import React from 'react';

const services = [
  {
    category: "PGFN",
    title: "Transação Tributária Individual Comum",
    subtitle: "Negociação Direta e Customizada",
    desc: "A solução definitiva para empresas com débitos acima de R$ 10M. Negociamos condições específicas de pagamento e descontos que modelos de adesão comum não permitem.",
    bullets: ["Até 65% de desconto", "Parcelamento em 120x", "Suspensão de atos de cobrança", "Plano de Recuperação e Garantias flexibilizadas"]
  },
  {
    category: "CAPAG",
    title: "Revisão e Recuperação de Rating",
    subtitle: "Potencialize seus Descontos",
    desc: "Seu rating de Capacidade de Pagamento na PGFN define os descontos que você pode obter na transação tributária. Revisamos os critérios aplicados e fundamentamos a reclassificação.",
    bullets: ["Análise do Rating Atual", "Identificação de Inconsistências", "Simulação de Cenários", "Fundamentação para Reclassificação"]
  },
  {
    category: "CAPAG",
    title: "Transação Tributária Individual Simplificada",
    subtitle: "Agilidade e Plano de Pagamento Sob Medida",
    desc: "A solução ágil para empresas com dívidas inscritas em dívida ativa da União entre R$ 1mi e R$ 10mi, permitindo um plano de pagamento sob medida.",
    bullets: ["Até 65% de desconto", "Parcelamento em 120x", "Suspensão de atos de cobrança", "Plano de Recuperação e Garantias flexibilizada"]
  },
  {
    category: "Diagnóstico 360",
    title: "Diagnóstico de Passivo Estruturado",
    subtitle: "Sua Empresa em Conformidade",
    desc: "Mapeamos a situação completa do seu passivo tributário federal para identificar a estratégia mais adequada de regularização.",
    bullets: ["Análise de Risco Fiscal", "Mapeamento de Créditos", "Revisão de Contingências", "Estratégia de Defesa"]
  }
];

interface ServicesProps {
  isDarkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ isDarkMode }) => {
  const getWaLink = () => {
    const msg = "Vim da lp-transação tributária. Gostaria de atendimento";
    return `https://wa.me/5585994059821?text=${encodeURIComponent(msg)}`;
  };

  const trackServiceClick = (serviceTitle: string) => {
    const win = window as any;
    if (typeof win.gtag === 'function') {
      // Analytics
      win.gtag('event', 'contact', {
        'event_category': 'whatsapp_service',
        'event_label': serviceTitle
      });
      // Google Ads Conversion
      win.gtag('event', 'conversion', { 
        'send_to': 'AW-801482985/CLIQUE_WHATSAPP' 
      });
    }
    if (typeof win.fbq === 'function') {
      win.fbq('track', 'Contact', { content_name: serviceTitle });
    }
  };

  return (
    <section id="servicos" className={`py-32 transition-colors duration-500 border-y ${
      isDarkMode ? 'bg-[#0A0A0B] border-white/5' : 'bg-[#F4F4F7] border-black/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className={`serif text-5xl md:text-6xl mb-6 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Soluções Corporativas</h2>
            <p className={`font-light leading-relaxed transition-colors ${isDarkMode ? 'text-white/50' : 'text-slate-600'}`}>
              O passivo tributário não deve ser um limitador para a operação. Nossa abordagem técnica resolve o impasse fiscal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className={`p-12 border transition-all group relative flex flex-col justify-between ${
              isDarkMode ? 'border-white/10 hover:bg-white/[0.02] bg-transparent' : 'border-black/5 hover:bg-white bg-white/50 shadow-sm hover:shadow-xl'
            }`}>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-[#EFA335] mb-8 font-bold">{s.category}</span>
                <h3 className={`serif text-3xl mb-2 transition-colors ${isDarkMode ? 'group-hover:text-white' : 'text-slate-900'}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed font-light mb-10 transition-colors ${isDarkMode ? 'text-white/50' : 'text-slate-500'}`}>{s.desc}</p>
              </div>
              <div>
                <a 
                  href={getWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackServiceClick(s.title)}
                  className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-[#EFA335] pb-1 hover:text-[#EFA335] transition-all font-bold"
                >
                  Analisar Viabilidade Técnica
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;