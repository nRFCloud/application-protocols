import Ajv, { Schema } from 'ajv';





export const getValidation = (schema: Schema, example: Schema) => {
    const ajv = new Ajv({strict: false, allErrors: true});
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
