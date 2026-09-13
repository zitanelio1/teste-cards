import { MessageSquare } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold rounded-full mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Feedbacks Verificados de Quem Já Utiliza</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Veja o Que Dizem Quem Já Adquiriu
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Estudantes e profissionais de saúde que utilizam os cards no dia a dia.
          </p>
        </div>

        {/* Grid com os 2 Feedbacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-start">
          {/* Feedback 1 */}
          <div
            id="testimonial-card-1"
            className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src="https://i.ibb.co/XrX7ddzp/Chat-GPT-Image-11-de-set-de-2026-07-53-35.png"
                alt="Depoimento WhatsApp de Aluno dos Cards de Enfermagem"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Feedback 2 */}
          <div
            id="testimonial-card-2"
            className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="overflow-hidden bg-slate-100 flex items-center justify-center">
              <img
                src="https://i.ibb.co/8gxssVvG/Chat-GPT-Image-11-de-set-de-2026-07-48-44.png"
                alt="Feedback Real de Quem Adquiriu os Cards de Enfermagem"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
