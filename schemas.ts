import * as  AirQualityC2D from './schemas/cloudToDevice/air_quality/air_quality.json';
import * as  DeviceC2D from './schemas/cloudToDevice/device/device.json';
import * as  EnvC2D from './schemas/cloudToDevice/env/env.json';
import * as  GPSC2D from './schemas/cloudToDevice/gps/gps.json';
import * as  LEDC2D from './schemas/cloudToDevice/led/led.json';
import * as  LightC2D from './schemas/cloudToDevice/light/light.json';
import * as  ModemC2D from './schemas/cloudToDevice/modem/modem.json';
import * as  TemperatureC2D from './schemas/cloudToDevice/temp/temp.json';
import * as  LocationC2D from './schemas/cloudToDevice/location_services/location_services.json';

import * as  Gateway from './schemas/deviceShadow/gatewayShadow/gatewayShadow.json';
import * as  IP from './schemas/deviceShadow/ipShadow/ipShadow.json';

import * as  AirPressD2C from './schemas/deviceToCloud/air_press/air_press.json';
import * as  AirQualityD2C from './schemas/deviceToCloud/air_quality/air_quality.json';
import * as  ButtonD2C from './schemas/deviceToCloud/button/button.json';
import * as  DeviceD2C from './schemas/deviceToCloud/device/device.json';
import * as  FlipD2C from './schemas/deviceToCloud/flip/flip.json';
import * as  GPSD2C from './schemas/deviceToCloud/gps/gps.json';
import * as  HumidityD2C from './schemas/deviceToCloud/humid/humid.json';
import * as  LightD2C from './schemas/deviceToCloud/light/light.json';
import * as  RSRPD2C from './schemas/deviceToCloud/rsrp/rsrp.json';
import * as  TemperatureD2C from './schemas/deviceToCloud/temp/temp.json';
import * as  LocationD2C from './schemas/deviceToCloud/location_services/location_services.json';

const CloudToDevice = {
    AirQuality: AirQualityC2D,
    Device: DeviceC2D,
    Env: EnvC2D,
    GPS: GPSC2D,
    LED: LEDC2D,
    Light: LightC2D,
    Modem: ModemC2D,
    Temperature: TemperatureC2D,
    Lose: LocationC2D,
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
    Lose: LocationD2C,
};



export { CloudToDevice, CloudToGateway, DeviceShadow, DeviceToCloud };
