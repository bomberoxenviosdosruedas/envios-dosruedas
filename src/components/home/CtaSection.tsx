import Link from 'next/link';
import { Calculator, MapPin, Sparkles, Clock, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

export default function CtaSection() {
  return (
    <section className="relative bg-brand-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo procedimental de topología vial */}
      <HeroProceduralBackground />

      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-brand-yellow-500 text-brand-blue-500 font-subheading uppercase text-xs md:text-sm px-4 py-1.5 rounded-full font-bold shadow-xs">
          <Sparkles className="w-4 h-4" /> Despachos Inmediatos en Mar del Plata
        </div>

        <h2 className="font-display text-4xl sm:text-6xl uppercase leading-none tracking-tight text-white max-w-4xl mx-auto">
          ¿Listo para despachar tu próximo paquete en Mar del Plata?
        </h2>

        <p className="font-sans text-lg sm:text-xl text-brand-blue-50/90 max-w-2xl mx-auto leading-relaxed">
          Cotizá al instante con medición vial exacta o escribinos directo por WhatsApp para coordinar el retiro hoy mismo sin demoras.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/cotizar"
            className="w-full sm:w-auto bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-cta-glow transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" /> Cotizar Online Ahora
          </Link>
          <a
            href="https://wa.me/5492236602699?text=Hola!%20Quiero%20coordinar%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="w-5 h-5" /> Escribir por WhatsApp
          </a>
        </div>

        {/* Micro-badges de remate */}
        <div className="pt-6 border-t border-brand-blue-400/60 flex flex-wrap items-center justify-center gap-6 text-xs font-sans text-brand-blue-100">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-yellow-500" />
            Friuli 1972, Mar del Plata
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-yellow-500" />
            Lun a Vie 08:00 - 19:00 · Sáb 08:30 - 13:30
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-brand-yellow-500" />
            +54 9 223 660-2699
          </span>
        </div>
      </div>
    </section>
  );
}
