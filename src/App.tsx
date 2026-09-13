/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { UrgencyBar } from './components/UrgencyBar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { SpecialtiesSection } from './components/SpecialtiesSection.tsx';
import { CarouselSection } from './components/CarouselSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { BonusAndPricingSection } from './components/BonusAndPricingSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Barra de Urgência no Topo */}
      <UrgencyBar />

      {/* Hero Section com Mockup e CTA sem preço */}
      <HeroSection onOpenCheckout={handleOpenCheckout} />

      {/* Para Quem Foram Criados Estes 300+ Cards? */}
      <SpecialtiesSection />

      {/* Carrossel Interativo com 11 Pranchas Reais e Botão Ampliar */}
      <CarouselSection />

      {/* Depoimentos / Feedback Real do WhatsApp */}
      <TestimonialsSection />

      {/* Oferta: Bónus Gratuitos + Card Único de Preço (179 Meticais) */}
      <BonusAndPricingSection onOpenCheckout={handleOpenCheckout} />

      {/* Dúvidas Frequentes (FAQ adaptado para Moçambique, WhatsApp e E-mail) */}
      <FaqSection />

      {/* Rodapé */}
      <FooterSection />

      {/* Modal Seguro de Finalização / Checkout */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
