
import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function TextLink(props) {
    const { to, title, className, onChange, children, ...rest } = props
    onChange({ link: to, title: children })
    return (
        <Link
            {...rest}
            className={`findx-text-link ${className}`}
            title={title}
        >
            {children}
        </Link>
    );
}

TextLink.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
    onChange: PropTypes.func,
};

TextLink.defaultProps = {
    title: '',
    className: '',
    children: null,
    onChange: () => { },
};

export default TextLink;
