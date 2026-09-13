export function FooterSection() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-400 text-xs py-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Identificação e NUIT */}
        <p className="font-bold text-slate-200 text-sm sm:text-base mb-3">
          Cards de Estudo Clínico • NUIT: 400 920 341
        </p>

        {/* Links Institucionais */}
        <div className="flex items-center justify-center gap-4 text-slate-400 mb-6 flex-wrap text-xs">
          <span className="hover:text-slate-200 cursor-pointer transition-colors">Termos de Uso</span>
          <span>•</span>
          <span className="hover:text-slate-200 cursor-pointer transition-colors">Política de Privacidade</span>
          <span>•</span>
          <span className="hover:text-slate-200 cursor-pointer transition-colors">Aviso Legal</span>
        </div>

        {/* Disclaimer Legal do Facebook / Meta */}
        <p className="max-w-2xl mx-auto text-slate-500 text-[11px] leading-relaxed mb-6">
          Este site não faz parte do website do Facebook nem do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da META PLATFORMS, INC.
        </p>

        {/* Direitos Reservados */}
        <p className="text-slate-600 text-[11px]">
          © 2026 Cards de Estudo Clínico. Todos os direitos reservados. Pagamento seguro e processamento protegido por criptografia SSL 256-bit.
        </p>
      </div>
    </footer>
  );
}
