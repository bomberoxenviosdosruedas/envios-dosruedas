'use client';

import { motion } from 'motion/react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MapPin, ArrowUpRight } from 'lucide-react';

const socialChannels = [
  {
    name: 'WhatsApp Oficial',
    handle: '+54 9 223 660-2699',
    actionText: 'Escribinos al instante',
    href: 'https://wa.me/5492236602699?text=Hola!%20Quiero%20hacer%20un%20env%C3%ADo%20en%20Mar%20del%20Plata',
    icon: FaWhatsapp,
    accentClass: 'hover:border-[#25D366]/40 hover:bg-[#25D366]/5',
    iconBg: 'bg-[#25D366] text-white',
  },
  {
    name: 'Instagram Oficial',
    handle: '@enviosdosruedas',
    actionText: 'Seguinos en historias',
    href: 'https://instagram.com/enviosdosruedas',
    icon: FaInstagram,
    accentClass: 'hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5',
    iconBg: 'bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white',
  },
  {
    name: 'Base Operativa MdP',
    handle: 'Friuli 1972, Mar del Plata',
    actionText: 'Conocé nuestro centro',
    href: '/contacto',
    icon: MapPin,
    accentClass: 'hover:border-brand-blue-500/40 hover:bg-brand-blue-500/5',
    iconBg: 'bg-brand-blue-500 text-white',
  },
  {
    name: 'Facebook Oficial',
    handle: '/enviosdosruedas',
    actionText: 'Sumate a la comunidad',
    href: 'https://facebook.com/enviosdosruedas',
    icon: FaFacebookF,
    accentClass: 'hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5',
    iconBg: 'bg-[#1877F2] text-white',
  },
];

export default function CarruselRedes() {
  // Duplicamos el listado para lograr un loop infinito continuo y fluido
  const loopedChannels = [...socialChannels, ...socialChannels, ...socialChannels];

  return (
    <section
      className="w-full bg-brand-blue-50/70 border-y border-brand-blue-100 py-4 overflow-hidden relative"
      aria-label="Canales oficiales de comunicación y redes"
    >
      <div className="max-w-7xl mx-auto px-4 mb-2 flex items-center justify-between">
        <span className="font-subheading text-xs uppercase tracking-wider text-brand-blue-400 font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-yellow-500 animate-pulse" />
          Atención en tiempo real · Mar del Plata
        </span>
        <span className="hidden sm:inline font-sans text-xs text-brand-blue-400">
          Respuestas en menos de 5 minutos
        </span>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex items-center gap-4 w-max"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{
            ease: 'linear',
            duration: 25,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {loopedChannels.map((item, idx) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith('http');
            return (
              <a
                key={`${item.name}-${idx}`}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-brand-blue-100/80 shadow-2xs transition-all duration-200 group ${item.accentClass}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform ${item.iconBg}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left pr-2">
                  <div className="flex items-center gap-1">
                    <span className="font-subheading text-sm font-bold uppercase text-brand-blue-500 leading-none">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue-300 group-hover:text-brand-blue-500 transition-colors" />
                  </div>
                  <span className="font-mono text-xs text-brand-blue-400 font-medium">
                    {item.handle}
                  </span>
                  <span className="text-[11px] font-sans text-brand-blue-300">
                    {item.actionText}
                  </span>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
