import {  TextInput , CustomTextInput} from '@findxdn/erp-theme';
import { Controller, useFormContext } from 'react-hook-form';
import Constants from 'utils/Constants';
import { convertNumberToString } from 'utils/String';
import Validator from 'utils/Validator';
import PropTypes from 'prop-types';


const FormInput = (props) => {
    const {
        defaultValue,
        fieldName,
        validate,
        placeholder,
        format = '',
        readOnly = false,
        isTooltip = false,
        max = 1000000000,
        min = 0,
        isMui = false,
        icon,
        type = false
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
                        const onChangeValue = (e) => {
                            if (
                                format == Constants.FormInputFormat.MONEY.VALUE
                            ) {
                                let val = e.target.value.replace(
                                    /[^0-9]+/g,
                                    '',
                                );
                                if (val >= max) {
                                    onChange(max);
                                } else {
                                    if (val <= min) {
                                        onChange(min);
                                    } else {
                                        onChange(val);
                                    }
                                }
                            } else {
                                onChange(e.target.value);
                            }
                        };
                        const onKeyPress = (e) => {
                            if (
                                format == Constants.FormInputFormat.MONEY.VALUE
                            ) {
                                if (!/^[0-9.]*$/i.test(e.key)) {
                                    e.preventDefault();
                                    return false;
                                }
                            }
                        };
                        const convertValue = (val) => {
                            if (
                                format == Constants.FormInputFormat.MONEY.VALUE
                            ) {
                                
                                if (val) {
                                    
                                    return convertNumberToString(
                                        val.toString().split('.').join(''),
                                    );
                                } else {
                                    if (val == 0 && val != '') {
                                        return 0;
                                    }
                                    return '';
                                }
                            } else {
                                return val;
                            }
                        };

                        return (
                            <>
                                {isMui ? (
                                    <TextInput
                                        _props={{ inputRef: ref }}
                                        name={fieldName}
                                        onChange={onChangeValue}
                                        onBlur={onBlur}
                                        value={convertValue(value)}
                                        onFocus={e => e.target.select()}
                                        placeholder={`${placeholder}`}
                                        errors={errors}
                                        required={false}
                                        defaultValue={defaultValue}
                                        onKeyPress={onKeyPress}
                                        readOnly={readOnly}
                                        isTooltip={isTooltip}
                                        _inputProps={{
                                            maxLength: props.maxLength,
                                            style: {
                                                textAlign:
                                                    format ==
                                                    Constants.FormInputFormat
                                                        .MONEY.VALUE
                                                        ? 'right'
                                                        : 'left',
                                            },
                                        }}
                                    />
                                ) : (
                                    <CustomTextInput
                                        fieldref = {ref}
                                        name={fieldName}
                                        onChange={onChangeValue}
                                        onBlur={onBlur}
                                        value={convertValue(value)}
                                        placeholder={placeholder}
                                        errors={errors}
                                        type={type}
                                        required={false}
                                        defaultValue={defaultValue}
                                        onKeyPress={onKeyPress}
                                        disabled={readOnly}
                                        isTooltip={isTooltip}
                                        onFocus={e => e.target.select()}
                                        style={{
                                            textAlign:
                                                format ==
                                                Constants.FormInputFormat.MONEY
                                                    .VALUE
                                                    ? 'right'
                                                    : 'left',
                                            paddingRight: format ==
                                            Constants.FormInputFormat.MONEY
                                                .VALUE ? 10 : 0
                                        }}
                                        maxLength = {props.maxLength}
                                        icon={icon}
                                    />
                                )}
                            </>
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
FormInput.defaultProps = {
    placeholder: 'Vui lòng nhập ...',
};

FormInput.propTypes = {
    isMui: PropTypes.bool
}
export default FormInput;
