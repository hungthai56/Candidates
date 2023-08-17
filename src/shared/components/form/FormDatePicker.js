import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomDatePicker } from '@findxdn/erp-theme';

export default function FormDatePicker(props) {
  const {
    defaultValue,
    fieldName,
    placeholder = '',
    options,
    rules = [],
  } = props;
  const { control, errors } = useFormContext();

  const rulesObject = Object.assign({}, ...rules);

  return (
    <Controller
      control={control}
      defaultValue={defaultValue || ''}
      rules={rulesObject}
      render={({ field, ref }) => (
        <CustomDatePicker
          {...field}
          ref={ref}
          placeholder={placeholder}
          errors={errors}
          options={options}
        />
      )}
      name={fieldName}
    />
  );
}
