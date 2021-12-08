import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Keyboard, TextInput, View, } from 'react-native';
import { t } from 'react-native-tailwindcss';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
import InputLabel from './InputLabel';
const styles = {
    inputContainer: [t.flexRow, t.itemsCenter, t.border, t.p4, t.rounded],
    input: [t.wFull, t.fontSans],
};
const ControlledTextEntry = ({ 
// Functionality
name, control, validation, defaultValue, label, icon, onSubmitEditing, textEntryTestID, labelTestID, 
// Styling
textEntryStyle, textEntryContainerStyle, labelStyle, bgColor, borderColor, focusedBorderColor, selectionColor, textColor, labelColor, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [currentValue, setCurrentValue] = useState(undefined);
    return (React.createElement(Controller, { name: name !== null && name !== void 0 ? name : '', control: control, defaultValue: defaultValue, rules: validation, render: ({ field: { onChange, onBlur, value } }) => (React.createElement(View, { style: t.relative },
            React.createElement(OptionalWrapper, { data: label },
                React.createElement(InputLabel, { text: label, isFocused: isFocused, value: currentValue, defaultValue: defaultValue, labelColor: labelColor, labelStyle: labelStyle, testID: labelTestID })),
            React.createElement(View, { style: [
                    styles.inputContainer,
                    label ? t.pT10 : t.pT4,
                    {
                        borderColor: isFocused ? focusedBorderColor : borderColor,
                        backgroundColor: bgColor,
                    },
                    textEntryContainerStyle,
                ] },
                React.createElement(OptionalWrapper, { data: icon }, icon),
                React.createElement(TextInput, { style: [
                        styles.input,
                        {
                            color: textColor,
                        },
                        textEntryStyle,
                    ], onFocus: () => {
                        setIsFocused(true);
                    }, onBlur: () => {
                        onBlur();
                        setIsFocused(false);
                    }, onChangeText: (inputValue) => {
                        setCurrentValue(inputValue);
                        onChange(inputValue);
                    }, value: value, onSubmitEditing: () => onSubmitEditing ? onSubmitEditing() : Keyboard.dismiss(), selectionColor: selectionColor, placeholder: '' // Needed to not be passed accidentally
                    , testID: textEntryTestID, ...props })))) }));
};
export default ControlledTextEntry;
//# sourceMappingURL=ControlledTextEntry.js.map