import IconSortDown from 'assets/images/icons/icon-sort-down';
import React, { useEffect } from 'react';
import useTrans from 'hooks/use-trans';
import PropTypes from 'prop-types';
import styles from './InputFill.module.scss';
import { useState } from 'react';
import Constants from 'utils/Constants';

function InputFill(props) {
    const { refInput, onClick, max = 1000000000, min = 0, placeholder = "0" } = props;
    const { t } = useTrans();
    const [value, setValue] = useState('');

    const onChange = (e) => {
        let val = e.target.value.replace(/[^0-9]+/g, '');
        val = parseInt(val, 10) || 0;
        if (val >= max) {
            setValue(max);
        } else {
            if (val <= min) {
                setValue(min);
            } else {
                setValue(val);
            }
        }
    };

    const onClickIcon = () => {
        if (value) {
            onClick(value);
            setValue("");
        }
    };

    const onKeyPress = (e) => {
        if (!/^[0-9.]*$/i.test(e.key)) {
            e.preventDefault();
            return false;
        }
    };

    const convertNumberToString = (value, delimiter = '.') => {
        if (value || value === 0) {
            return value
                .toString()
                .replace(Constants.REGEX.formatMoney, delimiter);
        }
        return '';
    };

    return (
        <div className={styles.InputFill}>
            <input
                placeholder={t(placeholder)}
                name="PriceFill"
                ref={refInput}
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={
                    convertNumberToString(
                        value.toString().split('.').join(''),
                    ) ?? 0
                }
            />
            <span onClick={onClickIcon} className={styles['icon']}>
                <IconSortDown />
            </span>
        </div>
    );
}

InputFill.propTypes = {
    onClick: PropTypes.func,
};
export default InputFill;
