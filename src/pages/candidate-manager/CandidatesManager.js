import React from 'react';
import WrapContainer from 'shared/components/layout/WrapContainer';
import IcplusColor from 'assets/images/icons/ic-plusColor';
import CandidatesManager from 'shared/containers/candidates-manager/CandidatesManager';
export default function index() {
    const breadcrumb = [
        {
            Name: 'Danh sách ứng viên',
        },
    ];
    document.title = 'Tuyển dụng';
    return (
        <WrapContainer
            Header={{
                icon: <IcplusColor />,
                title: 'Tuyển dụng',
                breadcrumb,
                menuLeft: false,
            }}
        >
            <CandidatesManager />
        </WrapContainer>
    );
}
