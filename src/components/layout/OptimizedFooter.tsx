import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function OptimizedFooter() {
  return (
    <footer className="w-full">
      {/* Franja vial amarilla de remate oficial (6px / h-1.5) */}
      <div className="h-1.5 w-full bg-brand-yellow-500" />

      {/* Cuerpo principal en Azul Institucional */}
      <div className="bg-brand-blue-500 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-brand-blue-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Columna 1: Identidad y Base Física */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
                <Image
                  src="/LogoEnviosDosRuedas.png"
                  alt="Logo Envíos DosRuedas"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-display text-2xl uppercase tracking-tight text-white leading-none block">
                  ENVÍOS DOSRUEDAS
                </span>
                <span className="font-subheading text-xs tracking-wider uppercase text-brand-yellow-500 font-bold">
                  Mar del Plata · Flota Propia
                </span>
              </div>
            </div>

            <p className="font-sans text-brand-blue-100 text-sm leading-relaxed">
              Mensajería urbana en moto y logística de última milla para personas, comercios y vendedores de Mercado Libre con base fija en Mar del Plata.
            </p>

            <div className="space-y-2 pt-2 text-sm text-brand-blue-50 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                <span>Friuli 1972, Mar del Plata, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                <a
                  href="https://wa.me/5492236602699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-yellow-500 transition-colors font-mono"
                >
                  +54 9 223 660-2699
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-yellow-500 shrink-0" />
                <a
                  href="mailto:contacto@enviosdosruedas.com"
                  className="hover:text-brand-yellow-500 transition-colors"
                >
                  contacto@enviosdosruedas.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-brand-yellow-500 shrink-0 mt-0.5" />
                <span className="text-xs">
                  Lun a Vie: 08:00 a 19:00 hs <br />
                  Sábados: 08:30 a 13:30 hs
                </span>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://wa.me/5492236602699"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Envíos DosRuedas"
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Envíos DosRuedas"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/enviosdosruedas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Envíos DosRuedas"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Servicios de Envíos */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-yellow-500 border-b border-brand-blue-400 pb-2">
              Servicios Logísticos
            </h3>
            <ul className="space-y-2 text-sm font-sans text-brand-blue-100">
              <li>
                <Link
                  href="/servicios/envios-express"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Envíos Express (3 hs · Corte 15:00 hs)
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/envios-lowcost"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Reparto LowCost (En el día hasta 19:00 hs)
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/enviosflex"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Mercado Envíos Flex MdP
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/deposito-fulfillment"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Depósito y Preparación de Pedidos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/empresas-cuenta-corriente"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Empresas con Cuenta Corriente
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/envios-contrareembolso"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Envíos Contra Reembolso (Efectivo)
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/plan-emprendedores"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Plan Emprendedores y Showrooms
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Empresa y Cobertura */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-yellow-500 border-b border-brand-blue-400 pb-2">
              Empresa y Operaciones
            </h3>
            <ul className="space-y-2 text-sm font-sans text-brand-blue-100">
              <li>
                <Link
                  href="/nosotros"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Sobre Envíos DosRuedas
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros/sobre-nosotros"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Flota Propia sin Tercerización
                </Link>
              </li>
              <li>
                <Link
                  href="/cobertura"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Mapa de 5 Radios en Mar del Plata
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros/preguntas-frecuentes"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Preguntas Frecuentes (FAQs)
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros/nuestras-redes"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Canales Oficiales
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Base Física y Atención Directa
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Marco Legal y Cotizador */}
          <div className="space-y-4">
            <h3 className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-yellow-500 border-b border-brand-blue-400 pb-2">
              Legales y Guías
            </h3>
            <ul className="space-y-2 text-sm font-sans text-brand-blue-100">
              <li>
                <Link
                  href="/cotizar"
                  className="text-brand-yellow-500 font-bold hover:underline flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Cotizador Vial Online
                </Link>
              </li>
              <li>
                <Link
                  href="/guias/envios-flex-mar-del-plata"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Guía Flex para Vendedores ML
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos-y-condiciones"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="hover:text-brand-yellow-500 transition-colors flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-brand-yellow-500" />
                  Política de Privacidad
                </Link>
              </li>
            </ul>

            {/* Aviso Operativo Importante */}
            <div className="p-3 rounded-xl bg-brand-blue-400/30 border border-brand-blue-300/40 text-xs text-brand-blue-100 space-y-1">
              <div className="font-subheading uppercase font-bold text-brand-yellow-500 flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5" /> Límite Operativo
              </div>
              <p>Motos: hasta 5 kg y 40×40×30 cm. Mercadería asegurada en tránsito urbano.</p>
            </div>
          </div>
        </div>

        {/* Cierre inferior de derechos y leyenda impositiva obligatoria */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-brand-blue-400/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-blue-200 font-sans">
          <p>© 2026 Envíos DosRuedas · Mar del Plata, Argentina. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-brand-yellow-500 font-semibold">
              No emitimos Factura A.
            </span>
            <span>·</span>
            <span>Comprobante fiscal B / C</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
