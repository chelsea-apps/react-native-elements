import React, { SetStateAction } from 'react';
import { Control, FieldError, RegisterOptions, UseFormSetValue } from 'react-hook-form';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FieldType } from '../Input';
import { IconStylingProps } from '../InputPressable';
export interface DropdownLinkProps extends IconStylingProps {
    /** Current dropdown state */
    dropdown?: DropdownState;
    /** Change dropdown state */
    setDropdown?: React.Dispatch<SetStateAction<DropdownState>>;
    /** React hook form control */
    control?: Control<FieldType | any>;
    /** React hook form validation */
    validation?: RegisterOptions;
    /** React hook form setValue */
    setValue?: UseFormSetValue<FieldType | any>;
    /** React hook form error */
    error?: FieldError;
    /** Optional prop to navigate to a different page than selectDropdown */
    navigateTo?: any;
    /** If true, the dropdown is untappable */
    disabled?: boolean;
    /** Additional action that should happen on press if needed */
    onPress?: () => void;
    /** View container style */
    style?: StyleProp<ViewStyle>;
    /** Empty selection placeholder Txt styles */
    placeholderStyle?: StyleProp<TextStyle>;
    /** Small top label Txt styles */
    labelStyle?: StyleProp<TextStyle>;
    /** Value Txt styles */
    textStyle?: StyleProp<TextStyle>;
    /** Background color of the container */
    bgColor?: string;
    /** Container border color */
    borderColor?: string;
    /** Error Txt styles */
    errorTextStyle?: StyleProp<TextStyle>;
}
export declare type DropdownItem = {
    /** Selection value that will validated */
    value: string;
    /** Selection label that the user will see */
    label: string;
};
export declare type DropdownState = {
    /** Choose weather the dropdown should use a Radio component or a Checkbox component (Single selection / Multiple selection) */
    type: 'single' | 'multiple';
    /** Dropdown selection page title */
    label: string;
    /** Form field name needed for validation */
    name: string;
    /** Dropdown elements */
    items: DropdownItem[];
    /** Array of current selections */
    currentValues: DropdownItem[] | undefined;
};
declare const DropdownLink: ({ dropdown, setDropdown, control, validation, error, setValue, navigateTo, disabled, onPress, style, errorTextStyle, ...props }: DropdownLinkProps) => JSX.Element;
export default DropdownLink;
