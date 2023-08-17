import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import PropTypes from 'prop-types'
import _ from 'lodash';
import { IcDateTime } from '../assets/icons'
import MessageError from '../../utils/MessageError';

export default function CustomDatePicker(props) {
    const {
        register,
        errors,
        name,
        onChange,
    } = props;
    const [value, setValue] = React.useState(null);
    const handleOnchange = (newValue) => {
        const day = `${newValue.getMonth() + 1}/${newValue.getDate()}/${newValue.getFullYear()}`
        setValue(day);
    }
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} required>
            <DatePicker
                value={value}
                onChange={handleOnchange}
                components={{
                    OpenPickerIcon: IcDateTime,
                }}
                inputFormat="dd/MM/yyyy"
                renderInput={(params) => (
                    <TextField
                        {...params}
                        {...register}
                        error={showError}
                        fullWidth
                        color="success"
                        margin="normal"
                        size="small"
                        name={name}
                        value={value}
                        onChange={onChange(value)}
                    />
                )}
            />
            {
                showError && <MessageError type={errors[name].type} message={errors[name].message} />
            }
        </LocalizationProvider>
    );
}

CustomDatePicker.prototype = {
    name: PropTypes.string,
    options: PropTypes.array,
}
