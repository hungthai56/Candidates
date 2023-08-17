import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
// import InputPricePercent from '../input/input-price-percent';
import InputUploadFile from '../input/input-upload-file/InputUploadFile';
import Validator from './../../../../utils/Validator';

export default function FormInputUpload(props) {
    const {
        fieldName,
        validate,
        defaultValue,
        widthFile = '100%',
        listFile,
    } = props;
    const {
        formState: { errors },
        control,
        setValue,
    } = useFormContext();
    // setValue(fieldName, defaultValue);
    // let arr = fieldName.split('.');
    // let error = {};
    // if (arr.length > 1) {
    //     let result = arr.reduce((rs, e) => {
    //         if (rs[e]) {
    //             return (rs = rs[e]);
    //         }
    //         return {};
    //     }, errors);
    //     error = result;
    // }

    return (
        < >
            <div
                style={{ position: 'relative' ,maxWidth: widthFile}}
                className={`w-100 d-flex justify-content-end flex-column`}
            >
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{
                        validate: Validator.genValidate(validate, fieldName),
                    }}
                    render={({
                        field: { onChange, onBlur, value, ref, name },
                    }) => {
                        return (
                            <InputUploadFile
                                onChange={(e)=>{
                                    onChange(e)
                                }}
                                onBlur={onBlur}
                                value={value}
                                defaultValue={listFile}
                                name={name}
                                style={{
                                    width: widthFile,
                                }}
                                errors={errors}
                            />
                        );
                    }}
                />
            </div>
        </>
    );
}
