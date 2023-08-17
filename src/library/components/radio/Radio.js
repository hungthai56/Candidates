import React from 'react';
import Radio from '@mui/material/Radio'
import { RadioIcon, IconCheck } from 'library/components/assets/icons/index'

const style = {
    width: '100%',
    marginTop: '-10px',
    fontSize: 14,
    paddingRight: '10px',
    zIndex: '1',
}
export default function MyRadio(props) {
    const { label, value } = props

    return (
        <div>
            <Radio

                label={label}
                value={value}
                icon={<RadioIcon />}
                checkedIcon={<IconCheck />}
                sx={style}
            />
        </div>
    )
}
