'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ChevronDown,
  Calculator,
  Zap,
  Truck,
  Package,
  Building2,
  Banknote,
  Sparkles,
  MapPin,
  Users,
  Phone,
} from 'lucide-react';

const serviciosLinks = [
  {
    name: 'Envíos Express (3 hs)',
    href: '/servicios/envios-express',
    desc: 'Despachos punto a punto urgentes. Corte 15:00 hs',
    icon: Zap,
  },
  {
    name: 'Envíos LowCost en el Día',
    href: '/servicios/envios-lowcost',
    desc: 'Reparto económico hasta las 19:00 hs. Corte 13:00 hs',
    icon: Truck,
  },
  {
    name: 'Mercado Envíos Flex',
    href: '/servicios/enviosflex',
    desc: 'Entregas Same-Day en Mar del Plata para tu reputación',
    icon: Sparkles,
  },
  {
    name: 'Depósito & Fulfillment',
    href: '/servicios/deposito-fulfillment',
    desc: 'Almacenaje y armado de pedidos en Friuli 1972',
    icon: Package,
  },
  {
    name: 'Empresas & Cta. Cte.',
    href: '/servicios/empresas-cuenta-corriente',
    desc: 'Facturación unificada y cuenta corriente corporativa',
    icon: Building2,
  },
  {
    name: 'Envíos Contra Reembolso',
    href: '/servicios/envios-contrareembolso',
    desc: 'Cobro en efectivo al entregar con liquidación 24 hs',
    icon: Banknote,
  },
  {
    name: 'Plan Emprendedores',
    href: '/servicios/plan-emprendedores',
    desc: 'Tarifas con descuento para tiendas y showrooms locales',
    icon: Sparkles,
  },
];

export default function OptimizedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-brand-blue-100/60 shadow-tinted-sm transition-colors duration-200">
      {/* Franja superior de marca */}
      <div className="h-1 w-full bg-brand-yellow-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logotipo Oficial */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2 rounded-lg"
          aria-label="Envíos DosRuedas - Inicio"
        >
          <div className="relative w-10 h-10 rounded-full bg-brand-blue-500 flex items-center justify-center p-1.5 shadow-tinted-sm group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/LogoEnviosDosRuedas.png"
              alt="Logo Envíos DosRuedas"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl uppercase tracking-tight text-brand-blue-500 leading-none group-hover:text-brand-blue-400 transition-colors">
              ENVÍOS DOSRUEDAS
            </span>
            <span className="font-subheading text-xs tracking-wider uppercase text-brand-blue-400 font-bold">
              Mar del Plata · Flota Propia
            </span>
          </div>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Menú principal">
          {/* Dropdown Servicios */}
          <div
            className="relative"
            onMouseEnter={() => setServiciosOpen(true)}
            onMouseLeave={() => setServiciosOpen(false)}
          >
            <button
              onClick={() => setServiciosOpen(!serviciosOpen)}
              className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 flex items-center gap-1.5 py-2 transition-colors focus:outline-none"
              aria-expanded={serviciosOpen}
              aria-haspopup="true"
            >
              Servicios
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  serviciosOpen ? 'rotate-180 text-brand-yellow-500' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {serviciosOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute left-0 mt-1 w-96 rounded-2xl bg-white border border-brand-blue-100 shadow-tinted-lg p-3 z-50"
                >
                  <div className="px-3 py-2 border-b border-brand-blue-50 mb-2">
                    <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-400 font-bold">
                      Soluciones de Logística en MdP
                    </span>
                  </div>
                  <div className="space-y-1">
                    {serviciosLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServiciosOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-blue-50/80 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shrink-0 group-hover:bg-brand-blue-500 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-subheading text-base font-bold uppercase text-brand-blue-500 group-hover:text-brand-blue-400">
                              {item.name}
                            </div>
                            <div className="text-xs text-brand-blue-400 font-sans line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="pt-2 mt-2 border-t border-brand-blue-50">
                    <Link
                      href="/servicios"
                      onClick={() => setServiciosOpen(false)}
                      className="block text-center text-xs font-subheading uppercase font-bold text-brand-blue-500 hover:text-brand-blue-400 py-1"
                    >
                      Ver Catálogo Completo →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/cobertura"
            className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 transition-colors"
          >
            Cobertura
          </Link>

          <Link
            href="/nosotros"
            className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 transition-colors"
          >
            Nosotros
          </Link>

          <Link
            href="/contacto"
            className="font-subheading text-lg font-bold uppercase tracking-wider text-brand-blue-500 hover:text-brand-blue-400 transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* CTA Primario Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/cotizar"
            className="bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 px-6 py-2.5 rounded-full font-subheading font-bold uppercase text-lg tracking-wider shadow-accent-sm transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] inline-flex items-center gap-2"
          >
            <Calculator className="w-5 h-5" /> COTIZAR ONLINE
          </Link>
        </div>

        {/* Botón Móvil Hamburguesa */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/cotizar"
            className="bg-brand-yellow-500 text-brand-blue-500 px-3.5 py-1.5 rounded-full font-subheading font-bold uppercase text-sm tracking-wider shadow-xs"
          >
            Cotizar
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-brand-blue-500 hover:bg-brand-blue-50 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden border-t border-brand-blue-100 bg-white/98 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {/* Sección Servicios Colapsable */}
              <div>
                <button
                  onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
                  className="w-full flex items-center justify-between py-2 text-left font-subheading text-xl font-bold uppercase text-brand-blue-500 tracking-wider"
                >
                  <span>Servicios</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileServiciosOpen ? 'rotate-180 text-brand-yellow-500' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServiciosOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-3 pr-1 py-1 space-y-2 border-l-2 border-brand-yellow-500 my-2"
                    >
                      {serviciosLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm font-subheading font-bold uppercase text-brand-blue-400 hover:text-brand-blue-500 py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/servicios"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-bold uppercase text-brand-blue-500 pt-1"
                      >
                        Ver todos los servicios →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/cobertura"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 font-subheading text-xl font-bold uppercase text-brand-blue-500 tracking-wider hover:text-brand-blue-400"
              >
                <MapPin className="w-5 h-5" /> Cobertura MdP
              </Link>

              <Link
                href="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 font-subheading text-xl font-bold uppercase text-brand-blue-500 tracking-wider hover:text-brand-blue-400"
              >
                <Users className="w-5 h-5" /> Nosotros
              </Link>

              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-2 font-subheading text-xl font-bold uppercase text-brand-blue-500 tracking-wider hover:text-brand-blue-400"
              >
                <Phone className="w-5 h-5" /> Contacto & Base
              </Link>

              <div className="pt-4 border-t border-brand-blue-100 flex flex-col gap-2">
                <Link
                  href="/cotizar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full bg-brand-yellow-500 active:bg-brand-yellow-600 text-brand-blue-500 text-center py-3 rounded-full font-subheading font-bold uppercase text-lg tracking-wider shadow-accent-sm flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" /> Cotizar Online
                </Link>
                <a
                  href="https://wa.me/5492236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20en%20Mar%20del%20Plata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-brand-blue-50 text-brand-blue-500 text-center py-2.5 rounded-full font-subheading font-bold uppercase text-sm tracking-wider border border-brand-blue-200"
                >
                  WhatsApp: +54 9 223 660-2699
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
