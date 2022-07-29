import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { LogBox, TouchableOpacity, View } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import Icon from '../../Icon';
import Txt from '../../Txt';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
const styles = {
    container: [
        t.wFull,
        t.border,
        t.p4,
        t.rounded,
        t.borderYellow400,
        t.relative,
        t.flexRow,
        t.itemsCenter,
        t.justifyBetween,
    ],
    label: [t.textGray700, t.fontSans, t.textBase, t.textSm, t.mB1],
    placeholder: [t.textGray400, t.textLg],
    value: [t.textWhite, t.fontSans],
};
const ControlledDropdownPressable = ({ 
// Functionality
dropdown, setDropdown, control, validation, setValue, disabled, hideLabel, delimiter, navigateTo, onPress, clearComponent, clearComponentVisible, 
// Styling
placeholderStyle, labelStyle, textStyle, bgColor, borderColor, icon, iconColor, iconSize, iconStyle, iconName, }) => {
    var _a;
    const navigation = useNavigation();
    /**
     *  Final selected value string
     */
    const [labelsText, setLabelsText] = useState('');
    const [valuesText, setValuesText] = useState('');
    useEffect(() => {
        const allLabels = (dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues)
            ? dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues.map((selection) => `${selection.label}`).join(delimiter !== null && delimiter !== void 0 ? delimiter : ' ')
            : '';
        const allValues = (dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues)
            ? dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues.map((selection) => `${selection.value}`).join(delimiter !== null && delimiter !== void 0 ? delimiter : ' ')
            : '';
        setLabelsText(allLabels);
        setValuesText(allValues);
    }, [dropdown, delimiter]);
    /**
     * On press action
     */
    const goToSelectionPage = () => {
        if (navigateTo)
            return navigateTo();
        return navigation.navigate('SelectDropdown', {
            dropdown,
            setDropdown,
        });
    };
    /**
     * Set Form Value after Selection
     */
    useEffect(() => {
        if ((dropdown === null || dropdown === void 0 ? void 0 : dropdown.name) && valuesText !== '') {
            if (setValue)
                setValue(dropdown.name, valuesText);
        }
    }, [dropdown, valuesText, setValue]);
    /**
     * Passing setDropdown as a route parameter
     */
    useEffect(() => {
        LogBox.ignoreLogs([
            'Non-serializable values were found in the navigation state',
        ]);
    }, []);
    return (React.createElement(Controller, { name: (_a = dropdown === null || dropdown === void 0 ? void 0 : dropdown.name) !== null && _a !== void 0 ? _a : '', control: control, rules: validation, render: () => {
            var _a;
            return (React.createElement(TouchableOpacity, { style: [
                    styles.container,
                    disabled && t.opacity25,
                    {
                        backgroundColor: bgColor !== null && bgColor !== void 0 ? bgColor : color.transparent,
                        borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : color.yellow400,
                    },
                ], disabled: disabled, onPress: () => {
                    goToSelectionPage();
                    if (onPress)
                        onPress();
                } },
                React.createElement(View, { style: t.w10_12 },
                    React.createElement(OptionalWrapper, { data: !labelsText },
                        React.createElement(Txt, { style: [styles.placeholder, placeholderStyle] }, dropdown === null || dropdown === void 0 ? void 0 : dropdown.label)),
                    React.createElement(OptionalWrapper, { data: labelsText },
                        React.createElement(OptionalWrapper, { data: !hideLabel },
                            React.createElement(Txt, { style: [styles.label, labelStyle] }, dropdown === null || dropdown === void 0 ? void 0 : dropdown.label)),
                        React.createElement(Txt, { style: [styles.value, disabled && t.opacity50, textStyle] }, labelsText))),
                clearComponentVisible &&
                    clearComponent &&
                    ((_a = dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues) === null || _a === void 0 ? void 0 : _a.length) ? (React.createElement(TouchableOpacity, { onPress: () => {
                        if (setDropdown && dropdown)
                            setDropdown({
                                ...dropdown,
                                currentValues: undefined,
                            });
                    } }, clearComponent)) : (React.createElement(React.Fragment, null,
                    icon,
                    !icon && (React.createElement(Icon, { type: 'font', fontName: 'Feather', name: iconName !== null && iconName !== void 0 ? iconName : 'chevron-right', color: iconColor !== null && iconColor !== void 0 ? iconColor : color.white, size: iconSize !== null && iconSize !== void 0 ? iconSize : 24, style: [iconStyle] }))))));
        } }));
};
export default ControlledDropdownPressable;
//# sourceMappingURL=ControlledDropdownPressable.js.map