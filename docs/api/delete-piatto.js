module.exports = {
    // operation's method
    delete: {
        description: "Delete Piatto", // short desc
        operationId: "deletePiatto", // unique operation id
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
        requestBody: {},
        // expected responses
        responses: {
            // response code
            200: {
                success: true, // response desc
            },

        },
    },
};