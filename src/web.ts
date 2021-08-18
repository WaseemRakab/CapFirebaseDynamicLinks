import { WebPlugin } from '@capacitor/core';

import type { CapFirebaseDynamicLinksPlugin } from './definitions';

export class CapFirebaseDynamicLinksWeb
  extends WebPlugin
  implements CapFirebaseDynamicLinksPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
