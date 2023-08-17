import React from 'react';
import WrapContainer from 'shared/components/layout/WrapContainer';
import IcplusColor from 'assets/images/icons/ic-plusColor';
import RecruitmentProposal from 'shared/containers/recuitment-proposal/RecruitmentProposal';
export default function index() {
    const breadcrumb = [
        {
            Name: 'Danh sách đề xuất',
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
            <RecruitmentProposal />
        </WrapContainer>
    );
}
