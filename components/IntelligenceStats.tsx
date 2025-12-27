
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface IntelligenceStatsProps {
  isDarkMode: boolean;
}

const IntelligenceStats: React.FC<IntelligenceStatsProps> = ({ isDarkMode }) => {
  const data = [
    { name: 'Indústria', value: 94, color: isDarkMode ? '#FFFFFF' : '#1e293b' },
    { name: 'Serviços', value: 88, color: isDarkMode ? '#A3A3A3' : '#475569' },
    { name: 'Agro', value: 72, color: isDarkMode ? '#525252' : '#94a3b8' },
    { name: 'Varejo', value: 91, color: isDarkMode ? '#D4D4D4' : '#64748b' },
  ];

  return (
    <section id="performance" className={`py-32 transition-colors duration-500 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFA335] mb-4 block font-bold">Resultados Verificáveis</span>
          <h2 className={`serif text-5xl md:text-6xl mb-8 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Performance Pedrosa & Peixoto.</h2>
          <p className={`font-light leading-relaxed mb-8 transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-600'}`}>
            Nossa credibilidade é construída sobre deferimentos reais junto à PGFN. Unimos o rigor da advocacia tradicional à agilidade da consultoria moderna para assegurar o futuro fiscal do seu grupo econômico.
          </p>
          
          <div className={`grid grid-cols-2 gap-8 border-t pt-8 transition-colors ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
            <div>
              <p className={`serif text-4xl mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>R$ 87M+</p>
              <p className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Economia Gerada</p>
            </div>
            <div>
              <p className={`serif text-4xl mb-1 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>218</p>
              <p className={`text-[10px] uppercase tracking-widest font-medium transition-colors ${isDarkMode ? 'text-white/40' : 'text-slate-400'}`}>Casos de Sucesso</p>
            </div>
          </div>
        </div>

        <div className={`glass p-8 border-thin transition-all ${
          isDarkMode ? 'bg-white/[0.03]' : 'bg-slate-50 border-slate-200 shadow-sm'
        }`}>
          <div className="mb-6 flex justify-between items-center">
            <p className={`text-[10px] uppercase tracking-widest transition-colors ${isDarkMode ? 'text-white/60' : 'text-slate-500'}`}>Redução de Multas e Juros por Setor</p>
            <div className="w-2 h-2 bg-[#EFA335] rounded-full animate-pulse" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#262626" : "#e2e8f0"} vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke={isDarkMode ? "#525252" : "#94a3b8"} 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  cursor={{ fill: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }}
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#171717' : '#ffffff', 
                    border: `1px solid ${isDarkMode ? '#404040' : '#e2e8f0'}`, 
                    fontSize: '10px',
                    color: isDarkMode ? '#ffffff' : '#000000'
                  }}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#EFA335' : entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceStats;
