import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
declare type IconsPackage = 'AntDesign' | 'Entypo' | 'EvilIcons' | 'Feather' | 'FontAwesome' | 'FontAwesome5' | 'Fontisto' | 'Foundation' | 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons' | 'Octicons';
export declare type IconProps = {
    /** Determine weather the Icon will be from a Font or a custom SVG */
    type: 'font' | 'svg';
    /** Component to be passed if the type is SVG */
    svgComponent?: React.ReactNode;
    /** Font name in case the type is font */
    fontName?: IconsPackage;
    /** Style of the Font Icon component */
    style?: StyleProp<TextStyle>;
    /** Name of the font icon (https://oblador.github.io/react-native-vector-icons/) */
    name?: string;
    /** Size of the font icon */
    size?: number;
    /** Color of the font icon */
    color?: string;
};
declare const Icon: ({ type, fontName, name, svgComponent, ...props }: IconProps) => JSX.Element;
export default Icon;
