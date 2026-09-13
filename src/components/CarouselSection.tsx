import { useState, useRef, type TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { SAMPLE_CARDS } from '../data.ts';

export function CarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const activeCard = SAMPLE_CARDS[currentIndex];

  const handleSelect = (nextIdx: number) => {
    if (nextIdx === currentIndex) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(nextIdx);
      setIsFading(false);
    }, 120);
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % SAMPLE_CARDS.length;
    handleSelect(next);
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + SAMPLE_CARDS.length) % SAMPLE_CARDS.length;
    handleSelect(prev);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].screenX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="amostras" className="py-16 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-100/70 px-3 py-1 rounded-full">
            Prévia Real do Material
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-3 font-display">
            Veja Como São os Cards por Dentro
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Ilustrações claras, explicações diretas, informações essenciais e design pensado para o seu cérebro fixar o conteúdo.
          </p>
        </div>

        {/* Container do Carrossel */}
        <div
          id="carousel-stage"
          className="relative bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-xl"
        >
          {/* Palco das Imagens (Suporta Toque / Arraste) */}
          <div
            id="carousel-touch-area"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center min-h-[380px] sm:min-h-[500px]"
          >
            <img
              id="carousel-main-image"
              src={activeCard.image}
              alt={activeCard.title}
              className={`w-full max-h-[500px] sm:max-h-[580px] object-contain mx-auto transition-opacity duration-200 cursor-zoom-in ${
                isFading ? 'opacity-30' : 'opacity-100'
              }`}
              onClick={() => setIsZoomOpen(true)}
              loading="eager"
              decoding="async"
            />

            {/* Setas de Navegação */}
            <button
              onClick={handlePrev}
              id="btn-carousel-prev"
              aria-label="Card anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 text-slate-800 hover:bg-white hover:text-teal-700 shadow-md border border-slate-200 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNext}
              id="btn-carousel-next"
              aria-label="Próximo card"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/90 text-slate-800 hover:bg-white hover:text-teal-700 shadow-md border border-slate-200 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Botão Ampliar no canto inferior direito */}
            <button
              id="btn-carousel-expand"
              onClick={() => setIsZoomOpen(true)}
              className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-bold rounded-xl backdrop-blur-xs shadow-md transition-all cursor-pointer"
              title="Ampliar card"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Ampliar</span>
            </button>
          </div>

          {/* Indicadores / Dots */}
          <div id="carousel-dots" className="flex items-center justify-center gap-1.5 sm:gap-2 mt-5 flex-wrap">
            {SAMPLE_CARDS.map((card, idx) => (
              <button
                key={card.id}
                onClick={() => handleSelect(idx)}
                aria-label={`Ver prancha ${card.id}`}
                className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'bg-teal-700 w-6 sm:w-8'
                    : 'bg-slate-300 hover:bg-slate-400 w-2 sm:w-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal para Ampliar Imagem */}
      {isZoomOpen && (
        <div
          id="modal-zoom-image"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-3 sm:p-6 backdrop-blur-xs"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="relative max-w-4xl max-h-[95vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              aria-label="Fechar ampliação"
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeCard.image}
              alt={activeCard.title}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain bg-white"
            />
          </div>
        </div>
      )}
    </section>
  );
}
