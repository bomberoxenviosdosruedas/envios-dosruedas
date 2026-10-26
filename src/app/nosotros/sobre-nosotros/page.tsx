import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Building,
  Bike,
  MapPin,
  Clock,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Sobre Envíos DosRuedas: Mensajería Real en Mar del Plata',
  description:
    'Conocé la historia y valores de Envíos DosRuedas. Empresa familiar marplatense con flota propia, base física en Friuli 1972 y compromiso de palabra.',
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

export default function SobreNosotrosPage() {
  const whatsappUrl = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Estuve leyendo sobre su historia y quisiera conversar con ustedes.'
  )}`;

  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      {/* Hero */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b-4 border-brand-yellow-500">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" 
          aria-hidden="true" 
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-yellow-500/20 text-brand-yellow-300 text-xs font-semibold tracking-wider uppercase border border-brand-yellow-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-yellow-400" />
              Nuestra Identidad
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white mb-4 leading-none max-w-4xl">
            Sobre Envíos DosRuedas: Mensajería Real en Mar del Plata
          </h1>

          <p className="font-sans text-lg sm:text-xl text-white/90 max-w-3xl leading-relaxed font-normal">
            Nacimos con una premisa simple y firme: en una ciudad costera con clima impredecible y distancias amplias, la logística urbana no se resuelve con algoritmos impersonales, sino con <strong>compromiso de palabra, cadetes propios capacitados y una base operativa real</strong>.
          </p>
        </div>
      </section>

      {/* Contenido Narrativo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-16">
        {/* Manifiesto y Diferencial */}
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
                    A diferencia de las plataformas multinacionales donde los repartidores rotan constantemente y no hay una cara responsable detrás de cada reclamo, en <strong>Envíos DosRuedas</strong> operamos con una flota propia y estable de cadetes marplatenses.
                  </p>
                  <p>
                    Cada paquete que nos confiás es ingresado a nuestro sistema, asignado a un repartidor registrado con nombre y apellido, y custodiado hasta la entrega efectiva con remito firmado. Sabemos exactamente quién retiró tu sobre, qué moto lo lleva y a qué hora precisa llegará a destino.
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
                  Ubicados estratégicamente en el barrio Peralta Ramos Oeste, a minutos del puerto, el centro comercial Güemes y las arterias de enlace hacia la periferia norte y sur de Mar del Plata.
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

        {/* 4 Pilares de Calidad */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500 mb-6">
              Nuestros 4 Pilares Innegociables
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-brand-blue-500">
              <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Flota Propia Registrada</h4>
                <p className="text-brand-blue-400 leading-relaxed">
                  No tercerizamos. Todos nuestros repartidores cuentan con elementos de seguridad, seguro y documentación en regla.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Conocimiento Territorial</h4>
                <p className="text-brand-blue-400 leading-relaxed">
                  Conocemos la trama de Mar del Plata, los accesos rápidos en temporada y los atajos para esquivar congestiones.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Atención WhatsApp Inmediata</h4>
                <p className="text-brand-blue-400 leading-relaxed">
                  Sin tickets infinitos ni bots que no entienden. Hablás directo con un operador que resuelve en el acto.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-blue-50/50 border border-brand-blue-100 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center font-bold">
                  04
                </div>
                <h4 className="font-sans font-bold text-sm text-brand-blue-500">Transparencia Fiscal</h4>
                <p className="text-brand-blue-400 leading-relaxed">
                  Régimen Simplificado legal: Emitimos Factura C electrónica para empresas y comercios (no emitimos Factura A).
                </p>
              </div>
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
                Estamos a tu disposición en nuestra base o a través de nuestros canales oficiales.
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
