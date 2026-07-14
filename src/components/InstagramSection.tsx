import { Instagram, ArrowUpRight } from 'lucide-react';

export default function InstagramSection() {
  const instagramUrl = 'https://www.instagram.com/paulopithon?igsh=MW91NmdtMnh2dTNjaA==';

  return (
    <section className="relative z-20 w-full bg-tactical-dark border-y border-white/5 py-12 flex flex-col items-center justify-center">
      {/* Container vertical sem cortes, mantendo a proporção 9:16 original do vídeo */}
      <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[9/16] rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/instagram.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        {/* Botão flutuante centralizado do Instagram */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center gap-3 bg-tactical-dark hover:bg-tactical-yellow text-white hover:text-tactical-dark border-2 border-tactical-yellow font-display font-extrabold text-sm sm:text-base uppercase tracking-wider px-6 py-3.5 sm:px-8 sm:py-5 rounded-sm transition-all duration-300 shadow-[0_4px_35px_rgba(0,0,0,0.9)] active:scale-95 group"
          >
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-tactical-yellow group-hover:text-tactical-dark transition-colors duration-300" />
            <span>Siga no Instagram</span>
            <ArrowUpRight className="h-4 w-4 sm:h-5 w-5 opacity-70" />
          </a>
        </div>
      </div>
    </section>
  );
}
