"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropper = exports.useColorPicker = void 0;
var index_js_1 = require("./components/index.js");
var useColorPicker_js_1 = require("./hooks/useColorPicker.js");
Object.defineProperty(exports, "useColorPicker", { enumerable: true, get: function () { return useColorPicker_js_1.useColorPicker; } });
var useDropper_js_1 = require("./hooks/useDropper.js");
Object.defineProperty(exports, "useDropper", { enumerable: true, get: function () { return useDropper_js_1.useDropper; } });
exports.default = index_js_1.ColorPicker;
