
import React from 'react'
import PropTypes from 'prop-types'

function TextLabel(props) {
    const {
        children,
        className,
        isInfo,
        isSuccess,
        isWarning,
        isDanger,
        onChange,
        ...rest
    } = props
    onChange(children)
    return (
        <div>
            <p
                {...rest}
                className={`
          findx-text-label 
          ${isInfo ? 'findx-text-label-info' : ''}
          ${isSuccess ? 'findx-text-label-success' : ''}
          ${isWarning ? 'findx-text-label-warning' : ''}
          ${isDanger ? 'findx-text-label-danger' : ''}
          ${className}`}
            >
                {children}
            </p>
        </div>
    )
}

TextLabel.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    isInfo: PropTypes.bool,
    isSuccess: PropTypes.bool,
    isWarning: PropTypes.bool,
    isDanger: PropTypes.bool,
    children: PropTypes.any,
    onChange: PropTypes.func,
}

TextLabel.defaultProps = {
    title: '',
    className: '',
    isInfo: false,
    isSuccess: false,
    isWarning: false,
    isDanger: false,
    children: null,
    onChange: () => { },
}

export default TextLabel
