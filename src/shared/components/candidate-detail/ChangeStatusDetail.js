import React, { forwardRef, useEffect, useState } from 'react'
import styles from './CustomDetail.module.scss'
import IcClose from '../icons/ic-close'
import IcRenew from '../icons/ic-renew'
import { useDispatch, useSelector } from 'react-redux';
import Constants from 'utils/Constants'
import Box from 'shared/components/common/box/Box';
import action from '../../../redux/candidate-manager/action';
import PropTypes from 'prop-types';

function ChangeStatusDetail(props) {
  const { titleCheck, itemCheck, statusId, statusList, id, valueChangeButton, value,
    handleChangeList,
    tabTable,
    showQuantity = false,
    marginTop = false,
    iconRight } = props
  const [IsClick, setIsClick] = useState(false);
  const dispatch = useDispatch()

  const objectArray = Object.entries(statusList);
  let [statusKey, setStatusKey] = useState(statusId)
  let arr = []
  objectArray.forEach(st => {
    arr.push({ 'value': st[0], 'label': st[1] })
  }, []);
  let statusDefault = {}
  arr.forEach(status => {
    if (status.value == statusKey) {
      statusDefault = status
    }
  });
  let colorset = ''
  Constants.STATUS_HANDLE.forEach(color => {
    if (color.value == statusKey) {
      colorset = color.color
    }
  });

  const handleChange = (e) => {
    setStatusKey(e)
    valueChangeButton(e)
    dispatch({
      type: action.CHANGE_STATUS_CANDIDATE,
      payload: {
        "Id": Number(id),
        "Status": e,
        "Note": ""
      },
    });
  }

  const handleClickSelectBox = () => {
    setIsClick(!IsClick);
  }

  function capitalizeFirstLetter(s) {
    s = s?.toLowerCase();
    return (s = s.charAt(0).toUpperCase() + s.slice(1));
  }
  return (
    <div style={{position: "relative"}} className={`${styles.listProductTable} ${marginTop ? 'mt-3' : ''}`}>
      <Box className={`list-product-tablebox-order d-flex flex-row`}>
        <div className="d-flex flex-row">
          <div className={styles.tabList}>
            {tabTable.map((x, key) => {
              return (
                <div
                  className={`${styles.tabListItem} ${value == x.id
                    ? styles.tabListActive
                    : ''
                    }`}
                  key={key}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChangeList(x.id);
                  }}
                >
                  {capitalizeFirstLetter(x?.text)}
                  {showQuantity && (
                    <span
                      className={`${value == x.id
                        ? styles.active
                        : ''
                        }`}
                    >
                      {x?.number}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className={styles.tabListIcon}>
            {iconRight}
          </div>
        </div>

        <div className={styles['box__status-change']}>
          {/* disabled={itemCheck} */}
          <button onClick={() => { handleClickSelectBox() }} className={styles['icon__check', 'button__icon']}>
            <IcRenew />
            <span>{titleCheck}</span>
          </button>
        </div>
        <div iv className={`${styles["drop_box_status"]} ${IsClick ? styles["show"] : styles["hide"]}`} >
          {arr && arr.map((opt_item, key) => {
            return (
              <div key={key} className={`${styles["selectbox_item"]} ${opt_item.value === statusDefault.value ? styles["selected"] : ""}`} onClick={() => { handleChange(opt_item.value), handleClickSelectBox() }}>{opt_item.label}</div>
            )
          })}
        </div>
      </Box>

    </div>
  )
}

ChangeStatusDetail.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func,
  tabTable: PropTypes.array,
  quantity: PropTypes.number,
  showQuantity: PropTypes.bool,
  marginTop: PropTypes.bool,
};
export default ChangeStatusDetail