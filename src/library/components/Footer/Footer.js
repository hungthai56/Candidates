import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    const { className, style, children } = props
    return (
        <div
            style={style}
            className={`findx-footer bases__height--50 ${className}`}
        >
            {children}
        </div>
    )
}
Footer.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element,
}

Footer.defaultProps = {
    className: '',
    style: {},
    children: null,
}
export default Footer
