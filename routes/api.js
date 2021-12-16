var express = require('express');
var router = express.Router();


/* INDEX */
router.get('/ristorante', function(req, res, next) {

});
router.get('/ristorante/orari', function(req, res, next) {

});
router.put('/ristorante/orari', function(req, res, next) {

});

/* PRENOTAZIONI */
router.get('/ristorante/prenotazioni/:id?', function(req, res, next) {

});
router.put('/ristorante/prenotazioni/:id', function(req, res, next) {

});

/* ORDINI */
router.get('/ristorante/ordini/:id?', function(req, res, next) {

});
router.put('/ristorante/ordini/:id', function(req, res, next) {

});

/* TAVOLI */
router.get('/ristorante/tavoli/:id?', function(req, res, next) {

});
router.post('/ristorante/tavoli/', function(req, res, next) {

});
router.delete('/ristorante/tavoli/:id', function(req, res, next) {

});

/* PIATTI */
router.get('/ristorante/menu/:id?', function(req, res, next) {

});
router.post('/ristorante/menu/', function(req, res, next) {

});
router.delete('/ristorante/menu/:id', function(req, res, next) {

});


module.exports = router;
