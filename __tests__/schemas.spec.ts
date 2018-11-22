import * as Ajv from 'ajv';

const ajv = new Ajv();
const fs = require('fs');
const path = require('path');
import { sync as globSync } from 'glob';

const schemas = globSync(
    path.join(path.resolve(__dirname, '..', 'schemas'), '*.json'),
);

schemas.forEach(schema => {
    const app = path.parse(schema).name;
    describe(app, () => {
        const s = JSON.parse(fs.readFileSync(schema, 'utf-8'));
        const examples = globSync(
            path.join(path.resolve(__dirname, '..', 'examples', app), '*.json'),
        );
        examples.forEach(example => {
            const data = JSON.parse(fs.readFileSync(example, 'utf-8'));
            test(`${data.appId}: ${data.messageType} ${
                data.data ? JSON.stringify(data.data) : ''
            }`, () => {
                const validate = ajv.compile(s);
                const valid = validate(data);
                if (!valid) {
                    console.error(validate.errors);
                }
                expect(valid).toEqual(true);
            });
        });
    });
});
