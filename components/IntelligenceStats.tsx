
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Indústria', value: 94, color: '#FFFFFF' },
  { name: 'Serviços', value: 88, color: '#A3A3A3' },
  { name: 'Agro', value: 72, color: '#525252' },
  { name: 'Varejo', value: 91, color: '#D4D4D4' },
];

const IntelligenceStats: React.FC = () => {
  return (
    <section id="inteligência" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#EFA335] mb-4 block font-bold">Resultados Verificáveis</span>
          <h2 className="serif text-5xl md:text-6xl mb-8">Performance Pedrosa & Peixoto.</h2>
          <p className="text-white/60 font-light leading-relaxed mb-8">
            Nossa credibilidade é construída sobre deferimentos reais junto à PGFN. Unimos o rigor da advocacia tradicional à agilidade da consultoria moderna para assegurar o futuro fiscal do seu grupo econômico.
          </p>
          
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="serif text-4xl mb-1 text-white">R$ 87M+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Economia Gerada</p>
            </div>
            <div>
              <p className="serif text-4xl mb-1 text-white">218</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Casos de Sucesso</p>
            </div>
          </div>
        </div>

        <div className="glass p-8 border-thin">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-[10px] uppercase tracking-widest text-white/60">Redução de Multas e Juros por Setor</p>
            <div className="w-2 h-2 bg-[#EFA335] rounded-full animate-pulse" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#525252" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #404040', fontSize: '10px' }}
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