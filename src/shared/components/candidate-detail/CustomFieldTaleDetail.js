import React, { forwardRef, useEffect, useState } from 'react'
import styles from './CustomDetail.module.scss'
import moment from "moment";

function CustomFieldTaleDetail(props) {
  const { titleHead, textContent, expContent, setValueData, School, Type } = props
  return (
    <table className={styles['table']}>
      <thead>
        <th>
          {titleHead.map((value, index, array) => {
            return (
              <td>{value}</td>
            )
          })}
        </th>
      </thead>
      <tbody>
        {textContent ? (
          textContent.map((itemList, id) => {
            return <tr>
              <td>{setValueData(Type, itemList.Type)}</td>
              <td>{setValueData(School, itemList.ModeOfStudy)}</td>
              <td>{itemList.School}</td>
              <td>{itemList.Major}</td>
            </tr>
          })
        ) : (
          expContent && expContent.map((itemChange, id) => {
            return <tr>
              <td>{moment(itemChange.TimeStart).format('DD/MM/YYYY')}</td>
              <td>{moment(itemChange.TimeEnd).format('DD/MM/YYYY')}</td>
              <td>{itemChange.CompanyName}</td>
              <td>{itemChange.Position}</td>
            </tr>
          })
        )}
      </tbody>
    </table>
  )
}

export default CustomFieldTaleDetail