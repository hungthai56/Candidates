import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomCheckbox } from '@findxdn/erp-theme';

export default function FormCheckBox(props) {
    const { fieldName } = props;

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            render={({ field, ref }) => <CustomCheckbox {...field} ref={ref} />}
            name={fieldName}
        />
    );
}
