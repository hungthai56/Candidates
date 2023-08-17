import { TextInput } from '@findxdn/erp-theme';
import SingleImageUpload from 'library/components/image/SingleImageUpload';
import { useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Controller, useFormContext } from 'react-hook-form';
import { useClickAway } from 'react-use';
import Validator from 'utils/Validator';

function FormImage(props) {
    const {
        fieldName,
        validate = [],
        placeholder,
        size
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();

    const wrapRef = useRef()
    return (
        <div className={`w-100 ${props?.className ?? ""}`} ref={wrapRef}>
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field }) => {
                        return <SingleImageUpload {...field}  errors={errors} size={size} />
                    }}
                />
            </div>
        </div>
    );
}
FormImage.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
    className: ""
};
export default FormImage;
