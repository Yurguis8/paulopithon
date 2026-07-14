import { motion } from 'motion/react';
import { Award, ShieldAlert, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';
import trainerStanding from '../assets/images/trainer/trainer-standing.jpg';

export default function AboutAcademy() {
  const credentials = [
    {
      id: 'cred-3',
      icon: <HeartHandshake className="h-5 w-5 text-tactical-yellow" />,
      title: 'Apoio Emocional e Humanizado',
      description: 'Doutrina adaptada para quebrar bloqueios psicológicos, pânico de barulho de disparo e fobias de armas de fogo.'
    },
    {
      id: 'cred-4',
      icon: <Eye className="h-5 w-5 text-tactical-yellow" />,
      title: 'Mentoria Individual Personalizada',
      description: 'Na linha de tiro, cada aluna recebe a mentoria personalizada do instrurtor ao seu lado durante 100% dos disparos.'
    }
  ];

  return (
    <section id="academia" className="relative z-20 bg-tactical-dark py-12 sm:py-20 lg:py-28 overflow-hidden">
      {/* Dynamic ambient radial glows */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-tactical-yellow/2 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-tactical-gold/3 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text/Content Section */}
          <div className="lg:col-span-7">
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
              AUTORIDADE TÁTICA E <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
                RESPEITO PELA INSTRUÇÃO
              </span>
            </h2>
            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
              Com anos de experiência em instrução de armamento e tiro, Paulo Pithon oferece um ambiente de treinamento que acolhe e compreende as demandas específicas do público feminino. Rigor metodológico, respeito às limitações de cada aluna e capacitação responsável.
            </p>

            {/* Credentials vertical list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {credentials.map((cred) => (
                <div key={cred.id} className="flex gap-4">
                  <div className="flex-shrink-0 p-2.5 h-fit bg-tactical-gray border border-white/5 rounded-sm text-tactical-yellow shadow-sm">
                    {cred.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-white text-base mb-1.5">{cred.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed">{cred.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee Badge */}
            <div className="border border-white/5 bg-tactical-gray/30 p-4 rounded-sm flex items-center gap-3.5">
              <CheckCircle2 className="h-5 w-5 text-tactical-yellow flex-shrink-0" />
              <span className="font-mono text-xs text-gray-400">
                Garantia de satisfação: Se no final da primeira hora de curso presencial você sentir que o ambiente não é seguro ou acolhedor, devolvemos 100% do seu investimento de forma imediata.
              </span>
            </div>
          </div>

          {/* Visual/Philosophical Frame side */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-gradient-to-b from-tactical-gray to-tactical-graphite border border-white/10 rounded-sm p-8 sm:p-10 shadow-2xl">
              
              {/* Shield star glow decorative element */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-tactical-yellow/5 rounded-full blur-md" />
              
              <h3 className="font-display font-extrabold text-2xl text-white mb-6 uppercase tracking-tight border-b border-white/5 pb-4">
                Doutrina de Combate
              </h3>
              
              <p className="font-sans italic text-gray-300 text-sm sm:text-base leading-relaxed mb-8 relative">
                "A arma é apenas um objeto metálico inerte. A verdadeira arma é a sua mente. Sua autoconfiança, percepção situacional ativa e sua capacidade de tomar decisões rápidas sob extrema pressão emocional é o que salvará a sua vida."
              </p>

              {/* Director bio info */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-tactical-yellow bg-tactical-dark">
                  <img
                    src={trainerStanding}
                    alt="Paulo Pithon - Instrutor"
                    className="w-full h-full object-cover object-top filter brightness-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Paulo Pithon</h4>
                  <p className="font-mono text-[10px] text-tactical-yellow">Instrutor de Armamento e Tiro</p>
                </div>
              </div>
            </div>

            {/* Back decorative glowing target shape */}
            <div className="absolute inset-0 z-0 border border-tactical-yellow/10 rounded-sm transform translate-x-4 translate-y-4 pointer-events-none hidden sm:block" />
            <div className="absolute inset-0 z-0 border border-white/5 rounded-sm transform -translate-x-4 -translate-y-4 pointer-events-none hidden sm:block" />
          </div>

        </div>
      </div>
    </section>
  );
}
