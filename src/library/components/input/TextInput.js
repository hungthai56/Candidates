import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import _ from 'lodash';
import MessageError from '../../utils/MessageError';
import { IcEyeClose } from '../assets/icons/index'

export default function TextInput({
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    errors,
    type,
    defaultValue,
    isPassword,
}) {
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    const [showIcRight, setShowIcRight] = useState(true)
    const handleOnclickIconRight = () => {
        setShowIcRight(!showIcRight);
    }
    return (
        <Box
            component="form"
            noValidate
            disablePortal
            autoComplete="off"
            sx={{ position: 'relative' }}
        >
            <TextField
                margin="normal"
                color="success"
                size="small"
                required
                name={name}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                defaultValue={defaultValue}
                type={isPassword ? 'password' : type}
                error={showError}
                fullWidth
                placeholder={placeholder}
            />
            {
                isPassword && (
                    <div
                        className="iconRight-textInput"
                        role="button"
                        onClick={handleOnclickIconRight}
                    >
                        <IcEyeClose />
                    </div>
                )
            }
            {
                showError && <MessageError type={errors[name].type} message={errors[name].message} />
            }
        </Box>
    )
}
TextInput.prototype = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.bool,
    isPassword: PropTypes.bool,
}
