import React, { forwardRef, useEffect, useState } from 'react'
import styles from "./CustomHeadCell.module.scss"
import IcKanban from "shared/components/icons/ic-kanban"

const changeKanban = (event) => {
    console.log(event)
}
export default function Kanban(props) {
    const { title } = props
    return (
        <div className={styles["kanban_container"]}>
            <p className={styles['text_kanban']}>{title}</p>
            <button className={styles['btn_kanban']} onClick={changeKanban}><IcKanban /> <p>Kanban</p></button>
        </div>
    )
}

