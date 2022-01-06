import React from 'react';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import ControlledDropdownPressable from './components/ControlledDropdownPressable';
import DropdownError from './components/DropdownError';
const DropdownLink = ({ 
// Functionality
dropdown, setDropdown, control, validation, error, setValue, navigateTo, disabled, hideLabel, delimiter, onPress, 
// Styling
style, errorTextStyle, ...props }) => {
    return (React.createElement(View, { style: [t.mB4, style] },
        React.createElement(ControlledDropdownPressable
        // Functionality
        , { 
            // Functionality
            dropdown: dropdown, setDropdown: setDropdown, control: control, validation: validation, setValue: setValue, navigateTo: navigateTo, disabled: disabled, onPress: onPress, hideLabel: hideLabel, delimiter: delimiter, ...props }),
        React.createElement(DropdownError, { error: error, textStyle: errorTextStyle })));
};
export default DropdownLink;
//# sourceMappingURL=index.js.map