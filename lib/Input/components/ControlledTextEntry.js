import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Keyboard, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
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
textEntryStyle, textEntryContainerStyle, labelStyle, bgColor, borderColor, focusedBorderColor, selectionColor, textColor, labelColor, focusedLabelColor, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [currentValue, setCurrentValue] = useState(undefined);
    const inputRef = useRef();
    useEffect(() => {
        if (inputRef.current) {
            // @ts-expect-error-next-line
            if (isFocused)
                inputRef.current.focus();
            // @ts-expect-error-next-line
            else
                inputRef.current.blur();
        }
    }, [isFocused, inputRef]);
    return (React.createElement(Controller, { name: name !== null && name !== void 0 ? name : '', control: control, defaultValue: defaultValue, rules: validation, render: ({ field: { onChange, onBlur, value } }) => (React.createElement(TouchableWithoutFeedback, { onPress: () => setIsFocused(true) },
            React.createElement(View, { style: t.relative },
                React.createElement(OptionalWrapper, { data: label },
                    React.createElement(InputLabel, { text: label, isFocused: isFocused, value: currentValue, defaultValue: defaultValue, labelColor: labelColor, focusedLabelColor: focusedLabelColor, labelStyle: labelStyle, testID: labelTestID })),
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
                    React.createElement(TextInput
                    // @ts-expect-error-next-line
                    , { 
                        // @ts-expect-error-next-line
                        ref: inputRef, style: [
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
                        , testID: textEntryTestID, ...props }))))) }));
};
export default ControlledTextEntry;
//# sourceMappingURL=ControlledTextEntry.js.map