import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInput } from '@findxdn/erp-theme';

export default function FormInput(props) {
    const {
        defaultValue,
        fieldName,
        placeholder = '',
        isPassword = false,
        rules = [],
    } = props;

    const {
        control,
        formState: { errors },
    } = useFormContext();

    const rulesObject = Object.assign({}, ...rules);

    return (
        <Controller
            control={control}
            defaultValue={defaultValue || ''}
            rules={rulesObject}
            render={({ field, ref }) => (
                <TextInput
                    {...field}
                    ref={ref}
                    placeholder={placeholder}
                    errors={errors}
                    isPassword={isPassword}
                />
            )}
            name={fieldName}
        />
    );
}
