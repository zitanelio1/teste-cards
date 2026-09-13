import { ArrowRight, Star, Smartphone, Sparkles, Printer } from 'lucide-react';

interface HeroSectionProps {
  onOpenCheckout: (plan: 'vip' | 'basic') => void;
}

export function HeroSection({ onOpenCheckout }: HeroSectionProps) {
  return (
    <header
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20 bg-gradient-to-b from-teal-50/70 via-white to-slate-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Avaliação em cima do título */}
        <div
          id="hero-rating"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-slate-800 text-xs sm:text-sm font-bold mb-6 shadow-xs"
        >
          <div className="flex items-center text-amber-500 gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span>4.9/5 (+2.480 avaliações)</span>
        </div>

        {/* Título Principal */}
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6 font-display"
        >
          +300 Cards Ilustrados de Enfermagem Prontos para Aprender e Entender de Forma Fácil e Visual
        </h1>

        {/* Subtítulo */}
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto mb-10 font-normal leading-relaxed"
        >
          Resumos clínicos esquematizados e de alta fixação para dominar procedimentos, medicações, cálculos e emergências sem complicações nos estudos, estágios e plantões.
        </p>

        {/* Imagem Hero (Mockup Principal logo abaixo do subtítulo) */}
        <div
          id="hero-mockup-container"
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-slate-200/80 shadow-2xl bg-white group mb-10"
        >
          <img
            id="hero-mockup-img"
            src="https://i.ibb.co/BKdk7gsG/Chat-GPT-Image-11-de-set-de-2026-07-22-27.png"
            alt="300+ Cards Ilustrados de Enfermagem - Mockup Oficial"
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Botão CTA Principal por baixo do Mockup (sem preço) */}
        <div className="flex items-center justify-center mb-8">
          <button
            id="btn-hero-cta"
            onClick={() => onOpenCheckout('vip')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 transform hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Quero meus cards agora</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Blocos de Destaque / Garantia embaixo do mockup */}
        <div id="hero-guarantees" className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2 font-semibold bg-white/80 px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>Otimizado para iOS & Android</span>
          </div>
          <div className="flex items-center gap-2 font-semibold bg-white/80 px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Formato Digital em Alta Resolução</span>
          </div>
          <div className="flex items-center gap-2 font-semibold bg-white/80 px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs">
            <Printer className="w-4 h-4 text-teal-700" />
            <span>PDF Pronto para Impressão de Bolso</span>
          </div>
        </div>
      </div>
    </header>
  );
}
