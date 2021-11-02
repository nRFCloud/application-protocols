import Ajv, { Schema } from 'ajv';





export const getValidation = (schema: Schema, example: object) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(example);
};

export const isValidSchema = (schema: Schema, example: object) => {
    const valid = getValidation(schema, example);

    if (!valid) {
        return false;
    }

    return true;
};
