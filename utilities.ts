import * as Ajv from 'ajv';

const ajv = new Ajv();
const fs = require('fs');
const path = require('path');
import { sync as globSync } from 'glob';
import { dirname } from 'path';

export const getTestCollection = (folder: string) => {
    const schemaTestMap: {[k: string]: string[]} = {};
    const schemaPaths = globSync(path.join(path.resolve(__dirname, 'schemas', folder), '**', '!(*example).json'));
    const getExampleSchemaPaths = (dir: string): string[] => globSync(path.join(dirname(dir), '*example.json'));

    schemaPaths.map(dir => schemaTestMap[dir] = getExampleSchemaPaths(dir));

    return schemaPaths.map(path => {
        const schema = getJSON(path);
        const examples = schemaTestMap[path].map(e => getJSON(e));
        return {name: schema.title, schema, examples};
    });
};

const getJSON = (path: string) => JSON.parse(fs.readFileSync(path, 'utf-8'));

export const isValidSchema = (schema: object, example: object) => {
    const validate = ajv.compile(schema);
    const valid = validate(example);

    if (!valid) {
        console.error(validate.errors);
        return false;
    }

    return true;
};

