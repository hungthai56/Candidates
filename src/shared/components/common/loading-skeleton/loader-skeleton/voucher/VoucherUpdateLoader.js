import { Box } from '@findxdn/erp-theme';
import React from 'react';
import LoadingSkeleton from '../../LoadingSkeleton';

function VoucherUpdateLoader() {
    return (
        <>
            <Box boxTitle=" " className="mb-2 pb-3">
                <div
                    style={{ height: '60px', marginBottom: '15px' }}
                    className="d-flex align-items-end justify-content-between"
                >
                    <div style={{ flex: '1', marginRight: '16px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1', marginRight: '16px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1', marginRight: '16px' }}>
                        <LoadingSkeleton />
                    </div>
                </div>
                <div
                    style={{ height: '60px', marginBottom: '15px' }}
                    className="d-flex align-items-end justify-content-between"
                >
                    <div style={{ flex: '1', marginRight: '16px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1', marginRight: '16px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1', marginRight: '16px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1'}}>
                        <LoadingSkeleton />
                    </div>
                </div>
                <div
                    style={{ height: '60px', marginBottom: '15px' }}
                    className="d-flex align-items-end justify-content-between"
                >
                    <div style={{ flex: '1', marginRight: '8px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1', marginRight: '8px' }}>
                        <LoadingSkeleton />
                    </div>
                    <div style={{ flex: '1', marginRight: '8px' }}>
                        <LoadingSkeleton />
                    </div>
                </div>
            </Box>
        </>
    );
}

export default VoucherUpdateLoader;
