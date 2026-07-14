import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative z-20 bg-tactical-graphite py-24 lg:py-32 border-y border-white/5 overflow-hidden">
      {/* Decorative background radar circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/2 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/[0.01] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl mb-6">
            A VOZ DAS MULHERES <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
              QUE CONQUISTARAM SEU ESPAÇO
            </span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Veja as avaliações de delegadas de polícia, criminalistas, empresárias e alunas que iniciaram do absoluto zero e transformaram sua segurança pessoal.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-tactical-dark border border-white/5 rounded-sm p-8 sm:p-10 flex flex-col justify-between hover:border-tactical-yellow/20 hover:shadow-2xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Corner quote mark */}
              <Quote className="absolute top-8 right-8 h-10 w-10 text-white/5 group-hover:text-tactical-yellow/5 transition-colors duration-300" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-tactical-yellow text-tactical-yellow" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Profile block */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10 group-hover:border-tactical-yellow transition-colors duration-300">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover filter brightness-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base uppercase tracking-wider group-hover:text-tactical-yellow transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="font-mono text-[10px] text-gray-400">
                    {testimonial.role}
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
