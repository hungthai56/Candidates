import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomTimepicker } from '@findxdn/erp-theme';

export default function FormTimepicker(props) {
  const { defaultValue, fieldName, placeholder } = props;

  const { errors, control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={defaultValue || ''}
      render={({ field, ref }) => (
        <CustomTimepicker
          {...field}
          ref={ref}
          placeholder={placeholder}
          name={fieldName}
          errors={errors}
        />
      )}
      name={fieldName}
    />
  );
}
