var express = require('express');
var router = express.Router();

const { Ristorante, OrariRistorante, Tavolo } = require('../models')

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

    await OrariRistorante.update(
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

  try {
    orari_mattina_new = [req.body.orario_mattina_da, req.body.orario_mattina_a];
    orari_pomeriggio_new = [req.body.orario_pomeriggio_da, req.body.orario_pomeriggio_a];

    await OrariRistorante.update(
        {
          orario_mattina: orari_mattina_new,
          orari_pomeriggio: orari_pomeriggio_new
        },
        {where: {id_ristorante: 1}}
    );
    res.redirect('/ristorante');
  }catch (e) {
    return res.status(500).send(e.message);
  }

});
router.post('/giorni_di_apertura',async function(req, res, next) {
  //anagrafica ristorante
  // Giorni di apertura
  // Ferie
  res.redirect("/ristorante")
});

// ORDINI
router.get('/ordini', function(req, res, next) {
  //completa e visualizza ordini
  res.render('ordini')
});
router.post('/ordini/:id', function(req, res, next) {
  //completa e visualizza ordini
  res.redirect("/ristorante/ordini")
});

// PRENOTAZIONI
router.get('/prenotazioni', function(req, res, next) {
  //visualizza prenotazioni(per tavolo)
  res.render('prenotazioni');
});
router.post('/prenotazioni/:id', function(req, res, next) {
  //modifica prenotazioni(per tavolo)
  res.redirect("/ristorante/prenotazioni")
});

// TAVOLI
router.post('/tavoli', function(req, res, next) {
  //aggiungi un tavolo
  res.render("tavoli")
});
router.post('/tavoli/delete/:id', function(req, res, next) {
  //elimina tavolo
  res.redirect("/ristorante/tavoli")
});

// MENU
router.get('/menu', function(req, res, next) {
  //visualizza piatti
  res.render("menu")
});
router.post('/menu', function(req, res, next) {
  //aggiungi un piatto
  res.redirect("/ristorante/menu")
});
router.get('/menu/delete/:id', function(req, res, next) {
  //elimina piatto
  res.redirect("/ristorante/menu")
});


module.exports = router;
