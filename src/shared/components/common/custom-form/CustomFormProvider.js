import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';

function CustomFormProvider (props) {
    useEffect(() => {
        let errors = props?.formState?.errors;
        const firstError = Object.keys(errors).reduce((field, a) => {
            return !!errors[field] ? field : a;
        }, null);
        if (firstError) {
            props?.setFocus(firstError);
        }
    }, [props?.formState?.errors, props?.setFocus]);
    return (
        <FormProvider {...props}>
            {props.children}
        </FormProvider>
    )
}
export default CustomFormProvider;