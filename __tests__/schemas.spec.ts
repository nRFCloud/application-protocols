import { getTestCollection, isValidSchema } from '../utilities';

describe('Validate examples for device to cloud', () => {
    const deviceToCloudTests = getTestCollection('deviceToCloud');
    deviceToCloudTests.forEach(schema => {
        describe(schema.name, () => {
            test.each(schema.examples)('Example %j', example => {
                expect(isValidSchema(schema, example)).toEqual(true);
            });
        });
    });
});

describe('Validate examples for cloud to device', () => {
    const cloudToDeviceTests = getTestCollection('cloudToDevice');
    cloudToDeviceTests.forEach(schema => {
        describe(schema.name, () => {
            test.each(schema.examples)('Example %j', example => {
                expect(isValidSchema(schema, example)).toEqual(true);
            });
        });
    });
});

describe('Validate examples for the Device Shadow', () => {
    const deviceShadowTests = getTestCollection('deviceShadow');
    deviceShadowTests.forEach(schema => {
        describe(schema.name, () => {
            test.each(schema.examples)('Example %j', example => {
                expect(isValidSchema(schema, example)).toEqual(true);
            });
        });
    });
});
