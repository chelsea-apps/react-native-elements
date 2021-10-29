import React from 'react'

import Input, { InputProps } from '../Input'

/**
 * An input that expands its height
 * as a user types the text in
 */

const Textarea = ({ ...props }: InputProps) => {
  return <Input multiline onSubmitEditing={() => true} {...props} />
}

export default Textarea
