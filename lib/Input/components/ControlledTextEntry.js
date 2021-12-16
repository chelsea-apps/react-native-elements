import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { Keyboard, TextInput, TouchableWithoutFeedback, View, } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { Txt } from '../..';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
import InputLabel from './InputLabel';
const styles = {
    inputContainer: [
        t.flexRow,
        t.itemsCenter,
        t.border,
        t.pX4,
        t.pT3,
        t.pB2,
        t.rounded,
    ],
    input: [t.wFull, t.fontSans],
    prefix: [t.fontSans, t.textGray900, t.mR1],
    postfix: [t.fontSans, t.textGray900, t.mL2],
};
const ControlledTextEntry = ({ 
// Functionality
name, control, validation, defaultValue, label, icon, onSubmitEditing, textEntryTestID, labelTestID, prefix, postfix, 
// Styling
textEntryStyle, textEntryContainerStyle, labelStyle, labelTopPosition, labelBigFontSize, labelSmallFontSize, bgColor, borderColor, focusedBorderColor, selectionColor, prefixStyle, postfixStyle, textColor, labelColor, focusedLabelColor, ...props }) => {
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
    useEffect(() => {
        if (prefix || postfix)
            setIsFocused(true);
    }, [prefix, postfix]);
    useEffect(() => {
        if (defaultValue)
            setCurrentValue(defaultValue);
    }, [defaultValue]);
    return (React.createElement(Controller, { name: name !== null && name !== void 0 ? name : '', control: control, defaultValue: defaultValue, rules: validation, render: ({ field: { onChange, onBlur, value } }) => (React.createElement(TouchableWithoutFeedback, { onPress: () => setIsFocused(true) },
            React.createElement(View, { style: t.relative },
                React.createElement(OptionalWrapper, { data: label },
                    React.createElement(InputLabel, { text: label, isFocused: isFocused, value: currentValue, defaultValue: defaultValue, currentValue: currentValue, labelColor: labelColor, focusedLabelColor: focusedLabelColor, labelStyle: labelStyle, labelTopPosition: labelTopPosition, labelBigFontSize: labelBigFontSize, labelSmallFontSize: labelSmallFontSize, testID: labelTestID })),
                React.createElement(View, { style: [
                        styles.inputContainer,
                        label ? t.pT9 : t.pT4,
                        postfix && t.pR10,
                        {
                            borderColor: isFocused ? focusedBorderColor : borderColor,
                            backgroundColor: bgColor,
                        },
                        textEntryContainerStyle,
                    ] },
                    React.createElement(OptionalWrapper, { data: icon }, icon),
                    React.createElement(OptionalWrapper, { data: prefix },
                        React.createElement(Txt, { style: [styles.prefix, prefixStyle] }, prefix)),
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
                        , testID: textEntryTestID, defaultValue: defaultValue, ...props }),
                    React.createElement(OptionalWrapper, { data: postfix },
                        React.createElement(Txt, { style: [styles.postfix, postfixStyle] }, postfix)))))) }));
};
export default ControlledTextEntry;
//# sourceMappingURL=ControlledTextEntry.js.map