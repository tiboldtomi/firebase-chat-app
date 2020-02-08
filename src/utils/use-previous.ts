import * as React from 'react';

const usePrevious = <T extends any>(value: T) => {
    const ref = React.useRef<T>();
    React.useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
};

export default usePrevious;