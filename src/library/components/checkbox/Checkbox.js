import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from '@mui/icons-material/Check';
import { IcOutlineCheckbox } from '../assets/icons/index'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomCheckbox({ onChange, value }) {
    return (
        <div>
            <Checkbox
                {...label}
                // icon={<IcOutlineCheckbox />}
                // checkedIcon={<CheckIcon />}
                onChange={(e) => onChange(e.target.checked)}
                checked={value}
                size="medium"
                sx={{
                    '&.Mui-checked': {
                        color: '#138300',
                    },
                }}
            />
        </div>
    );
}
