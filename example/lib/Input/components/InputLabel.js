import React, { useEffect } from 'react';
import { Animated } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
import useInputAnimations from '../hooks/useInputAnimations';
const styles = {
    label: [
        t.textGray400,
        t.fontSans,
        t.absolute,
        t.textBase,
        t.top0,
        t.left0,
        t.mL4,
        t.mT4,
        t.textBase,
    ],
};
const InputLabel = ({ text, isFocused, value, defaultValue, labelStyle, labelColor, testID, }) => {
    const { animatedLabel, fadeIn, fadeOut } = useInputAnimations(value !== null && value !== void 0 ? value : '', defaultValue);
    useEffect(() => (isFocused || value || defaultValue ? fadeIn() : fadeOut()), [isFocused, fadeIn, value, defaultValue, fadeOut]);
    return (React.createElement(OptionalWrapper, { data: text },
        React.createElement(Animated.Text, { style: [
                styles.label,
                { ...animatedLabel },
                { color: labelColor !== null && labelColor !== void 0 ? labelColor : color.gray400 },
                labelStyle,
            ], testID: testID }, text)));
};
export default InputLabel;
//# sourceMappingURL=InputLabel.js.map