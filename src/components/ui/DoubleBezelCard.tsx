import React from 'react';
import { cn } from '@/lib/utils';

export interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  outerClassName?: string;
  innerClassName?: string;
  variant?: 'light' | 'dark';
  hoverEffect?: boolean;
}

export const DoubleBezelCard = React.forwardRef<HTMLDivElement, DoubleBezelCardProps>(
  (
    {
      children,
      className,
      outerClassName,
      innerClassName,
      variant = 'light',
      hoverEffect = true,
      ...props
    },
    ref
  ) => {
    const isLight = variant === 'light';

    return (
      <div
        ref={ref}
        className={cn(
          'double-bezel-outer p-1 rounded-2xl transition-all duration-300',
          isLight
            ? 'bg-gradient-to-b from-brand-blue-100/60 to-brand-blue-200/40 border border-brand-blue-200/50 shadow-xs'
            : 'bg-gradient-to-b from-white/15 to-white/5 border border-white/20 shadow-md',
          hoverEffect && 'hover:shadow-lg hover:-translate-y-0.5',
          outerClassName,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'double-bezel-inner rounded-xl p-5 sm:p-6 transition-colors duration-300',
            isLight
              ? 'bg-white text-brand-blue-500'
              : 'bg-brand-blue-600/90 text-white backdrop-blur-xs',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

DoubleBezelCard.displayName = 'DoubleBezelCard';
