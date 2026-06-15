import { Route as homeRoute } from './route.index.js';
import { Route as userRoute } from './route.users.js';
import { Route as adminRoute } from './route.admin.js';

const serverRoutes = {
  'api': homeRoute,
  'api/users': userRoute,
  'api/admin': adminRoute,
};

export { serverRoutes, homeRoute, userRoute, adminRoute };
