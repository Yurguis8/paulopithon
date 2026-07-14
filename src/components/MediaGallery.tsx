import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, ImageIcon } from 'lucide-react';
import { GALLERY_MEDIA } from '../data/media';

export default function MediaGallery() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasVideo = Boolean(GALLERY_MEDIA.videoSrc);

  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <section
      id="galeria"
      className="relative z-20 bg-tactical-dark py-10 sm:py-16 lg:py-20 border-b border-white/5 overflow-hidden"
    >
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-tactical-gold/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Vídeo vertical de fundo */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 border border-tactical-yellow/15 rounded-2xl transform translate-x-2 translate-y-2 pointer-events-none" />
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-tactical-graphite">
              {hasVideo ? (
                <video
                  ref={videoRef}
                  src={GALLERY_MEDIA.videoSrc}
                  poster={GALLERY_MEDIA.posterSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              ) : (
                <img
                  src={GALLERY_MEDIA.posterSrc}
                  alt="Conteúdo visual Paulo Pithon"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark/70 via-transparent to-tactical-dark/20 pointer-events-none" />

              {hasVideo && !isPlaying && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Reproduzir vídeo"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-tactical-yellow/90 text-tactical-dark shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-current ml-0.5" />
                  </span>
                </button>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                <p className="font-mono text-[9px] text-tactical-yellow tracking-widest uppercase mb-0.5">
                  {hasVideo ? 'Vídeo Vertical' : 'Em breve — vídeo'}
                </p>
                <p className="font-display font-bold text-white text-sm">Paulo Pithon</p>
              </div>
            </div>
          </motion.div>

          {/* Planfetos / GIFs sobrepostos */}
          <motion.div
            className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 w-full max-w-md lg:max-w-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {GALLERY_MEDIA.overlays.map((overlay, index) => (
              <motion.div
                key={overlay.id}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="absolute inset-0 border border-tactical-yellow/10 rounded-sm transform translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform pointer-events-none" />
                <div className="relative rounded-sm overflow-hidden border border-white/10 bg-tactical-graphite shadow-xl group-hover:border-tactical-yellow/25 transition-colors duration-300">
                  <img
                    src={overlay.src}
                    alt={overlay.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            ))}

            <p className="text-gray-500 text-xs font-mono text-center lg:text-left mt-2">
              Novos planfetos e GIFs podem ser adicionados em{' '}
              <code className="text-tactical-yellow/70">src/data/media.ts</code>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
