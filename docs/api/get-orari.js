module.exports = {
    // method of operation
    get: {
        description: "Get Orari", // operation's desc.
        operationId: "getOrari", // unique operation id.
        parameters: [
            {
                name: "id_ristorante", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "A single id", // param desc.
            }
        ], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Orari were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Orari"
                        },
                    },
                },
            },
        },
    },
};
