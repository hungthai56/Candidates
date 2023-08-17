import React from 'react';
import styles from "./Form.module.scss"

function FormItem (props) {
    return (
        <div className={`${styles["form-item"]} ${props?.className}`} style={{...props?.style}}>
            {
                props.children
            }
        </div>
    )
}
export default FormItem;