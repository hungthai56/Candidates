import React, { forwardRef, useEffect, useState } from 'react'
import styles from './CustomDetail.module.scss'

function CustomTableDetail(props) {
  const { title, children } = props
  return (
    <div className={styles['table__detail']}>
      <div className={styles['table__detail-title']}>
          <p>{title}</p>
        </div>
      <div className={styles['table__detail-view']}>
        {children}
      </div>
    </div>
  )
}

export default CustomTableDetail