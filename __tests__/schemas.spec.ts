import {
    getSchemaTestCollection,
    isValidSchema,
    SchemaCollectionName,
} from '../utilities';

function doValidation(schemaCollectionName: SchemaCollectionName) {
    const { schemasRecords } = getSchemaTestCollection(schemaCollectionName);
    for (const schemaRecord of schemasRecords) {
        // @ts-ignore
        const { schemaName, schemas, schemaTests } = schemaRecord;
        if (!schemas.length) {
            continue;
        }
        for (const example of schemaTests) {
            const sentSchemas = [...schemas];
            test(`${schemaName}: ${JSON.stringify(example, null, 2)}`, () => {
                expect(isValidSchema(sentSchemas, example)).toEqual(true);
            });
        }
    }
}

describe('Validate examples for device to cloud', () => {
    doValidation(SchemaCollectionName.CloudToDevice);
});

describe('Validate examples for cloud to device', () => {
    doValidation(SchemaCollectionName.DeviceToCloud);
});

describe('Validate examples for the device shadow', () => {
    doValidation(SchemaCollectionName.DeviceShadow);
});

describe.only('Validate examples for gateway-to-cloud messages', () => {
    doValidation(SchemaCollectionName.GatewayToCloud);
});
