var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { usePicker } from '../context.js';
import { high, low } from '../utils/formatters.js';
export var useDeletePoint = function () {
    var _a = usePicker(), colors = _a.colors, selectedColor = _a.selectedColor, createGradientStr = _a.createGradientStr;
    var deletePoint = function () {
        if ((colors === null || colors === void 0 ? void 0 : colors.length) > 2) {
            var formatted = colors === null || colors === void 0 ? void 0 : colors.map(function (fc, i) { return (__assign(__assign({}, fc), { value: i === selectedColor - 1 ? high(fc) : low(fc) })); });
            var remaining = formatted === null || formatted === void 0 ? void 0 : formatted.filter(function (_, i) { return i !== selectedColor; });
            createGradientStr(remaining);
        }
    };
    return { deletePoint: deletePoint, canDelete: (colors === null || colors === void 0 ? void 0 : colors.length) > 2 };
};
