/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import PropTypes from 'prop-types'
import _ from 'lodash';
import MessageError from '../../utils/MessageError';
import Radio from './Radio'

export default function MultiRadio(props) {
    const { name, control, options, row, errors, onChange } = props
    const [value, setValue] = useState();
    const handleChange = (event) => {
        setValue(event.target.value)
        onChange(event.target.value)
    };
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    return (
        <FormControl error={showError} fullWidth>
            <RadioGroup
                name={name}
                row={row}
                value={value}
                onChange={handleChange}
            >
                {options.map((options) => (
                    <FormControlLabel
                        key={options.value}
                        value={options.value}
                        control={control}
                        label={options.label}
                    />
                ))}
            </RadioGroup>
            {
                showError && <MessageError type={errors[name].type} message={errors[name].message} />
            }
        </FormControl>
    )
}

MultiRadio.prototype = {
    name: PropTypes.string,
    options: PropTypes.array,
    control: PropTypes.object,
    row: PropTypes.bool,
    error: PropTypes.bool,
}

MultiRadio.defaultProps = {
    name: '',
    options: [],
    row: false,
    control: <Radio />,
    onChange: () => { },
}
