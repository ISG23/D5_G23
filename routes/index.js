var express = require('express');
var router = express.Router();


/* INDEX */
router.get('/', function(req, res, next) {
  res.redirect('/ristorante');
});

module.exports = router;
