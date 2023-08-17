import React from 'react';
import styles from './CustomTable.module.scss';

function TableHeaderCustom(props) {
    const { Component } = props;
    return (
        <div
            className={`${styles['TableHeader']} _custom_scroll_header`}
            style={{ top: 50, borderTop: '1px solid rgb(209 209 209 / 78%)' }}
        >

            <Component />
        </div>
    );
}
export default TableHeaderCustom;