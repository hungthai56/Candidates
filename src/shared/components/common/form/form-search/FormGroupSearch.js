import React from "react";
import styles from "./FormSearch.module.scss";

function FormGroupSearch(props) {
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
export default FormGroupSearch;
