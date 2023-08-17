import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import Utils from '../../../../utils/Utils';
import Constants from '../../../../utils/Constants';
import IconEye from 'shared/components/icons/icon-eye';
import IconShare from 'shared/components/icons/icon-share';
import IconCommentHidden from 'shared/components/icons/icon-comment-hidden';
import IconCommentShow from 'shared/components/icons/icon-comment-show';
import IconLike from 'shared/components/icons/icon-like';
import IconOrderHistory from '../../icons/icon-order-history';
import { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP_HISTORY_REPORT } from 'utils/EventRegister';
import EventRegister from '../../../../utils/EventRegister';
import moment from 'moment';
import IconReport from '../../icons/icon-report';
import { useSelector, useDispatch } from 'react-redux';
import actionPost from '../../../../redux/post/action';

export default function BoxInfoBottom(props) {
    const { item }=props;
    const  ReportList=useSelector(state=>state.Post?.ReportPost);
    const dispatch=useDispatch();
    const handleViewReport=()=>{
        dispatch({
            type:actionPost.GET_POST_REPORT_START,
            payload:{
                Limit:20,
                Offset:0,
                postId:props.postId
            }
        })
        EventRegister.emit(EVENT_SHOW_POPUP,{
            type:EVENT_SHOW_POPUP_HISTORY_REPORT,
            open: true,
            payload: {
                title: '',
                callback: (res) => {
                    dispatch({
                        type:actionPost.GET_POST_REPORT_START,
                        payload:{
                            ...res,
                            postId:props.postId
                        }
                    })
                },
                data:{
                    className:'popup-history-report',
                    list:ReportList
                }
            },
        })
    }
    return (
        <>
            <div className='w-100 flex-row row mx-0'>
                <div className={`col-md py-4  mr-1  flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconEye />
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfViews}</p>
                        <span>Lượt xem</span>
                    </div>
                </div>
                <div className={`col-md py-4 mx-1  flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconLike />
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfReactions}</p>
                        <span>Lượt yêu thích</span>
                    </div>
                </div>
                <div className={`col-md py-4 mx-1  flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconCommentShow fill="#138300" />
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfComments}</p>
                        <span>Lượt bình luận</span>
                    </div>
                </div>
                <div className={`col-md py-4 mx-1 flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconCommentHidden fill="#138300"/>
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfCommentHidden}</p>
                        <span>Lượt bình luận bị ẩn</span>
                    </div>
                </div>
                <div className={`col-md py-4 ml-1  flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconShare />
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfShare}</p>
                        <span>Lượt chia sẻ</span>
                    </div>
                </div>
                <div className={`col-md py-4 ml-1  flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconReport />
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfReport}</p>
                        <span>Lượt bài viết báo cáo</span>
                    </div>
                </div>
            </div>
        </>
    )
}
