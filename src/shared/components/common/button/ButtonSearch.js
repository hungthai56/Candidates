import React from 'react';
import * as Themes from '@findxdn/erp-theme';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import styles from './Button.module.scss';

function ButtonSearch(props) {

    const ref = useRef();
    return (
        <Themes.ButtonSearch
            type={props.type ?? 'button'}
            onClickBtnSelect={props.onClickSelect}
            onClickBtnSearch={props.onClickSearch}
            className={`${styles['button-search']} ${props.className} ${props.typeColor}`}
            disabled={props.disabled}
            isDown={false}
            refButton = {ref}
        >
            {props?.children}
        </Themes.ButtonSearch>
    );
}
ButtonSearch.defaultValue = {
    typeColor:
        'background-green' | ' background-red' | 'border-green' | 'border-red',
    type: 'button',
    onClick: () => {},
    disabled:false
};
ButtonSearch.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    typeColor: PropTypes.string,
    disabled: PropTypes.bool
};
export default ButtonSearch;
