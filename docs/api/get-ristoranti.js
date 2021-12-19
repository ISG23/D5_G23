module.exports = {
    // method of operation
    get: {
        description: "Get ristoranti", // operation's desc.
        operationId: "getRistoranti", // unique operation id.
        parameters: [], // expected params.
        // expected responses
        responses: {
            // response code
            200: {
                description: "Ristoranti were obtained", // response desc.
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            type: "array",
                            $ref: "#/components/schemas/Ristorante"
                        },
                    },
                },
            },
        },
    },
};
