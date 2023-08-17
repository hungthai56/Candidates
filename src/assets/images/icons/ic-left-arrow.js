import React from 'react'
import PropTypes from 'prop-types'

function IconLeftArrow(props) {
    const { fontSize } = props

    return (
        <div>
            <svg
                style={{ fontSize }}
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M2 9L1.45171 9.51174L0.974086 9L1.45171 8.48826L2 9ZM8.45171 17.0117L1.45171 9.51174L2.54829 8.48826L9.54829 15.9883L8.45171 17.0117ZM1.45171 8.48826L8.45171 0.988261L9.54829 2.01174L2.54829 9.51174L1.45171 8.48826Z"
                    fill="#707070"
                />
            </svg>
        </div>
    )
}

IconLeftArrow.propTypes = {
    fontSize: PropTypes.number,
}

IconLeftArrow.defaultProps = {
    fontSize: 20,
}

export default IconLeftArrow
