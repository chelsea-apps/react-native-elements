import React from 'react';
const LoadingWrapper = ({ loading, indicator, children, }) => {
    if (loading)
        return React.createElement(React.Fragment, null, indicator);
    return React.createElement(React.Fragment, null, children);
};
export default LoadingWrapper;
//# sourceMappingURL=LoadingWrapper.js.map