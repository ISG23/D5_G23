const get = require('./get-ristoranti');
const getTavoli = require('./get-tavoli');
const getTavolo = require('./get-tavolo');
const getOrari = require('./get-orari');
const getMenu = require('./get-menu');
const getOrdini = require('./get-ordini');
const getPrenotazioni = require('./get-prenotazioni');
const editOrari = require('./edit-orari');
const addPiatto = require('./add-piatto');
const createTavolo = require('./create-tavolo');
const editOrdine = require('./edit-ordine');
const editPrenotazione = require('./edit-prenotazione');
const deletePiatto = require('./delete-piatto');
const deleteTavolo = require('./delete-tavolo');

module.exports = {
    paths:{
        '/ristorante':{
            ...get
        },
       '/ristorante/{id_ristorante}/orari':{
            ...getOrari,
            ...editOrari
        },
        '/ristorante/{id_ristorante}/menu':{
            ...getMenu,
            ...addPiatto
        },
        '/ristorante/{id_ristorante}/menu/{id}':{
            ...deletePiatto
        },
        '/ristorante/{id_ristorante}/prenotazioni':{
            ...getPrenotazioni,
        },
        '/ristorante/{id_ristorante}/prenotazioni/{id}':{
            ...editPrenotazione,
        },
        '/ristorante/{id_ristorante}/ordini':{
            ...getOrdini,
        },
        '/ristorante/{id_ristorante}/ordini/{id}':{
            ...editOrdine,
        },
        '/ristorante/{id_ristorante}/tavoli':{
            ...getTavoli,
            ...createTavolo

        },
        '/ristorante/{id_ristorante}/tavoli/{id}':{
            ...getTavolo,
            ...deleteTavolo
        }
    }
}