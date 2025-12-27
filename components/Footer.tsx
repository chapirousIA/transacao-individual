
import React from 'react';
import Logo from './Logo';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const waNumber = "5585994059821";
  const footerWaMsg = encodeURIComponent("Olá! Encontrei o contato no site da Pedrosa & Peixoto e gostaria de agendar uma consulta estratégica.");

  return (
    <footer id="contato" className={`py-20 transition-colors duration-500 border-t ${
      isDarkMode ? 'bg-black border-white/10' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-8">
            <Logo light={isDarkMode} scale={0.9} />
          </div>
          <p className={`text-sm max-w-xs leading-relaxed font-light mb-8 transition-colors ${
            isDarkMode ? 'text-white/40' : 'text-slate-500'
          }`}>
            Excelência jurídica focada em Transações Individuais e reestruturação de CAPAG para grupos econômicos de alta performance.
          </p>
          <div className="flex gap-4">
            {['LN', 'IG'].map(i => (
              <a key={i} href="#" className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] transition-all ${
                isDarkMode 
                  ? 'border-white/10 text-white/40 hover:text-[#EFA335] hover:border-[#EFA335]' 
                  : 'border-slate-200 text-slate-400 hover:text-[#EFA335] hover:border-[#EFA335]'
              }`}>
                {i}
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className={`text-[10px] uppercase tracking-widest mb-6 font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Presença</h4>
          <ul className={`space-y-4 text-xs tracking-wide transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-500'}`}>
            <li>São Paulo - Ed. Faria Lima Hub</li>
            <li>Brasília - Complexo Administrativo</li>
            <li>Porto Alegre - Corporate Park</li>
          </ul>
        </div>

        <div>
          <h4 className={`text-[10px] uppercase tracking-widest mb-6 font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Relacionamento</h4>
          <p className={`text-xs mb-2 transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-500'}`}>atendimento@pedrosapeixoto.adv.br</p>
          <a 
            href={`https://wa.me/${waNumber}?text=${footerWaMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#EFA335] text-xs font-bold hover:underline"
          >
            +55 85 99405-9821
          </a>
        </div>
      </div>
      
      <div className={`max-w-7xl mx-auto px-6 mt-20 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 transition-colors ${
        isDarkMode ? 'border-white/5' : 'border-slate-100'
      }`}>
        <p className={`text-[8px] uppercase tracking-[0.4em] transition-colors ${isDarkMode ? 'text-white/20' : 'text-slate-400'}`}>
          © 2024 PEDROSA & PEIXOTO ADVOGADOS. TODOS OS DIREITOS RESERVADOS.
        </p>
        <p className={`text-[8px] uppercase tracking-[0.4em] transition-colors ${isDarkMode ? 'text-white/20' : 'text-slate-400'}`}>
          DESIGN & ESTRATÉGIA BY BOUTIQUE JURÍDICA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
