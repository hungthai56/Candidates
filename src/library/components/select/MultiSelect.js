import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Chip } from '@mui/material'
import CancelIcon from '@material-ui/icons/Cancel'

import { Box } from '@mui/system'
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp'
import PropTypes from 'prop-types'
import _ from 'lodash';
import MessageError from '../../utils/MessageError';

const MenuProps = {
    PaperProps: {
        style: {
            color: 'black',
        },
    },
};
const green = {
    500: '#138300',
}
const grey = {
    400: '#d8d7d7',
}
const style = {
    //   width: '100%',
    fontSize: 15,
    color: 'black',
    zIndex: '1',
    marginBottom: '8px',
    '.MuiSelect-select': {
        padding: '6px 10px',
        borderRadius: '5px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: grey[400],
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: `2px solid ${green[500]}`,
    },
    '&:hover:not(.Mui-disabled):before': {
        borderBottom: `1px solid ${green[500]}`,
    },
    '&:after': {
        borderBottom: `1px solid ${green[500]}`,
    },
}

function getStyles(option, personName, theme) {
    return {
        fontWeight:
      personName.indexOf(option) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}

function MultiSelect(props) {
    const {
        options,
        errors,
        name,
        register,
        onChange,
    } = props;
    let showError = false;
    if (!_.isEmpty(errors)) {
        showError = !_.isEmpty(errors[name]);
    }
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
        onChange(value)
    };
    const handleDelete = (e, value) => {
        e.preventDefault()
        setPersonName(personName.filter((item) => item !== value))
    }
    return (
        <div>
            <FormControl error={showError} fullWidth>
                <Select
                    {...register}
                    name={name}
                    sx={style}
                    IconComponent={ExpandMoreSharpIcon}
                    fullWidth
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    multiple
                    input={<OutlinedInput />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip
                                    sx={{ borderRadius: '5px', height: '24px' }}
                                    key={value}
                                    label={value}
                                    clickable
                                    onDelete={(e) => handleDelete(e, value)}
                                    deleteIcon={(
                                        <CancelIcon
                                            onMouseDown={(e) => {
                                                e.stopPropagation()
                                            }}
                                        />
                                    )}
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {options.map((option) => (
                        <MenuItem
                            key={option.value}
                            value={option.label}
                            style={getStyles(option, personName, theme)}
                        >
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {
                    showError && <MessageError type={errors[name].type} message={errors[name].message} />
                }
            </FormControl>
        </div>
    );
}

MultiSelect.prototype = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    error: PropTypes.bool,
}
export default MultiSelect
