import { TextInput } from '@findxdn/erp-theme';
import React from 'react';
import Constants from 'utils/Constants';
import { formatCash } from 'utils/String';

function MaskInput (props) {
    const {format, onChange, value} = props
    const onChangeValue = (e) => {
        if (format == Constants.FormInputFormat.MONEY.VALUE) {
            onChange(formatCash(e.target.value.split(',').join('')))
        } else {
            onChange(e.target.value);
        }
    }
    const onKeyPress = (e) => {
        if (format == Constants.FormInputFormat.MONEY.VALUE) {
            if (!/^[0-9,]*$/i.test(e.key)) {
                e.preventDefault();
                return false
            }
        }
    }
    return (
        <TextInput
            onChange={onChangeValue}
            value={value}
            onKeyPress={onKeyPress}
        />
    )
}
export default MaskInput;