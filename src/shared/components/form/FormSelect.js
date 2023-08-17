import React, { useMemo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { CustomSelect } from '@findxdn/erp-theme';
import { parseInt } from 'lodash';

export default function FormSelect(props) {
    const {
        defaultValue,
        fieldName,
        placeholder,
        options,
        noSelectAll,
        rules = [],
    } = props;
    const { control, errors } = useFormContext();
    const rulesObject = Object.assign({}, ...rules);

    const formOptions = useMemo(() => {
        // if (noSelectAll) {
        //   return options;
        // }
        // return [...options, { value: 0, label: 'Tất cả' }];
        // option
        /* return options.map((item) => ({
          value: parseInt(item.value),
          key: parseInt(item.value),
          label: item.label,
         })); */
        const Options = options.map((item) => ({
            key: parseInt(item.value),
            value: parseInt(item.value),
            label: item.label,
        }));
        if (noSelectAll) return [...Options];
        return [...Options, { key: -1, value: -1, label: 'Tất cả' }];
    }, [options]);

    return (
        <Controller
            defaultValue={defaultValue || ''}
            control={control}
            rules={rulesObject}
            render={({ field, ref }) => (
                <CustomSelect
                    {...field}
                    ref={ref}
                    placeholder={placeholder}
                    options={formOptions}
                    errors={errors}
                />
            )}
            name={fieldName}
        />
    );
}
