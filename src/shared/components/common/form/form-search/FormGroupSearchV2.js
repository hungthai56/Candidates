import React from "react";
import styles from "./FormSearchV2.module.scss";

function FormGroupSearchV2(props) {
  return (
    <div
      className={`${styles["group-form-search"]} ${
        props.isWrap ? styles["form-wrap"] : "form-no-wrap"
      } ${props?.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
}
export default FormGroupSearchV2;
