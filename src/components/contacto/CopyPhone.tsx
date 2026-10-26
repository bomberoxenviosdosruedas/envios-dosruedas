'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyPhoneProps {
  phone?: string;
  displayPhone?: string;
  className?: string;
}

export default function CopyPhone({
  phone = '+54 9 223 660-2699',
  displayPhone = '223 660-2699',
  className = '',
}: CopyPhoneProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = phone;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copiar número de teléfono"
      title="Copiar número de teléfono"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${
        copied
          ? 'bg-brand-blue-500 text-white border-brand-blue-500'
          : 'bg-brand-blue-50 text-brand-blue-500 border-brand-blue-100 hover:bg-brand-blue-100 hover:border-brand-blue-200'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-brand-yellow-500 stroke-[2.5]" />
          <span>¡Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-brand-blue-400" />
          <span>Copiar {displayPhone}</span>
        </>
      )}
    </button>
  );
}
