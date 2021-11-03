[@chelseaapps/react-native-elements](README.md) / Exports

# @chelseaapps/react-native-elements

## Table of contents

### Interfaces

- [ButtonProps](interfaces/ButtonProps.md)
- [CheckboxSelectRowProps](interfaces/CheckboxSelectRowProps.md)
- [DefaultButtonProps](interfaces/DefaultButtonProps.md)
- [DropdownItem](interfaces/DropdownItem.md)
- [DropdownLinkProps](interfaces/DropdownLinkProps.md)
- [DropdownState](interfaces/DropdownState.md)
- [ErrorWrapperProps](interfaces/ErrorWrapperProps.md)
- [FieldsErrors](interfaces/FieldsErrors.md)
- [FieldsType](interfaces/FieldsType.md)
- [IconProps](interfaces/IconProps.md)
- [InputPressableProps](interfaces/InputPressableProps.md)
- [InputProps](interfaces/InputProps.md)
- [LoadingWrapperProps](interfaces/LoadingWrapperProps.md)
- [OptionalWrapperProps](interfaces/OptionalWrapperProps.md)
- [OutlineButtonProps](interfaces/OutlineButtonProps.md)
- [RadioSelectRowProps](interfaces/RadioSelectRowProps.md)
- [RoundedButtonProps](interfaces/RoundedButtonProps.md)
- [SwitchRowProps](interfaces/SwitchRowProps.md)
- [TextareaLinkProps](interfaces/TextareaLinkProps.md)
- [TextareaProps](interfaces/TextareaProps.md)
- [TxtProps](interfaces/TxtProps.md)
- [WrapperProps](interfaces/WrapperProps.md)

### Type aliases

