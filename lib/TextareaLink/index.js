import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Controller, } from 'react-hook-form';
import { View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import InputError from '../Input/components/InputError';
import InputPressable from '../InputPressable';
const TextareaLink = ({ label, onPress, name, control, validation, error, setValue, defaultValue, errorStyle, ...props }) => {
    const navigation = useNavigation();
    const [linkValue, setLinkValue] = useState();
    /**
     * Set Form Value after Typing
     */
    useEffect(() => {
        if (setValue && name && linkValue)
            setValue(name, linkValue);
    }, [setValue, name, linkValue]);
    /**
     * Set Default Value
     */
    useEffect(() => {
        if (defaultValue)
            setLinkValue(defaultValue);
    }, [defaultValue]);
    /**
     * On press action
     */
    // Add a controller to the other page and pass shit as params. Maybe even delete the controller from here and only keep the error
    const goToTypingPage = () => {
        if (onPress)
            return onPress();
        return navigation.navigate('TextareaEdit', {
            label,
            linkValue,
            setLinkValue,
        });
    };
    return (React.createElement(View, null,
        React.createElement(Controller, { name: name !== null && name !== void 0 ? name : '', control: control, defaultValue: defaultValue, rules: validation, render: () => (React.createElement(InputPressable, { label: label, value: linkValue, onPress: () => goToTypingPage(), ...props })) }),
        error && (React.createElement(InputError, { error: error, errorStyle: [t._mT2, t.mB4, errorStyle] }))));
};
export default TextareaLink;
//# sourceMappingURL=index.js.map