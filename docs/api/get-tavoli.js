module.exports = {
    // method of operation
    get: {
        description: "Get Tavoli", // operation's desc.
        operationId: "getTavoli", // unique operation id.
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
                description: "Tavoli were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            $ref: "#/components/schemas/Tavolo"
                        },
                    },
                },
            },
        },
    },
};
