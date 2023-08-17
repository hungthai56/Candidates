import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import Constants from './../../../../utils/Constants';
import { useHistory } from 'react-router';
import useQuery from 'hooks/use-query';
import { useSelector, useDispatch } from 'react-redux';
import actionComment from './../../../../redux/comment/action';
import Utils from './../../../../utils/Utils';
import { EVENT_SHOW_POPUP_COMMENT, EVENT_SHOW_POPUP_DELETE } from './../../../../utils/EventRegister';
import OptionBottom from './../../common/table/OptionBottom/OptionBottom';
import moment from 'moment';
import WaringPost from './../../social/WaringPost/WaringPost';
import TabTable from 'shared/components/common/tab-table/TabTable';
import WrapLoading from 'shared/components/common/wrap-loading/WrapLoading';
import ProductTableLoader from 'shared/components/common/loading-skeleton/product-table-loader/ProductTableLoader';
import CustomTable from 'shared/components/common/custom-table/CustomTable';
import Button from 'shared/components/common/button/Button';
import CustomPagination from 'shared/components/common/pagination/custom-pagination';
import ButtonCommon from 'shared/components/common/button/ButtonCommon';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import useRouterV2 from 'hooks/use-router-v2';
import Permission from 'utils/Permission';

export default function BoxComment(props) {
    const history = useHistory()
    const dataComment = useSelector(state => state.Comment?.CommentList);
    const { loading } = useSelector(state => state.Comment);
    const [selected, setSelected] = useState([]);
    const [value, setValue] = React.useState(0);
    let query = useQuery();
    const router = useRouterV2();

    const dispatch = useDispatch();
    // const getType = (e) => {
    //     switch (e) {
    //         case 1:
    //             return Constants.STATUS_COMMENT.HIDDEN;
    //         case 2:
    //             return Constants.STATUS_COMMENT.STATUS_REPORT
    //         default:
    //             return Constants.STATUS_COMMENT.ALL;
    //     }
    // }
    // const getTypeConvert = (e) => {
    //     switch (e) {
    //         case Constants.STATUS_COMMENT.HIDDEN:
    //             return 1;
    //         case Constants.STATUS_COMMENT.STATUS_REPORT:
    //             return 2
    //         default:
    //             return 0;
    //     }
    // }
    useEffect(() => {
        if (query.get(Constants.ROUTER_URL.TYPE)) {
            setValue(Number((query.get(Constants.ROUTER_URL.TYPE))))
        } else {
            setValue(0)
        }
    }, [query])

    const handleChange = (newValue) => {
        setValue(newValue)
        // let params = `${Constants.ROUTER_URL.PAGE}=1`;
        // params += `&${Constants.ROUTER_URL.TYPE}=${(newValue)}`
        // if (query.get(Constants.ROUTER_URL.TAB_CHILD)) {
        //     params += `&${Constants.ROUTER_URL.TAB_CHILD}=${query.get(Constants.ROUTER_URL.TAB_CHILD)}`
        //     params += `&${Constants.ROUTER_URL.TAB}=2`
        // }
        // history.replace({
        //     search: params
        // })

        router.replace({
            params: {
                ...router.getAll(),
                [Constants.ROUTER_URL.TYPE]: newValue
            }
        })

    }
    const TabPanelData = [
        {
            id: 0,
            text: Constants.TEXT_COMMENT.ALL,
            type: Constants.STATUS_COMMENT.ALL
        },
        {
            id: 1,
            text: Constants.TEXT_COMMENT.STATUS_HIDDEN_COMMENT,
            type: Constants.STATUS_COMMENT.HIDDEN
        },
        {
            id: 2,
            text: Constants.TEXT_COMMENT.STATUS_REPORT,
            type: Constants.STATUS_COMMENT.STATUS_REPORT
        }
    ]

    const handleSelected = (data) => {
        setSelected(data);
    }

    const headCellsComment = [
        {
            id: 'CreateDate',
            numeric: '1',
            disablePadding: false,
            label: 'Thời gian bình luận',
            minWidth: 150,
            code: '1',
            field: 'CreatedAt',
            type: Constants.TYPE_RENDER_TABLE.DATE,
            align: "left",
            component: (props) => {
                return <>{moment(props.children).format("DD/MM/YYYY")}</>
            }
        },
        {
            id: 'FullName',
            numeric: '1',
            disablePadding: false,
            label: 'Tên tài khoản',
            minWidth: 150,
            code: '2',
            field: 'FullName',
            type: Constants.TYPE_RENDER_TABLE.TEXT,
            align: "left"
        },
        {
            id: 'Content',
            numeric: '1',
            disablePadding: false,
            label: 'Nội dung bình luận',
            minWidth: 600,
            code: '3',
            field: 'Content',
            type: Constants.TYPE_RENDER_TABLE.TEXT,
            align: "left"
        },
        {
            id: 'Warning',
            numeric: '2',
            disablePadding: false,
            label: 'Cảnh báo',
            minWidth: 100,
            code: '4',
            field: 'Warning',
            type: Constants.TYPE_RENDER_TABLE.TEXT,
            align: "center",
            component: (props) => {
                return props.children == "True" && <WaringPost />
            }
        },
        {
            id: 'hiddenIcon',
            numeric: '2',
            disablePadding: false,
            minWidth: 150,
            label: 'Hoạt động',
            textAlign: 'center',
            code: '5',
            field: 'Status',
            type: Constants.TYPE_RENDER_TABLE.TEXT,
            align: "center",
            component: ({ data }) => {
                return <>
                    {data["Status"] == Constants.STATUS_COMMENT.SHOW ?
                        <LoadingButton
                            disabled={!Permission.IsEnabledFunction(Permission.FUNCTIONS.HIDDEN_COMMENT_SOCIAL)} className={styles.ButtonTable} onClick={(event) => {
                                handleClickChangeStatus(event, data?.Id, Constants.STATUS_COMMENT.HIDDEN)
                            }
                            } isOutlined typeColor='background-red'>Ẩn</LoadingButton>
                        :
                        <LoadingButton
                            disabled={!Permission.IsEnabledFunction(Permission.FUNCTIONS.SHOW_COMMENT_SOCIAL)} className={styles.ButtonTable} onClick={(event) => {
                                handleClickChangeStatus(event, data?.Id, Constants.STATUS_COMMENT.SHOW)
                            }
                            } isOutlined typeColor='background-green'>Bỏ ẩn</LoadingButton>}
                </>
            }
        }
    ]
    const handleClickChangeStatus = (e, id, status) => {
        dispatch({
            type: actionComment.SHOW_OFF_COMMENT_POST_START,
            payload: {
                CommentId: id,
                Type: status,
                PostId: props.postId,
                Data: query
            }
        })
    }

    const handleDeleteComment = () => {
        Utils.alertPopup(Constants.TITLE_POPUP.DELETE_COMMENT, EVENT_SHOW_POPUP_DELETE, () => {
            dispatch({
                type: actionComment.DELETE_COMMENT_POST_START,
                payload: {
                    PostId: props?.postId,
                    CommentId: selected.join()
                },
                callback: () => {
                    setSelected([])
                }
            })
        })
    }
    const handleShowComment = () => {
        Utils.alertPopup("hiện", EVENT_SHOW_POPUP_COMMENT, () => {
            dispatch({
                type: actionComment.SHOW_OFF_COMMENT_POST_START,
                payload: {
                    PostId: props?.postId,
                    CommentId: selected.join(),
                    Data: query,
                    Type: Constants.STATUS_COMMENT.SHOW,
                },
                callback: () => {
                    setSelected([])
                }
            })
        })
    }
    const handleHiddenComment = () => {
        Utils.alertPopup("ẩn", EVENT_SHOW_POPUP_COMMENT, () => {
            dispatch({
                type: actionComment.SHOW_OFF_COMMENT_POST_START,
                payload: {
                    PostId: props?.postId,
                    CommentId: selected.join(),
                    Data: query,
                    Type: Constants.STATUS_COMMENT.HIDDEN,
                },
                callback: () => {
                    setSelected([])
                }
            })
        })
    }

    return (
        <div className={`${styles.boxComment}`}>
            <p className={`${styles.titleInfoBox}`}>Quản lý bình luận</p>
            <div className={styles.contentCommentBox}>
                <TabTable
                    marginTop={false}
                    handleChange={handleChange}
                    value={Number(value)}
                    tabTable={TabPanelData}
                />
                <WrapLoading
                    loading={loading}
                    Loader={() => <ProductTableLoader />}
                >
                    <CustomTable
                        headerColumn={headCellsComment}
                        data={dataComment?.ListComments ?? []}
                        isShowCheckBox
                        componentHeadCell={<div style={{
                            pointerEvents: 'fill',
                            cursor: 'pointer'
                        }}> <OptionBottom
                                handleDelete={handleDeleteComment}
                                handleHidden={handleHiddenComment}
                                handleShow={handleShowComment}
                                isShowDelete={false}
                                isShowShow={true || query.get(Constants.ROUTER_URL.TYPE) == Constants.STATUS_COMMENT.HIDDEN}
                                isShowHidden={true && query.get(Constants.ROUTER_URL.TYPE) != Constants.STATUS_COMMENT.HIDDEN}
                            /></div>}
                        handleOnCheckBox={handleSelected}
                        selectedCheckBox={selected}
                        fieldId="Id"
                    />
                </WrapLoading>
                {selected.length > 0 && <div className='mt-3'>

                </div>}
                <CustomPagination setSelected={setSelected} Total={dataComment?.Total || 0} />
            </div>
        </div>
    )
}
