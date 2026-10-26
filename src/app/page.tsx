import type { Metadata } from 'next';
import HeroAnimado from '@/components/home/HeroAnimado';
import SegmentosHome from '@/components/home/SegmentosHome';
import ServicesOverview from '@/components/home/ServicesOverview';
import LogisticaHomeSection from '@/components/home/LogisticaHomeSection';
import EmprendedoresHome from '@/components/home/EmprendedoresHome';
import MarDeliveryHomeSection from '@/components/home/MarDeliveryHomeSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import CtaSection from '@/components/home/CtaSection';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enviosdosruedas.com';

export const metadata: Metadata = {
  title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
  description:
    'Mensajería en moto y logística e-commerce en Mar del Plata. Envíos Express en franja de 3 hs, Mercado Envíos Flex en el día y reparto LowCost. Base física en Friuli 1972.',
  alternates: { canonical: `${baseUrl}/` },
  openGraph: {
    title: 'Mensajería en moto en Mar del Plata | Envíos DosRuedas',
    description:
      'La solución logística y última milla de mayor confianza en Mar del Plata. Envíos Express, MercadoLibre Flex, ruteo eficiente y cadetería propia.',
    url: `${baseUrl}/`,
    type: 'website',
    locale: 'es_AR',
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function HomePage() {
  return (
    <div
      id="home-page-container"
      className="bg-brand-white text-brand-ink selection:bg-brand-yellow selection:text-brand-blue overflow-x-hidden"
    >
      <HeroAnimado />
      <SegmentosHome />
      <ServicesOverview />
      <LogisticaHomeSection />
      <EmprendedoresHome />
      <MarDeliveryHomeSection />
      <SocialProofSection />
      <CtaSection />
    </div>
  );
}
