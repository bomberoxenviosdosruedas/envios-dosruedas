import { Star, ShieldCheck, CheckCircle2, Quote } from 'lucide-react';

const stats = [
  { value: '+10.000', label: 'Envíos Entregados', desc: 'En tiempo y forma en todo Mar del Plata' },
  { value: '100%', label: 'Flota Propia', desc: 'Cadetes contratados de total confianza' },
  { value: '0', label: 'Paquetes Extraviados', desc: 'Trazabilidad y custodia responsable' },
  { value: '10', label: 'Años de Trayectoria', desc: 'Presentes en el asfalto marplatense' },
];

const testimonials = [
  {
    name: 'Carolina M.',
    business: 'Tienda de Ropa & Accesorios (Güemes)',
    text: 'Desde que despachamos con Envíos DosRuedas dejamos de sufrir por los horarios. Los clientes reciben sus compras en el día y el cobro contra reembolso nos funciona impecable.',
    rating: 5,
  },
  {
    name: 'Martín S.',
    business: 'Vendedor Mercado Libre Platinum (Centro)',
    text: 'Cuidan nuestras métricas Flex como nadie. Nos retiran puntual a las 15 hs y antes de las 20 hs ya está todo entregado. La atención directa por WhatsApp es inmejorable.',
    rating: 5,
  },
  {
    name: 'Gonzalo R.',
    business: 'Estudio Jurídico & Contable (La Perla)',
    text: 'Tener una cuenta corriente con ellos nos simplificó la vida. Mueven remitos, trámites bancarios y cobranzas con total prolijidad y confidencialidad.',
    rating: 5,
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Barra de Métricas Numéricas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((st) => (
            <div
              key={st.label}
              className="double-bezel-outer text-center transition-transform hover:-translate-y-1"
            >
              <div className="double-bezel-inner py-6 px-4">
                <span className="font-mono text-4xl sm:text-5xl font-bold text-brand-blue-500 block mb-1">
                  {st.value}
                </span>
                <span className="font-subheading text-base font-bold uppercase tracking-wider text-brand-blue-500 block mb-1">
                  {st.label}
                </span>
                <span className="font-sans text-xs text-brand-blue-400 block">
                  {st.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Testimonios */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="font-subheading text-sm uppercase tracking-wider text-brand-blue-400 font-bold">
              Confianza Comprobada
            </span>
            <h2 className="font-display text-3xl sm:text-5xl uppercase text-brand-blue-500">
              Lo que dicen quienes confían en nosotros
            </h2>
            <p className="font-sans text-brand-blue-400 text-base leading-relaxed">
              Comercios, emprendedores y empresas que crecen día a día en Mar del Plata junto a nuestra cadetería.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="double-bezel-outer">
                <div className="double-bezel-inner flex flex-col justify-between h-full p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-brand-yellow-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-yellow-500" />
                      ))}
                    </div>
                    <p className="font-sans text-sm text-brand-blue-500 leading-relaxed italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-blue-50">
                    <span className="font-display text-lg uppercase text-brand-blue-500 block leading-tight">
                      {t.name}
                    </span>
                    <span className="font-sans text-xs text-brand-blue-400 block">
                      {t.business}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
