const AirQualityC2D = require('./schemas/cloudToDevice/air_quality/air_quality.json');
const DeviceC2D = require('./schemas/cloudToDevice/device/device.json');
const EnvC2D = require('./schemas/cloudToDevice/env/env.json');
const GPSC2D = require('./schemas/cloudToDevice/gps/gps.json');
const LEDC2D = require('./schemas/cloudToDevice/led/led.json');
const LightC2D = require('./schemas/cloudToDevice/light/light.json');
const ModemC2D = require('./schemas/cloudToDevice/modem/modem.json');
const TemperatureC2D = require('./schemas/cloudToDevice/temp/temp.json');

const Gateway = require('./schemas/deviceShadow/gatewayShadow/gatewayShadow.json');
const IP = require('./schemas/deviceShadow/ipShadow/ipShadow.json');

const AirPressD2C = require('./schemas/deviceToCloud/air_press/air_press.json');
const AirQualityD2C = require('./schemas/deviceToCloud/air_quality/air_quality.json');
const ButtonD2C = require('./schemas/deviceToCloud/button/button.json');
const DeviceD2C = require('./schemas/deviceToCloud/device/device.json');
const FlipD2C = require('./schemas/deviceToCloud/flip/flip.json');
const GPSD2C = require('./schemas/deviceToCloud/gps/gps.json');
const HumidityD2C = require('./schemas/deviceToCloud/humid/humid.json');
const LightD2C = require('./schemas/deviceToCloud/light/light.json');
const RSRPD2C = require('./schemas/deviceToCloud/rsrp/rsrp.json');
const TemperatureD2C = require('./schemas/deviceToCloud/temp/temp.json');

const CloudToDevice = {
    AirQuality: AirQualityC2D,
    Device: DeviceC2D,
    Env: EnvC2D,
    GPS: GPSC2D,
    LED: LEDC2D,
    Light: LightC2D,
    Modem: ModemC2D,
    Temperature: TemperatureC2D,
};

const CloudToGateway = {
};

const DeviceShadow = {
    Gateway,
    IP,
};

const DeviceToCloud = {
    AirPress: AirPressD2C,
    AirQuality: AirQualityD2C,
    Button: ButtonD2C,
    Device: DeviceD2C,
    Flip: FlipD2C,
    GPS: GPSD2C,
    Humidity: HumidityD2C,
    Light: LightD2C,
    RSRP: RSRPD2C,
    Temperature: TemperatureD2C,
};



export { CloudToDevice, CloudToGateway, DeviceShadow, DeviceToCloud };
