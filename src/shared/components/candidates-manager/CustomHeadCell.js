
import FormInput from 'shared/components/common/custom-form/FormInput'
import React, { forwardRef, useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import Constants from '../../../utils/Constants';
import { useHistory } from 'react-router';
import styles from "./CustomHeadCell.module.scss";
import Utils from 'utils/Utils';
import IcDrop from '../../components/icons/ic-drop'
import action from '../../../redux/candidate-manager/action';

function CustomHeadCell(props) {
  const { type, dataId, arrayFill, arrSelect, setStatusKey } = props
  const [IsClick, setIsClick] = useState(false);
  const [arrFill, setArrFill] = useState([]);

  const dispatch = useDispatch()
  const handleClickSelectBox = () => {
    setIsClick(!IsClick);
  }
  useEffect(() => {
    setArrFill(arrayFill)
  }, [arrayFill])

  const handleChange = (e, id) => {
    setStatusKey(e)
    dispatch({
      type: action.CHANGE_STATUS_CANDIDATE,
      payload: {
        "Id": id,
        "Status": e,
        "Note": ""
      },
    });
  }
  return (
    <div className={styles['change_status']} onClick={handleClickSelectBox}>
      <div className={styles['selectbox']}>
        <div className={styles['select__button']} style={{ background: arrFill[0] }}>{arrFill[2]}</div>
        <span className={`${styles['icon__drop']} ${IsClick ? styles["roll_icon"] : ""}`}><IcDrop /></span>
      </div>
      <div className={`${styles["selectbox_list"]} ${IsClick ? styles["show"] : styles["hide"]}`} >
        {arrSelect && arrSelect.map((opt_item, key) => {
          return (
            <div key={key} className={`${styles["selectbox_item"]} ${opt_item.value === arrFill[1] ? styles["selected"] : ""}`} onClick={() => { handleChange(opt_item.value, dataId) }}>{opt_item.label}</div>
          )
        })}
      </div>
    </div>
  )
}
export default CustomHeadCell

