import { motion } from 'motion/react';
import { ShieldCheck, Target, UserCheck, Scale } from 'lucide-react';

export default function ValuePrepositions() {
  const pillars = [
    {
      id: 'pillar-1',
      icon: <UserCheck className="h-8 w-8 text-tactical-yellow" />,
      title: 'Autoconfiança & Autonomia',
      description: 'Nosso objetivo não é criar combatentes impulsivas, mas sim mulheres mentalmente preparadas, seguras e cientes do seu espaço. O conhecimento tático liberta o medo e desenvolve postura ativa na sociedade.',
      badge: 'MENTALIDADE'
    },
    {
      id: 'pillar-2',
      icon: <ShieldCheck className="h-8 w-8 text-tactical-yellow" />,
      title: 'Segurança e Controle Total',
      description: 'Possuímos infraestrutura com padrões máximos internacionais de segurança. Cada disparo, manuseio e prática é supervisionado individualmente por instrutores dedicados. Risco zero é nossa única métrica aceitável.',
      badge: 'PROTOCOLOS'
    },
    {
      id: 'pillar-3',
      icon: <Target className="h-8 w-8 text-tactical-yellow" />,
      title: 'Didática de Elite',
      description: 'Nossa equipe de instrutores reúne policiais e investigadores com capacitação em operações especiais no Brasil e no exterior, formação acadêmica em direito e pós-graduação em inteligência e segurança pública.',
      badge: 'METODOLOGIA'
    },
    {
      id: 'pillar-4',
      icon: <Scale className="h-8 w-8 text-tactical-yellow" />,
      title: 'Responsabilidade e Cidadania',
      description: 'Promovemos o treinamento com armas de fogo estritamente de forma legal, responsável e desportiva. Orientamos todas as alunas sobre a legislação vigente de posse, legítima defesa e guarda segura doméstica.',
      badge: 'LEGALIDADE'
    }
  ];

  return (
    <section id="pilares" className="relative z-20 bg-tactical-dark py-24 lg:py-32 overflow-hidden">
      {/* Decorative vertical light beam */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-tactical-yellow/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-tactical-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl mb-6">
            A CIÊNCIA DA AUTOPROTEÇÃO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
              BASEADA EM DISCIPLINA E RIGOR
            </span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Nossa doutrina foi desenvolvida por especialistas em segurança pública para proporcionar o ambiente de aprendizado mais respeitável, focado e transformador do Brasil.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              className="group relative bg-gradient-to-b from-tactical-gray/80 to-tactical-graphite/80 border border-white/5 hover:border-tactical-yellow/20 p-8 sm:p-10 rounded-sm hover:shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card border shine glowing indicator */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-tactical-yellow/30 transition-all duration-500" />
              
              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Icon wrapper */}
                <div className="flex-shrink-0 p-4 bg-tactical-dark border border-white/10 rounded-sm text-tactical-yellow group-hover:bg-tactical-yellow group-hover:text-tactical-dark group-hover:border-transparent transition-all duration-500 shadow-md">
                  {pillar.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] tracking-widest text-tactical-yellow font-bold bg-tactical-yellow/10 border border-tactical-yellow/20 px-2 py-0.5 rounded-sm">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-tactical-yellow transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
