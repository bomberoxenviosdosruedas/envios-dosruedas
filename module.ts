import { module } from '@prisma/composer';
import { compute } from '@prisma/composer-prisma-cloud';
import nextjs from '@prisma/composer/nextjs';

export default module('envios-dosruedas', ({ provision }) => {
  provision(
    compute({
      name: 'web',
      deps: {},
      build: nextjs({
        module: import.meta.url,
        appDir: '.',
      }),
    })
  );
});
