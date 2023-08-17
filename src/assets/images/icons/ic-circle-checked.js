import React from 'react'
import PropTypes from 'prop-types'

function IcCircleChecked(props) {
    const { colorChecked, width, height } = props
    return (
        <svg width={`${width ?? 40} `} height={`${height ?? 39}`} viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20.3828" cy="19.5" r="18.5" fill="white" stroke="#FFF3B5" strokeWidth="2" />
            <circle cx="20.3828" cy="19.5" r="14.5" fill={colorChecked} />
            <path d="M12.8828 19.5L18.5078 24L27.8828 15" stroke="#333333" strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}
IcCircleChecked.propTypes = {
    colorChecked: PropTypes.string,
}
IcCircleChecked.defaultProps = {
    colorChecked: '#FFE251',
}

export default IcCircleChecked
