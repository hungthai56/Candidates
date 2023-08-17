import React from 'react'

export default function IconEye(props) {
    return (
        <>
            <svg fontSize={props?.fontSize ?? 24} width="1em" height="1em" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.5C4.14286 5.5 1 12.5 1 12.5C1 12.5 4.14286 19.5 12 19.5C19.8571 19.5 23 12.5 23 12.5C23 12.5 19.8571 5.5 12 5.5Z" stroke={props?.color ?? "#138300"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9999 16.3891C14.1696 16.3891 15.9284 14.648 15.9284 12.5002C15.9284 10.3524 14.1696 8.61133 11.9999 8.61133C9.83017 8.61133 8.07129 10.3524 8.07129 12.5002C8.07129 14.648 9.83017 16.3891 11.9999 16.3891Z" stroke={props?.color ?? "#138300"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

        </>
    )
}
