[@chelseaapps/react-native-elements](../README.md) / [Exports](../modules.md) / RoundedButtonProps

# Interface: RoundedButtonProps

## Hierarchy

- `RoundedButtonElementProps`

  ↳ **`RoundedButtonProps`**

## Table of contents

### Properties

- [accessibilityActions](RoundedButtonProps.md#accessibilityactions)
- [accessibilityElementsHidden](RoundedButtonProps.md#accessibilityelementshidden)
- [accessibilityHint](RoundedButtonProps.md#accessibilityhint)
- [accessibilityIgnoresInvertColors](RoundedButtonProps.md#accessibilityignoresinvertcolors)
- [accessibilityLabel](RoundedButtonProps.md#accessibilitylabel)
- [accessibilityLiveRegion](RoundedButtonProps.md#accessibilityliveregion)
- [accessibilityRole](RoundedButtonProps.md#accessibilityrole)
- [accessibilityState](RoundedButtonProps.md#accessibilitystate)
- [accessibilityValue](RoundedButtonProps.md#accessibilityvalue)
- [accessibilityViewIsModal](RoundedButtonProps.md#accessibilityviewismodal)
- [accessible](RoundedButtonProps.md#accessible)
- [activeOpacity](RoundedButtonProps.md#activeopacity)
- [children](RoundedButtonProps.md#children)
- [delayLongPress](RoundedButtonProps.md#delaylongpress)
- [delayPressIn](RoundedButtonProps.md#delaypressin)
- [delayPressOut](RoundedButtonProps.md#delaypressout)
- [disabled](RoundedButtonProps.md#disabled)
- [hasTVPreferredFocus](RoundedButtonProps.md#hastvpreferredfocus)
- [hitSlop](RoundedButtonProps.md#hitslop)
- [icon](RoundedButtonProps.md#icon)
- [iconTextID](RoundedButtonProps.md#icontextid)
- [importantForAccessibility](RoundedButtonProps.md#importantforaccessibility)
- [nextFocusDown](RoundedButtonProps.md#nextfocusdown)
- [nextFocusForward](RoundedButtonProps.md#nextfocusforward)
- [nextFocusLeft](RoundedButtonProps.md#nextfocusleft)
- [nextFocusRight](RoundedButtonProps.md#nextfocusright)
- [nextFocusUp](RoundedButtonProps.md#nextfocusup)
- [onAccessibilityAction](RoundedButtonProps.md#onaccessibilityaction)
- [onAccessibilityEscape](RoundedButtonProps.md#onaccessibilityescape)
- [onAccessibilityTap](RoundedButtonProps.md#onaccessibilitytap)
- [onBlur](RoundedButtonProps.md#onblur)
- [onFocus](RoundedButtonProps.md#onfocus)
- [onLayout](RoundedButtonProps.md#onlayout)
- [onLongPress](RoundedButtonProps.md#onlongpress)
- [onMagicTap](RoundedButtonProps.md#onmagictap)
- [onPress](RoundedButtonProps.md#onpress)
- [onPressIn](RoundedButtonProps.md#onpressin)
- [onPressOut](RoundedButtonProps.md#onpressout)
- [pressRetentionOffset](RoundedButtonProps.md#pressretentionoffset)
- [style](RoundedButtonProps.md#style)
- [testID](RoundedButtonProps.md#testid)
- [textStyle](RoundedButtonProps.md#textstyle)
- [textTestID](RoundedButtonProps.md#texttestid)
- [touchSoundDisabled](RoundedButtonProps.md#touchsounddisabled)
- [tvParallaxProperties](RoundedButtonProps.md#tvparallaxproperties)

## Properties

### accessibilityActions

• `Optional` **accessibilityActions**: readonly `Readonly`<`Object`\>[]

Provides an array of custom actions available for accessibility.

#### Inherited from

RoundedButtonElementProps.accessibilityActions

#### Defined in

node_modules/@types/react-native/index.d.ts:2265

___

### accessibilityElementsHidden

• `Optional` **accessibilityElementsHidden**: `boolean`

A Boolean value indicating whether the accessibility elements contained within this accessibility element
are hidden to the screen reader.

**`platform`** ios

#### Inherited from

RoundedButtonElementProps.accessibilityElementsHidden

#### Defined in

node_modules/@types/react-native/index.d.ts:2440

___

### accessibilityHint

• `Optional` **accessibilityHint**: `string`

An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.

#### Inherited from

RoundedButtonElementProps.accessibilityHint

#### Defined in

node_modules/@types/react-native/index.d.ts:2284

___

### accessibilityIgnoresInvertColors

• `Optional` **accessibilityIgnoresInvertColors**: `boolean`

https://reactnative.dev/docs/accessibility#accessibilityignoresinvertcolorsios

**`platform`** ios

#### Inherited from

RoundedButtonElementProps.accessibilityIgnoresInvertColors

#### Defined in

node_modules/@types/react-native/index.d.ts:2470

___

### accessibilityLabel

• `Optional` **accessibilityLabel**: `string`

Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
label is constructed by traversing all the children and accumulating all the Text nodes separated by space.

#### Inherited from

RoundedButtonElementProps.accessibilityLabel

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

RoundedButtonElementProps.accessibilityLiveRegion

#### Defined in

node_modules/@types/react-native/index.d.ts:2418

___

### accessibilityRole

• `Optional` **accessibilityRole**: `AccessibilityRole`

Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.

#### Inherited from

RoundedButtonElementProps.accessibilityRole

#### Defined in

node_modules/@types/react-native/index.d.ts:2276

___

### accessibilityState

• `Optional` **accessibilityState**: `AccessibilityState`

Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.

#### Inherited from

RoundedButtonElementProps.accessibilityState

#### Defined in

node_modules/@types/react-native/index.d.ts:2280

___

### accessibilityValue

• `Optional` **accessibilityValue**: `AccessibilityValue`

Represents the current value of a component. It can be a textual description of a component's value, or for range-based components, such as sliders and progress bars,
it contains range information (minimum, current, and maximum).

#### Inherited from

RoundedButtonElementProps.accessibilityValue

#### Defined in

node_modules/@types/react-native/index.d.ts:2289

___

### accessibilityViewIsModal

• `Optional` **accessibilityViewIsModal**: `boolean`

A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.

**`platform`** ios

#### Inherited from

RoundedButtonElementProps.accessibilityViewIsModal

#### Defined in

node_modules/@types/react-native/index.d.ts:2446

___

### accessible

• `Optional` **accessible**: `boolean`

When true, indicates that the view is an accessibility element.
By default, all the touchable elements are accessible.

#### Inherited from

RoundedButtonElementProps.accessible

#### Defined in

node_modules/@types/react-native/index.d.ts:2260

___

### activeOpacity

• `Optional` **activeOpacity**: `number`

Determines what the opacity of the wrapped view should be when touch is active.
Defaults to 0.2

#### Inherited from

RoundedButtonElementProps.activeOpacity

#### Defined in

node_modules/@types/react-native/index.d.ts:5209

___

### children

• **children**: `ReactNode`

Text to show inside the button

#### Inherited from

RoundedButtonElementProps.children

#### Defined in

[src/Button/Rounded.tsx:10](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/Rounded.tsx#L10)

___

### delayLongPress

• `Optional` **delayLongPress**: `number`

Delay in ms, from onPressIn, before onLongPress is called.

#### Inherited from

RoundedButtonElementProps.delayLongPress

#### Defined in

node_modules/@types/react-native/index.d.ts:5058

___

### delayPressIn

• `Optional` **delayPressIn**: `number`

Delay in ms, from the start of the touch, before onPressIn is called.

#### Inherited from

RoundedButtonElementProps.delayPressIn

#### Defined in

node_modules/@types/react-native/index.d.ts:5063

___

### delayPressOut

• `Optional` **delayPressOut**: `number`

Delay in ms, from the release of the touch, before onPressOut is called.

#### Inherited from

RoundedButtonElementProps.delayPressOut

#### Defined in

node_modules/@types/react-native/index.d.ts:5068

___

### disabled

• `Optional` **disabled**: `boolean`

Clickable / Non Clickable button

#### Inherited from

RoundedButtonElementProps.disabled

#### Defined in

[src/Button/Rounded.tsx:16](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/Rounded.tsx#L16)

___

### hasTVPreferredFocus

• `Optional` **hasTVPreferredFocus**: `boolean`

*(Apple TV only)* TV preferred focus (see documentation for the View component).

**`platform`** ios

#### Inherited from

RoundedButtonElementProps.hasTVPreferredFocus

#### Defined in

node_modules/@types/react-native/index.d.ts:5272

___

### hitSlop

• `Optional` **hitSlop**: `Insets`

This defines how far your touch can start away from the button.
This is added to pressRetentionOffset when moving off of the button.
NOTE The touch area never extends past the parent view bounds and
the Z-index of sibling views always takes precedence if a touch hits
two overlapping views.

#### Inherited from

RoundedButtonElementProps.hitSlop

#### Defined in

node_modules/@types/react-native/index.d.ts:5082

___

### icon

• `Optional` **icon**: `ReactNode`

Icon component, sits left to the text

#### Inherited from

RoundedButtonElementProps.icon

#### Defined in

[src/Button/index.tsx:23](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/index.tsx#L23)

___

### iconTextID

• `Optional` **iconTextID**: `string`

Icon container (Txt) Test ID

#### Inherited from

RoundedButtonElementProps.iconTextID

#### Defined in

[src/Button/index.tsx:29](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/index.tsx#L29)

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

RoundedButtonElementProps.importantForAccessibility

#### Defined in

node_modules/@types/react-native/index.d.ts:2431

___

### nextFocusDown

• `Optional` **nextFocusDown**: `number`

Designates the next view to receive focus when the user navigates down. See the Android documentation.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.nextFocusDown

#### Defined in

node_modules/@types/react-native/index.d.ts:5279

___

### nextFocusForward

• `Optional` **nextFocusForward**: `number`

Designates the next view to receive focus when the user navigates forward. See the Android documentation.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.nextFocusForward

#### Defined in

node_modules/@types/react-native/index.d.ts:5286

___

### nextFocusLeft

• `Optional` **nextFocusLeft**: `number`

Designates the next view to receive focus when the user navigates left. See the Android documentation.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.nextFocusLeft

#### Defined in

node_modules/@types/react-native/index.d.ts:5293

___

### nextFocusRight

• `Optional` **nextFocusRight**: `number`

Designates the next view to receive focus when the user navigates right. See the Android documentation.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.nextFocusRight

#### Defined in

node_modules/@types/react-native/index.d.ts:5300

___

### nextFocusUp

• `Optional` **nextFocusUp**: `number`

Designates the next view to receive focus when the user navigates up. See the Android documentation.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.nextFocusUp

#### Defined in

node_modules/@types/react-native/index.d.ts:5307

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

RoundedButtonElementProps.onAccessibilityAction

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

RoundedButtonElementProps.onAccessibilityEscape

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

RoundedButtonElementProps.onAccessibilityTap

#### Defined in

node_modules/@types/react-native/index.d.ts:2458

___

### onBlur

• `Optional` **onBlur**: (`e`: `NativeSyntheticEvent`<`TargetedEvent`\>) => `void`

#### Type declaration

▸ (`e`): `void`

When `accessible` is true (which is the default) this may be called when
the OS-specific concept of "blur" occurs, meaning the element lost focus.
Some platforms may not have the concept of blur.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `NativeSyntheticEvent`<`TargetedEvent`\> |

##### Returns

`void`

#### Inherited from

RoundedButtonElementProps.onBlur

#### Defined in

node_modules/@types/react-native/index.d.ts:5089

___

### onFocus

• `Optional` **onFocus**: (`e`: `NativeSyntheticEvent`<`TargetedEvent`\>) => `void`

#### Type declaration

▸ (`e`): `void`

When `accessible` is true (which is the default) this may be called when
the OS-specific concept of "focus" occurs. Some platforms may not have
the concept of focus.

##### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `NativeSyntheticEvent`<`TargetedEvent`\> |

##### Returns

`void`

#### Inherited from

RoundedButtonElementProps.onFocus

#### Defined in

node_modules/@types/react-native/index.d.ts:5096

___

### onLayout

• `Optional` **onLayout**: (`event`: `LayoutChangeEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

Invoked on mount and layout changes with
{nativeEvent: {layout: {x, y, width, height}}}

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `LayoutChangeEvent` |

##### Returns

`void`

#### Inherited from

RoundedButtonElementProps.onLayout

#### Defined in

node_modules/@types/react-native/index.d.ts:5102

___

### onLongPress

• `Optional` **onLongPress**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

RoundedButtonElementProps.onLongPress

#### Defined in

node_modules/@types/react-native/index.d.ts:5104

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

RoundedButtonElementProps.onMagicTap

#### Defined in

node_modules/@types/react-native/index.d.ts:2464

___

### onPress

• `Optional` **onPress**: (`event`: `GestureResponderEvent`) => `void`

#### Type declaration

▸ (`event`): `void`

Called when the touch is released,
but not if cancelled (e.g. by a scroll that steals the responder lock).

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `GestureResponderEvent` |

##### Returns

`void`

#### Inherited from

RoundedButtonElementProps.onPress

#### Defined in

node_modules/@types/react-native/index.d.ts:5110

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

RoundedButtonElementProps.onPressIn

#### Defined in

node_modules/@types/react-native/index.d.ts:5112

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

RoundedButtonElementProps.onPressOut

#### Defined in

node_modules/@types/react-native/index.d.ts:5114

___

### pressRetentionOffset

• `Optional` **pressRetentionOffset**: `Insets`

When the scroll view is disabled, this defines how far your
touch may move off of the button, before deactivating the button.
Once deactivated, try moving it back and you'll see that the button
is once again reactivated! Move it back and forth several times
while the scroll view is disabled. Ensure you pass in a constant
to reduce memory allocations.

#### Inherited from

RoundedButtonElementProps.pressRetentionOffset

#### Defined in

node_modules/@types/react-native/index.d.ts:5129

___

### style

• `Optional` **style**: `StyleProp`<`ViewStyle`\>

Tailwind styling -> TouchableOpacity Container

#### Inherited from

RoundedButtonElementProps.style

#### Defined in

[src/Button/Rounded.tsx:14](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/Rounded.tsx#L14)

___

### testID

• `Optional` **testID**: `string`

Container Test ID

#### Inherited from

RoundedButtonElementProps.testID

#### Defined in

[src/Button/index.tsx:25](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/index.tsx#L25)

___

### textStyle

• `Optional` **textStyle**: `StyleProp`<`TextStyle`\>

Tailwind Styling -> Txt Component

#### Inherited from

RoundedButtonElementProps.textStyle

#### Defined in

[src/Button/Rounded.tsx:12](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/Rounded.tsx#L12)

___

### textTestID

• `Optional` **textTestID**: `string`

Inside Txt Test ID

#### Inherited from

RoundedButtonElementProps.textTestID

#### Defined in

[src/Button/index.tsx:27](https://github.com/chelsea-apps/react-native-elements/blob/02a576e/src/Button/index.tsx#L27)

___

### touchSoundDisabled

• `Optional` **touchSoundDisabled**: ``null`` \| `boolean`

If true, doesn't play a system sound on touch.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.touchSoundDisabled

#### Defined in

node_modules/@types/react-native/index.d.ts:5043

___

### tvParallaxProperties

• `Optional` **tvParallaxProperties**: `TVParallaxProperties`

*(Apple TV only)* Object with properties to control Apple TV parallax effects.

enabled: If true, parallax effects are enabled.  Defaults to true.
shiftDistanceX: Defaults to 2.0.
shiftDistanceY: Defaults to 2.0.
tiltAngle: Defaults to 0.05.
magnification: Defaults to 1.0.
pressMagnification: Defaults to 1.0.
pressDuration: Defaults to 0.3.
pressDelay: Defaults to 0.0.

**`platform`** android

#### Inherited from

RoundedButtonElementProps.tvParallaxProperties

#### Defined in

node_modules/@types/react-native/index.d.ts:5225
