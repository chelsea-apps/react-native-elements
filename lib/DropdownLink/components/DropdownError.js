import React from 'react';
import { t } from 'react-native-tailwindcss';
import Txt from '../../Txt';
import OptionalWrapper from '../../Wrapper/OptionalWrapper';
const styles = {
    error: [t.textRed400, t.textSm, t.mT2],
};
const DropdownError = ({ error, textStyle }) => {
    return (React.createElement(OptionalWrapper, { data: error === null || error === void 0 ? void 0 : error.message },
        React.createElement(Txt, { style: [styles.error, textStyle] }, error === null || error === void 0 ? void 0 : error.message)));
};
export default DropdownError;
//# sourceMappingURL=DropdownError.js.map