import Ajv, { Schema } from 'ajv/dist/2020';





export const getValidation = (schema: Schema, example: Schema) => {
    const ajv = new Ajv({
        strict: "log",
        verbose: true,
        strictSchema: "log"
    });

    const validate = ajv.compile(schema);
    return validate(example);
};

export const isValidSchema = (schema: Schema, example: Schema) => {
    const valid = getValidation(schema, example);

    if (!valid) {
        return false;
    }

    return true;
};
