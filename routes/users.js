var express = require('express');
var router = express.Router();

const { Ristorante, OrariRistorante, Tavolo, Sequelize } = require('../models')

/* GET users listing. */
router.get('/',async function(req, res, next) {
  //anagrafica ristorante
  // Giorni di apertura
  // Ferie
  try {
    const r = await Ristorante.findAll({
      limit: 1,
      include: [
          {
            model: OrariRistorante,
            as: 'orari'
          },
          {
            model: Tavolo,
            as: 'tavoli'
          }
      ],
      where: {id:1}
    });
    return res.status(200).render('ristorante',{ r: r[0] });
  } catch (error) {
    return res.status(500).send(error.message);
  }

});
router.post('/ferie',async function(req, res, next) {
  try{
    let ferie_da = req.body.ferie_da;
    let ferie_a = req.body.ferie_a;

    const result = await OrariRistorante.update(
        {
          ferie:  [{value: new Date(ferie_da), inclusive: true},{value: new Date(ferie_a), inclusive: true}],
        },
        {where: {id_ristorante:1}}
    );
    res.redirect('/ristorante');
  }catch(e){
    return res.status(500).send(e.message);
  }

});
router.post('/orari',async function(req, res, next) {

  orari_mattina = [req.body.orario_mattina_da, req.body.orario_mattina_a];
});
router.post('/giorni_di_apertura',async function(req, res, next) {
  //anagrafica ristorante
  // Giorni di apertura
  // Ferie
  ferie = req.body.ferie;
});

// ORDINI
router.get('/ordini', function(req, res, next) {
  //completa e visualizza ordini
  res.send('respond with a resource');
});
router.post('/ordini', function(req, res, next) {
  //completa e visualizza ordini
  res.send('respond with a resource');
});

// PRENOTAZIONI
router.get('/prenotazioni', function(req, res, next) {
  //visualizza prenotazioni(per tavolo)
  res.send('respond with a resource');
});
router.post('/prenotazioni', function(req, res, next) {
  //modifica prenotazioni(per tavolo)
  res.send('respond with a resource');
});

// TAVOLI
router.post('/tavoli', function(req, res, next) {
  //aggiungi un tavolo
  res.send('respond with a resource');
});
router.post('/tavoli/delete/:id', function(req, res, next) {
  //elimina tavolo
  res.send('respond with a resource');
});

// MENU
router.get('/menu', function(req, res, next) {
  //visualizza piatti
  res.send('respond with a resource');
});
router.post('/menu', function(req, res, next) {
  //aggiungi un piatto
  res.send('respond with a resource');
});
router.get('/menu/delete/:id', function(req, res, next) {
  //elimina piatto
  res.send('respond with a resource');
});


module.exports = router;
