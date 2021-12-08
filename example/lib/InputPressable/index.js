import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import Icon from '../Icon';
import Txt from '../Txt';
import OptionalWrapper from '../Wrapper/OptionalWrapper';
const styles = {
    container: [
        t.border,
        t.p4,
        t.rounded,
        t.textBase,
        t.borderYellow400,
        t.mB4,
        t.flexRow,
        t.itemsCenter,
        t.justifyBetween,
    ],
    label: [
        t.textGray400,
        t.fontSans,
        t.textBase,
        t.textSm,
        { marginBottom: 6, fontSize: 15 },
    ],
    placeholder: [t.textGray400, t.textLg],
    icon: [t._mL4],
};
const InputPressable = ({ 
// Functionality
value, label, onPress, noIcon, 
// Styling
style, textStyle, labelStyle, placeholderStyle, bgColor, textColor, borderColor, labelColor, icon, iconColor, iconSize, iconStyle, iconName, }) => {
    return (React.createElement(TouchableOpacity, { style: [
            styles.container,
            {
                backgroundColor: bgColor !== null && bgColor !== void 0 ? bgColor : color.transparent,
                borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : color.yellow400,
            },
            style,
        ], onPress: onPress },
        React.createElement(View, { style: t.pR8 },
            React.createElement(OptionalWrapper, { data: !value },
                React.createElement(Txt, { style: [styles.placeholder, placeholderStyle] }, label)),
            React.createElement(OptionalWrapper, { data: value },
                React.createElement(Txt, { style: [
                        styles.label,
                        {
                            color: labelColor !== null && labelColor !== void 0 ? labelColor : color.gray400,
                        },
                        labelStyle,
                    ] }, label),
                React.createElement(Txt, { style: [
                        textStyle,
                        {
                            color: textColor !== null && textColor !== void 0 ? textColor : color.white,
                        },
                    ], numberOfLines: 1, ellipsizeMode: 'tail' }, value))),
        icon,
        !icon && !noIcon && (React.createElement(Icon, { type: 'font', fontName: 'Feather', name: iconName !== null && iconName !== void 0 ? iconName : 'chevron-right', color: iconColor !== null && iconColor !== void 0 ? iconColor : color.white, size: iconSize !== null && iconSize !== void 0 ? iconSize : 24, style: [styles.icon, iconStyle] }))));
};
export default InputPressable;
//# sourceMappingURL=index.js.map