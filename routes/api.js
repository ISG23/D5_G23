var express = require('express');
var router = express.Router();
const { Ristorante, OrariRistorante, Tavolo, Prenotazioni } = require('../models')

/* INDEX */
router.get('/ristorante', async function(req, res, next) {
    try {
        const r = await Ristorante.findAll();
        return res.json(r);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
router.get('/ristorante/:id_ristorante/orari', async function(req, res, next) {

    try {
        const r = await OrariRistorante.findOne({where: {id_ristorante: req.params.id_ristorante}});
        return res.json(r);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});
router.put('/ristorante/:id_ristorante/orari', async function(req, res, next) {

});

/* PRENOTAZIONI */
router.get('/ristorante/:id_ristorante/prenotazioni/:id?', async function(req, res, next) {
    try {
        let _id = req.params.id;let r;

        if(_id !== undefined){
            r = await Prenotazioni.findOne({where: {id_ristorante: req.params.id_ristorante, id:_id}});
        }else{
            r = await Prenotazioni.findAll({where: {id_ristorante: req.params.id_ristorante}});
        }

        return res.json({success:true, data:r});
    } catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }

});
router.put('/ristorante/:id_ristorante/prenotazioni/:id', async function(req, res, next) {

});

/* ORDINI */
router.get('/ristorante/:id_ristorante/ordini/:id?', async function(req, res, next) {

});
router.put('/ristorante/:id_ristorante/ordini/:id', async function(req, res, next) {

});

/* TAVOLI */
router.get('/ristorante/:id_ristorante/tavoli/:id?', async function(req, res, next) {

});
router.post('/ristorante/:id_ristorante/tavoli/', async function(req, res, next) {
    try{
        Tavolo.create(
            {
                id_ristorante: req.params.id_ristorante,
                numero: req.body.numero
            },
            {
                returning: true
            }
        );
        res.json({success: true, data:{}});
    }catch (e) {
        return res.status(500).json({success: false, e: error.message});
    }
});
router.delete('/ristorante/:id_ristorante/tavoli/:id', async function(req, res, next) {

});

/* PIATTI */
router.get('/ristorante/:id_ristorante/menu/:id?', async function(req, res, next) {

});
router.post('/ristorante/:id_ristorante/menu/', async function(req, res, next) {

});
router.delete('/ristorante/:id_ristorante/menu/:id', async function(req, res, next) {

});


module.exports = router;
