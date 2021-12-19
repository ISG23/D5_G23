'use strict';
import {Giorno} from '../../global.js';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let id_risto = await queryInterface.bulkInsert('Ristoranti', [{
      nome: "Demo",
      citta: "Trento",
      indirizzo: "Trento",
      numero_civico: "10/a",
      partita_iva: "IT1234567890",
      tipo_cucina: "Italiana",
      createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
    }], {returning: true});

    let today = new Date();


    await queryInterface.bulkInsert('OrariRistoranti',[
      {
        id_ristorante: id_risto[0].id,
        giorni_apertura: [Giorno.MAR.value, Giorno.MER.value, Giorno.GIO.value, Giorno.VEN.value, Giorno.SAB.value,Giorno.DOM.value],
        orari_mattina: Sequelize.literal("'{11:30, 14:30}'"),
        orari_pomeriggio: Sequelize.literal("'{18:30, 23:00}'"),
        createdAt: Sequelize.fn('NOW'),
        updatedAt: Sequelize.fn('NOW'),

      }
    ])

    let id_prodotti = await queryInterface.bulkInsert('Prodotti', [
      {
        nome: "Pasta al sugo",
        ingredienti: "Pasta, sugo",
        prezzo: 6,
        disponibilita: true,
        id_ristorante: id_risto[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        nome: "Tagliata di manzo",
        ingredienti: "Carne, Spezie",
        prezzo: 12,
        disponibilita: true,
        id_ristorante: id_risto[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        nome: "Tiramisu",
        ingredienti: "Savoiardi, Caffe, Mascarpone, Uova",
        prezzo: 5,
        disponibilita: true,
        id_ristorante: id_risto[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      }
    ], {returning: true})

    await queryInterface.bulkInsert('Gestori', [{
      email: 'demo.gestore@demo.it',
      password: '$2a$12$Fnt0nU12YeX4H00hIR8r4OIVE3381cPKEutwL7yzqER2gMTuYSZrO', // test
      nome: "John",
      cognome: "Doe",
      telefono: "+39 000 000 0000",
      id_ristorante: id_risto[0].id,
      createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
    }], {returning: true})

    let id_clienti = await queryInterface.bulkInsert('Clienti', [{
        email: 'demo@demo.it',
        password: '$2a$12$Fnt0nU12YeX4H00hIR8r4OIVE3381cPKEutwL7yzqER2gMTuYSZrO', // test
        username: 'BarBaz',
      createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        email: 'demo2@demo.it',
        password: '$2a$12$Fnt0nU12YeX4H00hIR8r4OIVE3381cPKEutwL7yzqER2gMTuYSZrO', // test
        username: 'FooBar',
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      }], {returning: true})

    let id_tavoli = await queryInterface.bulkInsert('Tavoli', [{
       id: 1,
        numeroPersone: 2,
        id_ristorante: id_risto[0].id,
       createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        id: 2,
        numeroPersone: 5,
        id_ristorante: id_risto[0].id,
          createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        id: 3,
        numeroPersone: 10,
        id_ristorante: id_risto[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      }], {returning: true})

    await queryInterface.bulkInsert('Prenotazioni',[
      {
        n_persone: 2,
        nome: "BarBaz",
        data: Sequelize.fn("NOW"),
        data_fine: new Date((new Date()).getTime() + 2*60*60*1000),
        stato: 0,
        id_tavolo: id_tavoli[0].id,
        id_ristorante: id_risto[0].id,
        id_cliente: id_clienti[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        n_persone: 3,
        nome: "FooBar",
        data: Sequelize.fn("NOW"),
        data_fine: new Date((new Date()).getTime() + 60*60*1000),
        stato: 0,
        id_tavolo: id_tavoli[1].id,
        id_ristorante: id_risto[0].id,
        id_cliente: id_clienti[1].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      }
    ], {returning: true});

    let id_ordini = await queryInterface.bulkInsert('Ordini',[
      {
        nome: "FooBar",
        numero: 1,
        data: Sequelize.fn("NOW"),
        completato: false,
        id_paypal: "IDPAGAMENTOFAKE",
        id_ristorante: id_risto[0].id,
        id_cliente: id_clienti[1].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        nome: "BarBaz",
        numero: 2,
        data: Sequelize.fn("NOW"),
        completato: false,
        id_paypal: "IDPAGAMENTOFAKE",
        id_ristorante: id_risto[0].id,
        id_cliente: id_clienti[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      }
    ], {returning: true});
    await queryInterface.bulkInsert('DettaglioOrdini',[
      {
        qta: 3,
        id_prodotto: id_prodotti[0].id,
        id_ordine: id_ordini[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        qta: 3,
        id_prodotto: id_prodotti[1].id,
        id_ordine: id_ordini[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        qta: 1,
        id_prodotto: id_prodotti[2].id,
        id_ordine: id_ordini[0].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        qta: 2,
        id_prodotto: id_prodotti[1].id,
        id_ordine: id_ordini[1].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      },
      {
        qta: 2,
        id_prodotto: id_prodotti[2].id,
        id_ordine: id_ordini[1].id,
        createdAt: Sequelize.fn("NOW"), updatedAt: Sequelize.fn("NOW")
      }
    ], {returning: true});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
