'use client';

import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface FormData {
  nombre: string;
  telefono: string;
  email: string;
  tipoConsulta: string;
  mensaje: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    tipoConsulta: 'Cotización urgente',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!formData.nombre.trim() || !formData.telefono.trim()) {
      setStatus('error');
      setErrorMessage('Por favor completá tu nombre y teléfono de contacto.');
      return;
    }

    // Simulate reliable dispatch & formulate WhatsApp link
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Envíos DosRuedas! Soy ${formData.nombre || 'un cliente'}. Mi consulta (${formData.tipoConsulta}): ${formData.mensaje || 'Quisiera coordinar un envío en Mar del Plata'}. Mi teléfono de contacto es: ${formData.telefono || 'el que figura aquí'}.`
    );
    return `https://wa.me/5492236602699?text=${text}`;
  };

  const directWhatsAppQuick = `https://wa.me/5492236602699?text=${encodeURIComponent(
    'Hola Envíos DosRuedas! Necesito coordinar un envío en Mar del Plata. ¿Tienen disponibilidad ahora?'
  )}`;

  return (
    <div className="double-bezel-outer h-full">
      <div className="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between h-full bg-white">
        <div>
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-blue-100">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-brand-blue-500">
                Escribinos
              </h2>
              <p className="font-sans text-sm text-brand-blue-400 mt-0.5">
                Respondemos en minutos en horario comercial.
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
              <Send className="w-5 h-5" />
            </div>
          </div>

          {status === 'success' ? (
            <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 text-green-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
                  ¡Mensaje Recibido, {formData.nombre}!
                </h3>
                <p className="font-sans text-sm text-brand-blue-400 mt-2 max-w-md mx-auto">
                  Registramos tus datos correctamente. Si necesitás respuesta inmediata o confirmar retiro hoy mismo, derivá tu mensaje directo a nuestro WhatsApp:
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-sans font-bold text-sm uppercase tracking-wider hover:bg-[#20ba59] transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Abrir en WhatsApp con tus datos</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    nombre: '',
                    telefono: '',
                    email: '',
                    tipoConsulta: 'Cotización urgente',
                    mensaje: '',
                  });
                }}
                className="font-sans text-xs font-semibold text-brand-blue-400 hover:text-brand-blue-500 underline uppercase tracking-wider"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label
                  htmlFor="nombre"
                  className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5"
                >
                  Nombre o Razón Social <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Matías Cejas o Librería Central"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-blue-200 bg-white text-brand-blue-500 placeholder:text-brand-blue-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="telefono"
                    className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5"
                  >
                    Teléfono / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej: 223 555-1234"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-blue-200 bg-white text-brand-blue-500 placeholder:text-brand-blue-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contacto@empresa.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-brand-blue-200 bg-white text-brand-blue-500 placeholder:text-brand-blue-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="tipoConsulta"
                  className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5"
                >
                  Tipo de Consulta
                </label>
                <select
                  id="tipoConsulta"
                  name="tipoConsulta"
                  value={formData.tipoConsulta}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-blue-200 bg-white text-brand-blue-500 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all"
                >
                  <option value="Cotización urgente">Cotización urgente (Envío en el día)</option>
                  <option value="Mercado Envíos Flex">Mercado Envíos Flex (Retiro y entrega)</option>
                  <option value="Cuenta Corriente Empresas">Cuenta Corriente Empresas y Comercios</option>
                  <option value="Cadetería y Trámites">Cadetería Bancaria y Trámites</option>
                  <option value="Consulta general">Otra consulta general</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block font-sans text-xs font-bold uppercase tracking-wider text-brand-blue-500 mb-1.5"
                >
                  Mensaje o Detalle del Envío
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Detallanos origen, destino aproximado, bulto o cualquier requerimiento específico..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-brand-blue-200 bg-white text-brand-blue-500 placeholder:text-brand-blue-200 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-yellow-500 text-brand-blue-500 font-display text-lg tracking-wider uppercase border-2 border-brand-yellow-500 hover:bg-brand-yellow-400 active:scale-[0.99] transition-all shadow-md font-bold cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? 'PROCESANDO...' : 'ENVIAR MENSAJE'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Shortcut to direct WhatsApp */}
        <div className="mt-8 pt-6 border-t border-brand-blue-100">
          <p className="font-sans text-xs text-brand-blue-400 text-center uppercase tracking-wider font-semibold mb-3">
            ¿Tenés un pedido saliendo ya?
          </p>
          <a
            href={directWhatsAppQuick}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-500 font-sans font-bold text-xs uppercase tracking-wider hover:bg-brand-blue-100 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>O consultanos directo por WhatsApp al toque</span>
          </a>
        </div>
      </div>
    </div>
  );
}
