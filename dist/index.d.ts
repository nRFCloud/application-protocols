import * as ajv from 'ajv';
declare enum AppId {
    Gps = "GPS",
    Flip = "FLIP",
    Gen = "GEN",
    Temp = "TEMP",
    Humid = "HUMID",
    AirPress = "AIR_PRESS",
    RSRP = "RSRP",
    Button = "BUTTON",
    Device = "DEVICE"
}
declare enum MessageType {
    Hello = "HELLO",
    Start = "START",
    Stop = "STOP",
    Int = "INT",
    Get = "GET",
    Status = "STATUS",
    Data = "DATA",
    Ok = "OK"
}
interface LteMessage {
    appId: AppId;
    messageType: MessageType;
    data?: string;
    time?: number;
}
declare class AppProtocol {
    ajv: ajv.Ajv;
    constructor(schemas: Object[]);
    getProtocol(key: AppId): Object;
    isValidMessage(message: LteMessage): boolean | PromiseLike<any>;
}
declare const _default: AppProtocol;
export default _default;
