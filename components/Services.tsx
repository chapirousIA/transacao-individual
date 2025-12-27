
import React from 'react';

const services = [
  {
    category: "PGFN",
    title: "Transação Tributária Individual",
    subtitle: "Negociação Direta e Customizada",
    desc: "A solução definitiva para empresas com débitos acima de R$ 1M. Negociamos condições específicas de pagamento e descontos que modelos de adesão comum não permitem.",
    bullets: ["Até 65% de desconto", "Parcelamento em 108x", "Suspensão de atos de cobrança", "Garantias flexibilizadas"]
  },
  {
    category: "CAPAG",
    title: "Revisão e Recuperação de Rating",
    subtitle: "Acesso a Crédito Subsidiado",
    desc: "Análise técnica do seu indicador CAPAG junto ao Tesouro Nacional para reclassificação. Essencial para empresas que buscam financiamento BNDES ou contratos públicos.",
    bullets: ["Rating A ou B garantido", "Desbloqueio de crédito BNDES", "Certidão de Regularidade Fiscal", "Melhoria de reputação bancária"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="serviços" className="py-32 bg-[#0A0A0B] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="serif text-5xl md:text-6xl mb-6">Soluções Corporativas</h2>
            <p className="text-white/50 font-light leading-relaxed">
              O passivo tributário não deve ser um limitador para a operação. Nossa abordagem técnica resolve o impasse fiscal e abre novas linhas de crescimento.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[60px] serif text-white/5 leading-none select-none uppercase tracking-widest">Boutique</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-12 border border-white/10 hover:bg-white/[0.02] transition-colors group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-4xl serif">{idx + 1}</span>
              </div>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-[#d4af37] mb-8 font-bold">{s.category}</span>
              <h3 className="serif text-3xl mb-2 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-8">{s.subtitle}</p>
              
              <p className="text-sm text-white/50 leading-relaxed font-light mb-10 h-20">
                {s.desc}
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60">
                    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full"></span>
                    {b}
                  </li>
                ))}
              </ul>

              <a href="#formulario" className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-[#d4af37] pb-1 hover:text-[#d4af37] transition-all font-bold">
                Analisar Viabilidade Técnica
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;