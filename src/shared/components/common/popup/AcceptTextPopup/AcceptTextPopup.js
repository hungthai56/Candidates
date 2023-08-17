import React from 'react'
import styles from './styles.module.scss'
import Button from '@mui/material/Button';
import HeadCommonPopup from '../component/HeadCommonPopup';
import LoadingButton from '../../button-loading/ButtonLoading';

export default function AcceptTextPopup(props) {
    const { payload, showVisible, config } = props;
    const handleClick = () => {
        if (typeof payload.callback == 'function') {
            // payload.callback()
        }
        showVisible(false)
    }

    const handleClickDelete = () => {
        if (typeof payload.callback == 'function') {
            payload.callback()
        }
        showVisible(false)
    }
    return (
        <div className={styles.RequestDeletePopup}>
            <HeadCommonPopup onHandleRight={() => {
                showVisible(false)
            }} content={"Xác nhận"} />
            <div
                style={{
                    padding: 20
                }}>
                <div className={styles['text']}>
                    {payload?.title}
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div >
                        <LoadingButton typeColor={"background-gray"} onClick={handleClick} color='success' variant="outlined">Thoát</LoadingButton>
                    </div>
                    <div className='ml-3'>
                        <LoadingButton className={"background-green"} onClick={handleClickDelete} color='success' variant="contained">Đồng ý</LoadingButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
