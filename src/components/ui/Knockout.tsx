import React from 'react';
import { cn } from '@/lib/utils';

export type KnockoutTone = 'yellow' | 'blue';

export interface KnockoutProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `yellow` sobre fondo azul (por defecto). `blue` sobre fondo amarillo. */
  tone?: KnockoutTone;
  children: React.ReactNode;
}

const toneStyles: Record<KnockoutTone, string> = {
  yellow: 'bg-brand-yellow-500 text-brand-blue-500 shadow-[0_0_28px_rgba(255,236,1,0.45)]',
  blue: 'bg-brand-blue-500 text-white shadow-[0_0_24px_rgba(9,80,246,0.28)]',
};

export function Knockout({ tone = 'yellow', className, children, ...rest }: KnockoutProps) {
  return (
    <span
      className={cn(
        'inline-block -rotate-1 rounded-full px-3 py-1 my-1 font-display uppercase leading-[1.1] tracking-[-0.02em] align-baseline',
        toneStyles[tone],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
