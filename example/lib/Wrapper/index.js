import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View, } from 'react-native';
import { t } from 'react-native-tailwindcss';
const Wrapper = ({ children, style, contentContainerStyle, type, fixed, keyboardVerticalOffset, ...props }) => {
    const styles = {
        defaultContainer: [fixed && t.flex1],
        defaultContent: [t.pX4, t.pT4, t.pB8],
        fullScreenView: [t.flex1],
    };
    return !type || type === 'scrollView' ? (React.createElement(ScrollView, { style: [styles.defaultContainer, style], contentContainerStyle: [styles.defaultContent, contentContainerStyle], showsVerticalScrollIndicator: false, ...props }, children)) : type === 'list' ? (React.createElement(View, { style: [styles.defaultContainer, t.flex1, style], ...props },
        React.createElement(View, { style: [t.pX4] }, children))) : type === 'fullScreenView' ? (React.createElement(KeyboardAvoidingView, { behavior: Platform.OS === 'ios' ? 'padding' : 'height', style: [styles.fullScreenView, style], keyboardVerticalOffset: keyboardVerticalOffset !== null && keyboardVerticalOffset !== void 0 ? keyboardVerticalOffset : 0, ...props }, children)) : (React.createElement(React.Fragment, null));
};
export default Wrapper;
//# sourceMappingURL=index.js.map