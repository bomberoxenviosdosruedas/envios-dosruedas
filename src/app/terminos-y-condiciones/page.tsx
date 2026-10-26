import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, AlertCircle, ArrowLeft } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Términos y Condiciones de Servicio | Envíos DosRuedas',
  description:
    'Condiciones contractuales, límites de paquetería, mercadería admitida, recargos operativos y marco legal de Envíos DosRuedas en Mar del Plata.',
  alternates: { canonical: `${baseUrl}/terminos-y-condiciones` },
  openGraph: {
    title: 'Términos y Condiciones de Servicio | Envíos DosRuedas',
    description:
      'Marco regulatorio, condiciones de transporte y régimen legal de Envíos DosRuedas en Mar del Plata.',
    url: `${baseUrl}/terminos-y-condiciones`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function TerminosYCondicionesPage() {
  return (
    <main className="min-h-dvh bg-white text-brand-blue-500 font-sans">
      {/* Header */}
      <section className="bg-brand-blue-500 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-yellow-500">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-yellow-400 hover:text-brand-yellow-300 uppercase tracking-wider mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Términos y Condiciones de Servicio
          </h1>
          <p className="font-sans text-sm sm:text-base text-white/90">
            Última actualización: Enero 2026 · Aplicable a todos los servicios de mensajería y logística urbana en Mar del Plata.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-10 bg-white space-y-8 text-sm text-brand-blue-500/90 leading-relaxed">
            {/* Cláusula 1 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                1. Objeto y Prestación del Servicio
              </h2>
              <p>
                <strong>Envíos DosRuedas</strong> (con base operativa central en Friuli 1972, Mar del Plata, Provincia de Buenos Aires) presta servicios de mensajería urbana, cadetería y distribución de última milla dentro del ejido urbano de General Pueyrredon y localidades adyacentes autorizadas. Los traslados se efectúan mediante flota propia y conductores registrados, debidamente equipados con elementos de seguridad vial.
              </p>
            </div>

            {/* Cláusula 2 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                2. Límites Físicos y Bulto Estándar
              </h2>
              <p>
                La tarifa estándar regular contempla encomiendas de hasta <strong>5 kilogramos de peso</strong> y dimensiones máximas de <strong>40 × 40 × 30 centímetros</strong> que puedan ser transportadas de manera segura en el baúl o caja de la moto sin comprometer la estabilidad del vehículo ni la integridad de la mercadería.
              </p>
              <p>
                Cualquier bulto que exceda estos límites de peso o volumen deberá ser notificado y coordinado de forma previa, devengando un recargo por bulto extra a partir de <strong>$1.800</strong>, o bien la reasignación a un vehículo utilitario bajo presupuesto especial.
              </p>
            </div>

            {/* Cláusula 3 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                3. Mercadería Prohibida
              </h2>
              <p>
                Queda estrictamente prohibido el transporte de:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-brand-blue-500 font-medium">
                <li>Sustancias estupefacientes, psicotrópicas o ilegales según el Código Penal argentino.</li>
                <li>Materiales inflamables, explosivos, corrosivos, gases comprimidos o sustancias peligrosas.</li>
                <li>Armas de fuego, municiones y elementos de seguridad bélica.</li>
                <li>Dinero en efectivo en sumas mayores a las pactadas en el servicio contra reembolso, metales preciosos o títulos valores al portador.</li>
                <li>Animales vivos o restos biológicos no autorizados.</li>
              </ul>
              <p className="text-xs text-brand-blue-400">
                El remitente es el único responsable civil y penalmente por el contenido de los paquetes entregados para su traslado.
              </p>
            </div>

            {/* Cláusula 4 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                4. Ausencia del Destinatario y Tiempos de Espera
              </h2>
              <p>
                El cadete otorgará una tolerancia de <strong>10 minutos sin cargo</strong> en la puerta del domicilio de entrega. A partir del minuto 11 de demora imputable al destinatario o remitente, se computarán bloques de 10 minutos a razón de <strong>$2.200 por bloque</strong>.
              </p>
              <p>
                En caso de imposibilidad total de entrega por ausencia, dirección errónea provista por el cliente o negativa a recibir, el paquete será reintegrado a la base operativa de Friuli 1972 o al punto de origen, devengando el cobro del 100% del flete inicial más el correspondiente flete de retorno o reintento pactado.
              </p>
            </div>

            {/* Cláusula 5 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                5. Recargo por Condiciones Meteorológicas (Días de Lluvia)
              </h2>
              <p>
                En resguardo de la seguridad psicofísica de los repartidores y la protección estanca de los bultos, en días de lluvia se aplicará un recargo tarifario del <strong>30% al 50%</strong> según la intensidad de las precipitaciones. Asimismo, los plazos de entrega podrán experimentar ampliaciones preventivas.
              </p>
            </div>

            {/* Cláusula 6 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                6. Régimen Tributario y Facturación Oficial
              </h2>
              <p>
                Envíos DosRuedas opera bajo el Régimen Simplificado para Pequeños Contribuyentes (Monotributo). Por tal motivo, se emite exclusivamente <strong>Factura C electrónica</strong> con validez legal como comprobante de gasto ante AFIP/ARCA.
              </p>
              <div className="p-3.5 rounded-xl bg-brand-blue-50 border border-brand-blue-200 text-xs font-bold text-brand-blue-500 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-brand-blue-500" />
                <span>NO SE EMITE FACTURA A BAJO NINGUNA CIRCUNSTANCIA.</span>
              </div>
            </div>

            {/* Cláusula 7 */}
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                7. Jurisdicción y Ley Aplicable
              </h2>
              <p>
                Para cualquier controversia judicial o extrajudicial derivada de la interpretación o ejecución de los servicios prestados, las partes se someten voluntariamente a la competencia de los <strong>Tribunales Ordinarios del Departamento Judicial de Mar del Plata</strong>, Provincia de Buenos Aires, renunciando a cualquier otro fuero o jurisdicción que pudiera corresponder.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
