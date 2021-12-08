import React from 'react';
import { Text } from 'react-native';
import { t } from 'react-native-tailwindcss';
const styles = {
    defaultText: [t.fontSans, t.textWhite, t.textBase],
};
const Txt = ({ children, style, ...props }) => {
    return (React.createElement(Text, { ...props, style: [styles.defaultText, style], allowFontScaling: false }, children));
};
export default Txt;
//# sourceMappingURL=index.js.map