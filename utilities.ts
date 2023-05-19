import Ajv, { Schema } from 'ajv/dist/2020';

export const isValidSchema = (schema: Schema, example: unknown): boolean => {
    const ajv = new Ajv({
        strict: 'log',
        verbose: true,
        strictSchema: 'log',
    });

    const validate = ajv.compile(schema);
    const result = validate(example);
    if (!result) {
        console.error('Validation Errors: ', validate.errors);
    }
    return result;
};

export const getValidationWithDependencies = (schema: Schema, dependencies: Schema[], example: unknown): boolean => {
    // When dealing with multiple schemas, you need to make sure they are all loaded before trying to validate
    // Currently, DeviceShadow depends on Config being loaded, so you would need to call addSchema with Config
    const ajv = new Ajv();
    const validate = ajv.addSchema(dependencies).compile(schema);
    return validate(example);
};
