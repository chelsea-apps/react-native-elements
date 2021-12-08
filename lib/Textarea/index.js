import React from 'react';
import Input from '../Input';
/**
 * An input that expands its height
 * as a user types the text in
 */
const Textarea = ({ ...props }) => {
    return React.createElement(Input, { multiline: true, onSubmitEditing: () => true, ...props });
};
export default Textarea;
//# sourceMappingURL=index.js.map