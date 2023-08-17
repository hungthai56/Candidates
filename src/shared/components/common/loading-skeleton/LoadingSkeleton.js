import React from 'react';
import PlaceHolder from './PlaceHolder';

function LoadingSkeleton(props) {
    const { height = 30, width, className } = props;
    return (
        <div>
            <div style={{ height: `${height}px`, width: `${width}px` }} className={className}>
                <PlaceHolder />
            </div>
        </div>
    );
}

export default LoadingSkeleton;
