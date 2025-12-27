
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-20 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-8">
            <Logo light scale={0.9} />
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed font-light mb-8">
            Excelência jurídica focada em Transações Individuais e reestruturação de CAPAG para grupos econômicos de alta performance.
          </p>
          <div className="flex gap-4">
            {['LN', 'IG'].map(i => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[10px] text-white/40 hover:text-[#EFA335] hover:border-[#EFA335] transition-all">
                {i}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-white mb-6 font-bold">Presença</h4>
          <ul className="space-y-4 text-white/40 text-xs tracking-wide">
            <li>São Paulo - Ed. Faria Lima Hub</li>
            <li>Brasília - Complexo Administrativo</li>
            <li>Porto Alegre - Corporate Park</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-widest text-white mb-6 font-bold">Relacionamento</h4>
          <p className="text-white/40 text-xs mb-2">atendimento@pedrosapeixoto.adv.br</p>
          <p className="text-[#EFA335] text-xs font-bold">+55 11 99999-9999</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
          © 2024 PEDROSA & PEIXOTO ADVOGADOS. TODOS OS DIREITOS RESERVADOS.
        </p>
        <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
          DESIGN & ESTRATÉGIA BY BOUTIQUE JURÍDICA
        </p>
      </div>
    </footer>
  );
};

export default Footer;