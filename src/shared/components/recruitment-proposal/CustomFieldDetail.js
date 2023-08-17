import React, { forwardRef, useEffect, useState } from 'react'
import styles from './CustomDetail.module.scss'

function CustomFieldDetail(props) {
  const { textTitle, valueForm } = props
  return (
    <div className={styles.itemBoxInfo}>
      <span className={styles['title__detail']}>{textTitle}</span>
      <p className={`${styles.itemRenderBox}`}>: {valueForm}</p>
    </div>
  )
}

export default CustomFieldDetail