import React from 'react'

import Input, { InputProps } from '../Input'

export interface TextareaProps extends InputProps {}

/**
 * An input that expands its height
 * as a user types the text in
 */

const Textarea = ({ ...props }: TextareaProps) => {
  return <Input multiline onSubmitEditing={() => true} {...props} />
}

export default Textarea
