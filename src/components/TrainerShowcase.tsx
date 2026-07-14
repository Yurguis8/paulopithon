import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crosshair, Award, GraduationCap, BadgeCheck } from 'lucide-react';
import { TRAINER_IMAGES } from '../data/trainer';

export default function TrainerShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="instrutor"
      className="relative z-20 bg-tactical-dark py-10 sm:py-16 lg:py-20 overflow-hidden border-b border-white/5"
    >
      <div className="absolute right-0 bottom-0 w-64 sm:w-96 h-64 sm:h-96 bg-tactical-yellow/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-tactical-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content — first on mobile */}
          <div className="order-2 lg:order-1">

            <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 sm:mb-6">
              PAULO PITHON
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
                ARMAMENTO & TIRO
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              Equipe de instrutores com anos de experiência em estandes credenciados.
              Treinamento rigoroso, técnico e focado na sua segurança e autoconfiança.
            </p>

            <div className="mb-6 sm:mb-8 p-4 sm:p-5 bg-tactical-gray/30 border border-tactical-yellow/20 rounded-sm">
              <div className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-tactical-yellow flex-shrink-0 mt-0.5" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <span className="font-display font-bold text-white">Paulo Pithon</span>
                  {' — '}policial, instrutor de armamento e tiro, palestrante, formado em
                  direito, pós-graduando em neurociência e comportamento humano em combate.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: Crosshair, label: 'Tiro Prático', sub: 'Pista real' },
                { icon: Award, label: '5+ Anos', sub: 'Experiência' },
                { icon: GraduationCap, label: 'Formação', sub: 'Direito & Neurociência' },
              ].map(({ icon: Icon, label, sub }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2 p-3 sm:p-4 bg-tactical-gray/30 border border-white/5 rounded-sm"
                >
                  <Icon className="h-5 w-5 text-tactical-yellow flex-shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-white text-sm">{label}</p>
                    <p className="text-[10px] sm:text-xs text-gray-400 font-mono">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer images with pulse animation */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Pulsing glow rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[90%] aspect-[3/4] rounded-sm border border-tactical-yellow/20 animate-pulse-ring" />
                <div className="absolute w-[95%] aspect-[3/4] rounded-sm border border-tactical-yellow/10 animate-pulse-ring-delayed" />
              </div>

              <motion.div
                className="relative z-10"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={TRAINER_IMAGES[activeIndex].id}
                      src={TRAINER_IMAGES[activeIndex].src}
                      alt={TRAINER_IMAGES[activeIndex].alt}
                      className="w-full h-full object-cover object-top"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5 }}
                      loading={activeIndex === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-mono text-[9px] sm:text-[10px] text-tactical-yellow tracking-widest uppercase mb-1">
                      Instrutor de Elite
                    </p>
                    <p className="font-display font-bold text-white text-lg sm:text-xl">
                      Paulo Pithon
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Thumbnail selector */}
              <div className="flex gap-2 sm:gap-3 mt-4 justify-center lg:justify-start overflow-x-auto pb-1 scrollbar-hide">
                {TRAINER_IMAGES.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Ver foto ${index + 1}`}
                    className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                      index === activeIndex
                        ? 'border-tactical-yellow shadow-lg shadow-tactical-yellow/20 scale-105'
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute -z-10 inset-0 border border-tactical-yellow/10 rounded-sm transform translate-x-3 translate-y-3 hidden sm:block pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
