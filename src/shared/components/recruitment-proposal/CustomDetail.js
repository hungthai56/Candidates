import React, { forwardRef, useEffect, useState } from 'react'
import styles from './CustomDetail.module.scss'

function CustomDetail(props) {
  const { Loader, title, children } = props
  return (
    <div className={styles['box__detail']}>
      <div className={styles['box__detail-title']}>
        <p className={`${styles.titleInfoBox}`}>{title}</p>
      </div>
      <div className={styles['box__detail-view']}>
        {children}
      </div>
    </div>
  )
}

export default CustomDetail