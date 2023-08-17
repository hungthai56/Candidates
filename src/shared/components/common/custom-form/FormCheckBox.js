// import { CustomCheckbox } from '@findxdn/erp-theme';
import Checkbox from "@mui/material/Checkbox";
import { Controller, useFormContext } from 'react-hook-form';
import Validator from 'utils/Validator';

const FormCheckBox = (props) => {
    const {
        fieldName,
        validate,
        disabled
    } = props;
    const {
        formState: { errors },
        control,
    } = useFormContext();
    return (
        <Controller
            control={control}
            name={fieldName}
            rules={{ validate: Validator.genValidate(validate, fieldName) }}
            render={({ field: { onChange, onBlur, value, ref } }) => {
                return <Checkbox size="medium"
                    sx={{
                        "&.Mui-checked": {
                            color: "#138300",
                        },
                    }} disabled={disabled} checked={Boolean(value) ?? false} onChange={(e)=>onChange(e.target.checked)} />;
            }}
        />
    );
};
FormCheckBox.defaultProps = {
};
export default FormCheckBox;
