import React from 'react';
import Link from 'next/link';
import { MessageCircle, Calculator, ArrowRight, Bike } from 'lucide-react';

interface ServiceCtaProps {
  title?: string;
  subtitle?: string;
  whatsappMessage: string;
}

export default function ServiceCta({
  title = '¿Listo para despachar tu envío?',
  subtitle = 'Coordiná directamente por WhatsApp con nuestro equipo operativo o calculá el costo exacto en el cotizador interactivo.',
  whatsappMessage,
}: ServiceCtaProps) {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="double-bezel-outer">
      <div className="double-bezel-inner p-8 sm:p-10 bg-brand-blue-500 text-white relative overflow-hidden">
        <div 
          className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full pointer-events-none blur-2xl" 
          aria-hidden="true" 
        />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
              {title}
            </h3>
            <p className="font-sans text-white/90 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-base tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all shadow-md font-bold"
            >
              <Calculator className="w-4 h-4 text-brand-blue-500" />
              <span>Cotizar Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 text-white font-sans text-sm font-bold uppercase tracking-wider border border-white/30 hover:bg-white/20 active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Pedir por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
