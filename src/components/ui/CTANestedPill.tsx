import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type CTANestedPillVariant = 'primary' | 'blue' | 'elevated' | 'outline' | 'ghost';
export type CTANestedPillSize = 'compact' | 'default' | 'large' | 'lg';

export interface CTANestedPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: CTANestedPillVariant;
  size?: CTANestedPillSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  iconClassName?: string;
  target?: string;
  rel?: string;
}

export const CTANestedPill = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, CTANestedPillProps>(
  (
    {
      children,
      href,
      variant = 'primary',
      size = 'default',
      icon,
      iconPosition = 'right',
      className,
      iconClassName,
      target,
      rel,
      disabled,
      onClick,
      type = 'button',
      ...restProps
    },
    ref
  ) => {
    const isLg = size === 'large' || size === 'lg';
    const isCompact = size === 'compact';

    const baseWrapper =
      'inline-flex items-center justify-center p-0.5 rounded-full font-subheading uppercase font-bold tracking-wider select-none transition-all duration-200';

    const wrapperVariantStyles: Record<CTANestedPillVariant, string> = {
      primary: 'bg-brand-yellow-400 hover:bg-brand-yellow-300 shadow-xs active:scale-[0.98]',
      blue: 'bg-white/20 hover:bg-white/30 border border-white/30 text-white',
      elevated: 'bg-linear-to-b from-brand-yellow-300 to-brand-yellow-500 shadow-md hover:shadow-lg',
      outline: 'border-2 border-brand-blue-500 hover:bg-brand-blue-50',
      ghost: 'hover:bg-brand-blue-50/50',
    };

    const innerPill = cn(
      'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200',
      isCompact && 'px-3.5 py-1 text-xs',
      size === 'default' && 'px-5 py-2.5 text-sm',
      isLg && 'px-7 py-3.5 text-base',
      variant === 'primary' && 'bg-brand-yellow-500 text-brand-blue-500 font-extrabold',
      variant === 'blue' && 'bg-brand-blue-500 text-white',
      variant === 'elevated' && 'bg-white text-brand-blue-500 shadow-xs',
      variant === 'outline' && 'text-brand-blue-500',
      variant === 'ghost' && 'text-brand-blue-500'
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className={cn('shrink-0', iconClassName)}>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className={cn('shrink-0', iconClassName)}>{icon}</span>}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          target={target}
          rel={rel}
          className={cn(baseWrapper, wrapperVariantStyles[variant], className)}
        >
          <span className={innerPill}>{content}</span>
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          baseWrapper,
          wrapperVariantStyles[variant],
          disabled && 'opacity-60 cursor-not-allowed',
          className
        )}
        {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        <span className={innerPill}>{content}</span>
      </button>
    );
  }
);

CTANestedPill.displayName = 'CTANestedPill';
