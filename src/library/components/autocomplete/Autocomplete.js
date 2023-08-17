
import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp'

import _ from 'lodash';
import MessageError from '../../utils/MessageError';

function CustomAutocomplete({
    placeholder,
    options = [],
    name,
    register,
    errors,
    onChange,
}) {
    console.log('3333333', errors)
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    return (
        <>
            <Autocomplete
                onChange={onChange}
                options={options}
                popupIcon={<ExpandMoreSharpIcon />}
                renderInput={(params) => (
                    <TextField
                        {...register}
                        {...params}
                        margin="normal"
                        color="success"
                        size="small"
                        fullWidth
                        placeholder={placeholder}
                        error={showError}
                    />
                )}
            />
            {
                showError && <MessageError type={errors[name].type} message={errors[name].message} />
            }
        </>
    )
}
CustomAutocomplete.prototype = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
}

export default CustomAutocomplete
