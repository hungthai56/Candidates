import { Divider, Popover } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import IcConfig from 'assets/icon/IcConfig';
import React, { Fragment } from 'react';
import styles from './ConfigButton.module.scss';

export default function ConfigButton (props) {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget)
        event.stopPropagation();

    }
    const handleClose = (e) => {
        setAnchorEl(null)
        e.stopPropagation();
    }

    const openDropDown = Boolean(anchorEl)
    const id = openDropDown ? 'simple-popover' : undefined
    const renderItem = (item) => {
        switch (item?.type) {
            case 'divider':
                return <Divider />
            default:
                return <MenuItem
                    style={{ minWidth: 130, gap: 15, paddingLeft: 5, paddingRight: 5 ,fontSize: 14}}
                    onClick={(e) => {
                        e.preventDefault();
                        !item?.isDisabled && handleClose(e);
                        !item?.isDisabled && item.onClick(e);
                        e.stopPropagation();
                    }}
                    disableRipple
                    disabled={item?.isDisabled}
                >
                    {item.icon}
                    {item.title}
                </MenuItem>
        }
    }
    return (
        <>
            <div className={`d-flex flex-row align-items-center ${styles.container}`} style={{ position: 'relative' }}>
                {
                    props?.icon && <div onClick={handleClick} className={styles.iconHeaderSetting}>
                        {props?.icon}
                    </div>
                }
                <Popover
                    id={id}
                    open={openDropDown}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    sx={{
                        marginLeft: '0px',
                        top: 5,
                    }}
                    disableScrollLock
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{ 
                        vertical: 'top', 
                        horizontal: 'right', 
                    }}
                >
                    <div style={{
                        padding: 10,
                        fontSize: 14
                    }}>
                        {props?.menuList?.map((item, key) => {
                            return <Fragment key={key}>
                                {renderItem(item)}
                            </Fragment>
                        })}
                    </div>
                </Popover>
            </div>
        </>
    )
}
ConfigButton.defaultProps = {
    icon: <IcConfig />,
    menuList: [

    ]
}