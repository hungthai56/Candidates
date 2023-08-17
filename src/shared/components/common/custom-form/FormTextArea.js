import { TextNote } from '@findxdn/erp-theme';
import { Controller, useFormContext } from 'react-hook-form';
import Constants from 'utils/Constants';
import Validator from 'utils/Validator';

const FormTextArea = (props) => {
    const {
        defaultValue,
        fieldName,
        validate,
        placeholder,
        format = '',
        readOnly = false,
        isTooltip = false,
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();
    // let arr = fieldName.split(".");
    // let error = {}
    // if (arr.length > 1) {
    //     let result = arr.reduce((rs, e) => {
    //         if (rs[e]) {
    //             return rs = rs[e]
    //         }
    //         return {}

    //     }, errors)
    //     error = result
    // }

    return (
        <div className="Input w-100">
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        return (
                            <TextNote
                                _props={{ ref: ref }}
                                name={fieldName}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                defaultValue={defaultValue}
                                placeholder={placeholder}
                                errors={errors}
                                required={false}
                                disabled={readOnly}
                                isTooltip={isTooltip}
                                _inputProps={{
                                    maxLength: props.maxLength,
                                    style: {
                                        textAlign:
                                            format ==
                                            Constants.FormInputFormat.MONEY
                                                .VALUE
                                                ? 'right'
                                                : 'left',
                                    },
                                }}
                            />
                        );
                    }}
                />
            </div>
            {/* {error?.message && (
                <MessageError type={error?.type} message={error?.message} />
            )} */}
        </div>
    );
};
FormTextArea.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
};
export default FormTextArea;
