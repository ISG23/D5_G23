module.exports = {
    components: {
        schemas: {
            // id model
            id: {
                type: "string", // data type
                description: "An id of a model", // desc
                example: "1", // example of an id
            },

            Ristorante: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Ristornte identification number", // desc
                        example: 1, // example of an id
                    },

                    nome: {
                        type: "string", // data-type
                        description: "Ristornte identification name", // desc
                        example: "demo", // example of an id
                    },
                    citta: {
                        type: "string",
                        description: "City",
                        example: "Trento"
                    },
                    indirizzo: {
                        type: "string",
                        description: "Address",
                        example: "Trento"
                    },
                    numero_civico: {
                        type: "number",
                        description: "Address number",
                        example: 10
                    },
                    partita_iva: {
                        type: "string",
                        description: "VAT",
                        example: "IT9000001"
                    },
                    tipo_cucina: {
                        type: "string",
                        description: "Type",
                        example: "Italiana"
                    },
                },
            },
            Tavolo:{
                type: 'object',
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Ristornte identification number", // desc
                        example: 1, // example of an id
                    },
                    numeroPersone: {
                        type: "number", // data-type
                        description: "Max number of person", // desc
                        example: 1, // example of an id
                    },
                }
            },
            Orari:{
                type: 'object',
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Ristornte identification number", // desc
                        example: 1, // example of an id
                    },
                    giorni_apertura: {
                        type: "array", // data-type
                        description: "Open days", // desc
                        example: [1,2,3], // example of an id
                    },
                    orari_mattina: {
                        type: "array", // data-type
                        description: "Morning opening time", // desc
                        example: ["11:30","13:30"], // example of an id
                    },
                    orari_pomeriggio: {
                        type: "array", // data-type
                        description: "Afternoon opening time", // desc
                        example: ["18:30","23:30"], // example of an id
                    },
                    ferie: {
                        type: "range", // data-type
                        description: "Holidays", // desc
                        example: [
                            {
                                value: "2021-12-24T00:00:00.000Z",
                                inclusive: true
                            },
                            {
                                "value": "2021-12-27T00:00:00.000Z",
                                inclusive: true
                            }
                        ], // example of an id
                    },
                }
            },
            Prodotto:{
                type: 'object',
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Ristornte identification number", // desc
                        example: 1, // example of an id
                    },
                    nome: {
                        type: "string", // data-type
                        description: "Name", // desc
                        example: "Tiramisu", // example of an id
                    },
                    ingredienti: {
                        type: "string", // data-type
                        description: "Ingredienti", // desc
                        example: "Pasta, Sugo", // example of an id
                    },
                    prezzo: {
                        type: "number", // data-type
                        description: "Price", // desc
                        example: 10.5, // example of an id
                    },
                    disponibilita: {
                        type: "boolean", // data-type
                        description: "Availability", // desc
                        example: true, // example of an id
                    },
                }
            },
            Ordine:{
                type: 'object',
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Id", // desc
                        example: 1, // example of an id
                    },
                    nome: {
                        type: "string", // data-type
                        description: "Customer", // desc
                        example: "Mario", // example of an id
                    },
                    numero: {
                        type: "number", // data-type
                        description: "Order number", // desc
                        example: 1, // example of an id
                    },
                    data: {
                        type: "date", // data-type
                        description: "Date", // desc
                        example: "2021-12-19", // example of an id
                    },
                    completato: {
                        type: "boolean", // data-type
                        description: "Completed", // desc
                        example: false, // example of an id
                    },
                    id_paypal: {
                        type: "string", // data-type
                        description: "Payment id", // desc
                        example: "1234", // example of an id
                    },
                    prodotti:{
                        type: "array",
                        $ref: "#/components/schemas/DettaglioOrdine"
                    }
                }
            },
            DettaglioOrdine:{
                type: 'object',
                properties: {
                    id: {
                        type: "number", // data-type
                        description: "Id", // desc
                        example: 1, // example of an id
                    },
                    qta: {
                        type: "number", // data-type
                        description: "Quantity", // desc
                        example: 1, // example of an id
                    },
                    prodotto:{
                        type: "object",
                        $ref: "#/components/schemas/Prodotto"
                    }
                }
            },
            Prenotazione: {
                type: 'object',
                properties: {
                    id:{
                        type: "number", // data-type
                        description: "Id", // desc
                        example: 1, // example of an id
                    },
                    n_persone: {
                        type: "number", // data-type
                        description: "Number of person", // desc
                        example: 3, // example of an id
                    },
                    nome: {
                        type: "string", // data-type
                        description: "Customer", // desc
                        example: "Mario", // example of an id
                    },
                    data: {
                        type: "date", // data-type
                        description: "Reservation date", // desc
                        example: "2021-12-23 19:30", // example of an id
                    },
                    data_fine: {
                        type: "date", // data-type
                        description: "Reservation date", // desc
                        example: "2021-12-23 21:30", // example of an id
                    },
                    stato:  {
                        type: "number", // data-type
                        description: "Reservation state", // desc
                        example: 1, // example of an id
                    },
                    id_tavolo:  {
                        type: "number", // data-type
                        description: "Tavolo id", // desc
                        example: 1, // example of an id
                    },
                }

            },

            // INPUT
            ProdottoInput:{
                type: 'object',
                properties: {
                    nome: {
                        type: "string", // data-type
                        description: "Name", // desc
                        example: "Tiramisu", // example of an id
                    },
                    ingredienti: {
                        type: "string", // data-type
                        description: "Ingredienti", // desc
                        example: "Pasta, Sugo", // example of an id
                    },
                    prezzo: {
                        type: "number", // data-type
                        description: "Price", // desc
                        example: 10.5, // example of an id
                    },
                    disponibilita: {
                        type: "boolean", // data-type
                        description: "Availability", // desc
                        example: true, // example of an id
                    },
                }
            },
            OrariEdit:{
                type: 'object',
                properties: {
                    giorni_apertura: {
                        type: "array", // data-type
                        description: "Open days", // desc
                        example: [1,2,3], // example of an id
                    },
                    orari_mattina: {
                        type: "array", // data-type
                        description: "Morning opening time", // desc
                        example: ["11:30","13:30"], // example of an id
                    },
                    orari_pomeriggio: {
                        type: "array", // data-type
                        description: "Afternoon opening time", // desc
                        example: ["11:30","13:30"], // example of an id
                    },
                    ferie: {
                        type: "range", // data-type
                        description: "Holidays", // desc
                        example: [
                            {
                                value: "2021-12-24T00:00:00.000Z",
                                inclusive: true
                            },
                            {
                                "value": "2021-12-27T00:00:00.000Z",
                                inclusive: true
                            }
                        ], // example of an id
                    },
                }
            },
            PrenotazioneEdit:{
                type: 'object',
                properties: {
                    stato: {
                        type:"number",
                        description: "1. Deleted, 0. Accepted",
                        example: 0
                    }
                }
            },
            OrdineEdit:{
                type: 'object',
                properties: {
                    completato: {
                        type:"boolean",
                        description: "Completed",
                        example: true
                    }
                }
            },
        },
    },
};
