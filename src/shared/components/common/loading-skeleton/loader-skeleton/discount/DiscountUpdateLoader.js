import { Box } from '@findxdn/erp-theme';
import React from 'react';
import LoadingSkeleton from '../../LoadingSkeleton';
import ProductTableLoader from '../../product-table-loader/ProductTableLoader';

function DiscountUpdateLoader() {
    return (
        <>
            <LoadingSkeleton height={48} className="mb-2" />

            <Box boxTitle=" " className="mb-2">
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
                    <div style={{ flex: '1'}}>
                        <LoadingSkeleton />
                    </div>
                </div>

                <LoadingSkeleton height={64} />
            </Box>

            <Box boxTitle=" " className="mb-2">
                <LoadingSkeleton width={200} className="mb-3" />
                <LoadingSkeleton width={200} className="mb-3" />
                <LoadingSkeleton height={70} className="mb-3" />
                <LoadingSkeleton width={350} className="mb-3" />
                <LoadingSkeleton width={200} className="mb-3" />
                <LoadingSkeleton width={200} className="mb-3" />
            </Box>
            <Box boxTitle=" ">
                <ProductTableLoader />
            </Box>
        </>
    );
}

export default DiscountUpdateLoader;
