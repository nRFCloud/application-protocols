import Ajv, { JSONSchemaType } from 'ajv';
import { readdirSync, readFileSync } from 'fs';
import { sync as globSync } from 'glob';

const path = require('path');



export interface SchemaTestCollection {
    schemaCollectionName: SchemaCollectionName;
    schemasRecords: SchemaRecord[];
}

export interface SchemaRecord {
    schemaName: string;
    schemas: JSONSchemaType<any>[];
    schemaTests: JSONSchemaType<any>[];
}

export enum SchemaCollectionName {
    CloudToDevice = 'cloudToDevice',
    DeviceToCloud = 'deviceToCloud',
    DeviceShadow = 'deviceShadow',
    GatewayToCloud = 'gatewayToCloud',
}

export const getSchemaTestCollection = (
    schemaCollectionName: SchemaCollectionName,
): SchemaTestCollection => {
    const schemaTestCollection: SchemaTestCollection = {
        schemaCollectionName,
        schemasRecords: [],
    };

    try {
        const schemaFolders = readdirSync(
            path.resolve(__dirname, 'schemas', schemaCollectionName),
        );

        for (const schemaName of schemaFolders) {
            const schemaPath = globSync(
                path.join(
                    path.resolve(
                        __dirname,
                        'schemas',
                        schemaCollectionName,
                        schemaName,
                    ),
                    '!(*example*).json',
                ),
            );
            const schemas = schemaPath.map((schemaPath) => JSON.parse(readFileSync(schemaPath, 'utf-8')));

            const schemaExamplePaths = globSync(
                path.join(
                    path.resolve(
                        __dirname,
                        'schemas',
                        schemaCollectionName,
                        schemaName,
                    ),
                    '*example*.json',
                ),
            );
            const schemaTests = schemaExamplePaths.map((exampleSchema) =>
                JSON.parse(readFileSync(exampleSchema, 'utf-8')),
            );

            schemaTestCollection.schemasRecords.push({
                schemaName,
                schemas,
                schemaTests,
            });
        }
    } catch (e) {
        console.error('Error getting collection', e);
    }

    return schemaTestCollection;
};

export const isValidSchema = (schemas: JSONSchemaType<any>[], example: object) => {
    if (!schemas.length) {
        return false;
    }
    const ajv = new Ajv();
    const first = schemas.pop();
    ajv.addSchema(schemas);

    if (!first) {
        return false;
    }
    const validate = ajv.compile(first);
    const valid = validate(example);

    if (!valid) {
        console.error(validate.errors);
        return false;
    }

    return true;
};
