const $RefParser = require("@apidevtools/json-schema-ref-parser");
const Ajv = require('ajv');
const fs = require('fs');
const { readFileSync } = fs;
const glob = require('glob');
const { sync: globSync } = glob;
const path = require('path');

const ajv = new Ajv();

(async function () {
    const parser = new $RefParser();
    const result = await parser.dereference('./schemas/gatewayToCloud/events/g2c.json');
    const validate = ajv.compile(result);
    const schemaExamplePaths = globSync(
        path.join(
            path.resolve(
                __dirname,
                'schemas',
                'gatewayToCloud',
                'events',
            ),
            '*example*.json',
        ),
    );
    const schemaTests = schemaExamplePaths.map((exampleSchema) =>
        JSON.parse(readFileSync(exampleSchema, 'utf-8')),
    );
    for (const test of schemaTests) {
        const result = validate(test);
        if (!result) {
            console.log(validate.errors);
        } else {
            console.log('validated!');
        }
    }
    // console.log(JSON.stringify(result, null, 2));
})();


