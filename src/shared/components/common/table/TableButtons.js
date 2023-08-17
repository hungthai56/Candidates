import React from 'react';
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

import { makeStyles } from '@material-ui/core/styles';
import {
    IcExport,
    IcImport,
    IcDepartment,
    IcCalendar,
} from 'assets/images/icons/icon-list'

const DrawerHeader = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // '& .MuiIconButton-root': {
    //   marginLeft: '10px',
    // },
    '$ .p': {
        fontSize: '14px',
        fontWeight: '400',
        color: '#333333',
    },
    maxHeight: '53px',
}))

const Text = styled('text')(() => ({
    fontSize: '12px',
    lineHeight: '14.46px',
    color: '#333333',
    fontWeight: '300',
    // paddingTop: '2px',
}))

const useStyles = makeStyles(() => ({
    iconButton: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px',
        margin: 0,
    },
}));

function TableButtons(props) {
    const {} = props

    const onClickCalendar = () => {

    }
    const classes = useStyles();

    return (
        <DrawerHeader>
            <IconButton
                onClick={onClickCalendar}
                className={classes.iconButton}
            >
                <div className="min-height-28">
                    <IcCalendar />
                </div>
                <Text>Thời gian</Text>
            </IconButton>
            <IconButton onClick={onClickCalendar} className={classes.iconButton}>
                <div className="min-height-28">
                    <IcDepartment />
                </div>
                <Text>Phòng ban</Text>
            </IconButton>
            <IconButton onClick={onClickCalendar} className={classes.iconButton}>
                <div className="min-height-28">
                    <IcImport />
                </div>
                <Text>Import</Text>
            </IconButton>
            <IconButton onClick={onClickCalendar} className={classes.iconButton}>
                <div className="min-height-28">
                    <IcExport />
                </div>
                <Text>Export</Text>
            </IconButton>
        </DrawerHeader>
    )
}

export default TableButtons
