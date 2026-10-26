'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  Calculator,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  PhoneCall,
  Clock,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroAnimado() {
  return (
    <section className="relative bg-brand-blue-500 text-white pt-16 pb-24 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Patrón de fondo abstracto y red vial */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#FFEC01_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Texto y Acciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badges de Confianza */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-brand-yellow-500 text-brand-blue-500 px-3.5 py-1 rounded-full font-subheading uppercase text-sm tracking-wider font-bold shadow-xs">
                <Sparkles className="w-3.5 h-3.5" /> Flota 100% propia
              </span>
              <span className="inline-flex items-center gap-1.5 bg-brand-blue-400/40 border border-brand-blue-300/40 text-brand-yellow-500 px-3.5 py-1 rounded-full font-subheading uppercase text-sm tracking-wider font-bold">
                <MapPin className="w-3.5 h-3.5" /> Base en Friuli 1972
              </span>
              <span className="inline-flex items-center gap-1.5 bg-brand-blue-400/40 border border-brand-blue-300/40 text-brand-yellow-500 px-3.5 py-1 rounded-full font-subheading uppercase text-sm tracking-wider font-bold">
                <ShieldCheck className="w-3.5 h-3.5" /> Sin intermediarios
              </span>
            </div>

            {/* Gran Titular H1 Masivo */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.92] tracking-tight text-white">
              Logística Urbana y <br />
              <span className="text-brand-yellow-500">Mensajería en Moto</span> <br />
              en Mar del Plata
            </h1>

            {/* Bajada Comercial en Outfit */}
            <p className="font-sans text-lg sm:text-xl text-brand-blue-50/95 max-w-2xl leading-relaxed">
              Conectamos toda la ciudad con cadetería propia, seguimiento y compromiso real. Elegí tu servicio y cotizá en el acto sin vueltas ni sorpresas.
            </p>

            {/* Bloque de Horarios y Corte */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-brand-blue-400/25 border border-brand-blue-300/30 max-w-xl text-sm font-sans text-brand-blue-100">
              <Clock className="w-5 h-5 text-brand-yellow-500 shrink-0" />
              <span>
                <strong>Horario de atención:</strong> Lun a Vie 08:00 a 19:00 hs · Sáb 08:30 a 13:30 hs. Despachos en el día.
              </span>
            </div>

            {/* Botones de Acción Principal */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/cotizar"
                className="bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full shadow-cta-glow transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" /> Cotizá tu Envío Ahora
              </Link>
              <Link
                href="/servicios"
                className="border-2 border-white/80 hover:bg-white hover:text-brand-blue-500 text-white font-subheading text-xl font-bold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Ver Servicios <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Columna Visual / Card con Arte Logístico */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="p-3 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden bg-brand-blue-400/40 aspect-[4/3] flex items-center justify-center">
                <Image
                  src="/express-hero-inline.png"
                  alt="Cadetería en moto Envíos DosRuedas en Mar del Plata"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-500/80 via-transparent to-transparent" />

                {/* Badge Flotante en la Imagen */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-brand-blue-100 text-brand-blue-500 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-blue-400 block">
                        Base Operativa Central
                      </span>
                      <span className="font-display text-lg uppercase text-brand-blue-500">
                        Friuli 1972 · MdP
                      </span>
                    </div>
                    <a
                      href="https://wa.me/5492236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded-full font-subheading text-xs uppercase font-bold hover:scale-105 transition-transform"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5" /> Escribir
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
