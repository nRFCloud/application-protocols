import { getTestCollection, isValidSchema } from '../utilities';

describe('Validate examples for device to cloud', () => {
    const deviceToCloudTests = getTestCollection('deviceToCloud');
    deviceToCloudTests.forEach(schema => {
        describe(schema.name, () => {
            test.each(schema.examples)('Testing example %j', example => {
                expect(isValidSchema(schema, example)).toEqual(true);
            });
        });
    });
});

describe('Validate examples for cloud to device', () => {
    const deviceToCloudTests = getTestCollection('cloudToDevice');
    deviceToCloudTests.forEach(schema => {
        describe(schema.name, () => {
            test.each(schema.examples)('Testing example %j', example => {
                expect(isValidSchema(schema, example)).toEqual(true);
            });
        });
    });
});
