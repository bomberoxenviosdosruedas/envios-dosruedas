import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, Calculator, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Envíos DosRuedas Mar del Plata',
  description:
    'Respuestas a dudas sobre tarifas, peso máximo, recargos por lluvia, tiempos de entrega, tolerancia en puerta y formas de pago en Envíos DosRuedas.',
  alternates: { canonical: `${baseUrl}/nosotros/preguntas-frecuentes` },
  openGraph: {
    title: 'Preguntas Frecuentes | Envíos DosRuedas Mar del Plata',
    description:
      'Todo lo que necesitás saber sobre envíos en moto en Mar del Plata. Preguntas frecuentes sobre tarifas, horarios y condiciones.',
    url: `${baseUrl}/nosotros/preguntas-frecuentes`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const FAQS = [
  {
    q: '¿Qué peso y tamaño máximo puede tener un envío en moto?',
    a: 'El paquete estándar contempla un peso de hasta 5 kg y medidas de hasta 40 × 40 × 30 cm (aproximadamente una caja mediana o bolsa de e-commerce grande). Si tu paquete excede estos límites de peso o volumen, se coordina como bulto extra con recargo a partir de $1.800, o se asigna vehículo utilitario.',
  },
  {
    q: '¿Qué pasa si llueve el día pactado para la entrega?',
    a: 'Por seguridad vial de nuestros conductores en asfalto mojado y para proteger la paquetería con equipamiento impermeable, en días de lluvia rige un recargo del 30% al 50% según la intensidad de la tormenta. Además, las ventanas horarias de entrega pueden extenderse prudentemente para priorizar la circulación preventiva.',
  },
  {
    q: '¿Cuánto tiempo espera el cadete en la puerta si el destinatario demora?',
    a: 'Los primeros 10 minutos de espera en puerta son completamente sin cargo como margen de cortesía. A partir del minuto 11 en adelante, se computan bloques de 10 minutos adicionales con un valor de $2.200 por bloque.',
  },
  {
    q: '¿Emiten Factura A?',
    a: 'No emitimos Factura A. Envíos DosRuedas opera bajo el Régimen Simplificado (Monotributo), por lo cual emitimos comprobantes fiscales oficiales Factura C electrónica, válidos para consumidor final o como comprobante de gasto comercial para empresas y comercios.',
  },
  {
    q: '¿Qué medios de pago aceptan para los envíos?',
    a: 'Aceptamos transferencia bancaria inmediata (por CBU o Alias), Mercado Pago con dinero en cuenta o tarjeta, y dinero en efectivo abonado al momento del retiro o al recibir en mano.',
  },
  {
    q: '¿Cuál es la diferencia entre el Servicio Express y el Servicio LowCost?',
    a: 'El Servicio Express tiene un horario de corte a las 15:00 hs y garantiza la entrega en una franja acotada de 3 horas coordinada con 2 hs de anticipación (desde $3.700). El Servicio LowCost tiene horario de corte a las 13:00 hs y se entrega en el transcurso del día hasta las 19:00 hs en hoja de ruta consolidada (desde $3.000).',
  },
  {
    q: '¿Llegan a Batán, Sierra de los Padres, Chapadmalal o Santa Clara del Mar?',
    a: 'Sí. Estos destinos forman parte de nuestra Zona 5 de periferia y accesos interurbanos. Se cotizan bajo el esquema de tarifa lineal a $1.000 por kilómetro de recorrido vial cuando superan los 10 km urbanos estándar.',
  },
  {
    q: '¿Cómo funciona la modalidad Contra Reembolso?',
    a: 'Retiramos tu producto con remito, cobramos el importe en efectivo en mano al comprador al entregar en su puerta, y te transferimos el dinero a tu cuenta bancaria o billetera virtual dentro de las 24 horas hábiles siguientes.',
  },
];

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function PreguntasFrecuentesPage() {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Tengo una duda sobre los envíos que no encontré en las preguntas frecuentes.'
  )}`;

  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Hero */}
      <section
        id="faq-hero"
        aria-label="Preguntas frecuentes y condiciones de servicio de Envíos DosRuedas"
        className="relative isolate flex min-h-[75dvh] lg:min-h-[85dvh] w-full flex-col justify-center overflow-hidden bg-brand-blue-500 text-white border-b-4 border-brand-yellow-500"
      >
        <HeroProceduralBackground variant="default" tone="blue" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<HelpCircle className="h-4 w-4" aria-hidden="true" />}
              >
                Centro de Ayuda y Condiciones
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Preguntas Frecuentes</span>
                <Knockout>sin letra chica</Knockout>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Condiciones de servicio, tarifas oficiales, recargos y límites de paquetería explicados con total claridad y transparencia.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  icon={<MessageCircle className="w-5 h-5" />}
                  iconPosition="left"
                >
                  Consultar duda puntual
                </CTANestedPill>
                <a
                  href="#preguntas"
                  className="inline-flex min-h-11 items-center gap-2 font-subheading text-sm sm:text-base uppercase tracking-wider text-white underline decoration-brand-yellow-500 decoration-2 underline-offset-4 hover:text-brand-yellow-500 transition-colors"
                >
                  <span>Ver todas las preguntas</span>
                </a>
              </div>
            </div>

            {/* RIGHT 5 */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl text-left space-y-4">
                <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-yellow-400 block border-b border-white/15 pb-2">
                  Puntos Clave del Servicio
                </span>
                <div className="space-y-2.5 font-sans text-xs text-white/90">
                  <p><strong>Bulto Estándar:</strong> Hasta 5 kg y 40 × 40 × 30 cm.</p>
                  <p><strong>Espera de Cortesía:</strong> 10 minutos gratis en puerta.</p>
                  <p><strong>Días de Lluvia:</strong> Recargo del 30% al 50% por asfalto mojado.</p>
                  <p><strong>Facturación:</strong> Emitimos Factura C oficial (Monotributo).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Acordeón */}
      <section id="preguntas" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="rounded-xl border border-brand-blue-100 bg-brand-blue-50/40 px-4 sm:px-5 transition-colors data-[state=open]:bg-brand-blue-50/80 data-[state=open]:border-brand-blue-200"
                >
                  <AccordionTrigger className="font-sans font-bold text-sm sm:text-base text-brand-blue-500 hover:text-brand-blue-600 py-4 hover:no-underline text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-sans text-xs sm:text-sm text-brand-blue-400 leading-relaxed pt-1 pb-4 border-t border-brand-blue-100/60 mt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Card de consulta adicional */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 bg-brand-blue-500 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                ¿Tenés otra consulta puntual?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-white/90">
                Escribinos por WhatsApp y nuestro equipo de base te responde al instante.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/cotizar"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 text-white font-sans text-xs font-bold uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all"
              >
                <Calculator className="w-4 h-4 text-brand-yellow-500" />
                <span>Cotizar Envío</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-sm tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Preguntar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
