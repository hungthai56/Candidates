import React from 'react';
import * as Themes from '@findxdn/erp-theme';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
function ButtonCommon(props) {
    const { icon } = props;

    const switchButton=(typeColor)=>{
        switch (typeColor) {
            case 'background-red':
                return styles.button-common.border-red;
            case 'background-green':
                return styles.ButtonLoading;
            case 'border-green':
                return styles.ButtonLoadingGray;
                case 'border-red':
                return styles.buttonCommon.borderRed;
            default:
                return styles.ButtonLoading;
        }
    }

    return (
        <Themes.Button
            type={props.type ?? 'button'}
            _props={{
                id:props.id
            }}
            onClick={props.onClick}
            className={`${props.className} ${props.typeColor}`}
            disabled = {props.disabled ?? false}
            style={props.style}
        >
            {props?.children}
        </Themes.Button>
    );
}
ButtonCommon.defaultValue = {
    typeColor:
        'background-green' | 'background-red' | 'border-green' | 'border-red',
    type: 'button',
    onClick: () => {},
};
ButtonCommon.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    typeColor: PropTypes.string,
};
export default ButtonCommon;
