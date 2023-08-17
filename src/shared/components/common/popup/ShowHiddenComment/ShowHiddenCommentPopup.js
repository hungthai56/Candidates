import React from 'react'
import styles from './ShowComment.module.scss'
import Button from '@mui/material/Button';
import HeadCommonPopup from '../component/HeadCommonPopup';
import LoadingButton from '../../button-loading/ButtonLoading';

export default function ShowHiddenCommentPopup(props) {
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
        <div>
            <HeadCommonPopup onHandleRight={()=>{
                showVisible(false)
            }} content={"Xác nhận"} />
            <div className={styles.RequestDeletePopup}>
                <div className={styles.TextTitleCancelPostPopup}>
                    Bạn muốn {payload?.title} bình luận này ?
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}>
                    <div >
                        <LoadingButton typeColor='background-gray' onClick={handleClick} color='success' variant="outlined">Thoát</LoadingButton>
                    </div>
                    <div className='ml-3'>
                        <LoadingButton onClick={handleClickDelete} color='success' variant="contained">Đồng ý</LoadingButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
