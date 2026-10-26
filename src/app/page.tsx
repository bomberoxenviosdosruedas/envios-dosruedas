import Link from "next/link";
import { ArrowRight, Calculator, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Preliminar */}
      <section className="bg-brand-blue-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-brand-yellow-500 text-brand-blue-500 font-subheading uppercase text-sm md:text-base px-4 py-1.5 rounded-full font-bold mb-6">
            <Zap className="w-4 h-4" /> Flota Propia en Mar del Plata
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-none tracking-tight mb-6">
            Mensajería en Moto <br />
            <span className="text-brand-yellow-500">Rápida y Segura</span>
          </h1>
          <p className="font-sans text-brand-blue-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y tarifas LowCost para tu negocio en Mar del Plata.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cotizar"
              className="w-full sm:w-auto bg-brand-yellow-500 hover:bg-brand-yellow-400 active:bg-brand-yellow-600 text-brand-blue-500 font-subheading text-xl uppercase tracking-wider px-8 py-4 rounded-full font-bold shadow-accent-sm inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calculator className="w-5 h-5" /> Cotizar Envío Online
            </Link>
            <Link
              href="/cobertura"
              className="w-full sm:w-auto bg-brand-blue-400/30 hover:bg-brand-blue-400/50 text-white border border-brand-blue-200/40 font-subheading text-xl uppercase tracking-wider px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all"
            >
              <MapPin className="w-5 h-5" /> Ver Cobertura MdP
            </Link>
          </div>
        </div>
      </section>

      {/* Franja de Remate Amarilla */}
      <div className="franja-vial" />

      {/* Grid de Accesos Rápidos */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="double-bezel-outer">
            <div className="double-bezel-inner">
              <Zap className="w-8 h-8 text-brand-blue-500 mb-3" />
              <h2 className="font-display text-2xl uppercase text-brand-blue-500 mb-2">Express 3 Horas</h2>
              <p className="text-brand-blue-400 font-sans text-sm mb-4">
                Despachos prioritarios puerta a puerta con corte operativo a las 15:00 hs.
              </p>
              <Link href="/servicios/envios-express" className="text-brand-blue-500 font-subheading uppercase text-sm font-bold inline-flex items-center gap-1 hover:underline">
                Conocer Más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="double-bezel-outer">
            <div className="double-bezel-inner">
              <ShieldCheck className="w-8 h-8 text-brand-blue-500 mb-3" />
              <h2 className="font-display text-2xl uppercase text-brand-blue-500 mb-2">Mercado Envíos Flex</h2>
              <p className="text-brand-blue-400 font-sans text-lg mb-4">
                Entregas en el día garantizadas para potenciar tus ventas y reputación verde.
              </p>
              <Link href="/servicios/enviosflex" className="text-brand-blue-500 font-subheading uppercase text-sm font-bold inline-flex items-center gap-1 hover:underline">
                Conocer Más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="double-bezel-outer">
            <div className="double-bezel-inner">
              <Calculator className="w-8 h-8 text-brand-blue-500 mb-3" />
              <h2 className="font-display text-2xl uppercase text-brand-blue-500 mb-2">Reparto LowCost</h2>
              <p className="text-brand-blue-400 font-sans text-sm mb-4">
                El precio más competitivo por zona para entregas en el día hasta las 19:00 hs.
              </p>
              <Link href="/servicios/envios-lowcost" className="text-brand-blue-500 font-subheading uppercase text-sm font-bold inline-flex items-center gap-1 hover:underline">
                Conocer Más <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
