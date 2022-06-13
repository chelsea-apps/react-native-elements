import React from 'react';
import { TouchableOpacity } from 'react-native';
import SwitchRowContent from './components/SwitchRowContent';
const SwitchRow = ({ 
// Functionality
active, setActive, label, 
// Styling
style, labelStyle, labelActiveColor, labelDefaultColor, trackActiveColor, trackDefaultColor, thumbColor, thumbActiveColor, toggleOnSwitchOnly = false, }) => {
    // Props for switchRow content
    const switchRowContentProps = {
        active,
        setActive,
        label,
        labelStyle,
        labelActiveColor,
        labelDefaultColor,
        trackActiveColor,
        trackDefaultColor,
        thumbColor,
        thumbActiveColor,
        toggleOnSwitchOnly,
        style,
    };
    return !toggleOnSwitchOnly ? (React.createElement(TouchableOpacity, { onPress: () => setActive(!active), activeOpacity: 1, disabled: toggleOnSwitchOnly },
        React.createElement(SwitchRowContent, { ...switchRowContentProps }))) : (React.createElement(SwitchRowContent, { ...switchRowContentProps }));
};
export default SwitchRow;
//# sourceMappingURL=index.js.map