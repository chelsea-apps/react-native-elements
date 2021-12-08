import React from 'react';
import { t } from 'react-native-tailwindcss';
import Button from './index';
const styles = {
    button: [
        t.border,
        t.borderYellow400,
        t.rounded,
        t.pY2,
        t.flexRow,
        t.itemsCenter,
        t.justifyCenter,
        t.pX4,
    ],
    text: [t.textCenter, t.textWhite, t.textLg, t.fontMedium],
};
const OutlineButton = ({ children, style, textStyle, disabled, ...props }) => {
    return (React.createElement(Button, { style: [styles.button, disabled && t.opacity25, style], textStyle: [styles.text, disabled && t.opacity25, textStyle], disabled: disabled, ...props }, children));
};
export default OutlineButton;
//# sourceMappingURL=Outline.js.map