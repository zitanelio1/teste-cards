import { Stethoscope, Pill, Activity, FlaskConical, Check } from 'lucide-react';

export function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 font-display mb-3">
            Para Quem Foram Criados Estes 300+ Cards?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Desenvolvidos especialmente para estudantes e profissionais de Enfermagem e da área da Saúde em Moçambique, com conteúdos práticos para apoiar os estudos, preparação para avaliações, estágios e rotina académica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Enfermagem */}
          <div
            id="spec-enfermagem"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">Enfermagem Geral & SMI</h3>
            <p className="text-xs text-slate-600 mb-4">
              Cálculo de doses, gotejamento, diluição, procedimentos fundamentais, pensos, feridas e acessos venosos.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-600" /> Cálculos e diluições sem erro
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-teal-600" /> Sinais vitais e monitorização clínica
              </li>
            </ul>
          </div>

          {/* 2. Farmacologia */}
          <div
            id="spec-farmacologia"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
              <Pill className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">Ciências Farmacêuticas</h3>
            <p className="text-xs text-slate-600 mb-4">
              Mecanismos de ação, posologias, reações adversas e interações medicamentosas mais frequentes na clínica.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sky-600" /> Fármacos essenciais e injetáveis
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sky-600" /> Antibioterapia e dosagens
              </li>
            </ul>
          </div>

          {/* 3. Medicina & Emergência */}
          <div
            id="spec-medicina"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">Medicina & Emergência</h3>
            <p className="text-xs text-slate-600 mb-4">
              Semiologia, Suporte Básico de Vida, ritmos de PCR e condutas imediatas de socorro e triagem rápida.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-rose-600" /> Paragem cardiorrespiratória e choque
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-rose-600" /> Triagem e conduta no banco de socorros
              </li>
            </ul>
          </div>

          {/* 4. Análises Clínicas */}
          <div
            id="spec-laboratorio"
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 mb-2">Laboratório Clínico</h3>
            <p className="text-xs text-slate-600 mb-4">
              Valores de referência clínicos, interpretação rápida de hemogramas, gasometrias e bioquímica.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-indigo-600" /> Ordem de colheita e tubos
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-indigo-600" /> Interpretação de exames essenciais
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
