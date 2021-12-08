import React from 'react';
import { t } from 'react-native-tailwindcss';
import Button from './index';
const styles = {
    button: [t.bgYellow400, t.roundedFull, t.pY3],
    text: [t.textCenter, t.textWhite],
};
const RoundedButton = ({ children, style, textStyle, disabled, ...props }) => {
    return (React.createElement(Button, { style: [styles.button, disabled && t.opacity25, style], textStyle: [styles.text, disabled && t.opacity25, textStyle], disabled: disabled, ...props }, children));
};
export default RoundedButton;
//# sourceMappingURL=Rounded.js.map