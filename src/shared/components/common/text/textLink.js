import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function TextLink(props) {
    const { title, className, children, ...rest } = props

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
    children: PropTypes.element,
};

TextLink.defaultProps = {
    title: '',
    className: '',
    children: null,
};

export default TextLink;
