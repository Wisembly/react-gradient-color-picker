import { useState } from 'react';
import html2canvas from 'html2canvas';
import tc from 'tinycolor2';
var useDropper = function (onSelect) {
    var _a = useState(null), pickerCanvas = _a[0], setPickerCanvas = _a[1];
    var _b = useState(false), coverUp = _b[0], setCoverUp = _b[1];
    var _c = useState(false), isPicking = _c[0], setIsPicking = _c[1];
    var takePick = function () {
        var root = document.getElementById('root');
        setCoverUp(true);
        // @ts-expect-error some error with this imported packages types
        html2canvas(root).then(function (canvas) {
            var blankCanvas = document.createElement('canvas');
            var ctx = blankCanvas.getContext('2d', { willReadFrequently: true });
            if (root && ctx) {
                blankCanvas.width = root.offsetWidth * 2;
                blankCanvas.height = root.offsetHeight * 2;
                ctx.drawImage(canvas, 0, 0);
            }
            setPickerCanvas(ctx);
        });
    };
    var getColorLegacy = function (e) {
        e.stopPropagation();
        if (pickerCanvas) {
            var pageX = e.pageX, pageY = e.pageY;
            var x1 = pageX * 2;
            var y1 = pageY * 2;
            var rgb = pickerCanvas.getImageData(x1, y1, 1, 1).data;
            onSelect("rgba(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ", 1)"));
        }
        setIsPicking(false);
        setCoverUp(false);
    };
    var getEyeDrop = function () {
        setIsPicking(true);
        // @ts-expect-error some error with this imported packages types
        if (!window.EyeDropper) {
            takePick();
        }
        else {
            // @ts-expect-error some error with this imported packages types
            var eyeDropper = new window.EyeDropper();
            var abortController = new window.AbortController();
            eyeDropper
                .open({ signal: abortController.signal })
                .then(function (result) {
                var tinyHex = tc(result.sRGBHex);
                var _a = tinyHex.toRgb(), r = _a.r, g = _a.g, b = _a.b;
                onSelect("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 1)"));
                setIsPicking(false);
            })
                .catch(function (e) {
                console.log(e);
                setIsPicking(false);
            });
        }
    };
    return { coverUp: coverUp, isPicking: isPicking, getColorLegacy: getColorLegacy, getEyeDrop: getEyeDrop };
};
export { useDropper };
