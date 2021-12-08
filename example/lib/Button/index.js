import React from 'react';
import { TouchableOpacity, } from 'react-native';
import { t } from 'react-native-tailwindcss';
import Txt from '../Txt';
const styles = {
    button: [t.selfStretch, t.itemsCenter],
    text: [t.textBlack],
};
const Button = ({ children, style, textStyle, disabled, icon, testID, textTestID, iconTextID, ...props }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(TouchableOpacity, { style: [styles.button, style], disabled: disabled, testID: testID, ...props },
            icon && (React.createElement(Txt, { style: [t.mR2], testID: iconTextID }, icon)),
            typeof children === 'string' ? (React.createElement(Txt, { style: [styles.text, textStyle], testID: textTestID }, children)) : ([children]))));
};
export default Button;
//# sourceMappingURL=index.js.map