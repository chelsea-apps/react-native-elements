import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
// Icons Fonts
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'

type IconsPackage =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialCommunityIcons'
  | 'MaterialIcons'
  | 'Octicons'

export type IconProps = {
  /** Determine weather the Icon will be from a Font or a custom SVG */
  type: 'font' | 'svg'
  /** Component to be passed if the type is SVG */
  svgComponent?: React.ReactNode
  /** Font name in case the type is font */
  fontName?: IconsPackage
  /** Style of the Font Icon component */
  style?: StyleProp<TextStyle>
  /** Name of the font icon (https://oblador.github.io/react-native-vector-icons/) */
  name?: string
  /** Size of the font icon */
  size?: number
  /** Color of the font icon */
  color?: string
}

const Icon = ({ type, fontName, name, svgComponent, ...props }: IconProps) => {
  const __renderFontIcon = (font: IconsPackage) => {
    switch (font) {
      case 'AntDesign':
        return <AntDesign name={name ?? ''} {...props} />
      case 'Entypo':
        return <Entypo name={name ?? ''} {...props} />
      case 'EvilIcons':
        return <EvilIcons name={name ?? ''} {...props} />
      case 'Feather':
        return <Feather name={name ?? ''} {...props} />
      case 'FontAwesome':
        return <FontAwesome name={name ?? ''} {...props} />
      case 'FontAwesome5':
        return <FontAwesome5 name={name ?? ''} {...props} />
      case 'Fontisto':
        return <Fontisto name={name ?? ''} {...props} />
      case 'Foundation':
        return <Foundation name={name ?? ''} {...props} />
      case 'Ionicons':
        return <Ionicons name={name ?? ''} {...props} />
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={name ?? ''} {...props} />
      case 'MaterialIcons':
        return <MaterialIcons name={name ?? ''} {...props} />
      case 'Octicons':
        return <Octicons name={name ?? ''} {...props} />
      default:
        return <Feather name={name ?? ''} {...props} />
    }
  }

  if (type === 'font') {
    if (!fontName || !name) {
      console.warn(
        "Icon with type of 'font' requires both 'name' and 'fontName' props!"
      )
    }
  }

  if (type === 'svg' && !svgComponent) {
    console.warn("Icon with type of 'svg' requires 'svgComponent' prop!")
  }

  return (
    <>
      {type === 'font' && fontName ? (
        __renderFontIcon(fontName)
      ) : type === 'svg' ? (
        svgComponent
      ) : (
        <></>
      )}
    </>
  )
}

export default Icon
