export const Vehicle = {
    name: "vehicle",
    properties: {
        make: "string",
        model: "string?",
        plateNum: "string",
    },
    primaryKey: "plateNum"
};

export const User = {
    name: "user",
    properties: {
        firstName: "string",
        lastName: "string",
        email: "string",
        phoneNumber: "string?",
        vehicles: "Vehicle[]",
        role: "string",
    },
    primaryKey: "email"
};