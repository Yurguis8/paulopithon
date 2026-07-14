import { ArrowRight } from 'lucide-react';
import palestrasFlyer from '../assets/images/palestras.jpeg';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function PalestrasSection() {
  const whatsappUrl = getWhatsAppUrl(
    'Olá! Gostaria de contratar o Paulo Pithon para uma palestra. Pode me passar mais informações sobre disponibilidade e temas?'
  );

  return (
    <section id="palestras" className="relative z-20 border-b border-white/5 bg-tactical-dark">
      <div className="flex justify-center">
        <img
          src={palestrasFlyer}
          alt="Planfeto — Palestras com Paulo Pithon: Auto-Defesa, Mentalidade de Combate e Consciência Situacional"
          className="w-full h-auto block md:max-h-[75vh] md:w-auto md:max-w-md lg:max-w-lg object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="flex justify-center px-4 py-6 sm:py-8">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-bold text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-300 shadow-lg shadow-tactical-yellow/15 hover:shadow-tactical-yellow/30"
        >
          Solicitar Palestra
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
