import { Schema } from 'ajv';
import {
    getSchemaTestCollection,
    SchemaCollectionName,
    SchemaRecord,
} from '../testutilities';
import { isValidSchema } from '../utilities';

describe('Validate examples for device to cloud', () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.CloudToDevice,
    );
    describe.each<SchemaRecord>(schemasRecords)(
        '$schemaName',
        // @ts-ignore
        ({ schemaName, schema, schemaTests }) => {
            test.each<Schema>(schemaTests)('%o', (example) => {
                expect(isValidSchema(schema, example as any)).toEqual(true);
            });
        },
    );
});

describe('Validate examples for cloud to device', () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.DeviceToCloud,
    );
    describe.each<SchemaRecord>(schemasRecords)(
        '$schemaName',
        // @ts-ignore
        ({ schemaName, schema, schemaTests }) => {
            test.each<Schema>(schemaTests)('%o', (example) => {
                expect(isValidSchema(schema, example as any)).toEqual(true);
            });
        },
    );
});

describe('Validate examples for the device shadow', () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.DeviceShadow,
    );
    describe.each<SchemaRecord>(schemasRecords)(
        '$schemaName',
        // @ts-ignore
        ({ schemaName, schema, schemaTests }) => {
            test.each<Schema>(schemaTests)('%o', (example) => {
                expect(isValidSchema(schema, example as any)).toEqual(true);
            });
        },
    );
});
