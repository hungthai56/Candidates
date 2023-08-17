import { TextNote } from '@findxdn/erp-theme';
import { useEffect, useRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Validator from 'utils/Validator';
import styles from './FormTextNote.module.scss';

const FormEditor = (props) => {
    const {
        defaultValue,
        fieldName,
        validate,
        placeholder,
        setCanSubmit
    } = props
    const { formState: { errors }, control } = useFormContext();

    return (
        <div className={`${props.className} w-100`}>
            <div className={`w-100 ${styles.formTextNote}`}>
                <Controller
                    control={control}
                    name={fieldName}
                    rules={{ validate: Validator.genValidate(validate, fieldName) }}
                    render={({ field: { onChange, onBlur, value, ref } }) => {
                        const [editorReady, setEditorReady] = useState(false)
                        useEffect(() => {
                            const $editor = window.CKEDITOR.replace(fieldName, {
                                height: 500,
                                toolbar: "Full",
                                // customConfig: `/lib/ckeditor/config.js?v=${new Date().getTime()}`,
                            });
                            $editor.on("blur", (e) => {
                                onChange(window.CKEDITOR.instances[fieldName].getData())
                                setCanSubmit && setCanSubmit(true)
                            });
                            $editor.on("focus", (e) => {
                                setCanSubmit && setCanSubmit(false)
                            });
                            $editor.on("instanceReady", (e) => {
                                setEditorReady(true)
                            });
                            return () => {
                                window.CKEDITOR.remove($editor)
                            }
                        }, [])
                        useEffect(() => {
                            if (editorReady && value != window.CKEDITOR.instances[fieldName].getData()) {
                                setTimeout(() => {
                                    window.CKEDITOR.instances[fieldName].setData(value)
                                }, 0);
                            }
                        }, [value,editorReady])
                        const currentRef = useRef(null)
                        return <div ref={currentRef}>
                            <TextNote
                                ref={ref}
                                name={fieldName}
                                // onChange={}
                                onBlur={onBlur}
                                value={value}
                                defaultValue={defaultValue}
                                placeholder={placeholder}
                                errors={errors}
                                required={false} />
                        </div>
                    }}
                />
            </div>
        </div>
    )
}
FormEditor.defaultProps = {
    placeholder: "Vui lòng nhập ..."
}
export default FormEditor;