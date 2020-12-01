import * as Ajv from 'ajv';
import * as path from 'path';
import * as fs from 'fs';

const ajv = new Ajv();

export enum AppId {
    Gps = 'GPS',
    Flip = 'FLIP',
    Gen = 'GEN',
    Temp = 'TEMP',
    Humid = 'HUMID',
    AirPress = 'AIR_PRESS',
    AirQuality = 'AIR_QUAL',
    RSRP = 'RSRP',
    Button = 'BUTTON',
    Device = 'DEVICE',
}

const getJsonSchema = (appId: AppId) => {
    const filePath = path.join(__dirname, 'schemas', `${appId.toLowerCase()}.json`);
    const schema = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(schema);
};

export const isMessageValid = (message: any): boolean => {
    const appId = message.appId;
    let jsonSchema;

    try {
        jsonSchema = getJsonSchema(appId);
    } catch (e) {
        console.error('Schema does not exist', e);
        return false;
    }

    const compiledSchema = ajv.compile(jsonSchema);
    const isValid = compiledSchema(message) as boolean;

    if (!isValid) {
        console.error('validation error', compiledSchema.errors);
    }

    return isValid;
};
