import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Package, Percent, Store, ArrowRight, CheckCircle2 } from 'lucide-react';

const ventajas = [
  {
    title: 'DropOFF con 20% de Descuento',
    desc: 'Traé tus paquetes listos a nuestra base de Friuli 1972 y obtené un 20% de bonificación directa en tus tarifas.',
    icon: Percent,
  },
  {
    title: 'Depósito & Stock Propio',
    desc: 'Guardá tu mercadería con nosotros. Cuando vendés por Instagram o Tiendanube, nosotros preparamos y despachamos.',
    icon: Package,
  },
  {
    title: 'Cobranza Contra Reembolso',
    desc: 'Cobramos en efectivo en el domicilio de tu cliente y te transferimos el dinero en 24 hs hábiles garantizadas.',
    icon: Store,
  },
];

export default function EmprendedoresHome() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-blue-50/50 border-y border-brand-blue-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Visual / Banner Emprendedores */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="double-bezel-outer">
              <div className="double-bezel-inner p-3 relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-blue-100 flex items-center justify-center">
                <Image
                  src="/Emprendedoresbanner.webp"
                  alt="Plan Emprendedores y Showrooms en Mar del Plata"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-500/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-brand-blue-100">
                  <span className="font-subheading text-xs font-bold uppercase tracking-wider text-brand-yellow-600 block">
                    Bonificación Especial
                  </span>
                  <span className="font-display text-xl uppercase text-brand-blue-500 block leading-tight">
                    20% OFF en modalidad DropOFF
                  </span>
                  <span className="font-sans text-xs text-brand-blue-400">
                    Base operativa Friuli 1972, Mar del Plata
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Contenido */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-yellow-500/20 text-brand-blue-500 font-subheading uppercase text-xs md:text-sm px-3.5 py-1 rounded-full font-bold">
              <Sparkles className="w-4 h-4 text-brand-blue-500" />
              Impulso E-commerce Local
            </div>

            <h2 className="font-display text-3xl sm:text-5xl uppercase text-brand-blue-500 leading-tight">
              ¿Vendés por Instagram o Tienda Online en MdP?
            </h2>

            <p className="font-sans text-brand-blue-400 text-lg leading-relaxed">
              Diseñamos un ecosistema logístico para que te enfoques en vender. Nosotros nos encargamos del almacenaje, el empaquetado y la entrega en mano a tus clientes con la mejor imagen comercial.
            </p>

            <div className="space-y-4 pt-2">
              {ventajas.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white border border-brand-blue-100 shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-500 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-subheading text-base uppercase font-bold text-brand-blue-500">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-brand-blue-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/servicios/plan-emprendedores"
                className="bg-brand-blue-500 hover:bg-brand-blue-400 text-white font-subheading text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 shadow-tinted-sm transition-all hover:scale-[1.02]"
              >
                Conocer Plan Emprendedores <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/servicios/deposito-fulfillment"
                className="bg-white hover:bg-brand-blue-50 text-brand-blue-500 border border-brand-blue-200 font-subheading text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-all"
              >
                Servicio de Depósito y Stock
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
