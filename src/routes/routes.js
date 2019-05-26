const path = require('path');

const createRoutes = routes =>
  routes.map(([route, name]) => ({
    path: route,
    component: path.resolve(`src/pages/${name}/index.js`),
  }));

module.exports = createRoutes([
  ['/', 'Home'],
  ['/our-school', 'OurSchool'],
  ['/404', 'NotFound'],
]);
