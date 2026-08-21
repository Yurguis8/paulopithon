import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { getWhatsAppUrl } from '../utils/whatsapp';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa todas as imagens da pasta assets/images/banners
const bannerImages = Object.values(
  import.meta.glob('../assets/images/banners/*.{png,jpg,jpeg,webp}', {
    eager: true,
    import: 'default',
  })
);

export default function PalestrasSection() {
  const whatsappUrl = getWhatsAppUrl(
    'Olá! Gostaria de contratar o Paulo Pithon para uma palestra. Pode me passar mais informações sobre disponibilidade e temas?'
  );

  return (
    <section id="palestras" className="relative z-20 border-b border-white/5 bg-tactical-dark">
      {/* Container do Carrossel */}
      <div className="w-full relative py-4 flex justify-center">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={bannerImages.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          /* Define a cor amarela (#facc15 / amarelo tático) nas variáveis do Swiper */
          style={{
            '--swiper-navigation-color': '#facc15',
            '--swiper-pagination-color': '#facc15',
            '--swiper-pagination-bullet-inactive-color': '#ffffff',
            '--swiper-pagination-bullet-inactive-opacity': '0.4',
          }}
          className="w-full h-auto md:max-h-[75vh]"
        >
          {bannerImages.map((src, index) => (
            <SwiperSlide 
              key={index} 
              className="!flex !justify-center !items-center text-center w-full"
            >
              {/* Imagem perfeitamente centralizada e contida */}
              <img
                src={src}
                alt={`Slide ${index + 1} - Palestras com Paulo Pithon`}
                className="mx-auto block w-full h-auto md:max-h-[75vh] md:w-auto md:max-w-md lg:max-w-lg object-contain"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Botão de Ação (CTA) */}
      <div className="flex justify-center px-4 py-6 sm:py-8">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-bold text-sm uppercase tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm transition-all duration-300 shadow-lg shadow-tactical-yellow/15 hover:shadow-tactical-yellow/30 relative z-10"
        >
          Solicitar Palestra
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}