import React, { useEffect, useRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import { InteractionManager, Keyboard, Platform, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
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
    postfix: [t.fontSans, t.textGray900, t.mL1],
    clearTextIconContainer: [
        t.flex,
        t.justifyCenter,
        t.itemsCenter,
        t.absolute,
        t.right0,
        t.top0,
        t.mT5,
        t.mR3,
    ],
    rightComponentContainer: [
        t.flex,
        t.justifyCenter,
        t.itemsCenter,
        t.absolute,
        t.right0,
        t.top0,
        t.bottom0,
        t.mR2,
        t.hFull,
    ],
};
const ControlledTextEntry = React.forwardRef(({ 
// Functionality
name, control, validation, defaultValue, label, rightComponent, icon, onSubmitEditing, textEntryTestID, labelTestID, prefix, postfix, forceLabel, 
// Styling
textEntryStyle, textEntryContainerStyle, labelStyle, labelTopPosition, labelBigFontSize, labelSmallFontSize, bgColor, borderColor, focusedBorderColor, selectionColor, prefixStyle, postfixStyle, textColor, labelColor, focusedLabelColor, clearTextIcon, clearTextIconContainerStyle, rightComponentContainerSyle, noClear, onFocus, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [currentValue, setCurrentValue] = useState(undefined);
    useEffect(() => {
        if (defaultValue)
            setCurrentValue(defaultValue);
    }, [defaultValue]);
    const inputRef = useRef(null);
    useEffect(() => {
        if (Platform.OS === 'android' && props.autoFocus) {
            InteractionManager.runAfterInteractions(() => {
                var _a, _b;
                // @ts-expect-error
                if ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.focus) {
                    // @ts-expect-error
                    setTimeout(() => ref.current.focus(), 100);
                }
                else if ((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.focus) {
                    setTimeout(() => { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, 100);
                }
            });
        }
    }, []);
    return (React.createElement(Controller, { name: name !== null && name !== void 0 ? name : '', control: control, defaultValue: defaultValue, rules: validation, render: ({ field: { onChange, onBlur, value } }) => (React.createElement(TouchableWithoutFeedback, { onPress: () => {
                var _a, _b, _c;
                setIsFocused(true);
                // @ts-expect-error
                if ((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.focus())
                    return ref.current.focus();
                if ((_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.focus())
                    (_c = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _c === void 0 ? void 0 : _c.focus();
            } },
            React.createElement(View, { style: t.relative },
                React.createElement(OptionalWrapper, { data: label },
                    React.createElement(InputLabel, { text: label, isFocused: forceLabel || isFocused, value: currentValue, currentValue: currentValue, labelColor: labelColor, focusedLabelColor: focusedLabelColor, labelStyle: labelStyle, labelTopPosition: labelTopPosition, labelBigFontSize: labelBigFontSize, labelSmallFontSize: labelSmallFontSize, testID: labelTestID })),
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
                    React.createElement(OptionalWrapper, { data: prefix && (forceLabel || isFocused || currentValue) },
                        React.createElement(Txt, { style: [styles.prefix, prefixStyle] }, prefix)),
                    React.createElement(TextInput
                    // @ts-expect-error
                    , { 
                        // @ts-expect-error
                        ref: ref !== null && ref !== void 0 ? ref : inputRef, style: [
                            styles.input,
                            Platform.OS === 'android' && [t._mY4, t._mL1],
                            {
                                color: textColor,
                            },
                            textEntryStyle,
                            postfix && t.wAuto,
                        ], hitSlop: {
                            top: 40,
                            left: 24,
                            right: prefix ? 5 : 24,
                            bottom: 24,
                        }, onFocus: (e) => {
                            if (onFocus)
                                onFocus(e);
                            setIsFocused(true);
                        }, onBlur: () => {
                            onBlur();
                            setIsFocused(false);
                        }, onChangeText: (inputValue) => {
                            setCurrentValue(inputValue);
                            onChange(inputValue);
                        }, value: value, onSubmitEditing: () => onSubmitEditing ? onSubmitEditing() : Keyboard.dismiss(), selectionColor: selectionColor, placeholder: '' // Needed to not be passed accidentally
                        , testID: textEntryTestID, defaultValue: defaultValue, ...props, autoFocus: Platform.OS === 'android' ? false : props.autoFocus }),
                    React.createElement(OptionalWrapper, { data: postfix && (forceLabel || isFocused || currentValue) },
                        React.createElement(Txt, { style: [styles.postfix, postfixStyle] }, postfix))),
                !noClear && clearTextIcon && (React.createElement(OptionalWrapper, { data: currentValue && isFocused },
                    React.createElement(TouchableOpacity, { onPress: () => {
                            setCurrentValue('');
                            onChange('');
                        }, style: [
                            styles.clearTextIconContainer,
                            clearTextIconContainerStyle,
                        ] }, clearTextIcon))),
                React.createElement(OptionalWrapper, { data: rightComponent },
                    React.createElement(View, { style: [
                            styles.rightComponentContainer,
                            rightComponentContainerSyle,
                        ] }, rightComponent))))) }));
});
export default ControlledTextEntry;
//# sourceMappingURL=ControlledTextEntry.js.map