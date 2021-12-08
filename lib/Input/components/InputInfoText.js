import React from 'react';
import { View } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import Txt from '../../Txt';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
const styles = {
    container: [t.flexRow, t.itemsCenter, t.mT2],
    icon: [t.mR2],
    info: [t.textWhite, t.textSm],
};
const InputInfoText = ({ text, infoStyle, textColor, testID, }) => (React.createElement(OptionalWrapper, { data: text },
    React.createElement(View, { style: styles.container },
        React.createElement(Txt, { style: [styles.info, { color: textColor !== null && textColor !== void 0 ? textColor : color.white }, infoStyle], testID: testID }, text))));
export default InputInfoText;
//# sourceMappingURL=InputInfoText.js.map