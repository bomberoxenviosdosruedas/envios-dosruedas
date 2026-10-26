import pg from 'pg';

const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function seed() {
  await client.connect();
  console.log('Connected to Prisma Postgres!');

  const check = await client.query('SELECT COUNT(*) FROM "PriceRange"');
  console.log('Current rows:', check.rows[0].count);

  if (parseInt(check.rows[0].count, 10) === 0) {
    console.log('Inserting official price ranges...');
    const seedQuery = `
      INSERT INTO "PriceRange" ("serviceType", "distanciaMinKm", "distanciaMaxKm", "precioRango", "descripcion") VALUES
      ('LOW_COST', 0.0, 3.0, 3000.0, 'LOW_COST: 0 a 3 km ($3.000)'),
      ('LOW_COST', 3.0, 5.0, 4000.0, 'LOW_COST: 3 a 5 km ($4.000)'),
      ('LOW_COST', 5.0, 7.0, 5300.0, 'LOW_COST: 5 a 7 km ($5.300)'),
      ('LOW_COST', 7.0, 10.0, 7000.0, 'LOW_COST: 7 a 10 km ($7.000)'),
      ('LOW_COST', 10.0, 9999.0, 700.0, 'LOW_COST: Kilómetro lineal total (+$700/km)'),
      ('EXPRESS', 0.0, 3.0, 3700.0, 'EXPRESS: 0 a 3 km ($3.700)'),
      ('EXPRESS', 3.0, 5.0, 4600.0, 'EXPRESS: 3 a 5 km ($4.600)'),
      ('EXPRESS', 5.0, 7.0, 6100.0, 'EXPRESS: 5 a 7 km ($6.100)'),
      ('EXPRESS', 7.0, 10.0, 8200.0, 'EXPRESS: 7 a 10 km ($8.200)'),
      ('EXPRESS', 10.0, 9999.0, 1000.0, 'EXPRESS: Kilómetro lineal total (+$1.000/km)');
    `;
    await client.query(seedQuery);
    console.log('Seed completed successfully!');
  } else {
    console.log('PriceRange table already has data.');
  }

  await client.end();
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
