import React from 'react';
import { CustomDateTimePicker } from '@findxdn/erp-theme';
import { Controller, useFormContext } from 'react-hook-form';
import Validator from 'utils/Validator';
import classes from './FormDatePicker.module.scss';
import moment from 'moment';

function FormDateTimePicker (props) {
    const {
        defaultValue,
        fieldName,
        validate,
        placeholder,
        inputFormat="dd/MM/yyyy hh:mm aa",
        disabled = false,
        handleOnchange = () => {},
    } = props;
    const { formState: { errors }, control } = useFormContext();
    return (
        <div className="Input w-100">
            <div className={`w-100 ${classes['FormDateTimePicker']}`}>
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{ validate: Validator.genValidate(validate, fieldName) }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        const onChangeValue=(e)=>{
                            const date = e;
                            handleOnchange(date)
                            onChange(date)
                        }
                        return <CustomDateTimePicker
                            _props={{ 
                                inputFormat: inputFormat,
                                inputRef: ref,
                            }}
                            name={fieldName}
                            value={value}
                            onChange={onChangeValue}
                            onBlur={onBlur}
                            // defaultValue={defaultValue}
                            placeholder={placeholder}
                            errors={errors}
                            disabled={disabled}
                        />
                    }}
                />

            </div>
        </div>
    )
}
FormDateTimePicker.defaultProps = {
    placeholder: "Vui lòng nhập ...",
    defaultValue: ''
}
export default FormDateTimePicker;