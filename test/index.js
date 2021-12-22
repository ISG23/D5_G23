const test = require('tape')
const request = require('supertest')
const app = require('../app')

test('TEST1: Get Ristorante', function (assert) {
  request(app)
    .get('/api/ristorante')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get ristorante, err: ' + err))
      }
      
      const expectedRistorante = [
        {
          'id': 1,
          'nome': 'Demo',
          'citta': 'Trento',
          'indirizzo': 'Trento',
          'numero_civico': '10/a',
          'partita_iva': 'IT1234567890',
          'tipo_cucina': 'Italiana',
        }
      ]

      assert.error(err, 'No error')
      assert.notEquals(res.body, null, 'Ristorante non nullo')
      assert.same(res.body, expectedRistorante, 'Ristorante as expected')
      assert.end()
    })
})

test('TEST2: Get Orari', function (assert) {
  request(app)
    .get('/api/ristorante/1/orari')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get orari, err: ' + err))
      }

      const expectedOrari = { id: 1, id_ristorante: 1, giorni_apertura: [1, 2, 3, 4, 5, 6], orari_mattina: ['11:30:00', '14:30:00'], orari_pomeriggio: ['18:30:00', '23:00:00'], ferie: [{ value: '2021-12-24T00:00:00.000Z', inclusive: true }, { value: '2021-12-27T00:00:00.000Z', inclusive: true }] }

      assert.error(err, 'No error')
      assert.notEquals(res.body, null, 'Orari non nulli')
      assert.same(res.body, expectedOrari, 'Orari as expected')
      assert.end()
    })
})

test('TEST3: Edit Orari', function (assert) {
  request(app)
    .put('/api/ristorante/1/orari')
    .send({
      'giorni_apertura': [
        1,
        2,
        3
      ],
      'orari_mattina': [
        '11:30',
        '13:30'
      ],
      'orari_pomeriggio': [
        '11:30',
        '13:30'
      ],
      'ferie': [
        {
          'value': '2021-12-24T00:00:00.000Z',
          'inclusive': true
        },
        {
          'value': '2021-12-27T00:00:00.000Z',
          'inclusive': true
        }
      ]
    })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API put orario, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Orari modificati')
      assert.end()
    })
})

test('TEST4: Get Menu', function (assert) {
  request(app)
    .get('/api/ristorante/1/menu')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get menu, err: ' + err))
      }

      const expectedMenu = [
        {
          'id': 1,
          'nome': 'Pasta al sugo',
          'ingredienti': 'Pasta, sugo',
          'prezzo': 6,
          'disponibilita': true,
          'id_ristorante': 1,
        },
        {
          'id': 2,
          'nome': 'Tagliata di manzo',
          'ingredienti': 'Carne, Spezie',
          'prezzo': 12,
          'disponibilita': true,
          'id_ristorante': 1,
        },
        {
          'id': 3,
          'nome': 'Tiramisu',
          'ingredienti': 'Savoiardi, Caffe, Mascarpone, Uova',
          'prezzo': 5,
          'disponibilita': true,
          'id_ristorante': 1,
        }
      ]

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Success get menu')
      assert.same(res.body.data, expectedMenu, 'Menu as expected')
      assert.end()
    })
})

test('TEST5: Add piatto', function (assert) {
  request(app)
    .post('/api/ristorante/1/menu')
    .send({
      'nome': 'Tiramisu',
      'ingredienti': 'Pasta, Sugo',
      'prezzo': 10.5,
      'disponibilita': true
    })
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API aggiunta piatto, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Piatto aggiunto correttamente')
      assert.end()
    })
})

test('TEST6: Delete Piatto', function (assert) {
  request(app)
    .del('/api/ristorante/1/menu/1')
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API rimozione piatto, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Piatto rimosso correttamente')
      assert.end()
    })
})

test('TEST7: Get Prenotazioni', function (assert) {
  request(app)
    .get('/api/ristorante/1/prenotazioni')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get prenotazioni, err: ' + err))
      }

      const expectedPrenotazioni = [{ id: 1, n_persone: 2, nome: 'BarBaz', data: '2021-12-21T22:56:47.110Z', orario: '22:56:47.108', stato: 0, id_tavolo: 1, id_ristorante: 1, id_cliente: 1 }, { id: 2, n_persone: 3, nome: 'FooBar', data: '2021-12-21T23:56:47.110Z', orario: '23:56:47.108', stato: 0, id_tavolo: 2, id_ristorante: 1, id_cliente: 2 }]

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Success get prenotazioni')
      assert.same(res.body.data, expectedPrenotazioni, 'Prenotazioni as expected')
      assert.end()
    })
})

