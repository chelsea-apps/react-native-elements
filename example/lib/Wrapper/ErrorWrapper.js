import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { color, t } from 'react-native-tailwindcss';
import RoundedButton from '../Button/Rounded';
import Icon from '../Icon';
import Txt from '../Txt';
import OptionalWrapper from './OptionalWrapper';
const styles = {
    title: {
        container: [
            t.flex,
            t.flexRow,
            t.itemsCenter,
            t.itemsCenter,
            t.justifyStart,
            t.mB2,
        ],
        text: [t.mL2, t.mY4, t.textXl, t.fontSans, t.textBlack, t.selfStart],
    },
    messages: {
        container: [t.mB2],
        text: [t.textBlack, t.selfStart],
    },
};
const ErrorWrapper = ({ title, error, children, onClose, style = [t.p4], textStyle, show, }) => {
    const [messages, setMessages] = useState([]);
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        if (show !== undefined)
            setShowError(show);
    }, [show]);
    useEffect(() => {
        var _a;
        if (error)
            console.warn(error);
        const messages = new Set();
        if (error === null || error === void 0 ? void 0 : error.graphQLErrors)
            error.graphQLErrors.forEach(({ message, extensions }) => {
                var _a;
                switch (extensions === null || extensions === void 0 ? void 0 : extensions.code) {
                    case 'INTERNAL_SERVER_ERROR':
                        messages.add('Looks like something went wrong, please try again later.');
                        break;
                    case 'UNAUTHENTICATED':
                        break;
                    default:
                        messages.add((_a = extensions === null || extensions === void 0 ? void 0 : extensions.message) !== null && _a !== void 0 ? _a : message);
                }
            });
        else if ((_a = error === null || error === void 0 ? void 0 : error.networkError) === null || _a === void 0 ? void 0 : _a.message)
            messages.add(error.networkError.message);
        else if (error === null || error === void 0 ? void 0 : error.message)
            messages.add(error.message);
        setShowError(messages.size > 0);
        setMessages([...messages.values()]);
    }, [error]);
    if (!showError)
        return React.createElement(React.Fragment, null, children);
    return (React.createElement(View, { style: style },
        React.createElement(View, { style: styles.title.container },
            React.createElement(Icon, { type: 'font', fontName: 'Ionicons', name: 'warning-outline', color: color.red500, size: 35 }),
            React.createElement(Txt, { style: [styles.title.text, textStyle] }, title)),
        React.createElement(View, { style: styles.messages.container }, messages.map((message) => (React.createElement(Txt, { key: message, style: [styles.messages.text, textStyle] }, message)))),
        React.createElement(OptionalWrapper, { data: onClose },
            React.createElement(RoundedButton, { onPress: onClose, style: [t.mT4] }, "Close"))));
};
export default ErrorWrapper;
//# sourceMappingURL=ErrorWrapper.js.map