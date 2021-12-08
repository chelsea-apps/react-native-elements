import React from 'react';
const OptionalWrapper = ({ data, children, elseComponent, }) => {
    return React.createElement(React.Fragment, null, data ? children : elseComponent || React.createElement(React.Fragment, null));
};
export default OptionalWrapper;
//# sourceMappingURL=OptionalWrapper.js.map