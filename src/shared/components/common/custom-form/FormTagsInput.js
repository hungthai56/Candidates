import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Validator from 'utils/Validator';
import TagsInput from '../input-form/tags-input/TagsInput';

function FormTagsInput(props) {
    const {
        fieldName,
        validate = [],
        placeholder,
        options,
        disabled = false,
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();
    return (
        <div className={`Input w-100 ${props?.className}`}>
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field: { onChange, value, ref } }) => {
                        const handleChange = (e) => {
                            onChange(e);
                        };
                        return (
                            <TagsInput
                                name={fieldName}
                                ref={ref}
                                onChange={handleChange}
                                value={value}
                                options={options}
                                placeholder={placeholder}
                                errors={errors}
                                disabled={disabled}
                            />
                        );
                    }}
                />
            </div>
            {errors[fieldName] && (
                <p style={{ color: 'red', marginTop: '5px' ,fontWeight: 400 }}>
                    {errors[fieldName]?.message}
                </p>
            )}
        </div>
    );
}
FormTagsInput.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
};
export default FormTagsInput;