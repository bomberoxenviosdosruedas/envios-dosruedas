import { module } from '@prisma/composer';
import { compute, rawPostgres } from '@prisma/composer-prisma-cloud';
import nextjs from '@prisma/composer/nextjs';

export default module('envios-dosruedas', ({ provision }) => {
  const db = provision(rawPostgres({ name: 'principal' }));

  const web = compute({
    name: 'web',
    deps: { db: rawPostgres() },
    build: nextjs({
      module: import.meta.url,
      appDir: '.',
    }),
  });

  provision(web, { deps: { db } });
});


