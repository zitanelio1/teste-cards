import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { BONUSES } from '../data.ts';

interface BonusAndPricingSectionProps {
  onOpenCheckout: (plan: 'vip') => void;
}

export function BonusAndPricingSection({ onOpenCheckout }: BonusAndPricingSectionProps) {
  return (
    <section id="oferta" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-teal-50/40 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* SEÇÃO DE BÓNUS */}
        <div id="secao-bonus" className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3.5 py-1 rounded-full">
              Bónus Exclusivos de Lançamento
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 font-display">
              Bónus Inclusos Gratuitamente
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Ao garantir o seu acesso hoje, recebe também estes 4 guias práticos em PDF sem qualquer custo adicional.
            </p>
          </div>

          {/* Grid dos 4 Bónus sem container VIP pesado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BONUSES.map((bonus, idx) => (
              <div
                key={bonus.tag}
                id={`bonus-card-${idx + 1}`}
                className="border border-slate-200 rounded-2xl p-4 bg-white shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wide text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
                    {bonus.tag}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mt-2">{bonus.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{bonus.description}</p>
                </div>
                <div className="mt-3 aspect-video bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTAINER DE PREÇO (APENAS 1 CARD CENTRALIZADO) */}
        <div className="max-w-xl mx-auto">
          <div
            id="plan-single-card"
            className="relative bg-white border-2 border-teal-600 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col justify-between ring-4 ring-teal-500/10"
          >
            {/* Tag Superior */}
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-extrabold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-md border border-teal-200 mb-2">
                Cards Clínicos + 4 Bónus
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
                Acesso Digital Completo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Cards ilustrados em alta resolução + 4 Guias de Bolso em PDF.
              </p>
            </div>

            {/* Preço */}
            <div className="text-center my-4 py-4 bg-slate-50/80 rounded-2xl border border-slate-200/70">
              <div className="text-xs sm:text-sm text-slate-400 font-semibold mb-1">
                Valor Normal: <span className="line-through font-mono">297,00 MT</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-teal-800 font-display tracking-tight">
                179,00 Meticais
              </div>
              <p className="text-xs text-slate-600 font-medium mt-1">
                Pagamento único • Sem mensalidades
              </p>
            </div>

            {/* Lista de Benefícios */}
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 py-6 border-t border-slate-100">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>+300 Cards Clínicos Ilustrados</strong> de Alta Resolução</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>4 Guias de Bolso Bónus</strong> em PDF Inclusos</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Versão Digital Otimizada para Telemóvel e Tablet</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>PDF Pronto para Impressão</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Download Imediato após a confirmação</span>
              </li>
            </ul>

            {/* Botão de CTA sem preço */}
            <div className="pt-2 border-t border-slate-100">
              <button
                id="btn-buy-now"
                onClick={() => onOpenCheckout('vip')}
                className="w-full py-4 bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-teal-700/30 hover:shadow-teal-700/50 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Quero meus cards agora</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Formas de pagamento abaixo do botão */}
              <div className="text-center mt-4 space-y-1.5">
                <p className="text-xs font-semibold text-slate-700">
                  Pagamento seguro: M-Pesa, E-Mola e Cartão Bancário
                </p>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Liberação imediata no WhatsApp e E-mail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
