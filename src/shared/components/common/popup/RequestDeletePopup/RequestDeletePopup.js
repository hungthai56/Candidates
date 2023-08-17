import React from 'react'
import styles from './styles.module.scss'
import Button from '@mui/material/Button';

export default function RequestDeletePopup(props) {
    const { payload, showVisible, config } = props;
    const handleClick = () => {
        if (typeof payload.callback == 'function') {
            // payload.callback()
        }
        showVisible(false)
    }

    const handleClickDelete=()=>{
        if (typeof payload.callback == 'function') {
            payload.callback()
        }
        showVisible(false)
    }
    return (
        <div className={styles.RequestDeletePopup}>
            <div className={styles.TextTitleCancelPostPopup}>
                {payload?.title}
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                }}>
                <div >
                    <Button className={styles.buttonPopup} onClick={handleClick} color='success' variant="outlined">Thoát</Button>
                </div>
                <div className='ml-3'>
                    <Button className={styles.buttonPopup} onClick={handleClickDelete} color='success' variant="contained">Xoá</Button>
                </div>
            </div>
        </div>
    )
}
