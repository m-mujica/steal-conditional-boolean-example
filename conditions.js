import { isNodeJS } from './utils';

// steal-conditional will evaluate this module, we need to check the
// environment to prevent undefined references when accessing globals
// during build time
export const needsFetchShim = isNodeJS ? !global.fetch : !self.fetch;
