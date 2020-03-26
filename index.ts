// import Ajv from 'ajv';
import AirPress from './schemas/air_press.json'


// const ajv = new Ajv();
console.log('output', AirPress);
export enum AppId {
    Gps = 'GPS',
    Flip = 'FLIP',
    Gen = 'GEN',
    Temp = 'TEMP',
    Humid = 'HUMID',
    AirPress = 'AIR_PRESS',
    RSRP = 'RSRP',
    Button = 'BUTTON',
    Device = 'DEVICE',
}

// export const isMessageValid = (message: any): boolean => {
//     const appId = message.appId;
//     let jsonSchema;
//
//     try {
//         jsonSchema = getJsonSchema(appId);
//     } catch (e) {
//         console.error('Schema does not exist', e);
//         return false;
//     }
//
//     const compiledSchema = ajv.compile(jsonSchema);
//     const isValid = compiledSchema(message) as boolean;
//
//     if (!isValid) {
//         console.error('validation error', compiledSchema.errors);
//     }
//
//     return isValid;
// };
