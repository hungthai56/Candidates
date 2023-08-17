/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import TextLink from './textLink';
import RouterPath from 'router/RouterPath';
import styles from "./TextLabel.module.scss"

function CodeTextLinkNewButton (props) {
    const { path, button } = props
    return (
        <div
            className={styles['custom__new-button']}
            style={{ ...props?.style, fontSize: 14, color: 'rgb(0, 74, 223)' }}
            title={props?.data?.children}
        >
            <TextLink to={RouterPath.getRouteWithId(path, props?.Id)} title={props?.children} children={props?.children} />
            <span>{button}</span> 
        </div>
    );
}

CodeTextLinkNewButton.propTypes = {
    path: PropTypes.string
};

CodeTextLinkNewButton.defaultProps = {
};

export default CodeTextLinkNewButton;
