import * as Ajv from 'ajv';

const ajv = new Ajv();
const fs = require('fs');
const path = require('path');
import { sync as globSync } from 'glob';

describe('message.schema.json', () => {
    const schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'schema', 'message.schema.json'), 'utf-8'));
    const files = globSync(`${path.resolve(__dirname, '..', 'example')}/**/*.json`);
    files.forEach(file => {
        test(file, () => {
            const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
            const validate = ajv.compile(schema);
            const valid = validate(data);
            if (!valid) {
                console.error(validate.errors);
            }
            expect(valid).toEqual(true);
        });
    });
});
