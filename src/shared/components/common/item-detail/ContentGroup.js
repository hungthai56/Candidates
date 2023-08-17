import React from 'react';
import styles from './ItemDetail.module.scss';

export default function ContentGroup(props) {
    return <div className={styles['content-group']}>
        {props.children}
    </div>;
}
