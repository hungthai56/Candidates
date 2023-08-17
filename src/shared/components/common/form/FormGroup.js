import React from 'react';
import styles from "./Form.module.scss";

function FormGroup(props) {
    return (
        <div className={`${styles["group-form-container"]} ${props?.className}`}>
            {props?.title && <div className={styles['title']}><props.title /></div>}
            <div className={`${styles["group-form"]} ${props?.className}`}>
                {props.children}
            </div>
        </div>
    )
}
export default FormGroup;