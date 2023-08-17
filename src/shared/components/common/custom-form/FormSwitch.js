

import { Switch } from '@findxdn/erp-theme';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Validator from 'utils/Validator';


function FormSwitch (props) {
    const {
        defaultValue,
        fieldName,
        validate = [],
        placeholder,
        options,
        disabled = false
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();
    return (
        <div className={`w-100 ${props?.className}`}>
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        return (
                            <Switch
                                name={fieldName}
                                ref={ref}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={Boolean(value)}
                                errors={errors}
                                disabled={disabled}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
}
FormSwitch.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
};
export default FormSwitch;
