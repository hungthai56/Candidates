import React from 'react';
import styles from './ItemDetail.module.scss';
export default function ContentItem(props) {
    return (
        <div className={styles["content-info-list"]}>
            <div className={styles["content-item"]}>
                <div className={styles["key"]}>
                    {props?.title}
                </div>
                <div>:</div>
            </div>
            <div className={styles["value"]}>
                {props?.value}
            </div>
        </div>
    );
}
