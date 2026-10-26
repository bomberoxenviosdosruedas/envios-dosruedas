import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Package,
  CheckCircle2,
  Clock,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';
import { Knockout } from '@/components/ui/Knockout';
import { Badge } from '@/components/ui/Badge';
import { CTANestedPill } from '@/components/ui/CTANestedPill';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Guía Definitiva: Cómo Configurar Mercado Envíos Flex en Mar del Plata (2026)',
  description:
    'Paso a paso para activar Mercado Envíos Flex en Mar del Plata. Horarios de corte a las 15:00 hs, configuración de zonas y tarifas para mantener tu reputación verde.',
  alternates: { canonical: `${baseUrl}/guias/envios-flex-mar-del-plata` },
  openGraph: {
    title: 'Guía Definitiva Mercado Envíos Flex en Mar del Plata | Envíos DosRuedas',
    description:
      'Tutorial completo para vendedores de Mercado Libre en Mar del Plata. Cómo configurar zonas, plazos y logística de entregas en el día.',
    url: `${baseUrl}/guias/envios-flex-mar-del-plata`,
    type: 'article',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Guía Definitiva: Cómo Configurar Mercado Envíos Flex en Mar del Plata',
  description:
    'Tutorial técnico y operativo para vendedores de Mercado Libre en Mar del Plata que buscan entregar en el día sin perder reputación.',
  author: {
    '@type': 'Organization',
    name: 'Envíos DosRuedas',
    url: baseUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'Envíos DosRuedas',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
    },
  },
  mainEntityOfPage: `${baseUrl}/guias/envios-flex-mar-del-plata`,
};

