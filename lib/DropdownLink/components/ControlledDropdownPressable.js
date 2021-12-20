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
    label: [t.textGray400, t.fontSans, t.textBase, t.textSm, t.mB1],
    placeholder: [t.textGray400, t.textLg],
    value: [t.textWhite, t.fontSans],
};
const ControlledDropdownPressable = ({ 
// Functionality
dropdown, setDropdown, control, validation, setValue, disabled, navigateTo, onPress, 
// Styling
placeholderStyle, labelStyle, textStyle, bgColor, borderColor, icon, iconColor, iconSize, iconStyle, iconName, }) => {
    var _a;
    const navigation = useNavigation();
    /**
     *  Final selected values string
     */
    const [valuesText, setValuesText] = useState('');
    useEffect(() => {
        const allValues = (dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues)
            ? dropdown === null || dropdown === void 0 ? void 0 : dropdown.currentValues.map((selection) => `${selection.value}`).join(' ')
            : '';
        setValuesText(allValues);
    }, [dropdown]);
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
    return (React.createElement(Controller, { name: (_a = dropdown === null || dropdown === void 0 ? void 0 : dropdown.name) !== null && _a !== void 0 ? _a : '', control: control, rules: validation, render: () => (React.createElement(TouchableOpacity, { style: [
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
            React.createElement(View, { style: t.pR8 },
                React.createElement(OptionalWrapper, { data: !valuesText },
                    React.createElement(Txt, { style: [styles.placeholder, placeholderStyle] }, dropdown === null || dropdown === void 0 ? void 0 : dropdown.label)),
                React.createElement(OptionalWrapper, { data: valuesText },
                    React.createElement(Txt, { style: [styles.label, labelStyle] }, dropdown === null || dropdown === void 0 ? void 0 : dropdown.label),
                    React.createElement(Txt, { style: [styles.value, disabled && t.opacity50, textStyle] }, valuesText))),
            icon,
            !icon && (React.createElement(Icon, { type: 'font', fontName: 'Feather', name: iconName !== null && iconName !== void 0 ? iconName : 'chevron-down', color: iconColor !== null && iconColor !== void 0 ? iconColor : color.white, size: iconSize !== null && iconSize !== void 0 ? iconSize : 24, style: [iconStyle] })))) }));
};
export default ControlledDropdownPressable;
//# sourceMappingURL=ControlledDropdownPressable.js.map