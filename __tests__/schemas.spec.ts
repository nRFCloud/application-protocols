import { Schema } from 'ajv';
import {
    getSchemaTestCollection,
    SchemaCollectionName,
    SchemaRecord,
} from '../testutilities';

import { isValidSchema } from '../utilities';

// @ts-ignore
const testGroup = ({ schemaName, schema, schemaTests }) => {
    // pgps has an array response that is valid that needs to be converted to an array of arrays
    const chosen =
        schemaName === 'pgps' && Array.isArray(schemaTests)
            ? [schemaTests]
            : schemaTests;

    test.each<Schema>(chosen)('%p', (example) => {
        expect(isValidSchema(schema, example)).toEqual(true);
    });
};

const header = (name: string) => `
***************************************************
${name.toUpperCase()}
***************************************************
`;

describe(header('device >>> cloud'), () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.DeviceToCloud,
    );

    // console.log(`schemaRecords, ${JSON.stringify(schemasRecords, null, 2)}`);
    describe.each<SchemaRecord>(schemasRecords)('$schemaName', testGroup);
});

describe(header('coud >>> device'), () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.CloudToDevice,
    );
    describe.each<SchemaRecord>(schemasRecords)('$schemaName', testGroup);
});

describe(header('device shadow'), () => {
    const { schemasRecords } = getSchemaTestCollection(
        SchemaCollectionName.DeviceShadow,
    );
    describe.each<SchemaRecord>(schemasRecords)('$schemaName', testGroup);
});
