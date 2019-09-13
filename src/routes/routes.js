const path = require('path');

const createRoutes = routes =>
  routes.map(([route, name]) => ({
    path: route,
    component: path.resolve(`src/pages/${name}.js`),
  }));

module.exports = createRoutes([
  ['/', 'OurSchool'],
  ['/classes', 'Classes'],
  ['/faq', 'FAQ'],
  ['/system', 'System'],
  ['/family', 'Family'],
  ['/404', 'NotFound'],
]);
