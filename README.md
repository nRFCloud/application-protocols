# nRF Cloud application protocols for long-range devices ![Version 1.1.0](https://img.shields.io/badge/version-1.1.0-brightgreen.svg)

![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiaFNvdXU1SWlMRGFCR3Q5U2tKWnptL3E2SU1VUnNsQ2d5djBBUUpmRXV4cGtjdnJKSXcyVzBtQThpZjIyczVxQkVsUnpYcUJkSUE1NHg2b1l6N0VrWFBvPSIsIml2UGFyYW1ldGVyU3BlYyI6InQvalE2ZWJtVmRIZWMxU2giLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=v1) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Contains the application protocol definitions for long-range devices
connecting to [nRF Cloud](https://nrfcloud.com/). 

Devices that send messages to nRFCloud can optionally have data displayed on cards. Cards will be shown only if the device shadow includes valid service ui and messages transmitted from the device use the correct protocols described in this repo.
## General Message Schema

```
{
   appId: AppId;
   messageType: MessageType;
   data?: any;
   time | ts ?: number;
}
```

**appId**: The application identifier associated with a running application on a IoT device. For example a device may be running an application sampling temperature and sending messages. Messages would include the appId TEMP.

**messageType**: Below is a table of valid message types depending on the asset tracker version:

### Asset Tracker v2
| MessageType      | Description | deviceToCloud or cloudToDevice |
| :-----------:      | :----------- | :-----------:                    |
| DATA  | Message contains sensor or other data	                  | D2C |

### Asset Tracker v1 (legacy)

| MessageType      | Description | deviceToCloud or cloudToDevice |
| :-----------:      | :----------- | :-----------:                    |
| HELLO | Tells applications that device is ready to send data	  | C2D |
| START | Tells application to start sending data to cloud	      | C2D |
| STOP  | Tells device to stop sending data	                      | C2D |
| INIT  | Tells the application to initialize or reset	          | C2D |
| GET | Tell application to send a single data point	          | C2D |
| STATUS  | Status message to device or cloud                     | Both|
| DATA  | Message contains sensor or other data	                  | D2C |
| OK  | Confirmation message	                                  | Both|
| CFG_GET  | Gets configuration	                                  | Both|
| CFG_SET  | Sets configuration	                                  | C2D |
| CMD  | Command and response	                                  | Both|

**data**: Raw data from the application. See below under cloudToDevice and deviceToCloud for details. 

**time | ts**: Timestamp parameter given by the device when the sample was taken (see [caveats](#caveats)).  
## Supported Schemas

The schemas are divided into three folders:

* cloudToDevice - Supported messages sent from nRF Cloud to the device. These messages apply to IP devices only. On nRF Cloud these messages can be sent using the terminal card or using the REST API [SendDeviceMessage](https://api.nrfcloud.com/v1#operation/SendDeviceMessage)

* deviceShadow - Supported device shadow that stores the current state of the device. A device has full privilege to write to the shadow. However conforming to the schema ensures that the UI on nRF Cloud will operate as expected. 

    For example, an ip device reports a [ServiceInfo](https://github.com/nRFCloud/application-protocols/blob/v1/schemas/deviceShadow/ipShadow/ipShadow.json#L281-L305) field to the shadow. nRF Cloud uses the information (contained in ui field) to display the correct cards.

* deviceToCloud - Supports messages sent from the device to nRF Cloud. nRF Cloud supports message from both IP and BLE devices. The current schemas only apply to IP devices. BLE documentation will be released in the future.       



## Custom Schemas

Messages that do not conform to the schemas are still processed and stored. However, it is not guaranteed that nRF Cloud will display your data on a card. Instead you will have to view the data using the terminal card.
 

## Caveats
- AGPS does not have an entry in the `deviceToCloud` directory because it returns a raw binary response (not JSON).
- ts should be used instead of time. The time property is included to be backwards compatible with certain versions of asset tracker version 2 firmware. Future versions will use the ts property instead.
