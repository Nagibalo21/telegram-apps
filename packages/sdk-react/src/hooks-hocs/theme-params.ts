import { initThemeParams } from '@tma.js/sdk';

import { createHOCs } from '../createHOCs.js';
import { createHooks } from '../createHooks.js';

export const [useThemeParamsRaw, useThemeParams] = createHooks(initThemeParams);

export const [withThemeParamsRaw, withThemeParams] = createHOCs(useThemeParamsRaw, useThemeParams);
