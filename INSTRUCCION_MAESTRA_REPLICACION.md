# INSTRUCCIÓN MAESTRA DE REPLICACIÓN Y DESPLIEGUE: ENVÍOS DOSRUEDAS (MAR DEL PLATA)

> **Documento:** `INSTRUCCION_MAESTRA_REPLICACION.md`  
> **Estado:** Documento de Ejecución Activo  
> **Stack Oficial:** Next.js 16 (App Router) · React 19 · TypeScript 5.7+ · Tailwind CSS v4 · Motion (`motion/react`) · Prisma ORM 7+ · PostgreSQL (con fallback in-memory resiliente) · Leaflet / OpenStreetMap / Google Maps Platform Híbrido · Lucide React

---

## 1. MISIÓN Y CONTEXTO DEL NEGOCIO

Replicar de punta a punta la plataforma digital oficial de **Envíos DosRuedas**, servicio de mensajería urbana y paquetería de última milla con base operativa en **Friuli 1972, Mar del Plata, Argentina** (WhatsApp: `+54 9 223 660-2699`).

### 1.1 Ley de Tres Colores de Marca (Estricta e Innegociable)
1. **Azul Institucional (`#0950F6`):** Techo máximo de oscuridad. Prohibido usar negro puro (`#000000`) o grises estándar (`#333`, `#666`, Tailwind gray/slate/zinc). Todos los contrastes oscuros se basan en azul.
2. **Amarillo Vial (`#FFEC01`):** Señalización y acción. Botones CTA principales, badges de estado, franjas viales de 6px en header y footer. Máximo 15% de cobertura visual por pantalla.
3. **Blanco Puro (`#FFFFFF`):** Lienzo base para lectura limpia y fondos de contenido.
4. **Acabado Geométrico Doble Bezel (`double-bezel`):**
   - Contenedor exterior: fondo tintado `rgba(9, 80, 246, 0.05)` con borde `rgba(9, 80, 246, 0.12)`.
   - Contenedor interior: fondo `#FFFFFF` con sombra teñida en azul `rgba(9, 80, 246, 0.08)`.

### 1.2 Voz y Tono
- **Voseo Rioplatense natural:** "cotizá tu envío", "escribinos", "conocé nuestros radios", "coordiná en el acto".

---

## 2. ARQUITECTURA TÉCNICA Y RESILIENCIA

1. **Persistencia Híbrida (Prisma + Fallback en Memoria):**
   - Esquema Prisma oficial para PostgreSQL (`PriceRange`, `User`, `Post`, `Feedback`, `ImageMetadata`).
   - Fallback autónomo en código (`src/lib/pricing-data.ts`) con la tabla de tarifas oficial de Mar del Plata para que el cotizador y la web funcionen al 100% incluso sin base de datos PostgreSQL conectada en local.
2. **Geolocalización y Mapas Híbridos:**
   - Mapa interactivo con Leaflet y teselas OpenStreetMap.
   - Cálculo vial con fallback OSRM / Haversine geocodificado de Mar del Plata y switch automático a Google Maps Platform (Places / Directions) cuando se cargue `GOOGLE_MAPS_API_KEY` en `.env`.
3. **Flota de Fuentes Tipográficas:**
   - Anton SC (display títulos de alto impacto).
   - Bebas Neue (subtítulos y números llamativos).
   - Outfit (cuerpo de texto sans-serif).
   - Geist Mono (datos técnicos, distancias y precios).

---

## 3. MAPA DE RUTAS OFICIALES (19 RUTAS PÚBLICAS)

1. `/` — Portada (Home) de alta conversión
2. `/cotizar` — Cotizador Unificado interactivo (Express vs LowCost)
3. `/contacto` — Base operativa en Friuli 1972, teléfonos, WhatsApp y formulario
4. `/cobertura` — Mapa de 5 radios de Mar del Plata y cálculo periferia ($1.000/km)
5. `/servicios` — Catálogo central de logística
6. `/servicios/envios-express` — Envíos en 3 hs (corte 15:00 hs)
7. `/servicios/envios-lowcost` — Envíos en el día hasta 19:00 hs (corte 13:00 hs)
8. `/servicios/enviosflex` — Logística oficial Mercado Envíos Flex
9. `/servicios/deposito-fulfillment` — Depósito y preparación de pedidos
10. `/servicios/empresas-cuenta-corriente` — Cuenta corriente y liquidación B2B
11. `/servicios/envios-contrareembolso` — Cobranza en destino y depósito en 24 hs
12. `/servicios/plan-emprendedores` — Tarifas preferenciales para e-commerce local
13. `/nosotros` — Hub institucional
14. `/nosotros/sobre-nosotros` — Historia y flota propia sin tercerización
15. `/nosotros/preguntas-frecuentes` — Acordeón de FAQs operativas
16. `/nosotros/nuestras-redes` — Presencia en Instagram, WhatsApp y Facebook
17. `/guias/envios-flex-mar-del-plata` — Guía SEO para vendedores Flex en MdP
18. `/terminos-y-condiciones` — Marco legal, límites de bulto (5 kg, 40x40x30 cm)
19. `/politica-de-privacidad` — Protección de datos de clientes y remitentes

---

## 4. PLAN DE EJECUCIÓN POR FASES

| Fase | Título | Archivos Clave | Verificación |
| :--- | :--- | :--- | :--- |
| **0** | **Setup Base y Árbol de Rutas** | `package.json`, `.env`, `globals.css`, `prisma/schema.prisma`, stubs de 19 rutas | `pnpm build` sin errores 404 ni faltantes |
| **1** | **Shell Persistente y Layout** | `layout.tsx`, `Header.tsx`, `Footer.tsx`, `CarruselRedes.tsx` | Sticky nav, menú mobile, franja amarilla de 6px |
| **2** | **Página de Inicio (Home)** | `app/page.tsx`, `src/components/home/*` | Hero animado, Double Bezel, testimonios, CTAs |
| **3** | **Contacto y Base Operativa** | `app/contacto/page.tsx`, `src/components/contacto/*` | Ficha Friuli 1972, Bento grid, click-to-copy, WhatsApp |
| **4** | **Cotizador Unificado** | `app/cotizar/page.tsx`, `useCotizadorUnified.ts`, `pricing.ts`, mapa Leaflet | Cálculo de km real, comparación de tarifa y link WA |
| **5** | **Catálogo y 7 Servicios** | `app/servicios/page.tsx`, `app/servicios/[slug]/*` | 7 páginas con specs, horarios de corte y tarifas |
| **6** | **Cobertura y Radios Zonales** | `app/cobertura/page.tsx`, visor interactivo Leaflet | 5 radios urbanos + periféricos ($1.000/km) |
| **7** | **Módulo Institucional & FAQs** | `app/nosotros/*`, acordeón de FAQs, redes sociales | Acordeón animado, historias y cultura local |
| **8** | **Guías SEO y Marco Legal** | `app/guias/*`, `app/terminos-y-condiciones`, privacidad | Contenido indexable, tablas legales y límites |

---

## 5. POLÍTICA DE CONTROL DE CAMBIOS
- No realizar commits intermedios de Git durante la ejecución; todos los cambios se mantienen en el árbol de trabajo hasta la validación completa del sistema.
- Validar builds con `pnpm build` progresivamente.
