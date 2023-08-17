import React from 'react';
function ImageBox(props) {
    const {
    } = props;
    return <div style={{
        background: '#F6F6F6',
        padding: '5px 0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>{props?.children}</div>
}
export default ImageBox;
