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
`
