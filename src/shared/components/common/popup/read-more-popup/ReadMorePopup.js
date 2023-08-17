import React, { useEffect } from 'react';
import HeadCommonPopup from '../component/HeadCommonPopup';
import styles from './ReadMorePopup.module.scss';
import { Typography } from '@mui/material';
import LoadingButton from '../../button-loading/ButtonLoading';

export default function ReadMorePopup(props) {
    const { payload, showVisible } = props;
    const onClose = () => {
        showVisible(false);
    };
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            e.key === 'Escape' && onClose(false);
        });
        return () => {
            document.removeEventListener('keydown', (e) => e);
        };
    }, []);
    return (
        <>
            <div style={{
                width : payload?.data?.width 
            }} className={styles.PromotionTestPopup}>
                <HeadCommonPopup onHandleRight={onClose} content={payload?.title ?? "Nội dung"} />
                <div className={styles.main}>
                    {payload?.data?.ReadMore ? (
                        <>
                            {payload?.data?.isRender ? (
                                <div
                                    className={styles.lineHeight}
                                    dangerouslySetInnerHTML={{
                                        __html: payload?.data?.content,
                                    }}
                                ></div>
                            ) : (
                                <div className={styles.lineHeight}>
                                    {payload?.data?.content}
                                </div>
                            )}
                        </>
                    ) : (
                        <Typography
                            style={{
                                whiteSpace: 'inherit',
                                overflow: 'scroll',
                                maxWidth: 750,
                                maxHeight: 500,
                                fontSize: 14,
                            }}
                            dangerouslySetInnerHTML={{
                                __html: payload?.props?.children,
                            }}
                        />
                    )}
                </div>
                <div className="m-3 d-flex justify-content-end align-items-end">
                    <LoadingButton typeColor="background-gray" onClick={onClose}>
                        Đóng
                    </LoadingButton>
                </div>
            </div>
        </>
    );
}
