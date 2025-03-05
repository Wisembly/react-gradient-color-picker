import React from 'react';
import { LocalesProps } from '../shared/types.js';
declare const Controls: ({ locales, hideEyeDrop, hideAdvancedSliders, hideColorGuide, hideInputType, hideColorTypeBtns, hideGradientControls, hideGradientType, hideGradientAngle, hideGradientStop, CustomGradientControls, }: {
    locales?: LocalesProps;
    hideEyeDrop?: boolean;
    hideAdvancedSliders?: boolean;
    hideColorGuide?: boolean;
    hideInputType?: boolean;
    hideColorTypeBtns?: boolean;
    hideGradientControls?: boolean;
    hideGradientType?: boolean;
    hideGradientAngle?: boolean;
    hideGradientStop?: boolean;
    CustomGradientControls?: React.ComponentType;
}) => React.JSX.Element | null;
export default Controls;
