import { initClosingBehavior } from '@tma.js/sdk';

import { createHOCs } from '../createHOCs.js';
import { createHooks } from '../createHooks.js';

export const [useClosingBehaviorRaw, useClosingBehavior] = createHooks(initClosingBehavior);

export const [withClosingBehaviorRaw, withClosingBehavior] = createHOCs(
  useClosingBehaviorRaw,
  useClosingBehavior,
);
