import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingBag, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { getWhatsAppUrl, getProductWhatsAppMessage } from '../utils/whatsapp';
import type { Product } from '../types';

const SWIPE_THRESHOLD = 50;
const MAX_QUANTITY = 99;

function formatTotal(numericPrice: number, quantity: number): string {
  return (numericPrice * quantity).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function QuantitySelector({
  quantity,
  onChange,
}: {
  quantity: number;
  onChange: (qty: number) => void;
}) {
  const decrease = () => onChange(Math.max(1, quantity - 1));
  const increase = () => onChange(Math.min(MAX_QUANTITY, quantity + 1));

  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">
        Qtd
      </span>
      <div className="flex items-center border border-white/10 rounded-sm overflow-hidden bg-tactical-gray/50">
        <button
          type="button"
          onClick={decrease}
          disabled={quantity <= 1}
          aria-label="Diminuir quantidade"
          className="p-2 sm:p-2.5 text-gray-300 hover:text-tactical-yellow hover:bg-white/5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <Minus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
        <span className="min-w-[2rem] sm:min-w-[2.5rem] text-center font-display font-bold text-sm sm:text-base text-white tabular-nums">
          {quantity}
        </span>
        <button
          type="button"
          onClick={increase}
          disabled={quantity >= MAX_QUANTITY}
          aria-label="Aumentar quantidade"
          className="p-2 sm:p-2.5 text-gray-300 hover:text-tactical-yellow hover:bg-white/5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </button>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = formatTotal(product.numericPrice, quantity);
  const whatsappUrl = getWhatsAppUrl(getProductWhatsAppMessage(product, quantity));

  return (
    <article className="product-card group relative flex flex-col h-full bg-tactical-dark border border-white/5 rounded-sm overflow-hidden transition-all duration-500 hover:border-tactical-yellow/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
      {product.isPopular && (
        <span className="absolute top-3 right-3 z-10 font-mono text-[8px] sm:text-[9px] font-bold tracking-widest uppercase bg-tactical-yellow text-tactical-dark px-2 py-0.5 rounded-sm shadow-md">
          Destaque
        </span>
      )}

      <div className="relative aspect-[4/3] sm:aspect-[3/2] overflow-hidden bg-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark/90 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 group-hover:text-tactical-yellow transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        <div className="mb-4">
          <QuantitySelector quantity={quantity} onChange={setQuantity} />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-white/5 mt-auto">
          <div>
            <span className="block font-mono text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-widest">
              {quantity > 1 ? `Total (${quantity}x)` : 'Preço'}
            </span>
            <span className="font-display font-extrabold text-xl sm:text-2xl text-tactical-yellow tracking-tight">
              {quantity > 1 ? totalPrice : product.price}
            </span>
            {quantity > 1 && (
              <span className="block font-mono text-[10px] text-gray-500 mt-0.5">
                {product.price} cada
              </span>
            )}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-tactical-yellow to-tactical-gold hover:from-tactical-yellow-hover hover:to-tactical-yellow text-tactical-dark font-display font-bold text-xs sm:text-sm uppercase tracking-wider px-4 py-2.5 sm:px-5 sm:py-3 rounded-sm transition-all duration-300 shadow-lg shadow-tactical-yellow/10 hover:shadow-tactical-yellow/25 active:scale-95 w-full sm:w-auto"
          >
            <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Comprar
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductCatalog() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);

  const maxIndex = Math.max(0, PRODUCTS.length - 1);

  const updateCardWidth = useCallback(() => {
    if (!trackRef.current?.parentElement) return;
    const container = trackRef.current.parentElement;
    const gap = window.innerWidth >= 640 ? 24 : 16;
    const peek = window.innerWidth >= 1024 ? 0.15 : window.innerWidth >= 640 ? 0.1 : 0.08;
    const visibleWidth = container.clientWidth;
    const width = visibleWidth * (1 - peek);
    setCardWidth(width - gap);
  }, []);

  useEffect(() => {
    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, [updateCardWidth]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex]
  );

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchDeltaX.current < -SWIPE_THRESHOLD) goTo(activeIndex + 1);
    else if (touchDeltaX.current > SWIPE_THRESHOLD) goTo(activeIndex - 1);
    touchDeltaX.current = 0;
  };

  const [gap, setGap] = useState(16);

  useEffect(() => {
    const updateGap = () => setGap(window.innerWidth >= 640 ? 24 : 16);
    updateGap();
    window.addEventListener('resize', updateGap);
    return () => window.removeEventListener('resize', updateGap);
  }, []);

  const offset = activeIndex * (cardWidth + gap);

  return (
    <section
      id="cursos"
      className="relative z-20 bg-tactical-graphite py-10 sm:py-16 lg:py-20 border-b border-white/5"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:30px_30px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-6 sm:mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight max-w-3xl mb-3 sm:mb-6 px-2">
            EQUIPAMENTOS DE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tactical-yellow to-white">
              AUTODEFESA
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl leading-relaxed px-2">
            Escolha a quantidade e compre direto pelo WhatsApp. Arraste para ver mais.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Produto anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-4 z-20 p-2 sm:p-3 rounded-full bg-tactical-dark/90 border border-white/10 text-white hover:border-tactical-yellow/50 hover:text-tactical-yellow transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-lg backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex >= maxIndex}
            aria-label="Próximo produto"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-4 z-20 p-2 sm:p-3 rounded-full bg-tactical-dark/90 border border-white/10 text-white hover:border-tactical-yellow/50 hover:text-tactical-yellow transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-lg backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div
            className="overflow-hidden mx-8 sm:mx-12 touch-pan-y py-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              ref={trackRef}
              className="flex gap-4 sm:gap-6 items-stretch"
              animate={{ x: -offset }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 relative p-1"
                  style={{ width: cardWidth || '85vw' }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-8">
            {PRODUCTS.map((product, index) => (
              <button
                key={product.id}
                onClick={() => goTo(index)}
                aria-label={`Ir para produto ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-6 bg-tactical-yellow'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
