import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Target, Award } from 'lucide-react';
import heroBg from '../assets/images/hero_tactical_woman_1783432734126.jpg';
import logoSvg from '../assets/logo-paulo-pithon.svg';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Hero() {
  const getWhatsAppLink = () =>
    getWhatsAppUrl(
      'Olá! Visitei o site e quero agendar minha primeira instrução de tiro e autodefesa.'
    );

  const handleScrollToCourses = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.querySelector('#cursos');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-tactical-dark pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Mulher praticando autodefesa em estande de tiro moderno de elite"
          className="w-full h-full object-cover object-center scale-105 filter brightness-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark via-tactical-dark/80 to-tactical-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-tactical-dark via-transparent to-tactical-dark/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_15%,rgba(10,11,13,0.92)_85%)]" />
      </div>

      <div className="absolute top-1/4 left-10 w-48 h-px bg-gradient-to-r from-tactical-yellow/30 to-transparent hidden xl:block" />
      <div className="absolute top-1/4 left-10 w-px h-24 bg-gradient-to-b from-tactical-yellow/30 to-transparent hidden xl:block" />
      <div className="absolute bottom-1/4 right-10 w-48 h-px bg-gradient-to-l from-tactical-yellow/30 to-transparent hidden xl:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-24 bg-gradient-to-t from-tactical-yellow/30 to-transparent hidden xl:block" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 flex flex-col items-center text-center">
        {/* Large bouncing logo */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[85%] sm:w-[90%] aspect-square rounded-full bg-tactical-yellow/20 blur-3xl animate-logo-glow-pulse" />
          </div>
          <div className="relative animate-logo-bounce">
            <img
              src={logoSvg}
              alt="Paulo Pithon - Instrutor de Armamento e Tiro"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain drop-shadow-[0_8px_32px_rgba(225,173,1,0.35)]"
              width={288}
              height={288}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="w-8 h-px bg-tactical-yellow" />
          <span className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-tactical-yellow font-semibold uppercase">
            Capacitação & Autoproteção Feminina
          </span>
          <span className="w-8 h-px bg-tactical-yellow" />
        </motion.div>

        <motion.h1
          className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08] max-w-5xl mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          SEGURANÇA, DISCIPLINA E{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow via-tactical-gold to-white">
            PODER DECISÓRIO
          </span>
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 font-sans max-w-2xl mb-6 sm:mb-10 leading-relaxed px-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Instrução de tiro esportivo e autodefesa tática de elite para mulheres.
          Desenvolva prontidão física e clareza emocional em ambiente credenciado e seguro.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 justify-center w-full max-w-md sm:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-bold text-sm sm:text-base uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-5 rounded-sm shadow-xl shadow-tactical-yellow/15 hover:shadow-tactical-yellow/30 transition-all duration-300"
          >
            Quero Agendar Instrução
            <ArrowRight className="h-4 w-4 animate-pulse" />
          </a>

          <button
            onClick={handleScrollToCourses}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-tactical-dark/60 hover:bg-tactical-gray text-white border border-white/10 hover:border-tactical-yellow/50 font-display font-semibold text-sm sm:text-base uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-5 rounded-sm backdrop-blur-sm transition-all duration-300"
          >
            Ver Produtos
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8 mt-8 sm:mt-12 w-full max-w-4xl border-t border-white/5 pt-6 sm:pt-8 px-2 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          {[
            { icon: Shield, title: '100% Seguro', sub: 'Clube credenciado e vigiado' },
            { icon: Target, title: 'Elite Técnica', sub: 'Armas e insumos modernos' },
            { icon: Award, title: 'Profissionais Reais', sub: 'Instrutores credenciados' },
          ].map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex items-center gap-3 sm:gap-4 w-full max-w-[280px] mx-auto sm:max-w-none sm:mx-0"
            >
              <div className="flex-shrink-0 w-11 sm:w-12 flex items-center justify-center p-2.5 sm:p-3 bg-tactical-gray rounded-sm border border-white/5">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-tactical-yellow" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <h4 className="font-display font-bold text-white text-xs sm:text-sm uppercase tracking-wide">
                  {title}
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-400 font-mono leading-snug">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 hidden lg:flex select-none opacity-20 pointer-events-none">
        <span className="font-mono text-[9px] text-gray-400 tracking-[0.2em] rotate-90 my-8">
          LAT. 23.5505° S
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
      </div>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 hidden lg:flex select-none opacity-20 pointer-events-none">
        <div className="w-px h-16 bg-gradient-to-t from-white to-transparent" />
        <span className="font-mono text-[9px] text-gray-400 tracking-[0.2em] -rotate-90 my-8">
          LONG. 46.6333° W
        </span>
      </div>
    </section>
  );
}