test('TEST8: Edit Prenotazioni', function (assert) {
  request(app)
    .put('/api/ristorante/1/prenotazioni/1')
    .send({
      'stato': 0
    })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API put prenotazioni, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Prenotazioni modificate')
      assert.end()
    })
})

test('TEST9: Get Ordini', function (assert) {
  request(app)
    .get('/api/ristorante/1/ordini')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get ordini, err: ' + err))
      }

      const expectedOrdini = [{ id: 1, nome: 'FooBar', numero: 1, data: '2021-12-21T22:56:47.112Z', completato: false, id_paypal: 'IDPAGAMENTOFAKE', id_ristorante: 1, id_cliente: 2, prodotti: [{ id: 1, qta: 3, id_prodotto: 1, id_ordine: 1, prodotto: null }, { id: 2, qta: 3, id_prodotto: 2, id_ordine: 1, prodotto: { id: 2, nome: 'Tagliata di manzo', ingredienti: 'Carne, Spezie', prezzo: 12, disponibilita: true, id_ristorante: 1 } }, { id: 3, qta: 1, id_prodotto: 3, id_ordine: 1, prodotto: { id: 3, nome: 'Tiramisu', ingredienti: 'Savoiardi, Caffe, Mascarpone, Uova', prezzo: 5, disponibilita: true, id_ristorante: 1 } }] }, { id: 2, nome: 'BarBaz', numero: 2, data: '2021-12-21T22:56:47.112Z', completato: false, id_paypal: 'IDPAGAMENTOFAKE', id_ristorante: 1, id_cliente: 1, prodotti: [{ id: 4, qta: 2, id_prodotto: 2, id_ordine: 2, prodotto: { id: 2, nome: 'Tagliata di manzo', ingredienti: 'Carne, Spezie', prezzo: 12, disponibilita: true, id_ristorante: 1 } }, { id: 5, qta: 2, id_prodotto: 3, id_ordine: 2, prodotto: { id: 3, nome: 'Tiramisu', ingredienti: 'Savoiardi, Caffe, Mascarpone, Uova', prezzo: 5, disponibilita: true, id_ristorante: 1 } }] }]

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Success get ordini')
      assert.same(res.body.data, expectedOrdini, 'Ordini as expected')
      assert.end()
    })
})

test('TEST10: Edit Ordine', function (assert) {
  request(app)
    .put('/api/ristorante/1/ordini/1')
    .send({
      'completato': true
    })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API put ordini, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Ordini modificati')
      assert.end()
    })
})


test('TEST11: Get Tavoli', function (assert) {
  request(app)
    .get('/api/ristorante/1/tavoli')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get tavoli, err: ' + err))
      }

      const expectedTavoli = [
        {
          'id': 1,
          'numeroPersone': 2,
          'id_ristorante': 1,
        },
        {
          'id': 2,
          'numeroPersone': 5,
          'id_ristorante': 1,
        },
        {
          'id': 3,
          'numeroPersone': 10,
          'id_ristorante': 1,
        }
      ]

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Success get tavoli')
      assert.same(res.body.data, expectedTavoli, 'Tavoli as expected')
      assert.end()
    })
})

test('TEST12: Add Tavolo', function (assert) {
  request(app)
    .post('/api/ristorante/1/tavoli')
    .send({
      'id': 11,
      'numeroPersone': 1
    })
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API aggiunta tavolo, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Tavolo aggiunto correttamente')
      assert.end()
    })
})


test('TEST13: Get Tavolo', function (assert) {
  request(app)
    .get('/api/ristorante/1/tavoli/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API get tavolo, err: ' + err))
      }

      const expectedTavolo = {
        'id': 1,
        'numeroPersone': 2,
        'id_ristorante': 1,
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Success get tavolo')
      assert.same(res.body.data, expectedTavolo, 'Tavolo as expected')
      assert.end()
    })
})

test('TEST14: Delete Tavolo', function (assert) {
  request(app)
    .del('/api/ristorante/1/tavoli/1')
    .end((err, res) => {
      if (err) {
        reject(new Error('Errore API rimozione tavolo, err: ' + err))
      }

      assert.error(err, 'No error')
      assert.isEqual(res.body.success, true, 'Tavolo rimosso correttamente')
      assert.end()
    })
})