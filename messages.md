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
