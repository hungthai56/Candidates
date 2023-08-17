import React from 'react';

function IcClose(props) {
    return (
        <div>
            <svg style={{ fontSize: props.fontSize ?? 20 }} width={props.width ?? 13} height={props.width ?? 13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 11.9999L1 1" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 1L1 12" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default IcClose;
