import React from 'react'
import PropTypes from 'prop-types'

function IcCircle(props) {
    const { color } = props
    return (
        <svg
            width="28"
            height="28"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="13.5367" cy="13.5" r="12.6538" fill={color} />
        </svg>
    )
}
IcCircle.propTypes = {
    color: PropTypes.string,
}
IcCircle.defaultProps = {
    color: '#D8D7D7',
}

export default IcCircle
