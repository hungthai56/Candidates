import React from 'react';
import * as Themes from '@findxdn/erp-theme';
import styles from './Button.module.scss';

function Button (props) {
    return (
        <Themes.Button
            type={props.type ?? 'button'}
            className={`btn search-btn background-green ${styles['bases__font--14']} w-100`}
            style={{ marginRight: 10 }}
            onClick={props.onClick}
        >
            {props?.children}
        </Themes.Button>
    )
}
export default Button;