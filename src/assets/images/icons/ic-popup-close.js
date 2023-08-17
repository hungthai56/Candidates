import React from 'react';

export function IconPopupClose(props) {
    const { fontSize, color, onClick } = props
    return (
        <div onClick={onClick} aria-hidden="true" className="d-center justify-content-center pointer">
            <svg
                style={{
                    fontSize: fontSize ?? 20,
                    color: color ?? '#000',
                }}
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="14.5" cy="14.5" r="14.5" fill="#D8D7D7" />
                <path
                    d="M19.9997 19.9998L8.99976 8.99988"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.9998 8.99988L8.99976 19.9999"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}
export default IconPopupClose;
