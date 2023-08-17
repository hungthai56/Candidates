import React from 'react'
import PropTypes from 'prop-types'

function IcAdd(props) {
    return (
        <svg
            width="70"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2.375C6.68426 2.375 2.375 6.68426 2.375 12C2.375 17.3157 6.68426 21.625 12 21.625C17.3157 21.625 21.625 17.3157 21.625 12C21.625 6.68426 17.3157 2.375 12 2.375ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                fill="#707070"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.69141 12C5.69141 11.6203 5.99921 11.3125 6.37891 11.3125H17.6289C18.0086 11.3125 18.3164 11.6203 18.3164 12C18.3164 12.3797 18.0086 12.6875 17.6289 12.6875H6.37891C5.99921 12.6875 5.69141 12.3797 5.69141 12Z"
                fill="#707070"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 5.6875C12.3797 5.6875 12.6875 5.9953 12.6875 6.375V17.625C12.6875 18.0047 12.3797 18.3125 12 18.3125C11.6203 18.3125 11.3125 18.0047 11.3125 17.625V6.375C11.3125 5.9953 11.6203 5.6875 12 5.6875Z"
                fill="#707070"
            />
        </svg>
    )
}

IcAdd.propTypes = {
    fontSize: PropTypes.number,
}

IcAdd.defaultProps = {
    fontSize: 20,
}

export default IcAdd
