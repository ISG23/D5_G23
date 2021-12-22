var express = require('express');
var router = express.Router();

const { Ristorante, OrariRistorante, Tavolo,Prenotazione, Sequelize } = require('../models')

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
    return res.status(200).render('ristorante',{ r: r[0], ferie:[new Date(r[0].orari.ferie[0].value),new Date(r[0].orari.ferie[1].value)] });
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
          orari_mattina: orari_mattina_new,
          orari_pomeriggio: orari_pomeriggio_new
        },
        {where: {id_ristorante: 1}}
    );
    res.redirect('/ristorante');
  }catch (e) {
    return res.status(500).send(e.message);
  }

});
router.post('/giorni',async function(req, res, next) {
  try{

    let giorni = req.body.giorni.map(x=>+x);
    await OrariRistorante.update(
        {
          giorni_apertura:  giorni,
        },
        {where: {id_ristorante:1}}
    );
    res.redirect('/ristorante');
  }catch(e){
    return res.status(500).send(e.message);
  }
});
// TAVOLI
router.post('/tavoli', async function(req, res, next) {
  try{
    await Tavolo.create(
        {
          id: parseInt(req.body.id),
          id_ristorante: 1,
          numeroPersone: parseInt(req.body.numeroPersone)
        }
    );
    res.redirect("/ristorante");
  }catch (e) {
    return res.status(500).json({success: false, e: error.message});
  }

});
router.get('/tavoli/delete/:id', async function(req, res, next) {
  try{
    await Tavolo.destroy({
      where: {id: req.params.id, id_ristorante: 1}
    })
    res.redirect("/ristorante")
  }catch (error) {
    return res.status(500).json({success: false, e: error.message});
  }

});

module.exports = router;
