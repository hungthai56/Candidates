import React, { forwardRef, useEffect, useState } from "react";
import styles from "./CustomDetail.module.scss";
import IcCheck from "../../../assets/images/icons/ic-check";
import IcClose from "../icons/ic-close";
import Constants from "utils/Constants";

function ChangeStatusDetail(props) {
  const { titleCheck, titleClose, itemCheck, ChangeStatus } = props;
  return (
    <div className={styles["box__status"]}>
      <div className={styles["box__status-change"]}>
        <button
          disabled={itemCheck}
          onClick={() => {
            ChangeStatus(Constants.STATUS_POST.STATUS_APPROVE);
          }}
          className={styles[("icon__check", "button__icon")]}
        >
          <IcCheck />
          <span>{titleCheck}</span>
        </button>
        <button
          disabled={itemCheck}
          onClick={() => {
            ChangeStatus(Constants.STATUS_POST.STATUS_NOT_APPROVE);
          }}
          className={styles[("icon__close", "button__icon")]}
        >
          <IcClose />
          <span>{titleClose}</span>
        </button>
      </div>
    </div>
  );
}

export default ChangeStatusDetail;
