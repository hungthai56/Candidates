import React from 'react';
import styles from "./FormSearch.module.scss"

function FormActionSearch (props) {
    return (
        <div className={`${styles["form-action-search"]} ${props?.className}`}>
            {
                props.children
            }
        </div>
    )
}
export default FormActionSearch;