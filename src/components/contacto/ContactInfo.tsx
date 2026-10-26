import React from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  ExternalLink,
  ShieldAlert,
  Navigation,
  Compass,
} from 'lucide-react';
import CopyPhone from './CopyPhone';

export default function ContactInfo() {
  const gmapsUrl = 'https://maps.google.com/?q=Friuli+1972,+Mar+del+Plata';
  const whatsappUrl =
    'https://wa.me/5492236602699?text=Hola%20Env%C3%ADos%20DosRuedas%2C%20quisiera%20hacer%20una%20consulta';

  return (
    <div className="space-y-6 h-full flex flex-col justify-between">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {/* Card 1: Base Operativa Central */}
        <div className="double-bezel-outer md:col-span-2">
          <div className="double-bezel-inner p-6 sm:p-7 bg-white relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-500 text-brand-yellow-500 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-blue-400">
                      Sede Principal & Logística
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 border border-green-200">
                      Operativa
                    </span>
                  </div>
                  <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                    Friuli 1972
                  </h3>
                </div>
              </div>

              <a
                href={gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-brand-blue-50 text-brand-blue-500 font-sans text-xs font-bold uppercase tracking-wider border border-brand-blue-200 hover:bg-brand-blue-100 hover:border-brand-blue-300 transition-all shadow-xs"
              >
                <Navigation className="w-3.5 h-3.5 text-brand-blue-500" />
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <p className="font-sans text-sm text-brand-blue-400 mb-4 leading-relaxed">
              Mar del Plata, Provincia de Buenos Aires (B7600). Base de despacho rápido y consolidación de paquetería urbana con acceso estratégico a todas las zonas.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-brand-blue-100 text-xs font-mono text-brand-blue-400">
              <span className="inline-flex items-center gap-1.5 bg-brand-blue-50/70 px-2.5 py-1 rounded-md border border-brand-blue-100">
                <Compass className="w-3.5 h-3.5 text-brand-blue-500" />
                GPS: -38.0055, -57.5426
              </span>
              <span className="font-sans text-brand-blue-300">·</span>
              <span className="font-sans text-brand-blue-400">Mar del Plata y Costa Atlántica</span>
            </div>
          </div>
        </div>

        {/* Card 2: Teléfono & WhatsApp */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 bg-white h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-yellow-500/15 border border-brand-yellow-500/30 text-brand-blue-500 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-brand-blue-500" />
              </div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-1">
                Línea Directa y WhatsApp
              </span>
              <h4 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 mb-2">
                +54 9 223 660-2699
              </h4>
              <p className="font-sans text-xs text-brand-blue-400 mb-4">
                Canal prioritario para confirmación de retiros en moto y cotizaciones al instante.
              </p>
            </div>

            <div className="space-y-2 pt-2 border-t border-brand-blue-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3.5 rounded-xl bg-[#25D366] text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chatear por WhatsApp</span>
              </a>
              <CopyPhone className="w-full justify-center" />
            </div>
          </div>
        </div>

        {/* Card 3: Correo Oficial */}
        <div className="double-bezel-outer">
          <div className="double-bezel-inner p-6 bg-white h-full flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-brand-blue-400 block mb-1">
                Mesa Comercial
              </span>
              <h4 className="font-display text-lg uppercase tracking-tight text-brand-blue-500 mb-2 break-all">
                matiascejas@enviosdosruedas.com
              </h4>
              <p className="font-sans text-xs text-brand-blue-400 mb-4">
                Para propuestas corporativas, acuerdos mensuales y envíos de documentación contable.
              </p>
            </div>

            <div className="pt-2 border-t border-brand-blue-100">
              <a
                href="mailto:matiascejas@enviosdosruedas.com"
                className="w-full py-2.5 px-3.5 rounded-xl bg-brand-blue-500 text-white font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-brand-blue-600 transition-all shadow-xs"
              >
                <Mail className="w-4 h-4 text-brand-yellow-500" />
                <span>Enviar un Correo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Horarios de Atención */}
        <div className="double-bezel-outer md:col-span-2">
          <div className="double-bezel-inner p-6 sm:p-7 bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 text-brand-blue-500 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display text-xl uppercase tracking-tight text-brand-blue-500">
                  Horarios de Despacho y Atención
                </h4>
                <p className="font-sans text-xs text-brand-blue-400">
                  Operaciones urbanas y coordinación en Mar del Plata
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 block mb-1">
                  Lunes a Viernes
                </span>
                <span className="font-display text-xl text-brand-blue-500 block">
                  09:00 a 18:00 hs
                </span>
                <span className="font-sans text-[11px] text-brand-blue-400 mt-1 block">
                  Entregas en el día y franjas Flex de Mercado Libre
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-blue-50/60 border border-brand-blue-100">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 block mb-1">
                  Sábados
                </span>
                <span className="font-display text-xl text-brand-blue-500 block">
                  10:00 a 15:00 hs
                </span>
                <span className="font-sans text-[11px] text-brand-blue-400 mt-1 block">
                  Guardias para e-commerce y servicios de urgencia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card 5: Aclaraciones Fiscales y Operativas */}
      <div className="rounded-2xl bg-brand-blue-50/70 border border-brand-blue-100 p-5 flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 text-brand-blue-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h5 className="font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500">
            Aclaración comercial y fiscal importante
          </h5>
          <p className="font-sans text-xs text-brand-blue-400 leading-relaxed">
            Atención personalizada con flota propia en moto y vehículos utilitarios. Operamos bajo Régimen Simplificado (Monotributo): <strong className="text-brand-blue-500">Emitimos Factura C. No emitimos Factura A.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
