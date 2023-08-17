import React from 'react'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import IconDelete from 'shared/components/icons/icon-delete';

export default function BoxDelete(props) {
    const history=useHistory()

    return (
        <div className='d-flex flex-row justify-content-start align-items-center cursor-pointer'>
            <span className='cursor-pointer'>
                <IconDelete />
            </span>
        </div>
    )
}
