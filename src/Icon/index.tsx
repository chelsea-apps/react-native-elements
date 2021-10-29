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

type CommonIconProps = {
  type: 'font' | 'svg'
  style?: StyleProp<TextStyle>
}
type SvgIconProps =
  | {
      type: 'font'
      fontName: IconsPackage
      name: string
      size?: number
      color?: string
      svgComponent?: never
    }
  | {
      type: 'svg'
      svgComponent: React.ReactNode
      fontName?: never
      name?: never
      size?: never
      color?: never
    }
export type IconProps = CommonIconProps & SvgIconProps

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
