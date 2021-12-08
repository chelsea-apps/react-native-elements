import React from 'react';
import { Platform, Pressable, View, } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { color, t } from 'react-native-tailwindcss';
import Txt from '../Txt';
import OptionalWrapper from '../Wrapper/OptionalWrapper';
const styles = {
    container: [t._mL4, t._mR4, t.pX4],
    innerContainer: [
        t.selfStretch,
        t.itemsCenter,
        t.justifyBetween,
        t.flexRow,
        t.borderB,
        t.pB3,
        t.mT4,
    ],
    iconContainer: [
        t.w5,
        t.h5,
        t.border,
        t.borderWhite,
        t.justifyCenter,
        t.itemsCenter,
        { borderRadius: 4 },
    ],
    checkboxCheck: [{ height: 13, width: 13, borderRadius: 0 }],
};
/**
 *  PART OF selectDropdown Screen
 *  TO NOT BE USED INDEPENDENT
 */
const CheckboxSelectRow = ({ 
// Functionality
label, selected, setSelected, 
// Styling
style, textStyle, borderColor, selectionActiveColor, selectionDefaultColor, }) => {
    return (React.createElement(View, { style: [styles.container, style] },
        React.createElement(Pressable, { onPress: () => {
                setSelected(!selected);
                if (Platform.OS === 'ios') {
                    ReactNativeHapticFeedback.trigger('impactLight', {
                        enableVibrateFallback: false,
                        ignoreAndroidSystemSettings: false,
                    });
                }
            } },
            React.createElement(View, { style: [
                    styles.innerContainer,
                    { borderColor: borderColor !== null && borderColor !== void 0 ? borderColor : color.yellow400 },
                ] },
                typeof label === 'string' ? (React.createElement(Txt, { style: [t.textWhite, textStyle] }, label)) : (React.cloneElement(label)),
                React.createElement(View, { style: [
                        styles.iconContainer,
                        {
                            borderColor: selectionDefaultColor !== null && selectionDefaultColor !== void 0 ? selectionDefaultColor : color.white,
                        },
                        selected && [
                            {
                                borderColor: selectionActiveColor !== null && selectionActiveColor !== void 0 ? selectionActiveColor : color.yellow400,
                            },
                        ],
                    ] },
                    React.createElement(OptionalWrapper, { data: selected },
                        React.createElement(View, { style: [
                                styles.checkboxCheck,
                                {
                                    backgroundColor: selectionActiveColor !== null && selectionActiveColor !== void 0 ? selectionActiveColor : color.yellow400,
                                },
                            ] })))))));
};
export default CheckboxSelectRow;
//# sourceMappingURL=index.js.map