- [InputValidations](modules.md#inputvalidations)

### Functions

- [Button](modules.md#button)
- [CheckboxSelectRow](modules.md#checkboxselectrow)
- [DefaultButton](modules.md#defaultbutton)
- [DropdownLink](modules.md#dropdownlink)
- [ErrorWrapper](modules.md#errorwrapper)
- [Icon](modules.md#icon)
- [Input](modules.md#input)
- [InputPressable](modules.md#inputpressable)
- [LoadingWrapper](modules.md#loadingwrapper)
- [OptionalWrapper](modules.md#optionalwrapper)
- [OutlineButton](modules.md#outlinebutton)
- [RadioSelectRow](modules.md#radioselectrow)
- [RoundedButton](modules.md#roundedbutton)
- [SwitchRow](modules.md#switchrow)
- [Textarea](modules.md#textarea)
- [TextareaLink](modules.md#textarealink)
- [Txt](modules.md#txt)
- [Wrapper](modules.md#wrapper)

## Type aliases

### InputValidations

Ƭ **InputValidations**<`T`\>: { [K in keyof T]: RegisterOptions }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/index.tsx:148](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L148)

## Functions

### Button

▸ `Const` **Button**(`props`): `Element`

Initial button component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ButtonProps`](interfaces/ButtonProps.md) |

#### Returns

`Element`

A pressable text.

#### Defined in

[src/index.tsx:81](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L81)

___

### CheckboxSelectRow

▸ `Const` **CheckboxSelectRow**(`props`): `Element`

Checkbox Row Component to be used as part of selectDropdown page

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CheckboxSelectRowProps`](interfaces/CheckboxSelectRowProps.md) |

#### Returns

`Element`

A pressable row that changes dropdown state.

#### Defined in

[src/index.tsx:119](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L119)

___

### DefaultButton

▸ `Const` **DefaultButton**(`props`): `Element`

Button with a full background colors and rounded corners

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DefaultButtonProps`](interfaces/DefaultButtonProps.md) |

#### Returns

`Element`

A pressable button.

#### Defined in

[src/index.tsx:90](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L90)

___

### DropdownLink

▸ `Const` **DropdownLink**(`props`): `Element`

Dropdown Select Component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`DropdownLinkProps`](interfaces/DropdownLinkProps.md) |

#### Returns

`Element`

A pressable container that links to the selection page.

#### Defined in

[src/index.tsx:132](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L132)

___

### ErrorWrapper

▸ `Const` **ErrorWrapper**(`props`): `Element`

A variation of the wrapper component.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`ErrorWrapperProps`](interfaces/ErrorWrapperProps.md) |

#### Returns

`Element`

A Wrapper component that will check if there were any issues with the API Queries. Can be used only with CA GraphQL APIs.

#### Defined in

[src/index.tsx:256](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L256)

___

### Icon

▸ `Const` **Icon**(`props`): `Element`

Global Icon component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`IconProps`](interfaces/IconProps.md) |

#### Returns

`Element`

Highly customizable Icon component that can output a Font icon (https://oblador.github.io/react-native-vector-icons/) or a custom SVG icon.

#### Defined in

[src/index.tsx:143](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L143)

___

### Input

▸ `Const` **Input**(`props`): `Element`

Animated Input Component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`InputProps`](interfaces/InputProps.md) |

#### Returns

`Element`

Ready to use Input with validation from react hook form

#### Defined in

[src/index.tsx:155](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L155)

___

### InputPressable

▸ `Const` **InputPressable**(`props`): `Element`

Static "fake" Input

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`InputPressableProps`](interfaces/InputPressableProps.md) |

#### Returns

`Element`

Input component that can be pressed

#### Defined in

[src/index.tsx:164](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L164)

___

### LoadingWrapper

▸ `Const` **LoadingWrapper**(`props`): `Element`

Loading Wrapper component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`LoadingWrapperProps`](interfaces/LoadingWrapperProps.md) |

#### Returns

`Element`

Container to be used as the loading indicator on all pages.

#### Defined in

[src/index.tsx:237](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L237)

___

### OptionalWrapper

▸ `Const` **OptionalWrapper**<`T`\>(`props`): `Element`

A component that replaces the need to check for data in JSX (data ? <Component /> : <></>)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`OptionalWrapperProps`](interfaces/OptionalWrapperProps.md)<`T`\> |

#### Returns

`Element`

A container view.

#### Defined in

[src/index.tsx:247](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L247)

___

### OutlineButton

▸ `Const` **OutlineButton**(`props`): `Element`

Button with a transparent background color and rounded border

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`OutlineButtonProps`](interfaces/OutlineButtonProps.md) |

#### Returns

`Element`

A pressable button.

#### Defined in

[src/index.tsx:99](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L99)

___

### RadioSelectRow

▸ `Const` **RadioSelectRow**(`props`): `Element`

Radio Row Component to be used as part of selectDropdown page

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RadioSelectRowProps`](interfaces/RadioSelectRowProps.md) |

#### Returns

`Element`

A pressable row that changes dropdown state.

#### Defined in

[src/index.tsx:175](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L175)

___

### RoundedButton

▸ `Const` **RoundedButton**(`props`): `Element`

Button with a full background and full rounded corners

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`RoundedButtonProps`](interfaces/RoundedButtonProps.md) |

#### Returns

`Element`

A pressable button.

#### Defined in

[src/index.tsx:108](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L108)

___

### SwitchRow

▸ `Const` **SwitchRow**(`props`): `Element`

Switch component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SwitchRowProps`](interfaces/SwitchRowProps.md) |

#### Returns

`Element`

A component that can change a boolean state with a switch. It's not part of the react hook form.

#### Defined in

[src/index.tsx:186](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L186)

___

### Textarea

▸ `Const` **Textarea**(`props`): `Element`

Expandable Textarea component

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | [`TextareaProps`](interfaces/TextareaProps.md) | Inherited from the InputProps |

#### Returns

`Element`

A textarea that can change its height based on the value inside. Validation based on react-hook-form.

#### Defined in

[src/index.tsx:197](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L197)

___

### TextareaLink

▸ `Const` **TextareaLink**(`props`): `Element`

Textarea component that links to a different page

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TextareaLinkProps`](interfaces/TextareaLinkProps.md) |

#### Returns

`Element`

A textarea that changes the current page to enter the value. Dependent on textareaEdit page. Validation based on react-hook-form.

#### Defined in

[src/index.tsx:208](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L208)

___

### Txt

▸ `Const` **Txt**(`props`): `Element`

Global Text Component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TxtProps`](interfaces/TxtProps.md) |

#### Returns

`Element`

A text component that has the specific project fonts and sizing. To be used everywhere within the app.

#### Defined in

[src/index.tsx:219](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L219)

___

### Wrapper

▸ `Const` **Wrapper**(`props`): `Element`

Wrapper component

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`WrapperProps`](interfaces/WrapperProps.md) |

#### Returns

`Element`

Component to be used as the main container on all pages.

#### Defined in

[src/index.tsx:228](https://github.com/chelsea-apps/react-native-elements/blob/a2b68af/src/index.tsx#L228)
