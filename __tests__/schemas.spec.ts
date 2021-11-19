import { Schema } from 'ajv';
import {
    getSchemaTestCollection,
    SchemaCollectionName,
    SchemaRecord,
} from '../testutilities';

import { isValidSchema } from '../utilities';

// @ts-ignore
const testGroup = ({ schemaName, schema, schemaTests }) => {
    const chosen = Array.isArray(schemaTests) ? [schemaTests] : schemaTests;
    test.each<Schema>(chosen)('%p', (example) => {
        expect(isValidSchema(schema, example)).toEqual(true);
    });
};

describe('Validate examples for cloud to device', () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.CloudToDevice,
    );
    describe.each<SchemaRecord>(schemasRecords)(
        '$schemaName',
        testGroup
    );
});

describe('Validate examples for device to cloud', () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.DeviceToCloud,
    );
    describe.each<SchemaRecord>(schemasRecords)(
        '$schemaName',
        testGroup,
    );
});

describe('Validate examples for the device shadow', () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.DeviceShadow,
    );
    describe.each<SchemaRecord>(schemasRecords)(
        '$schemaName',
        testGroup,
    );
});
