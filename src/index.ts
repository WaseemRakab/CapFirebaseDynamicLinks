import { registerPlugin } from '@capacitor/core';

import type { CapFirebaseDynamicLinksPlugin } from './definitions';

const CapFirebaseDynamicLinks = registerPlugin<CapFirebaseDynamicLinksPlugin>(
  'CapFirebaseDynamicLinks',
  {
    web: () => import('./web').then(m => new m.CapFirebaseDynamicLinksWeb()),
  },
);

export * from './definitions';
export { CapFirebaseDynamicLinks };
