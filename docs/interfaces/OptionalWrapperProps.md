[@chelseaapps/react-native-elements](../README.md) / [Exports](../modules.md) / OptionalWrapperProps

# Interface: OptionalWrapperProps<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

## Hierarchy

- `OptionalWrapperElementProps`<`T`\>

  ↳ **`OptionalWrapperProps`**

## Table of contents

### Properties

- [children](OptionalWrapperProps.md#children)
- [data](OptionalWrapperProps.md#data)
- [elseComponent](OptionalWrapperProps.md#elsecomponent)

## Properties

### children

• **children**: `ReactNode`

Elements that sit inside this wrapper

#### Inherited from

OptionalWrapperElementProps.children

#### Defined in

[src/Wrapper/OptionalWrapper.tsx:7](https://github.com/chelsea-apps/react-native-elements/blob/8e6d1b8/src/Wrapper/OptionalWrapper.tsx#L7)

___

### data

• **data**: ``null`` \| `T`

Data to check against

#### Inherited from

OptionalWrapperElementProps.data

#### Defined in

[src/Wrapper/OptionalWrapper.tsx:5](https://github.com/chelsea-apps/react-native-elements/blob/8e6d1b8/src/Wrapper/OptionalWrapper.tsx#L5)

___

### elseComponent

• `Optional` **elseComponent**: `ReactNode`

Component to show if data is null | undefined

#### Inherited from

OptionalWrapperElementProps.elseComponent

#### Defined in

[src/Wrapper/OptionalWrapper.tsx:9](https://github.com/chelsea-apps/react-native-elements/blob/8e6d1b8/src/Wrapper/OptionalWrapper.tsx#L9)
