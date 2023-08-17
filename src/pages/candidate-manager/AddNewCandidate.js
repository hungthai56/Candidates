import React from 'react';
import WrapContainer from 'shared/components/layout/WrapContainer';
import IcplusColor from 'assets/images/icons/ic-plusColor';
import AddNewCandidate from 'shared/containers/add-new-candidate/AddNewCandidate';
import RouterPath from 'router/RouterPath';

export default function index() {
    const breadcrumb = [
        {
            Name: 'Danh sách ứng viên',
            Path: RouterPath.CANDIDATES 
        },
        {
            Name: 'Thêm ứng viên',
        }
    ];
    document.title = 'Thêm ứng viên';

    return (
        <WrapContainer
            Header={{
                icon: <IcplusColor />,
                title: 'Tuyển dụng',
                breadcrumb,
                menuLeft: false,
            }}
        >
            <AddNewCandidate />
        </WrapContainer>
    );
}