export default function GuiaFlexPage() {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Leí la guía de Mercado Envíos Flex y quiero hablar con un asesor para integrar mis envíos.'
  )}`;

  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section
        id="flex-guide-hero"
        aria-label="Guía técnica para operar Mercado Envíos Flex en Mar del Plata"
        className="relative isolate flex min-h-[75dvh] lg:min-h-[85dvh] w-full flex-col justify-center overflow-hidden bg-brand-blue-500 text-white border-b-4 border-brand-yellow-500"
      >
        <HeroProceduralBackground variant="flex" tone="blue" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT 7 */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <Badge
                variant="accent"
                size="lg"
                className="-rotate-1"
                icon={<Package className="h-4 w-4" aria-hidden="true" />}
              >
                Guía Práctica para Vendedores MDQ 2026
              </Badge>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[-0.03em] leading-[0.92] text-white text-balance">
                <span className="block">Cómo Operar</span>
                <Knockout>Mercado Envíos Flex</Knockout>
                <span className="block">en Mar del Plata</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-white/90 max-w-[56ch] mx-auto lg:mx-0 leading-relaxed font-light">
                Todo lo que necesitás saber para activar entregas en el mismo día, no perder ventas locales y mantener tu reputación de MercadoLíder al 100% sin complicaciones operativas.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-1">
                <CTANestedPill
                  href="https://api.whatsapp.com/send/?phone=542236602699&text=Hola!%20Le%C3%AD%20la%20gu%C3%ADa%20Flex%20y%20quiero%20coordinar%20retiros%20para%20mi%20cuenta."
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="large"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Activá Flex con Nosotros
                </CTANestedPill>
                <CTANestedPill
                  href="/servicios/enviosflex"
                  variant="blue"
                  size="large"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Ver Servicio Flex
                </CTANestedPill>
              </div>
            </div>

            {/* RIGHT 5 */}
            <div className="lg:col-span-5 relative w-full flex flex-col items-center justify-center">
              <DoubleBezelCard
                className="w-full max-w-md shadow-2xl"
                innerClassName="p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-brand-blue-100 pb-3">
                  <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-blue-500">
                    Reglas de Oro Flex
                  </span>
                  <span className="font-mono text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    Termómetro Verde
                  </span>
                </div>

                <div className="space-y-3 font-sans text-xs text-brand-blue-500">
                  <div className="p-2.5 rounded-xl bg-brand-blue-50/60">
                    <strong className="block text-brand-blue-600 font-bold mb-0.5">Corte Estricto: 15:00 hs</strong>
                    <span>Retiramos por tu local luego de las 15 hs para repartir antes de las 20 hs.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-brand-blue-50/60">
                    <strong className="block text-brand-blue-600 font-bold mb-0.5">Escaneo QR Digital</strong>
                    <span>Cada remito se conforma con geolocalización directa en la app de Mercado Libre.</span>
                  </div>
                </div>
              </DoubleBezelCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Editorial */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Intro */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white space-y-4">
            <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
              ¿Por qué Flex es el factor clave de ventas en Mar del Plata?
            </h2>
            <p className="font-sans text-sm text-brand-blue-400 leading-relaxed">
              En el comercio electrónico actual, más del <strong>70% de los compradores en Mercado Libre filtran sus búsquedas por &ldquo;Llega hoy&rdquo;</strong>. En una ciudad como Mar del Plata, donde los pedidos desde Capital Federal pueden demorar entre 48 y 72 horas por correo tradicional, los vendedores locales que ofrecen entrega durante la misma tarde tienen una ventaja comercial determinante.
            </p>
            <p className="font-sans text-sm text-brand-blue-400 leading-relaxed">
              Sin embargo, activar Flex sin un socio logístico serio con flota propia en la ciudad suele terminar en cancelaciones, reclamos y pérdida de la reputación verde. A continuación te explicamos el paso a paso para implementarlo con éxito.
            </p>
          </div>
        </div>

        {/* Paso 1 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-xl flex items-center justify-center font-bold">
              01
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
              Activación de la Opción Flex en tu Panel de Vendedor
            </h2>
          </div>
          <div className="p-6 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100 text-sm text-brand-blue-400 space-y-3 leading-relaxed">
            <p>
              Para poder ofrecer entregas en el día en Mar del Plata, tu cuenta debe cumplir con los requisitos básicos de Mercado Libre: tener reputación verde o amarilla (sin sanciones recientes) y contar con habilitación de Mercado Envíos en tus publicaciones.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-brand-blue-500 font-medium">
              <li>Ingresá a tu panel de Mercado Libre &gt; Preferencias de venta &gt; Envíos.</li>
              <li>Buscá la sección <strong>&ldquo;Mercado Envíos Flex&rdquo;</strong> y hacé clic en Activar.</li>
              <li>Descargá en tu celular la app oficial <strong>&ldquo;Mercado Envíos Flex&rdquo;</strong> para gestionar los paquetes y el escaneo.</li>
            </ul>
          </div>
        </section>

        {/* Paso 2 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-xl flex items-center justify-center font-bold">
              02
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
              Configuración de Horarios de Corte y Franjas de Entrega
            </h2>
          </div>
          <div className="p-6 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100 text-sm text-brand-blue-400 space-y-3 leading-relaxed">
            <p>
              El error más frecuente es fijar un horario de corte demasiado tarde (ej. 17:00 hs) sin tener tiempo material para embalar e imprimir etiquetas.
            </p>
            <div className="p-4 rounded-xl bg-white border border-brand-blue-200 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue-500 font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4 text-brand-yellow-500" />
                <span>Horario Óptimo Recomendado en Mar del Plata</span>
              </div>
              <p className="text-xs">
                <strong>Corte de ventas: 14:00 a 15:00 hs.</strong> A las 15:00 hs pasamos por tu depósito o local a retirar todos los paquetes del día. La ventana de entrega al comprador corre de corrido hasta las <strong>20:00 hs</strong>. De esta manera, cumplís el 100% de tus entregas a tiempo.
              </p>
            </div>
          </div>
        </section>

        {/* Paso 3 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-xl flex items-center justify-center font-bold">
              03
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
              Esquema de Zonas y Tarifas Flex
            </h2>
          </div>
          <div className="p-6 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100 text-sm text-brand-blue-400 space-y-3 leading-relaxed">
            <p>
              Mercado Libre compensa al comerciante por cada envío Flex realizado. Para que tu logística sea rentable y no pierdas plata en fletes, en Envíos DosRuedas tenemos un esquema adaptado al volumen:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-brand-blue-200">
                <span className="font-bold text-brand-blue-500 block mb-1">Nivel 1 (Ocasional)</span>
                <p>Tarifa LowCost ($3.000 a $4.000) según distancia exacta en km de cada venta.</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-brand-blue-200">
                <span className="font-bold text-brand-blue-500 block mb-1">Nivel 2 (Zonas 4 y 5)</span>
                <p>$6.500 para destinos lejanos (Mogotes, Bosque, Batán cercano).</p>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-brand-blue-200 bg-brand-yellow-500/10 border-brand-yellow-500/40">
                <span className="font-bold text-brand-blue-500 block mb-1">Nivel 3 (+5 envíos diarios)</span>
                <p className="font-bold text-brand-blue-500">$4.500 Tarifa Plana unificada a cualquier barrio urbano.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Paso 4 */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-xl flex items-center justify-center font-bold">
              04
            </span>
            <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
              Blindaje de tu Reputación Verde con Flota Propia
            </h2>
          </div>
          <div className="p-6 rounded-2xl bg-brand-blue-50/50 border border-brand-blue-100 text-sm text-brand-blue-400 space-y-3 leading-relaxed">
            <p>
              El mayor riesgo de Flex es la cancelación por demora. Si un repartidor ocasional no encuentra la dirección o decide no ir a una zona alejada, Mercado Libre penaliza tu cuenta.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-1">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Escaneo en mano de código QR al momento de retirar y entregar.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Base central en Friuli 1972 para custodia de paquetes no entregados.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Contacto directo con el comprador si no atiende el timbre.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>Reintentos de entrega coordinados sin sorpresas de costos.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Principal */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 bg-brand-blue-500 text-white text-center space-y-4">
            <h3 className="font-display text-3xl uppercase tracking-tight text-white">
              ¿Querés que retiremos tus paquetes Flex hoy mismo?
            </h3>
            <p className="font-sans text-sm text-white/90 max-w-xl mx-auto leading-relaxed">
              Hablá directamente con nuestro equipo comercial para coordinar el horario de retiro en tu depósito o comercio y activar la tarifa plana por volumen.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-base tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all shadow-md font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hablar con un asesor para integrar Flex</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
