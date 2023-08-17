import React from 'react';
import styles from "./Form.module.scss"

function FormAction (props) {
    return (
        <div className={`${styles["form-action"]} ${props?.className}`}>
            {
                props.children
            }
        </div>
    )
}
export default FormAction;