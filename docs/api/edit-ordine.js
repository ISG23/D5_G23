module.exports = {
    // operation's method
    put: {
        description: "Edit Ordine", // short desc
        operationId: "editOrdine", // unique operation id
        parameters: [
            {
                name: "id_ristorante", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "A single id", // param desc.
            },
            {
                name: "id", // name of the param
                in: "path", // location of the param
                schema: {
                    $ref: "#/components/schemas/id", // data model of the param
                },
                required: true, // Mandatory param
                description: "A single id", // param desc.
            }
        ], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/OrdineEdit",
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true, // response desc
            },

        },
    },
};