/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import TextLink from './textLink';
import RouterPath from 'router/RouterPath';

function CodeTextLink (props) {
    const { path } = props
    return (
        <div
            className=" cursor-pointer btn-link text-truncate"
            style={{ ...props?.style, fontSize: 14, color: 'rgb(0, 74, 223)' }}
            title={props?.data?.children}
        >
            <TextLink to={RouterPath.getRouteWithId(path, props?.Id)} title={props?.children} children={props?.children} />
        </div>
    );
}

CodeTextLink.propTypes = {
    path: PropTypes.string
};

CodeTextLink.defaultProps = {
};

export default CodeTextLink;
