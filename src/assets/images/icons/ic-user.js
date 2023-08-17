import React from 'react'

function IcUser(props) {
    const { fontSize } = props
    return (
        <div>
            <svg
                style={{ fontSize: fontSize ?? 20 }}
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="13"
                    cy="10.3335"
                    r="4"
                    stroke="black"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                />
                <circle cx="13" cy="13" r="12" stroke="black" strokeWidth="0.8" />
                <path
                    d="M21 21.9415C20.5281 20.5239 19.4883 19.2713 18.0419 18.3779C16.5955 17.4845 14.8232 17.0002 13 17.0002C11.1768 17.0002 9.40455 17.4845 7.95811 18.3779C6.51167 19.2713 5.47188 20.5239 5 21.9414"
                    stroke="black"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

export default IcUser
