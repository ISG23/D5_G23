var express = require('express');
var router = express.Router();

const { Ristorante, OrariRistorante, Tavolo, Prenotazione, Ordine, DettaglioOrdine, Prodotto } = require('../models')

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
    try{

        await OrariRistorante.update(
            {
                giorni_apertura: req.body.giorni_apertura,
                ferie:  req.body.ferie,
                orari_mattina: req.body.orari_mattina,
                orari_pomeriggio: req.body.orari_pomeriggio
            },
            {where: {id_ristorante:req.params.id_ristorante}}
        );
        res.json({success: true, data:{}});
    }catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});

/* PRENOTAZIONI */
router.get('/ristorante/:id_ristorante/prenotazioni/:id?', async function(req, res, next) {
    try {
        let _id = req.params.id;let r;

        if(_id !== undefined){
            r = await Prenotazione.findOne({where: {id_ristorante: req.params.id_ristorante, id:_id}});
        }else{
            r = await Prenotazione.findAll({where: {id_ristorante: req.params.id_ristorante}});
        }

        return res.json({success:true, data:r});
    } catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }

});
router.put('/ristorante/:id_ristorante/prenotazioni/:id', async function(req, res, next) {
    try{

        await Prenotazione.update(
            {
                stato: req.body.stato
            },
            {where: {id_ristorante:req.params.id_ristorante,id: req.params.id}}
        );
        res.json({success: true, data:{}});
    }catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});

/* ORDINI */
router.get('/ristorante/:id_ristorante/ordini/:id?', async function(req, res, next) {
    try {
        let _id = req.params.id;let r;
        inc = [
            {
                model: DettaglioOrdine,
                as: 'prodotti',
                include: [{
                    model: Prodotto,
                    as: 'prodotto'
                }]
            }
        ]
        if(_id !== undefined){
            r = await Ordine.findOne({
                include: inc,
                where: {id_ristorante: req.params.id_ristorante, id:_id}
            });
        }else{
            r = await Ordine.findAll({
                include: inc,
                where: {id_ristorante: req.params.id_ristorante}
            });
        }

        return res.json({success:true, data:r});
    } catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});
router.put('/ristorante/:id_ristorante/ordini/:id', async function(req, res, next) {
    try{

        await Ordine.update(
            {
                completato: req.body.completato
            },
            {where: {id_ristorante:req.params.id_ristorante,id: req.params.id}}
        );
        res.json({success: true, data:{}});
    }catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});

/* TAVOLI */
router.get('/ristorante/:id_ristorante/tavoli/:id?', async function(req, res, next) {
    try {
        let _id = req.params.id;let r;

        if(_id !== undefined){
            r = await Tavolo.findOne({where: {id_ristorante: req.params.id_ristorante, id:_id}});
        }else{
            r = await Tavolo.findAll({where: {id_ristorante: req.params.id_ristorante}});
        }

        return res.json({success:true, data:r});
    } catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});
router.post('/ristorante/:id_ristorante/tavoli/', async function(req, res, next) {
    try{
        Tavolo.create(
            {
                id: req.body.id,
                id_ristorante: req.params.id_ristorante,
                numeroPersone: req.body.numeroPersone
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
    try{
        await Tavolo.destroy({
            where: {id: req.params.id, id_ristorante: req.params.id_ristorante}
        })
        res.json({success: true, data:{}});
    }catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});

/* PIATTI */
router.get('/ristorante/:id_ristorante/menu', async function(req, res, next) {
    try {
        let r;
        r = await Prodotto.findAll({where: {id_ristorante: req.params.id_ristorante}});
        return res.json({success:true, data:r});
    } catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});
router.post('/ristorante/:id_ristorante/menu/', async function(req, res, next) {
    try{
        Prodotto.create(
            {
                nome: req.body.nome,
                id_ristorante: req.params.id_ristorante,
                ingredienti: req.body.ingredienti,
                prezzo: req.body.prezzo,
                disponibilita: req.body.disponibilita
            },
            {
                returning: true
            }
        );
        res.json({success: true, data:{}});
    }catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});
router.delete('/ristorante/:id_ristorante/menu/:id', async function(req, res, next) {
    try{
        await Prodotto.destroy({
            where: {id: req.params.id, id_ristorante: req.params.id_ristorante}
        })
        res.json({success: true, data:{}});
    }catch (error) {
        return res.status(500).json({success: false, e: error.message});
    }
});


module.exports = router;
