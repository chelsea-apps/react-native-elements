import React from 'react';
import { color, t } from 'react-native-tailwindcss';
import Txt from '../../Txt';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
const styles = {
    error: [t.textRed400, t.textSm, t.mT2],
};
const InputError = ({ error, errorStyle, textColor, testID, }) => (React.createElement(OptionalWrapper, { data: error === null || error === void 0 ? void 0 : error.message },
    React.createElement(Txt, { style: [styles.error, { color: textColor !== null && textColor !== void 0 ? textColor : color.red400 }, errorStyle], testID: testID }, error === null || error === void 0 ? void 0 : error.message)));
export default InputError;
//# sourceMappingURL=InputError.js.map