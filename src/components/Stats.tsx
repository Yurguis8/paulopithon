import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Users, Target, CalendarRange } from 'lucide-react';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ value, duration = 1500, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
}

export default function Stats() {
  const statsList = [
    {
      id: 'stat-1',
      icon: <Users className="h-6 w-6 text-tactical-yellow" />,
      value: 100,
      suffix: '+',
      label: 'Mulheres Capacitadas',
      description: 'Alunas formadas em autoproteção inteligente e tiro esportivo responsável.'
    },
    {
      id: 'stat-2',
      icon: <ShieldAlert className="h-6 w-6 text-tactical-yellow" />,
      value: 100,
      suffix: '%',
      label: 'Segurança & Rigor Técnico',
      description: 'Incidente zero. Protocolos estritos de nível militar de controle de armamento.'
    },
    {
      id: 'stat-3',
      icon: <Target className="h-6 w-6 text-tactical-yellow" />,
      value: 5,
      suffix: '+',
      label: 'Anos de experiência',
      description: 'Instrutores credenciados com experiência em operações especiais, investigação criminal e segurança pública.'
    },
    {
      id: 'stat-4',
      icon: <CalendarRange className="h-6 w-6 text-tactical-yellow" />,
      value: 2,
      suffix: 'k+',
      label: 'Horas de Instrução',
      description: 'De prática rigorosa e palestras de autoproteção nas dependências de treino.'
    }
  ];

  return (
    <section className="relative z-20 bg-tactical-graphite py-16 border-y border-white/5">
      {/* Decorative tactical background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,173,1,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsList.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="relative group bg-tactical-dark/40 border border-white/5 rounded-sm p-6 flex flex-col justify-between hover:border-tactical-yellow/30 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Corner tech line decoration */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-tactical-yellow transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-transparent group-hover:border-tactical-yellow transition-colors duration-300" />

              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-tactical-gray border border-white/5 rounded-sm">
                  {stat.icon}
                </div>
                <div className="text-right">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-sm text-gray-200 uppercase tracking-wider mb-2 group-hover:text-tactical-yellow transition-colors duration-300">
                  {stat.label}
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
