import IcRemove from 'assets/icon/IcRemove';
import React from 'react'
import classes from './HeaderTable.module.scss';

export default function ActionDelete(props) {
    return (
        <div onClick={props?.onClick} className={classes['action-detail']}>
            <IcRemove  fontSize={16} color="white" />
        </div>
    )
}
