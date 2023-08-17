import React from 'react';
import WrapContainer from 'shared/components/layout/WrapContainer';
import IcplusColor from 'assets/images/icons/ic-plusColor';
import AddNewCandidate from 'shared/containers/add-new-candidate/AddNewCandidate';
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
            Name: 'Chỉnh sửa ứng viên',
        }
    ];
    document.title = 'Chỉnh sửa ứng viên';

    return (
        <WrapContainer
            Header={{
                icon: <IcplusColor />,
                title: 'Tuyển dụng',
                breadcrumb,
                menuLeft: false,
            }}
        >
            <AddNewCandidate CandidateId={id}/>
        </WrapContainer>
    );
}