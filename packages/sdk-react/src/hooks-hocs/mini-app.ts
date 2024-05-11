import { initMiniApp } from '@tma.js/sdk';

import { createHOCs } from '../createHOCs.js';
import { createHooks } from '../createHooks.js';

export const [useMiniAppRaw, useMiniApp] = createHooks(initMiniApp);

export const [withMiniAppRaw, withMiniApp] = createHOCs(useMiniAppRaw, useMiniApp);
