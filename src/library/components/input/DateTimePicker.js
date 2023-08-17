import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import _ from 'lodash';
import PropTypes from 'prop-types'
import { IcDateTime } from '../assets/icons'
import MessageError from '../../utils/MessageError';

export default function CustomDateTimePickers(props) {
    const {
        register,
        errors,
        name,
        onChange,
    } = props;
    const [value, setValue] = React.useState(null);
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    const handleOnchange = (newValue) => {
        const data = `${newValue.getMonth() + 1}/${newValue.getDate()}/${newValue.getFullYear()} ${newValue.getHours()}:${newValue.getMinutes() + 1}:${newValue.getSeconds()}`
        setValue(data);
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} required>
            <DateTimePicker
                value={value}
                components={{
                    OpenPickerIcon: IcDateTime,
                }}
                onChange={handleOnchange}
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

CustomDateTimePickers.prototype = {
    name: PropTypes.string,
    options: PropTypes.array,
}
