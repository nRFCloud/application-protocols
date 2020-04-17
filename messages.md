# nRF Cloud &#10231; Device Message Format

All messages must be in the following JSON format:
    `{
	    appId: AppId;
	    messageType: MessageType;
	    data?: string | Object;
	    time?: number;
	}`. Where `data` and `time` are optional parameters.
For example, the following JSON message would enable the GPS on a device:
`{
	    "appId": "GPS",
	    "messageType": "CFG_SET",
	    "data": { "enable": true }
	}`


---
## Description of `appId` Values

<b>`MODEM`</b>

 - nRF91's modem

   <u>Supported `MessageType` values:</u>

   `CMD` - AT command to be sent to the modem. See the [docs](https://infocenter.nordicsemi.com/index.jsp?topic=%2Fref_at_commands%2FREF%2Fat_commands%2Fintro.html) for the list of supported commands 
   - `"data":`
      - AT command string (should end with \r\n).
    - Cloud to Device: Command.
    - Device to Cloud: Response.
    - Example:
      ```{"appId":"MODEM", "messageType":"CMD", "data":"AT+CFUN?\r\n"}```
---
<b>`GPS`</b>

 - The GPS module on the device.

   <u>Supported `MessageType` values:</u>

   `DATA` - Displays GPS coordinates on a map.

   - `"data":`
      - NEMA Gxxx string
      - Device To Cloud
      - Example:
      ```{"appId":"GPS","messageType":"DATA","data":"<INSERT NEMA STRING>"}```

   `CFG_SET` - Sets configuration values for the GPS module.
   - `"data":`
      - `"enable"` - Boolean true to enable GPS on the device, false to disable.
      - `"interval"` - Interval, in seconds, at which the device will send GPS data to the cloud. Data send disabled by setting to 0 or null.
    - Cloud to Device.
    - Example:
      ```{"appId":"GPS","messageType":"CFG_SET","data": {"enable":true,"interval": 20}}```
---
<b>`FLIP`</b>

 - The orientation of a device (normal or upside-down).

   <u>Supported `MessageType` values:</u>

   `DATA` - Displays device orientation.

   - `"data":`
      - "NORMAL" or "UPSIDE_DOWN"
    - Device To Cloud.
    - Example:
      ```{"appId":"FLIP","messageType":"DATA","data":"NORMAL"}```
---
<b>`ENV`</b>

 - The environmental sensors module.

   <u>Supported `MessageType` values:</u>

   `CFG_SET` - Sets configuration values for the GPS module.
   - `"data":`
      - `"interval"` - Interval, in seconds, at which the device will send environmental data (temperature, humidity, air pressure, and air quality) to the cloud. Disabled by setting to 0 or null.
    - Cloud to Device.
    - Example:
      ```{"appId":"ENV","messageType":"CFG_SET","data": {"interval": 20}}```
---
<b>`LIGHT`</b>

 - The light sensor on the device.

   <u>Supported `MessageType` values:</u>

   `DATA` - Red, green, blue, and IR light levels.

   - `"data":`
      - String of comma separated lux values (red, green, blue, IR).
    - Device To Cloud.
    - Example:
      ```{"appId":"LIGHT","messageType":"DATA","data":"141 464 313 24"}```

   `CFG_SET` - Sets configuration values for the light sensor module.

   - `"data":`
      - `"enable"` - Boolean true to enable light sensor on the device, false to disable.
      - `"interval"` - Interval, in seconds, at which the device will send light sensor data (RGB and IR) to the cloud. Disabled by setting to 0 or null.
    - Cloud to Device.
    - Example:
      ```{"appId":"LIGHT","messageType":"CFG_SET","data": {"enable":true,"interval": 20}}```
---
<b>`TEMP`</b>

 - The device's temperature sensor.

   <u>Supported `MessageType` values:</u>

   `DATA` - Temperature in celsius.

   - `"data":`
      - Celsius temperature string.
    - Device To Cloud.
    - Example:
      ```{"appId":"TEMP","messageType":"DATA","data":"24.3"}```

   `CFG_SET` - Sets configuration values for the temperature module.
   - `"data":`
      - `"enable"` - Boolean true to enable temperature reporting on the device, false to disable.
      - `"thresh_lo"` - Low threshold value.  If set, device will only send data if it is below the threshold value.
      -  `"thresh_hi"` - High threshold value.  If set, device will only send data if it is above the threshold value.
    - Cloud to Device.
    - Example:
      ```{"appId":"TEMP","messageType":"CFG_SET","data": {"enable":true,"thresh_lo": 20, "thresh_hi": 70 }}```
---
<b>`HUMID`</b>

 - The device's humidity sensor.

   <u>Supported `MessageType` values:</u>

   `DATA` - Relative humidity percentage.

   - `"data":`
      - Humidity % string.
    - Device To Cloud.
    - Example:
      ```{"appId":"HUMID","messageType":"DATA","data":"51.2"}```
---
<b>`AIR_PRESS`</b>

 - The device's air pressure sensor.

   <u>Supported `MessageType` values:</u>

   `DATA` - Air pressure in pascals.

   - `"data":`
      - Air pressure string.
    - Device To Cloud.
    - Example:
      ```{"appId":"AIR_PRESS","messageType":"DATA","data":"102.3"}```
---
<b>`RSRP`</b>

 - LTE signal strength.

   <u>Supported `MessageType` values:</u>

   `DATA` - Reference Signal Receive Power (dBm).

   - `"data":`
      - RSRP dBm string.
    - Device To Cloud.
    - Example:
      ```{"appId":"RSRP","messageType":"DATA","data":"-60.0"}```
---
<b>`BUTTON`</b>

 - The button state of the Thingy91.

   <u>Supported `MessageType` values:</u>

   `DATA` - Button state: 1 = pressed, 0 = released.

   - `"data":`
      - Button state string.
    - Device To Cloud.
    - Example:
      ```{"appId":"BUTTON","messageType":"DATA","data":"1"}```
---
<b>`DEVICE`</b>

 -  Device information intended for the AWS IoT shadow and displayed in the Cellular Link Monitor card on nRF Cloud

   <u>Supported `MessageType` values:</u>

   `DATA` - Device meta-data containing network, sim, device, and service information.

   - `"data":`
      - `"networkInfo"`- JSON formatted data describing the device's network connection.
      - `"simInfo"`- JSON formatted data describing the device's SIM info.
      - `"deviceInfo"`- JSON formatted data describing the device's hardware, application, and firmware version.
      - `"serviceInfo"`- JSON formatted data listing the services it supports.
    - Device To Cloud.
---
<b>`AIR_QUAL`</b>

 - The device's air quality sensor.

   <u>Supported `MessageType` values:</u>

   `DATA` - IAQ index value (0-500).

   - `"data":`
      - IAQ index value string.
    - Device To Cloud.
    - Example:
      ```{"appId":"AIR_QUAL","messageType":"DATA","data":"63"}```

   `CFG_SET` - Sets configuration values for the air quality module.
   - `"data":`
      - `"enable"` - Boolean true to enable air quality reporting on the device, false to disable.
      - `"thresh_lo"` - Low threshold value.  If set, device will only send data if it is below the threshold value.
      -  `"thresh_hi"` - High threshold value.  If set, device will only send data if it is above the threshold value.
    - Cloud to Device.
    - Example:
      ```{"appId":"AIR_QUAL","messageType":"CFG_SET","data": {"enable":true,"thresh_lo": null, "thresh_hi": 100 }}```
---
<b>`LED`</b>

 - The device's RGB LED

   <u>Supported `MessageType` values:</u>

   `CFG_SET` - Sets configuration of the device's LED.
   - `"data":`
      - `"color"` - RBG hex string specifying the desired LED color.
    - Cloud to Device.
    - Example:
      ```{"appId":"LED","messageType":"CFG_SET","data": {"color":"0xAB120F"}}```
