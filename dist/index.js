import * as Ajv from 'ajv';
import * as path from 'path';
import * as fs from 'fs';
const ajv = new Ajv();
export var AppId;
(function (AppId) {
    AppId["Gps"] = "GPS";
    AppId["Flip"] = "FLIP";
    AppId["Gen"] = "GEN";
    AppId["Temp"] = "TEMP";
    AppId["Humid"] = "HUMID";
    AppId["AirPress"] = "AIR_PRESS";
    AppId["RSRP"] = "RSRP";
    AppId["Button"] = "BUTTON";
    AppId["Device"] = "DEVICE";
})(AppId || (AppId = {}));
const getJsonSchema = (appId) => {
    const filePath = path.join(__dirname, 'schemas', `${appId.toLowerCase()}.json`);
    const schema = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(schema);
};
export const isMessageValid = (message) => {
    const appId = message.appId;
    let jsonSchema;
    try {
        jsonSchema = getJsonSchema(appId);
    }
    catch (e) {
        console.error('Schema does not exist', e);
        return false;
    }
    const compiledSchema = ajv.compile(jsonSchema);
    const isValid = compiledSchema(message);
    if (!isValid) {
        console.error('validation error', compiledSchema.errors);
    }
    return isValid;
};
