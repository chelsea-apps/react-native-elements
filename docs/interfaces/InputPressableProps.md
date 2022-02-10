[@chelseaapps/react-native-elements](../README.md) / [Exports](../modules.md) / InputPressableProps

# Interface: InputPressableProps

## Hierarchy

- `InputPressableElementProps`

  ↳ **`InputPressableProps`**

## Table of contents

### Properties

- [bgColor](InputPressableProps.md#bgcolor)
- [borderColor](InputPressableProps.md#bordercolor)
- [icon](InputPressableProps.md#icon)
- [iconColor](InputPressableProps.md#iconcolor)
- [iconName](InputPressableProps.md#iconname)
- [iconSize](InputPressableProps.md#iconsize)
- [iconStyle](InputPressableProps.md#iconstyle)
- [label](InputPressableProps.md#label)
- [labelColor](InputPressableProps.md#labelcolor)
- [labelStyle](InputPressableProps.md#labelstyle)
- [noIcon](InputPressableProps.md#noicon)
- [placeholderStyle](InputPressableProps.md#placeholderstyle)
- [style](InputPressableProps.md#style)
- [textColor](InputPressableProps.md#textcolor)
- [textStyle](InputPressableProps.md#textstyle)
- [value](InputPressableProps.md#value)

### Methods

- [onPress](InputPressableProps.md#onpress)

## Properties

### bgColor

• `Optional` **bgColor**: `string`

Container background color

#### Inherited from

InputPressableElementProps.bgColor

#### Defined in

[src/InputPressable/index.tsx:46](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L46)

___

### borderColor

• `Optional` **borderColor**: `string`

Container border color

#### Inherited from

InputPressableElementProps.borderColor

#### Defined in

[src/InputPressable/index.tsx:50](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L50)

___

### icon

• `Optional` **icon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon component that should replace the default Font icon

#### Inherited from

InputPressableElementProps.icon

#### Defined in

[src/InputPressable/index.tsx:17](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L17)

___

### iconColor

• `Optional` **iconColor**: `string`

Color of the current Font Icon color

#### Inherited from

InputPressableElementProps.iconColor

#### Defined in

[src/InputPressable/index.tsx:19](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L19)

___

### iconName

• `Optional` **iconName**: `string`

Feather Icons icon name

#### Inherited from

InputPressableElementProps.iconName

#### Defined in

[src/InputPressable/index.tsx:25](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L25)

___

### iconSize

• `Optional` **iconSize**: `number`

Size of the current Font Icon color - default 24

#### Inherited from

InputPressableElementProps.iconSize

#### Defined in

[src/InputPressable/index.tsx:21](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L21)

___

### iconStyle

• `Optional` **iconStyle**: `StyleProp`<`ViewStyle`\>

Styles of the Icon component

#### Inherited from

InputPressableElementProps.iconStyle

#### Defined in

[src/InputPressable/index.tsx:23](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L23)

___

### label

• **label**: `string`

Small text above the value

#### Inherited from

InputPressableElementProps.label

#### Defined in

[src/InputPressable/index.tsx:30](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L30)

___

### labelColor

• `Optional` **labelColor**: `string`

Small Txt above value color

#### Inherited from

InputPressableElementProps.labelColor

#### Defined in

[src/InputPressable/index.tsx:52](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L52)

___

### labelStyle

• `Optional` **labelStyle**: `StyleProp`<`TextStyle`\>

Small Txt above value styles

#### Inherited from

InputPressableElementProps.labelStyle

#### Defined in

[src/InputPressable/index.tsx:42](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L42)

___

### noIcon

• `Optional` **noIcon**: `boolean`

If true, there will be no icon on the right side of the container

#### Inherited from

InputPressableElementProps.noIcon

#### Defined in

[src/InputPressable/index.tsx:36](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L36)

___

### placeholderStyle

• `Optional` **placeholderStyle**: `StyleProp`<`TextStyle`\>

Text in the middle styles - shows if no value is present

#### Inherited from

InputPressableElementProps.placeholderStyle

#### Defined in

[src/InputPressable/index.tsx:44](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L44)

___

### style

• `Optional` **style**: `StyleProp`<`ViewStyle`\>

View Container styles - including errors and info text

#### Inherited from

InputPressableElementProps.style

#### Defined in

[src/InputPressable/index.tsx:38](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L38)

___

### textColor

• `Optional` **textColor**: `string`

Value text color

#### Inherited from

InputPressableElementProps.textColor

#### Defined in

[src/InputPressable/index.tsx:48](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L48)

___

### textStyle

• `Optional` **textStyle**: `StyleProp`<`TextStyle`\>

Value Txt styles

#### Inherited from

InputPressableElementProps.textStyle

#### Defined in

[src/InputPressable/index.tsx:40](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L40)

___

### value

• `Optional` **value**: `string`

Value text

#### Inherited from

InputPressableElementProps.value

#### Defined in

[src/InputPressable/index.tsx:32](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L32)

## Methods

### onPress

▸ `Optional` **onPress**(): `void`

Action to be taken onPress

#### Returns

`void`

#### Inherited from

InputPressableElementProps.onPress

#### Defined in

[src/InputPressable/index.tsx:34](https://github.com/chelsea-apps/react-native-elements/blob/dad3daa/src/InputPressable/index.tsx#L34)
