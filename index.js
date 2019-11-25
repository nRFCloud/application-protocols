"use strict";
exports.__esModule = true;
var Ajv = require("ajv");
var path = require("path");
var fs = require("fs");
var ajv = new Ajv();
var AppId;
(function (AppId) {
    AppId["Gps"] = "GPS";
    AppId["Flip"] = "FLIP";
    AppId["Gen"] = "GEN";
    AppId["Temp"] = "TEMP";
    AppId["Humid"] = "HUMID";
    AppId["AirPress"] = "AIR_PRESS";
    AppId["RSRP"] = "RSRP";
    AppId["Button"] = "BUTTON";
    AppId["Device"] = "DEVICE";
})(AppId = exports.AppId || (exports.AppId = {}));
var getJsonSchema = function (appId) {
    var filePath = path.join(__dirname, 'schemas', appId.toLowerCase() + ".json");
    var schema = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(schema);
};
exports.isMessageValid = function (message) {
    var appId = message.appId;
    var jsonSchema;
    try {
        jsonSchema = getJsonSchema(appId);
    }
    catch (e) {
        console.error('Schema does not exist', e);
        return false;
    }
    var compiledSchema = ajv.compile(jsonSchema);
    var isValid = compiledSchema(message);
    if (!isValid) {
        console.error('validation error', compiledSchema.errors);
    }
    return isValid;
};
