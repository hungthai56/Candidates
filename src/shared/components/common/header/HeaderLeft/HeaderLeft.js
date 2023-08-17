import React from 'react';
import styles from './HeaderLeft.module.scss';
import IconSetting from './../../../icons/icon-setting';
import IconPlus from '../../../../../assets/images/icons/ic-elip';
import IconRowRight from './../../../icons/icon-row-right';
import { Popover } from '@mui/material';

export default function HeaderLeft(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOnClick = (onClick) => {
        onClick();
        handleClose();
    };
    const openDropDown = Boolean(anchorEl);
    const id = openDropDown ? 'simple-popover' : undefined;
    return (
        <>
            <div
                className={`d-flex flex-row align-items-center ${styles.HeaderLeft}`}
                style={{ marginLeft: '10px', position: 'relative' }}
            >
                <div onClick={handleClick} className={styles.iconHeaderSetting}>
                    <IconPlus />
                </div>
                {props?.menuLeft && (
                    <Popover
                        id={id}
                        open={openDropDown}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        sx={{
                            marginLeft: '0px',
                            top: 20,
                        }}
                        disableScrollLock
                        anchorOrigin={{
                            vertical: 'center',
                        }}
                    >
                        {props?.menuList?.map((value, index) => {
                            return (
                                <p
                                    style={{cursor: "pointer", padding: 10}}
                                    key={value.title}
                                    onClick={() => handleOnClick(value.onClick)}
                                >
                                    {value?.title}
                                </p>
                            );
                        })}
                    </Popover>
                )}
                <p className={styles.titleSystem}>Hệ thống </p>
                <p className={styles.line}></p>
                <div className="d-flex flex-row align-items-center justify-content-start">
                    <p className={`mr-2 ml-3 ${styles.title}`}>WEB/APP</p>
                    <IconRowRight height={10} />
                    <p className={`ml-2 ${styles.title}`}>{props?.titleLeft} {props?.iconRowRight} {props?.titleBreadCrum}</p>
                </div>
            </div>
        </>
    );
}
