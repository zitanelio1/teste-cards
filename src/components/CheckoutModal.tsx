import { useState, type FormEvent } from 'react';
import { X, Lock, ShieldCheck, CheckCircle2, Phone, Mail, User } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'emola' | 'card'>('mpesa');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      id="checkout-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-2xl text-slate-900 my-auto max-h-[95vh] overflow-y-auto">
        {/* Botão Fechar */}
        <button
          onClick={handleClose}
          id="btn-close-modal"
          aria-label="Fechar checkout"
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cabeçalho do Modal */}
        <div className="mb-4">
          <span
            id="modal-badge"
            className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[10px] font-extrabold uppercase"
          >
            ACESSO COMPLETO
          </span>
          <h3 id="modal-title" className="text-lg font-black text-slate-950 mt-1">
            Cards Clínicos + 4 Bónus
          </h3>
          <div className="flex items-baseline gap-2 mt-1">
            <span id="modal-price" className="text-2xl font-black text-teal-800 font-display">
              179,00 Meticais
            </span>
            <span className="text-xs text-slate-500">Pagamento único • Acesso Vitalício</span>
          </div>
        </div>

        {!isSuccess ? (
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-700" />
                <span>Nome Completo</span>
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ex: Ana Cossa"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-700" />
                <span>E-mail para Envio</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>WhatsApp / Telemóvel (com DDD)</span>
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+258 84 / 85 / 86 / 87..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:border-teal-600 focus:outline-none"
              />
            </div>

            {/* Seletor de Método de Pagamento (M-Pesa, E-Mola, Cartão Bancário) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">Forma de Pagamento</label>
              <div className="grid grid-cols-3 gap-2">
                <label
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'mpesa'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    checked={paymentMethod === 'mpesa'}
                    onChange={() => setPaymentMethod('mpesa')}
                    className="sr-only"
                  />
                  <span className="text-xs font-black">M-Pesa</span>
                  <span className="text-[10px] text-slate-500">Vodacom</span>
                </label>

                <label
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'emola'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="emola"
                    checked={paymentMethod === 'emola'}
                    onChange={() => setPaymentMethod('emola')}
                    className="sr-only"
                  />
                  <span className="text-xs font-black">E-Mola</span>
                  <span className="text-[10px] text-slate-500">Movitel</span>
                </label>

                <label
                  className={`flex flex-col items-center justify-center p-2.5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'border-teal-600 bg-teal-50 text-teal-900 font-bold shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="sr-only"
                  />
                  <span className="text-xs font-black">Cartão</span>
                  <span className="text-[10px] text-slate-500">Visa / Master</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              id="btn-submit-order"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-2"
            >
              {isSubmitting ? (
                <span>A processar envio seguro...</span>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Quero meus cards agora</span>
                </>
              )}
            </button>

            <div className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Receba instantaneamente no WhatsApp e E-mail</span>
            </div>
          </form>
        ) : (
          /* Mensagem de Sucesso */
          <div id="checkout-success" className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-black text-slate-950">Pedido Confirmado com Sucesso!</h4>
            <p className="text-xs text-slate-600 mt-2 mb-4 leading-relaxed">
              Muito obrigado, <strong>{fullName || 'Prezado(a)'}</strong>! Os links de acesso aos 300+ Cards e aos 4 Guias Bónus foram enviados para o seu WhatsApp (<strong>{phone || 'número informado'}</strong>) e para o seu E-mail (<strong>{email || 'informado'}</strong>).
            </p>
            <button
              onClick={handleClose}
              id="btn-finish-order"
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl cursor-pointer transition-colors"
            >
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
