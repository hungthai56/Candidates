import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import _ from 'lodash';
import { styled } from '@mui/material/styles'
import MessageError from '../../utils/MessageError';

const StyleTextArea = styled(({ isError, ...rest }) => <textarea {...rest} />)(
    ({ isError, maxHeight, minHeight }) => ({
        width: '100%',
        maxHeight: `${maxHeight}px`,
        minHeight: `${minHeight}px`,
        border: `1px solid ${isError ? 'red' : '#afafaf'}`,
        padding: '10px',
        borderRadius: '3px',
        '&:hover': {
            border: '1px solid black',
        },
        '&:focus': {
            outline: '1px solid green',
        },
    }),
)
export default function CustomTextInput({
    placeholder,
    name,
    errors,
    onChange,
    onBlur,
    minHeight = 40,
    maxHeight = 150,
}) {
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    return (
        <Box
            component="form"
            noValidate
            disablePortal
            autoComplete="off"
        >
            <StyleTextArea
                isError={showError}
                fullWidth
                placeholder={placeholder}
                onBlur={onBlur}
                onChange={onChange}
                name={name}
                minHeight={minHeight}
                maxHeight={maxHeight}
            />
            {
                showError && <MessageError type={errors[name].type} message={errors[name].message} />
            }
        </Box>
    )
}
CustomTextInput.prototype = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.bool,
    minHeight: PropTypes.number,
    maxHeight: PropTypes.number,
}
