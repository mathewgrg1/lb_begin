'use strict';
module.exports = function(app) {
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
};

// Using Express router middleware
// module.exports = function(app) {
//   var router = app.loopback.Router();
//   router.get('/ping', function(req, res) {
//     res.send('pong');
//   });
// };
