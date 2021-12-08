import React from 'react';
// Icons Fonts
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
const Icon = ({ type, fontName, name, svgComponent, ...props }) => {
    const __renderFontIcon = (font) => {
        switch (font) {
            case 'AntDesign':
                return React.createElement(AntDesign, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'Entypo':
                return React.createElement(Entypo, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'EvilIcons':
                return React.createElement(EvilIcons, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'Feather':
                return React.createElement(Feather, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'FontAwesome':
                return React.createElement(FontAwesome, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'FontAwesome5':
                return React.createElement(FontAwesome5, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'Fontisto':
                return React.createElement(Fontisto, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'Foundation':
                return React.createElement(Foundation, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'Ionicons':
                return React.createElement(Ionicons, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'MaterialCommunityIcons':
                return React.createElement(MaterialCommunityIcons, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'MaterialIcons':
                return React.createElement(MaterialIcons, { name: name !== null && name !== void 0 ? name : '', ...props });
            case 'Octicons':
                return React.createElement(Octicons, { name: name !== null && name !== void 0 ? name : '', ...props });
            default:
                return React.createElement(Feather, { name: name !== null && name !== void 0 ? name : '', ...props });
        }
    };
    if (type === 'font') {
        if (!fontName || !name) {
            console.warn("Icon with type of 'font' requires both 'name' and 'fontName' props!");
        }
    }
    if (type === 'svg' && !svgComponent) {
        console.warn("Icon with type of 'svg' requires 'svgComponent' prop!");
    }
    return (React.createElement(React.Fragment, null, type === 'font' && fontName ? (__renderFontIcon(fontName)) : type === 'svg' ? (svgComponent) : (React.createElement(React.Fragment, null))));
};
export default Icon;
//# sourceMappingURL=index.js.map