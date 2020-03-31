import * as ajv from 'ajv';
import Ajv from 'ajv';

import AirPress from './schemas/air_press.json'
import Button from './schemas/button.json';
import Flip from './schemas/flip.json';
import Gps from './schemas/gps.json';
import Humid from './schemas/humid.json';
import Light from './schemas/light.json';
import Rsrp from './schemas/rsrp.json';
import Temp from './schemas/temp.json';

interface LteMessage {
    appId: string;
    messageType: string;
    data?: string;
    time?: number;
}

export class AppProtocol {
    ajv: ajv.Ajv;

    constructor(schemas: Object[]) {
        this.ajv = new Ajv({schemas, verbose: true, allErrors: true});
    }

    public isValidMessage(message: LteMessage) {
        const appId = message?.appId;
        let isValid;

        try {
            isValid = this.ajv.validate(appId, message);
        } catch (e) {

        }

        if (!isValid) {
            console.error('validation error', this.ajv.errors);
            isValid = false;
        }

        return isValid;
    }

}

export default new AppProtocol([
                    AirPress,
                    Button,
                    Flip,
                    Gps,
                    Humid,
                    Light,
                    Rsrp,
                    Temp
                ]);
