/**
 * Constantes únicas de promesas de servicio y umbrales operativos (BL-03).
 * Fuente de verdad unificada para cotizadores, páginas informativas, JSON-LD y llms.txt.
 */

// Ventana de entrega Express.
export const EXPRESS_WINDOW = 'franja horaria de 3 hs';
export const EXPRESS_WINDOW_SHORT = 'Franja de 3 hs';

// Anticipación mínima para coordinar una franja de Express.
export const EXPRESS_LEAD_TIME = '2 hs de anticipación';

// Corte Express: pedido hasta esta hora para entregar en el día.
export const EXPRESS_CUTOFF_TIME = '15:00 hs';

// Ventanas operativas LowCost
export const LOWCOST_CUTOFF_TIME = '13:00 hs';
export const LOWCOST_DELIVERY_DEADLINE = '19:00 hs';

// Mercado Envíos Flex
export const FLEX_CUTOFF_TIME = '15:00 hs';
export const FLEX_DELIVERY_DEADLINE = '20:00 hs';

// Tarifas fijas de los niveles Flex.
export const FLEX_NIVEL_2_PRICE = 6500;
export const FLEX_NIVEL_3_PRICE = 4500;

// Recargo por lluvia.
export const RAIN_SURCHARGE_PERCENT = 30;
export const RAIN_SURCHARGE_PERCENT_EXPRESS_LOWCOST = 50;

// Recargos operativos de Express y LowCost
export const WAIT_TOLERANCE_MIN = 10;
export const WAIT_CHARGE_ARS = 2200;
export const WAIT_CHARGE_BLOCK_MIN = 10;
export const EXTRA_STOP_SURCHARGE_PERCENT = 50;
export const EXTRA_STOP_MAX_DETOUR_KM = 2;
export const RETRY_CHARGE_PERCENT = 100;

// Periferia
export const PERIPHERY_PRICE_PER_KM = 1000;
export const BULK_EXTRA_FROM_ARS = 1800;

// Umbrales de distancia y límites físicos
export const CONSULT_THRESHOLD_KM = 20;

// Capacidad por bulto
export const STANDARD_WEIGHT_KG = 5;
export const STANDARD_BULLET_DIMENSIONS_CM = '40 × 40 × 30 cm';

// Condiciones comerciales Depósito & Fulfillment
export const DROPOFF_DISCOUNT_PERCENT = 20;
export const CONTRAREEMBOLSO_COMMISSION_PERCENT = 0;

// Tarifa fija del plan E-Commerce Same Day
export const SAME_DAY_FIXED_PRICE = 6000;

// Tarifa fija E-Commerce 24HS (Next Day)
export const ECOMMERCE_24HS_PRICE = 3800;
export const ECOMMERCE_24HS_FREE_PICKUP_THRESHOLD = 10;

export const ECOMMERCE_24HS_PLANS = [
  { name: 'Inicial', fromEnvos: 1, toEnvios: 199, price: ECOMMERCE_24HS_PRICE, featured: false },
  { name: 'Pro', fromEnvos: 200, toEnvios: 1199, price: 3500, featured: true },
  { name: 'Elite', fromEnvos: 1200, toEnvios: 1999, price: 3200, featured: false },
  { name: 'Partner', fromEnvos: 2000, toEnvios: null, price: 3000, featured: false },
] as const;

export const EMPRENDEDORES_PLANS = [
  {
    name: 'Plan Inicial DropOFF',
    distance: 'Por envío en MDQ',
    price: 2400,
    period: '/ envío',
    tag: `DropOFF -${DROPOFF_DISCOUNT_PERCENT}%`,
    note: 'Traés tus paquetes listos a Friuli 1972 y el descuento se aplica solo.',
    featured: false,
  },
  {
    name: 'Plan E-Commerce 3PL',
    distance: 'Stock gratis',
    price: 3000,
    period: '/ envío + stock gratis',
    tag: 'Con depósito',
    note: 'Stock gratis en Friuli 1972 + picking QR + Same Day.',
    featured: true,
  },
  {
    name: 'Plan PyME Corporativo',
    distance: 'Volumen > 10 envíos/día',
    price: null,
    period: '',
    tag: 'Cuenta corriente',
    note: 'Para empresas con envíos diarios recurrentes. La tarifa se cotiza.',
    featured: false,
  },
] as const;

export const RETRY_RULES = {
  EXPRESS: { type: 'NEW_TRIP', description: 'Se cobra como viaje nuevo' },
  LOW_COST: { type: 'NEW_TRIP', description: 'Se cobra como viaje nuevo' },
  FLEX_NIVEL_1: { type: 'PERCENT', value: 50, description: '50% en todas las zonas' },
  FLEX_NIVEL_2: { type: 'ZONE_BASED', z1: 0, z2_to_z5: 50, description: 'Z1 gratis, Z2-Z5 50%' },
  FLEX_NIVEL_3: { type: 'FREE', description: '100% bonificada todas zonas' },
  DEPOSITO_3PL: { type: 'FREE', description: '100% bonificada' },
  ECOMMERCE_24HS: { type: 'FREE', description: '100% bonificada' },
  CUENTA_CORRIENTE: { type: 'PERCENT', value: 50, description: '50% del valor original' },
} as const;

// Horarios de atención oficiales en base central Friuli 1972
export const OPERATING_HOURS = {
  weekdays: '09:00 a 18:00 hs',
  saturdays: '10:00 a 15:00 hs',
  sundays: 'Cerrado',
} as const;

export const CONTACT_EMAIL = 'matiascejas@enviosdosruedas.com';
export const SUPPORT_PHONE = '+54 223 660-2699';
export const WHATSAPP_NUMBER = '5492236602699';
