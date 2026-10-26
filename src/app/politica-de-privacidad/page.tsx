import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft, Mail, Phone, Lock } from 'lucide-react';

const baseUrl = 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos | Envíos DosRuedas',
  description:
    'Política de tratamiento y protección de datos personales de Envíos DosRuedas Mar del Plata. Conforme a la Ley 25.326 de la República Argentina.',
  alternates: { canonical: `${baseUrl}/politica-de-privacidad` },
  openGraph: {
    title: 'Política de Privacidad | Envíos DosRuedas',
    description:
      'Compromiso de confidencialidad y tratamiento de datos en servicios logísticos en Mar del Plata.',
    url: `${baseUrl}/politica-de-privacidad`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function PoliticaDePrivacidadPage() {
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
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-brand-yellow-400" />
            <span className="text-xs uppercase tracking-wider font-semibold text-brand-yellow-300">
              Marco Legal Ley 25.326
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl uppercase tracking-tight text-white mb-3">
            Política de Privacidad
          </h1>
          <p className="font-sans text-sm sm:text-base text-white/90">
            Envíos DosRuedas protege la confidencialidad de la información de remitentes y destinatarios en cada operación.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 sm:p-10 bg-white space-y-8 text-sm text-brand-blue-500/90 leading-relaxed">
            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                1. Responsable del Tratamiento
              </h2>
              <p>
                El titular y responsable del tratamiento de los datos recolectados a través de este sitio web y de nuestros canales de mensajería es <strong>Envíos DosRuedas</strong>, con sede operativa fija en Friuli 1972, Mar del Plata (B7600), Provincia de Buenos Aires, República Argentina. Correo electrónico de contacto: <a href="mailto:matiascejas@enviosdosruedas.com" className="text-brand-blue-600 underline font-semibold">matiascejas@enviosdosruedas.com</a>.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                2. Datos Personales Recolectados
              </h2>
              <p>
                Para prestar eficazmente el servicio de transporte, cotización y entrega, solicitamos únicamente los datos mínimos indispensables:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-brand-blue-500 font-medium">
                <li>Nombre o Razón Social del remitente y destinatario.</li>
                <li>Teléfono o línea de WhatsApp para contacto y avisos de llegada.</li>
                <li>Dirección postal exacta de retiro y de entrega en Mar del Plata y zona.</li>
                <li>Detalle básico no sensible del paquete o documentación a transportar.</li>
                <li>Datos fiscales básicos en caso de requerir comprobante Factura C.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                3. Finalidad del Tratamiento
              </h2>
              <p>
                La información recabada se utiliza <strong>exclusivamente</strong> para:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-brand-blue-500 font-medium">
                <li>Cotizar la distancia vial real y calcular la tarifa correspondiente.</li>
                <li>Coordinar el retiro, recorrido y entrega efectiva en el domicilio de destino.</li>
                <li>Notificar el estado del envío mediante WhatsApp o llamada telefónica.</li>
                <li>Emitir el comprobante de pago legal electrónico correspondiente.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                4. No Cesión a Terceros
              </h2>
              <p>
                Envíos DosRuedas <strong>no comercializa, alquila, transfiere ni cede bajo ningún concepto</strong> bases de datos a terceros para publicidad o fines ajenos al servicio logístico contratado. Los datos son compartidos únicamente con el cadete asignado a la ruta en cuestión al solo efecto de concretar la entrega.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                5. Derechos del Titular de los Datos (Ley 25.326)
              </h2>
              <p>
                Conforme a lo dispuesto por la Ley Nacional de Protección de Datos Personales N.º 25.326, el titular tiene derecho a acceder a sus datos de forma gratuita en intervalos no inferiores a seis meses, así como a solicitar su actualización, rectificación o supresión de nuestros registros operativos en cualquier momento comunicándose a <a href="mailto:matiascejas@enviosdosruedas.com" className="text-brand-blue-600 underline font-semibold">matiascejas@enviosdosruedas.com</a>.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                6. Seguridad de la Información
              </h2>
              <p>
                Adoptamos las medidas técnicas y organizativas necesarias para evitar la adulteración, pérdida, consulta o tratamiento no autorizado de los datos personales suministrados en nuestra plataforma y canales oficiales.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
