import { module, service } from '@prisma/composer';
import nextjs from '@prisma/composer/nextjs';

const nextjsAdapter = nextjs({
  module: import.meta.url,
  appDir: '.',
});

export default module('envios-dosruedas', ({ provision }) => {
  provision(
    service({
      name: 'web',
      extension: nextjsAdapter.extension,
      type: nextjsAdapter.type,
      inputs: {},
      params: {},
      build: nextjsAdapter,
    })
  );
});
