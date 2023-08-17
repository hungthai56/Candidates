import moment from "moment";
import ReadMoreContent from "shared/components/common/read-more-content/ReadMoreContent";
import Constants from "utils/Constants";
import Utils from "utils/Utils";
import React, { useEffect, useState, } from 'react'
import WaringPost from "shared/components/social/WaringPost/WaringPost";
import CodeTextLinkNewButton from "shared/components/common/label/CodeTextLinkNewButton";
import RouterPath from "router/RouterPath";
import CustomHeadCell from './../../../shared/components/candidates-manager/CustomHeadCell'
import { useSelector } from 'react-redux';
import Image from "shared/components/common/image/Image"

const getStatusText = (status) => {
    if (status === Constants.TEXT_STATUS.STATUS_WAIT_APPROVE.VALUE) {
        return Constants.TEXT_STATUS.STATUS_WAIT_APPROVE.NAME;
    } else if (status === Constants.TEXT_STATUS.STATUS_APPROVE.VALUE) {
        return Constants.TEXT_STATUS.STATUS_APPROVE.NAME;
    } else if (status === Constants.TEXT_STATUS.STATUS_NOT_APPROVE.VALUE) {
        return Constants.TEXT_STATUS.STATUS_NOT_APPROVE.NAME;
    }
};
export const HeadCellCandidates = [
    {
        id: 'Code',
        numeric: '1',
        disablePadding: false,
        minWidth: 150,
        label: 'Mã UV',
        code: '2',
        field: 'Code',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'left',
        sort: false,
        component: (props) => {
            const currentDate = moment(props?.data.CreatedAt)
            const dateToCompare = moment().subtract(2, 'days');
            if (dateToCompare.isBefore(currentDate)) {
                return (<CodeTextLinkNewButton button='Mới' path={RouterPath.CANDIDATE_DETAILS} Id={props.data?.CandidateId} {...props} />);
            } else {
                return (<CodeTextLinkNewButton path={RouterPath.CANDIDATE_DETAILS} Id={props.data?.CandidateId} {...props} />);
            }
        },
        unEnabled: true,
        isOnclick: true
    },
    {
        id: 'Avatar',
        numeric: '1',
        disablePadding: false,
        label: 'Ảnh',
        minWidth: 50,
        code: '1',
        field: 'Avatar',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'center',
        component: (props) => {
            return <div style={{
                width: 40,
                height: 40
            }}>
                <Image style={{ borderRadius: '4px' }} width={40} height={40} src={props?.data?.Avatar} />
            </div>
        },
        sort: false,
    },
    {
        id: 'Name',
        numeric: '1',
        disablePadding: false,
        label: 'Họ và tên',
        minWidth: 100,
        code: '1',
        field: 'Name',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'left',
        sort: false,
    },
    {
        id: 'Birthday',
        numeric: '1',
        disablePadding: false,
        label: 'Ngày sinh',
        minWidth: 100,
        code: '6',
        field: 'Birthday',
        type: Constants.TYPE_RENDER_TABLE.DATE,
        align: 'left',
        component: (props) => {
            return <>{moment(props.children).format('DD/MM/YYYY')}</>;
        },
        sort: false,
    },
    {
        id: 'Gender',
        numeric: '1',
        disablePadding: false,
        label: 'Giới tính',
        minWidth: 50,
        code: '4',
        field: 'Gender',
        type: Constants.TYPE_RENDER_TABLE.CHOOSE,
        align: 'left',
        sort: false,
    },
    {
        id: 'Phone',
        numeric: '1',
        disablePadding: false,
        minWidth: 100,
        label: 'Số điện thoại',
        code: '3',
        field: 'Phone',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'center',
        sort: false,
    },
    {
        id: 'Email',
        numeric: '1',
        disablePadding: false,
        minWidth: 100,
        label: 'Email',
        code: '3',
        field: 'Email',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'left',
        sort: false,
    },
    {
        id: 'Status',
        numeric: '1',
        disablePadding: false,
        label: 'Trạng thái',
        minWidth: 150,
        code: '4',
        field: 'Status',
        type: Constants.TYPE_RENDER_TABLE.CHOOSE,
        align: 'center',
        component: (props) => {
            const { Status } = useSelector((state) => state.AppCandidates);
            const objectArray = Object.entries(Status);
            let [statusKey, setStatusKey] = useState()
            let [valueDefault, setvalueDefault] = useState([])
            let arrOne = ''; let arrTown = ''; let colorChose = ''; let arrSelect = []
            objectArray.forEach(st => {
                arrSelect.push({ 'value': st[0], 'label': st[1] })
            });

            useEffect(() => {
                setStatusKey(props.children)
            }, [props.children])
            objectArray.forEach(st => {
                if (st[0] == statusKey) {
                    arrOne = st[0]; arrTown = st[1]
                }
            });
            useEffect(() => {
                Constants.STATUS_HANDLE.forEach(color => {
                    if (color.value == statusKey) {
                        colorChose = color.color
                        setvalueDefault([...[color.color, arrOne, arrTown]])
                    } else {
                    }
                });
            }, [statusKey])
            return <CustomHeadCell type={statusKey} dataId={props?.data.CandidateId} arrayFill={valueDefault} setStatusKey={setStatusKey} arrSelect={arrSelect} />;
        },
        sort: false,
    },

    {
        id: 'Position',
        numeric: '1',
        disablePadding: false,
        minWidth: 200,
        label: 'Cấp bậc',
        code: '3',
        field: 'Position',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'left',
        sort: false,
    },
    {
        id: 'Major',
        numeric: '1',
        disablePadding: false,
        minWidth: 150,
        label: 'Chuyên ngành',
        code: '3',
        field: 'Major',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'left',
        component: (props) => {
            let fillEdu = ''
            let result = ''
            if (props?.data.CandidateEducations) {
                props?.data.CandidateEducations.forEach(element => {
                    fillEdu += element.Major
                    fillEdu += " - "
                });
                result = fillEdu.slice(0, -2);
            } else {
                result = "Không có chuyên ngành"
            }
            return <>{result}</>;
        },
        sort: false,
    },
    {
        id: 'TakeRecruitmentInfoBy',
        numeric: '1',
        disablePadding: false,
        minWidth: 150,
        label: 'Nguồn ứng viên',
        code: '3',
        field: 'TakeRecruitmentInfoBy',
        type: Constants.TYPE_RENDER_TABLE.TEXT,
        align: 'left',
        sort: false,
    },
    {
        id: 'SubmittedAt',
        numeric: '1',
        disablePadding: false,
        label: 'Ngày ứng tuyển',
        minWidth: 100,
        code: '6',
        field: 'SubmittedAt',
        type: Constants.TYPE_RENDER_TABLE.DATE,
        align: 'left',
        component: (props) => {
            return <>{moment(props.children).format('DD/MM/YYYY')}</>;
        },
        sort: false,
    },
]
