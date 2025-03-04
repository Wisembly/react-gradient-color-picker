"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropper = exports.useColorPicker = void 0;
var index_js_1 = require("./components/index.js");
var EyeDropper_js_1 = __importDefault(require("./components/EyeDropper.js"));
exports.Dropper = EyeDropper_js_1.default;
var useColorPicker_js_1 = require("./hooks/useColorPicker.js");
Object.defineProperty(exports, "useColorPicker", { enumerable: true, get: function () { return useColorPicker_js_1.useColorPicker; } });
exports.default = index_js_1.ColorPicker;
