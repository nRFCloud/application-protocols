"use strict";
exports.__esModule = true;
var ajv_1 = require("ajv");
var air_press_json_1 = require("./schemas/air_press.json");
var button_json_1 = require("./schemas/button.json");
var flip_json_1 = require("./schemas/flip.json");
var gps_json_1 = require("./schemas/gps.json");
var humid_json_1 = require("./schemas/humid.json");
var light_json_1 = require("./schemas/light.json");
var rsrp_json_1 = require("./schemas/rsrp.json");
var temp_json_1 = require("./schemas/temp.json");
var AppProtocol = /** @class */ (function () {
    function AppProtocol(schemas) {
        this.ajv = new ajv_1["default"]({ schemas: schemas, verbose: true, allErrors: true });
    }
    AppProtocol.prototype.isValidMessage = function (message) {
        var appId = message === null || message === void 0 ? void 0 : message.appId;
        var isValid;
        try {
            isValid = this.ajv.validate(appId, message);
        }
        catch (e) {
        }
        if (!isValid) {
            console.error('validation error', this.ajv.errors);
            isValid = false;
        }
        return isValid;
    };
    return AppProtocol;
}());
exports.AppProtocol = AppProtocol;
exports["default"] = new AppProtocol([
    air_press_json_1["default"],
    button_json_1["default"],
    flip_json_1["default"],
    gps_json_1["default"],
    humid_json_1["default"],
    light_json_1["default"],
    rsrp_json_1["default"],
    temp_json_1["default"]
]);
