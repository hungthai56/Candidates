import React, { forwardRef, useEffect, useState } from 'react'
import styles from './CustomDetail.module.scss'

function CustomDetail(props) {
  const { Loader, imageTag = false, title, children } = props
  return (
    <div>
      <div className={styles['box__detail']}>
        <div className={styles['box__detail-title']}>
          <p className={`${styles.titleInfoBox}`}>{title}</p>
        </div>
        {imageTag ? (
          <div className={styles['box__detail-content']}>
            <div className={styles['box__detail-image']}>
              <img src={imageTag} alt="" />
            </div>
            <div className={styles['box__detail-view']}>
              {children}
            </div>
          </div>
        ) : (
          <div className={styles['box__detail-view']}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomDetail