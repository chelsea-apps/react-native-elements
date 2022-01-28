import React from 'react';
import { Switch, TouchableOpacity, View, } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import Txt from '../Txt';
const styles = {
    container: [
        t.flexRow,
        t.justifyBetween,
        t.itemsCenter,
        t.borderOrange200,
        t.mB4,
        t.p4,
        t.border,
        t.borderYellow400,
        t.rounded,
    ],
};
const SwitchRow = ({ 
// Functionality
active, setActive, label, 
// Styling
style, labelStyle, labelActiveColor, labelDefaultColor, trackActiveColor, trackDefaultColor, thumbColor, thumbActiveColor, }) => {
    return (React.createElement(TouchableOpacity, { style: [styles.container, style], onPress: () => setActive(!active), activeOpacity: 1 },
        React.createElement(View, { style: [t.flexRow, t.itemsCenter] },
            React.createElement(Txt, { style: [
                    t.textLg,
                    labelStyle,
                    {
                        color: !active
                            ? labelDefaultColor !== null && labelDefaultColor !== void 0 ? labelDefaultColor : color.gray400
                            : labelActiveColor !== null && labelActiveColor !== void 0 ? labelActiveColor : color.white,
                    },
                ] }, label)),
        React.createElement(Switch, { trackColor: {
                false: trackDefaultColor !== null && trackDefaultColor !== void 0 ? trackDefaultColor : color.black,
                true: trackActiveColor !== null && trackActiveColor !== void 0 ? trackActiveColor : color.yellow400,
            }, ios_backgroundColor: trackDefaultColor !== null && trackDefaultColor !== void 0 ? trackDefaultColor : color.black, thumbColor: !active ? thumbColor !== null && thumbColor !== void 0 ? thumbColor : '#F4F3F4' : thumbActiveColor !== null && thumbActiveColor !== void 0 ? thumbActiveColor : '#F4F3F4', onValueChange: (value) => setActive(value), value: active })));
};
export default SwitchRow;
//# sourceMappingURL=index.js.map