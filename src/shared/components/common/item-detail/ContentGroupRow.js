import React from 'react';
import styles from './ItemDetail.module.scss';

export default function ContentGroupRow(props) {
    return <div className={styles['content-group-row']}>
        {props.children}
    </div>;
}
