import React from 'react';
import PropTypes from 'prop-types';
import { TextLink as Link } from '@findxdn/erp-theme';


function TextLink (props) {
    const { children } = props
    return (
        <Link url={`${window.location.origin}${props?.to}`} >{children}</Link>
    );
}

TextLink.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
    ]),
};

TextLink.defaultProps = {
    title: '',
    className: '',
    children: null,
};

export default TextLink;
