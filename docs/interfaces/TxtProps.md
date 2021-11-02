[@chelseaapps/react-native-elements](../README.md) / [Exports](../modules.md) / TxtProps

# Interface: TxtProps

## Hierarchy

- `TxtElementProps`

  ↳ **`TxtProps`**

## Table of contents

### Properties

- [accessibilityActions](TxtProps.md#accessibilityactions)
- [accessibilityElementsHidden](TxtProps.md#accessibilityelementshidden)
- [accessibilityHint](TxtProps.md#accessibilityhint)
- [accessibilityIgnoresInvertColors](TxtProps.md#accessibilityignoresinvertcolors)
- [accessibilityLabel](TxtProps.md#accessibilitylabel)
- [accessibilityLiveRegion](TxtProps.md#accessibilityliveregion)
- [accessibilityRole](TxtProps.md#accessibilityrole)
- [accessibilityState](TxtProps.md#accessibilitystate)
- [accessibilityValue](TxtProps.md#accessibilityvalue)
- [accessibilityViewIsModal](TxtProps.md#accessibilityviewismodal)
- [accessible](TxtProps.md#accessible)
- [adjustsFontSizeToFit](TxtProps.md#adjustsfontsizetofit)
- [allowFontScaling](TxtProps.md#allowfontscaling)
- [android\_hyphenationFrequency](TxtProps.md#android_hyphenationfrequency)
- [children](TxtProps.md#children)
- [dataDetectorType](TxtProps.md#datadetectortype)
- [ellipsizeMode](TxtProps.md#ellipsizemode)
- [importantForAccessibility](TxtProps.md#importantforaccessibility)
- [lineBreakMode](TxtProps.md#linebreakmode)
- [maxFontSizeMultiplier](TxtProps.md#maxfontsizemultiplier)
- [minimumFontScale](TxtProps.md#minimumfontscale)
- [nativeID](TxtProps.md#nativeid)
- [numberOfLines](TxtProps.md#numberoflines)
- [onAccessibilityAction](TxtProps.md#onaccessibilityaction)
- [onAccessibilityEscape](TxtProps.md#onaccessibilityescape)
- [onAccessibilityTap](TxtProps.md#onaccessibilitytap)
- [onLayout](TxtProps.md#onlayout)
- [onLongPress](TxtProps.md#onlongpress)
- [onMagicTap](TxtProps.md#onmagictap)
- [onPress](TxtProps.md#onpress)
- [onPressIn](TxtProps.md#onpressin)
- [onPressOut](TxtProps.md#onpressout)
- [onTextLayout](TxtProps.md#ontextlayout)
- [selectable](TxtProps.md#selectable)
- [selectionColor](TxtProps.md#selectioncolor)
- [style](TxtProps.md#style)
- [suppressHighlighting](TxtProps.md#suppresshighlighting)
- [testID](TxtProps.md#testid)
- [textBreakStrategy](TxtProps.md#textbreakstrategy)

## Properties

### accessibilityActions

• `Optional` **accessibilityActions**: readonly `Readonly`<`Object`\>[]

Provides an array of custom actions available for accessibility.

#### Inherited from

TxtElementProps.accessibilityActions

#### Defined in

node_modules/@types/react-native/index.d.ts:2265

___

### accessibilityElementsHidden

• `Optional` **accessibilityElementsHidden**: `boolean`

A Boolean value indicating whether the accessibility elements contained within this accessibility element
are hidden to the screen reader.

**`platform`** ios

#### Inherited from

TxtElementProps.accessibilityElementsHidden

#### Defined in

node_modules/@types/react-native/index.d.ts:2440

___

### accessibilityHint

• `Optional` **accessibilityHint**: `string`

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

#### Inherited from

TxtElementProps.accessibilityHint

#### Defined in

node_modules/@types/react-native/index.d.ts:2284

___

### accessibilityIgnoresInvertColors

• `Optional` **accessibilityIgnoresInvertColors**: `boolean`

https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolorsios

**`platform`** ios

#### Inherited from

TxtElementProps.accessibilityIgnoresInvertColors

#### Defined in

node_modules/@types/react-native/index.d.ts:2470

___

### accessibilityLabel

• `Optional` **accessibilityLabel**: `string`

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

#### Inherited from

TxtElementProps.accessibilityLabel

#### Defined in

node_modules/@types/react-native/index.d.ts:2271

___

### accessibilityLiveRegion

• `Optional` **accessibilityLiveRegion**: ``"none"`` \| ``"polite"`` \| ``"assertive"``

Indicates to accessibility services whether the user should be notified when this view changes.
Works for Android API >= 19 only.
See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.

**`platform`** android

#### Inherited from

TxtElementProps.accessibilityLiveRegion

#### Defined in

node_modules/@types/react-native/index.d.ts:2418

___

### accessibilityRole

• `Optional` **accessibilityRole**: `AccessibilityRole`

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

#### Inherited from

TxtElementProps.accessibilityRole

#### Defined in

node_modules/@types/react-native/index.d.ts:2276

___

### accessibilityState

• `Optional` **accessibilityState**: `AccessibilityState`

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

#### Inherited from

TxtElementProps.accessibilityState

#### Defined in

node_modules/@types/react-native/index.d.ts:2280

___

### accessibilityValue

• `Optional` **accessibilityValue**: `AccessibilityValue`

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
it contains range information (minimum, current, and maximum).

#### Inherited from

TxtElementProps.accessibilityValue

#### Defined in

node_modules/@types/react-native/index.d.ts:2289

___

### accessibilityViewIsModal

• `Optional` **accessibilityViewIsModal**: `boolean`

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

**`platform`** ios

#### Inherited from

TxtElementProps.accessibilityViewIsModal

#### Defined in

node_modules/@types/react-native/index.d.ts:2446

___

### accessible

• `Optional` **accessible**: `boolean`

When true, indicates that the view is an accessibility element.
By default, all the touchable elements are accessible.

#### Inherited from

TxtElementProps.accessible

#### Defined in

node_modules/@types/react-native/index.d.ts:2260

___

### adjustsFontSizeToFit

• `Optional` **adjustsFontSizeToFit**: `boolean`

Specifies whether font should be scaled down automatically to fit given style constraints.

#### Inherited from

TxtElementProps.adjustsFontSizeToFit

#### Defined in

node_modules/@types/react-native/index.d.ts:950

___

### allowFontScaling

• `Optional` **allowFontScaling**: `boolean`

Specifies whether fonts should scale to respect Text Size accessibility settings.
The default is `true`.

#### Inherited from

TxtElementProps.allowFontScaling

#### Defined in

node_modules/@types/react-native/index.d.ts:1004

___

### android\_hyphenationFrequency

• `Optional` **android\_hyphenationFrequency**: ``"none"`` \| ``"balanced"`` \| ``"normal"`` \| ``"full"`` \| ``"high"``

Hyphenation strategy

#### Inherited from

TxtElementProps.android\_hyphenationFrequency

#### Defined in

node_modules/@types/react-native/index.d.ts:990

___

### children

• **children**: `ReactNode`

Text | Component to be displayed

#### Inherited from

TxtElementProps.children

#### Defined in

[src/Txt/index.tsx:15](https://github.com/chelsea-apps/react-native-elements/blob/f1e51d9/src/Txt/index.tsx#L15)

___

### dataDetectorType

• `Optional` **dataDetectorType**: ``null`` \| ``"none"`` \| ``"link"`` \| ``"phoneNumber"`` \| ``"all"`` \| ``"email"``

Determines the types of data converted to clickable URLs in the text element.
By default no data types are detected.

#### Inherited from

TxtElementProps.dataDetectorType

#### Defined in

node_modules/@types/react-native/index.d.ts:985

___

### ellipsizeMode

• `Optional` **ellipsizeMode**: ``"head"`` \| ``"middle"`` \| ``"tail"`` \| ``"clip"``

This can be one of the following values:

- `head` - The line is displayed so that the end fits in the container and the missing text
at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
- `middle` - The line is displayed so that the beginning and end fit in the container and the
missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
- `tail` - The line is displayed so that the beginning fits in the container and the
missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
- `clip` - Lines are not drawn past the edge of the text container.

The default is `tail`.

`numberOfLines` must be set in conjunction with this prop.

> `clip` is working only for iOS

#### Inherited from

TxtElementProps.ellipsizeMode

#### Defined in

node_modules/@types/react-native/index.d.ts:1025

___

### importantForAccessibility

• `Optional` **importantForAccessibility**: ``"auto"`` \| ``"yes"`` \| ``"no"`` \| ``"no-hide-descendants"``

Controls how view is important for accessibility which is if it fires accessibility events
and if it is reported to accessibility services that query the screen.
Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.

Possible values:
     'auto' - The system determines whether the view is important for accessibility - default (recommended).
     'yes' - The view is important for accessibility.
     'no' - The view is not important for accessibility.
     'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.

#### Inherited from

TxtElementProps.importantForAccessibility

#### Defined in

node_modules/@types/react-native/index.d.ts:2431

___

### lineBreakMode

• `Optional` **lineBreakMode**: ``"head"`` \| ``"middle"`` \| ``"tail"`` \| ``"clip"``

Line Break mode. Works only with numberOfLines.
clip is working only for iOS

#### Inherited from

TxtElementProps.lineBreakMode

#### Defined in

node_modules/@types/react-native/index.d.ts:1031

___

### maxFontSizeMultiplier

• `Optional` **maxFontSizeMultiplier**: ``null`` \| `number`

Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
- null/undefined (default): inherit from the parent node or the global default (0)
- 0: no max, ignore parent/global default
- >= 1: sets the maxFontSizeMultiplier of this node to this value

#### Inherited from

TxtElementProps.maxFontSizeMultiplier

#### Defined in

node_modules/@types/react-native/index.d.ts:1090

___

### minimumFontScale

• `Optional` **minimumFontScale**: `number`

Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).

#### Inherited from

TxtElementProps.minimumFontScale

#### Defined in

node_modules/@types/react-native/index.d.ts:955

___

### nativeID

• `Optional` **nativeID**: `string`

Used to reference react managed views from native code.

#### Inherited from

TxtElementProps.nativeID

#### Defined in

node_modules/@types/react-native/index.d.ts:1082

___

### numberOfLines

• `Optional` **numberOfLines**: `number`

Used to truncate the text with an ellipsis after computing the text
layout, including line wrapping, such that the total number of lines
does not exceed this number.

This prop is commonly used with `ellipsizeMode`.

#### Inherited from

TxtElementProps.numberOfLines

#### Defined in

node_modules/@types/react-native/index.d.ts:1040

___

### onAccessibilityAction

• `Optional` **onAccessibilityAction**: (`event`: `AccessibilityActionEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

When `accessible` is true, the system will try to invoke this function when the user performs an accessibility custom action.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AccessibilityActionEvent` |

##### Returns

`void`

#### Inherited from

TxtElementProps.onAccessibilityAction

#### Defined in

node_modules/@types/react-native/index.d.ts:2294

___

### onAccessibilityEscape

• `Optional` **onAccessibilityEscape**: () => `void`

#### Type declaration

▸ (): `void`

When accessibile is true, the system will invoke this function when the user performs the escape gesture (scrub with two fingers).

**`platform`** ios

##### Returns

`void`

#### Inherited from

TxtElementProps.onAccessibilityEscape

#### Defined in

node_modules/@types/react-native/index.d.ts:2452

___

### onAccessibilityTap

• `Optional` **onAccessibilityTap**: () => `void`

#### Type declaration

▸ (): `void`

When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.

**`platform`** ios

##### Returns

`void`

#### Inherited from

TxtElementProps.onAccessibilityTap

#### Defined in

node_modules/@types/react-native/index.d.ts:2458

___

### onLayout

• `Optional` **onLayout**: (`event`: `LayoutChangeEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

Invoked on mount and layout changes with

{nativeEvent: { layout: {x, y, width, height}}}.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `LayoutChangeEvent` |

##### Returns

`void`

#### Inherited from

TxtElementProps.onLayout

#### Defined in

node_modules/@types/react-native/index.d.ts:1047

___

### onLongPress

• `Optional` **onLongPress**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

This function is called on long press.
e.g., `onLongPress={this.increaseSize}>``

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

TxtElementProps.onLongPress

#### Defined in

node_modules/@types/react-native/index.d.ts:1067

___

### onMagicTap

• `Optional` **onMagicTap**: () => `void`

#### Type declaration

▸ (): `void`

When accessible is true, the system will invoke this function when the user performs the magic tap gesture.

**`platform`** ios

##### Returns

`void`

#### Inherited from

TxtElementProps.onMagicTap

#### Defined in

node_modules/@types/react-native/index.d.ts:2464

___

### onPress

• `Optional` **onPress**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

This function is called on press.
Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

TxtElementProps.onPress

#### Defined in

node_modules/@types/react-native/index.d.ts:1058

___

### onPressIn

• `Optional` **onPressIn**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

TxtElementProps.onPressIn

#### Defined in

node_modules/@types/react-native/index.d.ts:1060

___

### onPressOut

• `Optional` **onPressOut**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

TxtElementProps.onPressOut

#### Defined in

node_modules/@types/react-native/index.d.ts:1061

___

### onTextLayout

• `Optional` **onTextLayout**: (`event`: `NativeSyntheticEvent`<`TextLayoutEventData`\>) => `void`

#### Type declaration

▸ (`event`): `void`

Invoked on Text layout

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `NativeSyntheticEvent`<`TextLayoutEventData`\> |

##### Returns

`void`

#### Inherited from

TxtElementProps.onTextLayout

#### Defined in

node_modules/@types/react-native/index.d.ts:1052

___

### selectable

• `Optional` **selectable**: `boolean`

Lets the user select text, to use the native copy and paste functionality.

#### Inherited from

TxtElementProps.selectable

#### Defined in

node_modules/@types/react-native/index.d.ts:968

___

### selectionColor

• `Optional` **selectionColor**: `ColorValue`

The highlight color of the text.

#### Inherited from

TxtElementProps.selectionColor

#### Defined in

node_modules/@types/react-native/index.d.ts:973

___

### style

• `Optional` **style**: `StyleProp`<`TextStyle`\>

**`see`** https://reactnative.dev/docs/text#style

#### Inherited from

TxtElementProps.style

#### Defined in

node_modules/@types/react-native/index.d.ts:1072

___

### suppressHighlighting

• `Optional` **suppressHighlighting**: `boolean`

When `true`, no visual change is made when text is pressed down. By
default, a gray oval highlights the text on press down.

#### Inherited from

TxtElementProps.suppressHighlighting

#### Defined in

node_modules/@types/react-native/index.d.ts:961

___

### testID

• `Optional` **testID**: `string`

Used to locate this view in end-to-end tests.

#### Inherited from

TxtElementProps.testID

#### Defined in

node_modules/@types/react-native/index.d.ts:1077

___

### textBreakStrategy

• `Optional` **textBreakStrategy**: ``"simple"`` \| ``"highQuality"`` \| ``"balanced"``

Set text break strategy on Android API Level 23+
default is `highQuality`.

#### Inherited from

TxtElementProps.textBreakStrategy

#### Defined in

node_modules/@types/react-native/index.d.ts:979
