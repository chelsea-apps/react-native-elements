import React from 'react';
import { t } from 'react-native-tailwindcss';
import Button from './index';
const styles = {
    button: [
        t.bgYellow400,
        t.rounded,
        t.pY3,
        t.flexRow,
        t.itemsCenter,
        t.justifyCenter,
    ],
    text: [t.textLg, t.textCenter, t.textBlack, t.fontMedium],
};
const DefaultButton = ({ children, style, textStyle, disabled, icon, ...props }) => {
    return (React.createElement(Button, { icon: icon, style: [styles.button, disabled && t.opacity25, style], textStyle: [styles.text, disabled && t.opacity25, textStyle], disabled: disabled, ...props }, children));
};
export default DefaultButton;
//# sourceMappingURL=Default.js.map