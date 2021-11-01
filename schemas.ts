import AirQualityC2D from './schemas/cloudToDevice/air_quality/air_quality.json';
import DeviceC2D from './schemas/cloudToDevice/device/device.json';
import EnvC2D from './schemas/cloudToDevice/env/env.json';
import GPSC2D from './schemas/cloudToDevice/gps/gps.json';
import LEDC2D from './schemas/cloudToDevice/led/led.json';
import LightC2D from './schemas/cloudToDevice/light/light.json';
import ModemC2D from './schemas/cloudToDevice/modem/modem.json';
import TemperatureC2D from './schemas/cloudToDevice/temp/temp.json';

import Gateway from './schemas/deviceShadow/gatewayShadow/gatewayShadow.json';
import IP from './schemas/deviceShadow/ipShadow/ipShadow.json';

import AirPressD2C from './schemas/deviceToCloud/air_press/air_press.json';
import AirQualityD2C from './schemas/deviceToCloud/air_quality/air_quality.json';
import ButtonD2C from './schemas/deviceToCloud/button/button.json';
import DeviceD2C from './schemas/deviceToCloud/device/device.json';
import FlipD2C from './schemas/deviceToCloud/flip/flip.json';
import GPSD2C from './schemas/deviceToCloud/gps/gps.json';
import HumidityD2C from './schemas/deviceToCloud/humid/humid.json';
import LightD2C from './schemas/deviceToCloud/light/light.json';
import RSRPD2C from './schemas/deviceToCloud/rsrp/rsrp.json';
import TemperatureD2C from './schemas/deviceToCloud/temp/temp.json';

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
