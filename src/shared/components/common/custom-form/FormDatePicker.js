import { CustomDesktopDatePicker } from '@findxdn/erp-theme';
import moment from 'moment';
import { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Utils from 'utils/Utils';
import Validator from 'utils/Validator';
import styles from './FormDatePicker.module.scss';

function FormDatePicker (props) {
    const {
        defaultValue=null,
        fieldName,
        validate,
        placeholder,
        disabled=false
    } = props;
    const { formState: { errors }, control } = useFormContext();
    const wrapRef = useRef()
    return (
        <div className={`Input w-100 ${styles['FormDatePicker']}`} ref={wrapRef}>
            <div className="w-100">
                <Controller
                    control={control}
                    name={fieldName}
                    defaultValue={defaultValue}
                    rules={{ validate: Validator.genValidate(validate, fieldName) }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        const onChangeValue=(e)=>{
                            const date = moment(e).format("YYYY-MM-DD");
                            if ( e == null) {
                                onChange(null)
                                return
                            }
                            if ( date.length <= 7) {
                                onChange(e)
                                return
                            }
                            onChange(date)
                            Utils.triggerSubmit(wrapRef)

                        }
                        return <CustomDesktopDatePicker
                            _props={{ inputRef: ref }}
                            name={fieldName}
                            value={value}
                            onChange={onChangeValue}
                            onBlur={onBlur}
                            defaultValue={value ?? defaultValue}
                            placeholder={placeholder}
                            errors={errors}
                            disabled={disabled}
                            isOpenTabelSetDate
                        />
                    }}
                />

            </div>
        </div>
    )
}
FormDatePicker.defaultProps = {
    placeholder: "Vui lòng nhập ...",
    defaultValue: ''
}
export default FormDatePicker;