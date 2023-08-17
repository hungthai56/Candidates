import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const { onClick, children, className, sx, disabled, icon, type = 'button' } = props
    return (
        <button
            type={type}
            style={sx}
            onClick={onClick}
            disabled={disabled}
            className={`button-default ${className ? className : ''}`}
        >
            {icon ? <span className="icon-style">{!!icon && icon}</span> : <></>}
            {children}
        </button>
    )
}
Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.element,
}

Button.defaultProps = {
    className: null,
    onClick: () => {},
    icon: null,
}
export default Button
