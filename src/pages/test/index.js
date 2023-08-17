import React from 'react';
import WrapContainer from 'shared/components/layout/WrapContainer';
import IcplusColor from 'assets/images/icons/ic-plusColor';
import TestContainer from 'shared/containers/test/TestContainer';

export default function index() {
    const breadcrumb = [
        {
            Name: 'TEST',
        },
    ];
    document.title = 'Test title';

    return (
        <WrapContainer
            Header={{
                icon: <IcplusColor />,
                title: 'RECRUIMENT',
                breadcrumb,
                menuLeft: false,
            }}
        >
            <TestContainer />
        </WrapContainer>
    );
}
