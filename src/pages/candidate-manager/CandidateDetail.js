import React from 'react';
import WrapContainer from 'shared/components/layout/WrapContainer';
import IcplusColor from 'assets/images/icons/ic-plusColor';
import CandidateDetail from 'shared/containers/candidates-detail/CandidateDetail';
import { useParams } from 'react-router'
import RouterPath from 'router/RouterPath';
export default function index() {
    let { id } = useParams();
    const breadcrumb = [
        {
            Name: 'Danh sách ứng viên',
            Path: RouterPath.CANDIDATES
          
        },
        {
            Name: 'Chi tiết hồ sơ ứng viên',
        }
    ];
    document.title = 'Thông tin hồ sơ';

    return (
        <WrapContainer
            Header={{
                icon: <IcplusColor />,
                title: 'Tuyển dụng',
                breadcrumb,
                menuLeft: false,
            }}
        >
            <CandidateDetail CandidateId={id}/>
        </WrapContainer>
    );
}