# nRF Cloud application protocols for long-range devices ![Version 1.1.0](https://img.shields.io/badge/version-1.1.0-brightgreen.svg)

![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiaFNvdXU1SWlMRGFCR3Q5U2tKWnptL3E2SU1VUnNsQ2d5djBBUUpmRXV4cGtjdnJKSXcyVzBtQThpZjIyczVxQkVsUnpYcUJkSUE1NHg2b1l6N0VrWFBvPSIsIml2UGFyYW1ldGVyU3BlYyI6InQvalE2ZWJtVmRIZWMxU2giLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=v1) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Contains the application protocol definitions for long-range devices
connecting to [nRF Cloud](https://nrfcloud.com/). 

## Supported Schemas

The schemas are divided into three sections:

* cloudToDevice - Supported messages sent from nRF Cloud to the device. These messages apply to IP devices only. On nRF Cloud these messages can be sent using the terminal card or using the REST API [SendDeviceMessage](https://api.nrfcloud.com/v1#operation/SendDeviceMessage)

* deviceShadow - Supported device shadow that stores the current state of the device. A device has full privledge to write to the shadow. However conforming to the schema ensures that the UI on nRF Cloud will operate as expected. 

    For example, an ip device reports a [ServiceInfo](https://github.com/nRFCloud/application-protocols/blob/v1/schemas/deviceShadow/ipShadow/ipShadow.json#L281-L305) field to the shadow. nRF Cloud uses the information (contained in ui field) to display the correct cards.

* deviceToCloud - Supports messages sent from the device to nRF Cloud. nRF Cloud supports message from both IP and BLE devices. The current schemas only apply to IP devices. BLE documentation will be released in the future.       



## Custom Schemas

Messages that do not conform to the schemas are still processed and stored. However, it is not guaranteed that nRF Cloud will display your data on a card. Instead you will have to view the data using the terminal card.
 

## Caveats
- AGPS and PGPS do not have entries in the `deviceToCloud` directory because they both return a raw binary response (not JSON).