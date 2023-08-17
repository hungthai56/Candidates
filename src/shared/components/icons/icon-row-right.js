import React from 'react'

export default function IconRowRight(props) {
    return (
        <>
            <svg
                width={props.width ?? "8"}
                height={props.height ?? "16"}
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 1L7 8L1 15"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    )
}
