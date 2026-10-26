import postgres from '@prisma/orm-postgres/runtime';
import type { Contract } from '../../prisma/contract.d';
import contractJson from '../../prisma/contract.json';

const connectionUrl = process.env.DATABASE_URL || '';

const globalForDb = globalThis as unknown as {
  dbInstance?: ReturnType<typeof postgres<Contract>>;
};

export const db =
  globalForDb.dbInstance ??
  postgres<Contract>({
    contract: contractJson as any,
    url: connectionUrl,
  });

if (process.env.NODE_ENV !== 'production') {
  globalForDb.dbInstance = db;
}

export default db;
