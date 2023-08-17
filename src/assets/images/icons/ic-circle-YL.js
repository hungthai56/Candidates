import React from 'react'
import PropTypes from 'prop-types'

function IcCircleYL(props) {
    const { firstColor, secondColor } = props
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="white" />
            <circle cx="12.5" cy="12.5" r="12.5" fill={firstColor} />
            <circle cx="12.5006" cy="12.5001" r="11.1842" fill="white" />
            <circle cx="12.5006" cy="12.5001" r="11.1842" fill="white" />
            <circle cx="12.4986" cy="12.5003" r="7.23684" fill="white" />
            <circle cx="12.4986" cy="12.5003" r="7.23684" fill={secondColor} />
        </svg>
    )
}

IcCircleYL.propTypes = {
    firstColor: PropTypes.string,
    secondColor: PropTypes.string,
}
IcCircleYL.defaultProps = {
    firstColor: '#FFF3B5',
    secondColor: '#FFD500',
}

export default IcCircleYL
