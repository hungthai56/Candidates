import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    const { className, style, children } = props

    return (
        <div
            className={`postition-fixed bases__top--0 w-100 bases__height--50 findx-header ${className}`}
            style={style}
        >
            {children}
        </div>
    )
}

Header.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element,
}

Header.defaultProps = {
    className: '',
    style: {},
    children: null,
}

export default Header
