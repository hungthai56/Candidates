import React, { useState } from 'react'
import HeadCommonPopup from './../component/HeadCommonPopup';
import PersonalTable from './../../table/CommonTable/CommonTable';
import { useHistory } from 'react-router';
import styles from './HistoryReportPopup.module.scss';
import moment from 'moment';
import CustomSearch from './CustomSearch';
import CustomPaginationPopup from './../../../pagination/custom-pagination-popup';
import Constants from './../../../../../utils/Constants';
import { useSelector } from 'react-redux';

export default function HistoryReportPopup(props) {
    let headCells = [
        {
            id: 'Stt',
            numeric: '2',
            disablePadding: false,
            label: '#',
            minWidth: 50,
            maxWidth: 50,
            code: '1',
            field: 'Id',
            align: "center",
            component: (props) => {
                return <>{props?.stt + 1}</>
            }
        },
        {
            id: 'CreateAt',
            numeric: '1',
            disablePadding: false,
            label: 'Thời gian báo cáo',
            minWidth: 100,
            code: '2',
            field: 'CreatedAt',
            align: "center",
            component: (props) => {
                return <>{moment(props.children).format("DD/MM/YYYY")}</>
            }
        },
        {
            id: 'FullName',
            numeric: '1',
            disablePadding: false,
            label: 'Tên tài khoản',
            minWidth: 100,
            code: '3',
            field: 'FullName',
            align: "left",
        },
        {
            id: 'Status',
            numeric: '2',
            disablePadding: false,
            label: 'Trạng thái',
            minWidth: 150,
            code: '3',
            field: 'Status',
            align: "center",
            component: (props) => {
                return <>{ConvertStatusReport(props.children)}</>
            }
        },
        {
            id: 'Content',
            numeric: '1',
            disablePadding: false,
            label: 'Lý do',
            minWidth: 350,
            code: '4',
            field: 'Content',
            align: "left",
        },
    ]
    const { payload, showVisible, config } = props;
    const history = useHistory();
    const [filter, setFilter] = useState({
        Reason: '',
        TimeFrom: '',
        TimeTo: '',
        Username: '',
        Type: '',
        Offset: Constants.PRODUCT_LIST_PAGINATION.OFFSET,
        Limit: Constants.PRODUCT_LIST_PAGINATION.LIMIT
    })

    const onSubmit = () => {
        showVisible(false);
        handleClose()
    }

    const handleClose = () => {
        showVisible(false);
        let params = {};
        history.replace({
            search: params
        })
        setFilter({
            Reason: '',
            Limit: 0,
            Offset: 0,
            TimeFrom: '',
            TimeTo: '',
            Type: '',
            Username: ''
        })
    }

    const dataListReport = payload?.data?.list;

    const handleSubmit = (data) => {

        let dataFilter = {
            ...filter
        }
        if (data.Reason) {
            dataFilter.Reason = data.Reason;
        } else {
            dataFilter.Reason = "";
        }
        if (data.TimeFrom) {
            dataFilter.TimeFrom = data.TimeFrom;
        } else {
            dataFilter.TimeFrom = "";
        }
        if (data.TimeTo) {
            dataFilter.TimeTo = data.TimeTo;
        } else {
            dataFilter.TimeTo = "";
        }
        if (data.Type) {
            dataFilter.Type = data.Type
        } else {
            dataFilter.Type = "";
        }
        if (data.Username) {
            dataFilter.Username = data.Username
        } else {
            dataFilter.Username = "";
        }
        setFilter({
            ...dataFilter
        })
        payload.callback({
            ...dataFilter
        })
    }

    const onChangePage = (data) => {
        let dataFilter = {
            ...filter
        }
        dataFilter.Offset = data;
        setFilter(dataFilter)
        payload.callback({
            ...dataFilter
        })
    }
    const onChangePageRow = (data) => {
        let dataFilter = {
            ...filter
        }
        dataFilter.Limit = data;
        setFilter(dataFilter)
        payload.callback({
            ...dataFilter
        })
    }

    const ConvertStatusReport = (type) => {
        switch (type) {
            case Constants.STATUS_REPORT_POST.NEW:
                return <span style={{ color: '#C2A200', fontSize: 12 }}>Mới</span>;
            case Constants.STATUS_REPORT_POST.RESOLVE:
                return <span style={{ color: '#138300', fontSize: 12 }}>Đã giải quyết</span>;
            case Constants.STATUS_REPORT_POST.OPEN:
                return <span style={{ color: '#004ADF', fontSize: 12 }}>Đang diễn ra</span>;
            default:
                return <span style={{ color: '#C2A200', fontSize: 12 }}>Mới</span>;
        }
    }

    const data = useSelector(state => state.Post?.ReportPost);
    console.log(data?.List);
    return (
        <div style={{ width: 1138 }}>
            <HeadCommonPopup onHandleRight={handleClose} content='Lịch sử báo cáo' />
            <CustomSearch callback={handleSubmit} />
            <div className={`${styles.mainPopup} pb-4`}>
                {/* <PersonalTable
                    fieldName='label'
                    fieldValue='id'
                    fieldKey='code'
                    fieldBody='field'
                    fieldId='Id'
                    total={data?.Total || 0}
                    list={data?.List}
                    handleClickRow={()=>{}}
                    setSelected={()=>{}}
                    selectedProps={[]}
                    headCells={headCells}
                    isShowCheckBox={false}
                    isShowFilterColumn={false}
                    EmptyPops={<p>Chưa có báo cáo </p>}
                /> */}
                <PersonalTable
                    headCells={headCells}
                    list={data?.List ?? []}
                    fieldId="PostId"
                    isShowCheckBox={false}
                    selectedProps={[]}
                    isShowFilterColumn={false}
                />
            </div>
            {
                data?.Total > 5 && <div className={`${styles.paginationPopup} my-2`}>
                    <CustomPaginationPopup onChangePageRow={onChangePageRow} onChangePage={onChangePage} Total={dataListReport?.Total || 0} />
                </div>
            }
        </div>
    )
}
