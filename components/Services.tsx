
import React from 'react';

const services = [
  {
    category: "PGFN",
    title: "Transação Tributária Individual Comum",
    subtitle: "Negociação Direta e Customizada",
    desc: "A solução definitiva para empresas com débitos acima de R$ 10M. Negociamos condições específicas de pagamento e descontos que modelos de adesão comum não permitem.",
    bullets: [
      "Até 65% de desconto",
      "Parcelamento em 120x",
      "Suspensão de atos de cobrança",
      "Plano de Recuperação e Garantias flexibilizadas"
    ]
  },
  {
    category: "CAPAG",
    title: "Revisão e Recuperação de Rating",
    subtitle: "Potencialize seus Descontos",
    desc: "Seu rating de Capacidade de Pagamento na PGFN define os descontos que você pode obter na transação tributária. Revisamos os critérios aplicados, identificamos erros de classificação e preparamos a fundamentação técnica para reclassificação — ampliando as possibilidades de redução legal do passivo federal.",
    bullets: [
      "Análise do Rating Atual", 
      "Identificação de Inconsistências", 
      "Simulação de Cenários", 
      "Fundamentação para Reclassificação"
    ]
  },
  {
    category: "CAPAG",
    title: "Transação Tributária Individual Simplificada",
    subtitle: "Agilidade e Plano de Pagamento Sob Medida",
    desc: "A solução ágil para empresas com dívidas inscritas em dívida ativa da União entre R$ 1mi e R$ 10mi, permitindo um plano de pagamento sob medida, com descontos graduais conforme a capacidade de pagamento e o grau de recuperabilidade do crédito definido pela PGFN.",
    bullets: [
      "Até 65% de desconto",
      "Parcelamento em 120x",
      "Suspensão de atos de cobrança",
      "Plano de Recuperação e Garantias flexibilizada"
    ]
  },
  {
    category: "Diagnóstico 360",
    title: "Diagnóstico de Passivo Estruturado",
    subtitle: "Sua Empresa em Conformidade",
    desc: "Mapeamos a situação completa do seu passivo tributário federal — débitos em cobrança administrativa na RFB, inscrições em Dívida Ativa e execuções fiscais — para identificar a estratégia mais adequada de regularização. O diagnóstico revela oportunidades de redução legal, aponta riscos de penhora e fornece um plano de ação técnico.",
    bullets: [
      "Análise de Risco Fiscal",
      "Mapeamento de Créditos",
      "Revisão de Contingências",
      "Estratégia de Defesa"
    ]
  },
  {
    category: "Estratégia",
    title: "Uso de Prejuízo Fiscal",
    subtitle: "Amortização com Créditos Internos",
    desc: "Empresas com prejuízo fiscal e base de cálculo negativa de CSLL acumulados podem utilizá-los para amortizar até 70% do saldo devedor remanescente na transação tributária federal. Estruturamos a operação para maximizar o aproveitamento desses créditos, reduzindo o desembolso efetivo e preservando o capital de giro da empresa.",
    bullets: [
      "Levantamento de créditos",
      "Análise de elegibilidade",
      "Estruturação da amortização",
      "Redução do desembolso efetivo"
    ]
  },
  {
    category: "Estratégia",
    title: "Uso de Precatórios na Transação",
    subtitle: "Otimização via Mercado Secundário",
    desc: "Precatórios federais podem ser utilizados para amortizar o saldo devedor na transação tributária. Como são negociados com deságio significativo, o contribuinte obtém uma redução efetiva superior aos descontos legais. Estruturamos a aquisição e a compensação para maximizar a economia com total segurança jurídica.",
    bullets: [
      "Prospecção de Precatórios",
      "Análise de Compatibilidade",
      "Estruturação da Cessão",
      "Economia Efetiva Ampliada"
    ]
  }
];

const Services: React.FC = () => {
  const getWaLink = (title: string) => {
    const msg = `Olá! Tenho interesse no serviço: ${title}. Gostaria de solicitar uma análise de viabilidade técnica para minha empresa.`;
    return `https://wa.me/5585994059821?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="serviços" className="py-32 bg-[#0A0A0B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="serif text-5xl md:text-6xl mb-6">Soluções Corporativas</h2>
            <p className="text-white/50 font-light leading-relaxed">
              O passivo tributário não deve ser um limitador para a operação. Nossa abordagem técnica resolve o impasse fiscal e abre novas lines de crescimento.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[60px] serif text-white/5 leading-none select-none uppercase tracking-widest">Boutique</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-12 border border-white/10 hover:bg-white/[0.02] transition-colors group relative flex flex-col justify-between">
              <div>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <span className="text-4xl serif">{idx + 1}</span>
                </div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-[#EFA335] mb-8 font-bold">{s.category}</span>
                <h3 className="serif text-3xl mb-2 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mb-8">{s.subtitle}</p>
                
                <p className="text-sm text-white/50 leading-relaxed font-light mb-10 min-h-[80px]">
                  {s.desc}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60">
                      <span className="w-1.5 h-1.5 bg-[#EFA335] rounded-full"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a 
                  href={getWaLink(s.title)}
                  target="_blank"
                  rel="noopener noreferrer"
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
