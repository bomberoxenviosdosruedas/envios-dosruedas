import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Building,
  Bike,
  Clock,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Calendar,
  Award,
  Zap,
} from 'lucide-react';
import { HeroProceduralBackground } from '@/components/ui/HeroProceduralBackground';
import { DoubleBezelCard } from '@/components/ui/DoubleBezelCard';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Sobre Envíos DosRuedas: Mensajería Real en Mar del Plata',
  description:
    'Más de 7 años transformando la última milla en Mar del Plata. Flota propia registrada, base física en Friuli 1972 y atención directa sin intermediarios.',
  alternates: { canonical: `${baseUrl}/nosotros/sobre-nosotros` },
  openGraph: {
    title: 'Sobre Envíos DosRuedas: Mensajería Real en Mar del Plata',
    description:
      'No somos una app extranjera ni tercerizamos envíos. Flota propia y base fija en Friuli 1972, Mar del Plata.',
    url: `${baseUrl}/nosotros/sobre-nosotros`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

const METRICAS = [
  {
    valor: '+20',
    label: 'Repartidores en Calle',
    sublabel: 'Flota Propia Registrada',
    desc: 'Cadetes capacitados y uniformados que conocen cada diagonal, atajo y zona de Mar del Plata.',
  },
  {
    valor: '100%',
    label: 'Base Física en MDQ',
    sublabel: 'Friuli 1972',
    desc: 'Depósito central para recepción, consolidación, guarda de stock y despacho diario.',
  },
  {
    valor: '< 3 hs',
    label: 'Ventana Express',
    sublabel: 'Máxima Velocidad',
    desc: 'Franja acotada garantizada de 3 horas coordinada con 2 hs de anticipación previa.',
  },
  {
    valor: '+7',
    label: 'Años de Trayectoria',
    sublabel: 'Confianza Local',
    desc: 'Compromiso ininterrumpido desde 2019 junto a comerciantes, pymes y emprendedores.',
  },
];

const HITOS = [
  {
    year: '2019',
    title: 'Lanzamiento Inicial en MDQ',
    desc: 'Iniciamos operaciones con flota propia de motocicletas en las calles céntricas de Mar del Plata.',
  },
  {
    year: '2021',
    title: 'Soluciones PyME y Modalidad LowCost',
    desc: 'Lanzamos el reparto programado LowCost en el día y el Plan Emprendedores para impulsar tiendas online.',
  },
  {
    year: '2023',
    title: 'Consolidación de Flota Propia',
    desc: 'Estructura propia de repartidores registrados con elementos de seguridad y coordinación directa por WhatsApp.',
  },
  {
    year: '2024',
    title: 'Pioneros Mercado Envíos Flex en MDQ',
    desc: 'Nos convertimos en el socio logístico de referencia para entregas Same-Day de Mercado Libre en Mar del Plata.',
  },
  {
    year: '2025',
    title: 'Inauguración Base Central Friuli 1972',
    desc: 'Apertura de nuestro hub operativo con depósito de paquetería, empaque (picking) y tecnología de ruteo.',
  },
  {
    year: '2026',
    title: 'Infraestructura Logística 3PL Integral',
    desc: 'Más de 7 años de liderazgo local con cotizador en tiempo real, fulfillment y cobertura en todos los barrios.',
  },
];

export default function SobreNosotrosPage() {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Estuve leyendo sobre su historia y quisiera conversar con ustedes.'
  )}`;

  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      {/* Hero */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
        <HeroProceduralBackground />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-400" />
              Nuestra Identidad y Trayectoria
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none max-w-4xl">
            Sobre Envíos DosRuedas: Mensajería Real en Mar del Plata
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed font-normal">
            Más de 7 años transformando la última milla y la mensajería urbana en Mar del Plata con <strong>flota propia, atención directa y base física en Friuli 1972</strong>. Cero tercerización ni plataformas impersonales.
          </p>
        </div>
      </section>

      {/* Contenido Narrativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        {/* Manifiesto y Base Física */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 space-y-6">
            <div className="double-bezel-outer h-full">
              <div className="double-bezel-inner p-8 bg-white h-full space-y-5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-blue-400 block">
                  Nuestro Propósito
                </span>
                <h2 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-brand-blue-500">
                  No somos una app extranjera: sabemos quién traslada tu paquete
                </h2>
                <div className="space-y-4 font-sans text-sm text-brand-blue-500/90 leading-relaxed">
                  <p>
                    A diferencia de las plataformas multinacionales donde los repartidores rotan constantemente y no hay una cara responsable detrás de cada reclamo, en <strong>Envíos DosRuedas</strong> operamos con una estructura propia y estable de cadetes marplatenses.
                  </p>
                  <p>
                    Cada paquete que nos confiás es ingresado a nuestro sistema, asignado a un conductor registrado con nombre y apellido, y custodiado hasta la entrega efectiva con remito firmado. Sabemos exactamente quién retiró tu sobre, qué moto lo lleva y a qué hora precisa llegará a destino.
                  </p>
                  <p>
                    Si surge una lluvia repentina, una calle cortada en el macrocentro o un destinatario que no responde el timbre, tenés un operador humano en Mar del Plata que te atiende al instante por WhatsApp para resolverlo juntos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Tarjeta Base Física */}
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 sm:p-7 bg-white space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center font-bold">
                    <Building className="w-6 h-6 stroke-[2.3]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-400 block">
                      Sede Operativa Fija
                    </span>
                    <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                      Friuli 1972
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                  Ubicados estratégicamente en Peralta Ramos Oeste, a minutos del puerto, el centro comercial Güemes y las arterias de enlace hacia la periferia norte y sur de Mar del Plata.
                </p>

                <div className="pt-3 border-t border-brand-blue-100 flex items-center justify-between text-xs font-semibold text-brand-blue-500">
                  <span>GPS: -38.0055, -57.5426</span>
                  <Link href="/contacto" className="text-brand-blue-600 hover:underline flex items-center gap-1">
                    <span>Ver mapa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Tarjeta Filosofía */}
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-6 sm:p-7 bg-brand-blue-50/60 space-y-3">
                <div className="flex items-center gap-2 text-brand-blue-500 font-bold font-sans text-xs uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4 text-brand-yellow-500" />
                  <span>Compromiso de Palabra</span>
                </div>
                <h4 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                  La confianza del comercio local
                </h4>
                <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                  Cientos de comercios, farmacias, estudios jurídicos y tiendas online marplatenses confían en nosotros todos los días para llegar a sus clientes con puntualidad y cortesía.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas de Fuerza Operativa */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-brand-blue-500 text-white">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-yellow-400 block mb-1">
              Fuerza Operativa y Experiencia
            </span>
            <h3 className="font-display text-3xl uppercase tracking-tight text-white mb-8">
              Nuestro equipo en calle en números
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {METRICAS.map((m) => (
                <div key={m.label} className="p-5 rounded-xl bg-white/10 border border-white/15 space-y-2">
                  <span className="font-mono text-4xl sm:text-5xl font-black text-brand-yellow-400 tracking-tight block">
                    {m.valor}
                  </span>
                  <h4 className="font-display text-lg uppercase tracking-tight text-white leading-tight">
                    {m.label}
                  </h4>
                  <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/70 block">
                    {m.sublabel}
                  </span>
                  <p className="font-sans text-xs text-white/80 leading-relaxed pt-1">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline de Trayectoria y Evolución */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-blue-100">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center font-bold">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-400 block">
                  Trayectoria y Evolución
                </span>
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  Nuestra historia en Mar del Plata
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {HITOS.map((h) => (
                <div key={h.year} className="p-5 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-brand-blue-500">
                      {h.year}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-400 bg-white px-2 py-0.5 rounded border border-brand-blue-100">
                      Hito MDQ
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-sm text-brand-blue-500">
                    {h.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-8 bg-brand-blue-500 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white">
                ¿Querés trabajar con nosotros o enviar un paquete?
              </h3>
              <p className="font-sans text-sm text-white/90">
                Estamos a tu disposición en nuestra base física o a través de nuestro WhatsApp oficial.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-base tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.98] transition-all font-bold shrink-0 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
