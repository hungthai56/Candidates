import React, { useEffect } from 'react'
import styles from './styles.module.scss';
import Utils from './../../../../utils/Utils';
import Constants from './../../../../utils/Constants';
import IconEye from 'shared/components/icons/icon-eye';
import IconShare from 'shared/components/icons/icon-share';
import IconCommentHidden from 'shared/components/icons/icon-comment-hidden';
import IconCommentShow from 'shared/components/icons/icon-comment-show';
import IconLike from 'shared/components/icons/icon-like';
import IconOrderHistory from './../../icons/icon-order-history';
import { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP_HISTORY_REPORT } from 'utils/EventRegister';
import EventRegister from './../../../../utils/EventRegister';
import moment from 'moment';
import IconReport from './../../icons/icon-report';
import { useSelector, useDispatch } from 'react-redux';
import actionPost from './../../../../redux/post/action';
import Permission from 'utils/Permission';

export default function BoxInfo(props) {
    const { item } = props;
    const ReportList = useSelector(state => state.Post?.ReportPost);
    const dispatch = useDispatch();
    const handleViewReport = () => {
        dispatch({
            type: actionPost.GET_POST_REPORT_START,
            payload: {
                Limit: 20,
                Offset: 0,
                postId: props.postId
            }
        })
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: EVENT_SHOW_POPUP_HISTORY_REPORT,
            open: true,
            payload: {
                title: '',
                callback: (res) => {
                    dispatch({
                        type: actionPost.GET_POST_REPORT_START,
                        payload: {
                            ...res,
                            postId: props.postId
                        }
                    })
                },
                data: {
                    className: 'popup-history-report',
                    list: ReportList
                }
            },
        })
    }
    return (
        <>
            <div className='d-flex flex-row justify-content-between mb-2'>
                <p className={` ${styles.titleInfoBox}`}>Thông tin chung</p>
                {
                    Permission.IsEnabledFunction(Permission.FUNCTIONS.VIEW_REPORT_SOCIAL)
                    && <span className={`cursor-pointer d-flex flex-row justify-content-start align-items-center ${styles.titleRightBox}`}>
                        <IconOrderHistory />
                        <span onClick={handleViewReport} className='ml-2'>Xem lịch sử báo cáo</span>
                    </span>
                }
            </div>
            <div className="w-100 d-flex flex-row">
                <div className="w-100 d-flex flex-column">
                    {/* <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Mã bài viết</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;-------------</p>
                    </div> */}
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Mã khách hàng</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.CustomerId}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Tên khách hàng</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.FullName}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Thời gian đăng bài</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{moment(item?.CreatedAt).format("DD/MM/YYYY - HH:mm")}</p>
                    </div>
                </div>
                <div className="w-100 d-flex flex-column">
                    {/* <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Lượt xem</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.NumOfViews}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Lượt yêu thích</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.NumOfReactions}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Lượt bình luận</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.NumOfComments}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Lượt bình luận bị ẩn</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.NumOfCommentHidden}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Lượt share</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.NumOfShare}</p>
                    </div> */}
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Trạng thái</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{Utils.ConvertType(item?.Type)}</p>
                    </div>
                    <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Nội dung</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.Content}</p>
                    </div>
                    {/* <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                        <p>Ghi chú</p>
                        <p className={`${styles.itemRenderBox}`}>:&nbsp;Ghi chú bài viết chưa có</p>
                    </div> */}
                    {
                        item?.Type == Constants.STATUS_POST.STATUS_NOT_APPROVE && <div className={`d-flex flex-row ${styles.itemBoxInfo}`}>
                            <p>Lý do không duyệt</p>
                            <p className={`${styles.itemRenderBox}`}>:&nbsp;{item?.Reason}</p>
                        </div>
                    }
                </div>
            </div>
            {/* <div className='w-100 flex-row row mt-3 mx-0'>
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
                        <IconCommentShow />
                    </div>
                    <div className='d-flex flex-column align-items-end w-40'>
                        <p>{item?.NumOfComments}</p>
                        <span>Lượt bình luận</span>
                    </div>
                </div>
                <div className={`col-md py-4 mx-1 flex-row d-flex justify-content-between ${styles.columnInfoView}`}>
                    <div className={styles.columnInfoViewIcon}>
                        <IconCommentHidden />
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
            </div> */}
        </>
    )
}
