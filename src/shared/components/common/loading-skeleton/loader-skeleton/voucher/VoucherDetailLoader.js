import { Box } from '@findxdn/erp-theme';
import React from 'react';
import LoadingSkeleton from '../../LoadingSkeleton';
import ProductTableLoader from '../../product-table-loader/ProductTableLoader';

function VoucherDetailLoader() {
    return (
        <>
            <Box boxTitle=" " className="mb-2">
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
            </Box>

            <Box boxTitle=" ">
                <LoadingSkeleton height={48} className="mb-2" />
                <LoadingSkeleton height={60} className="mb-4" />
                <ProductTableLoader />
            </Box>
        </>
    );
}

export default VoucherDetailLoader;
