import React from 'react';
import { View, } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import ControlledTextEntry from './components/ControlledTextEntry';
import InputError from './components/InputError';
import InputInfoText from './components/InputInfoText';
const Input = ({ name, control, error, errorTestID, errorColor, errorStyle, label, validation, onSubmitEditing, defaultValue, infoText, infoTextStyle, infoTextColor, infoTextTestID, icon, style, textEntryStyle, textEntryContainerStyle, labelStyle, bgColor, textColor, borderColor, focusedBorderColor, labelColor, focusedLabelColor, selectionColor, testID, textEntryTestID, labelTestID, ...props }) => {
    return (React.createElement(View, { style: [t.mB4, style], testID: testID },
        React.createElement(ControlledTextEntry
        // Functionality
        , { 
            // Functionality
            name: name, control: control, validation: validation, defaultValue: defaultValue, label: label, onSubmitEditing: onSubmitEditing, icon: icon, 
            // Styling
            textEntryStyle: textEntryStyle, textEntryContainerStyle: textEntryContainerStyle, labelStyle: labelStyle, bgColor: bgColor !== null && bgColor !== void 0 ? bgColor : color.transparent, textColor: textColor !== null && textColor !== void 0 ? textColor : color.white, borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : color.gray400, focusedBorderColor: focusedBorderColor !== null && focusedBorderColor !== void 0 ? focusedBorderColor : color.yellow400, selectionColor: selectionColor !== null && selectionColor !== void 0 ? selectionColor : color.white, labelColor: labelColor !== null && labelColor !== void 0 ? labelColor : color.gray900, focusedLabelColor: focusedLabelColor !== null && focusedLabelColor !== void 0 ? focusedLabelColor : color.gray700, textEntryTestID: textEntryTestID, labelTestID: labelTestID, ...props }),
        React.createElement(InputInfoText
        // Functionality
        , { 
            // Functionality
            text: infoText, testID: infoTextTestID, 
            // Styling
            textColor: infoTextColor !== null && infoTextColor !== void 0 ? infoTextColor : color.white, infoStyle: infoTextStyle }),
        React.createElement(InputError
        // Functionality
        , { 
            // Functionality
            error: error, testID: errorTestID, 
            // Styling
            textColor: errorColor !== null && errorColor !== void 0 ? errorColor : color.red400, errorStyle: errorStyle })));
};
export default Input;
//# sourceMappingURL=index.js.map