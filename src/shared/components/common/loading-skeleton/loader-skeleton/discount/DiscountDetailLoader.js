import { Box } from '@findxdn/erp-theme';
import React from 'react';
import LoadingSkeleton from '../../LoadingSkeleton';
import ProductTableLoader from '../../product-table-loader/ProductTableLoader';

function DiscountDetailLoader() {
    return (
        <>
            <Box boxTitle=" " className="mb-2">
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
            </Box>

            <Box boxTitle=" " className="mb-2">
                <LoadingSkeleton className="mb-2" />
                <LoadingSkeleton className="mb-2" />
                <div className='d-flex'>
                    <div style={{marginRight: '200px'}}><LoadingSkeleton height={142} width={142}/></div>
                    <div><LoadingSkeleton height={142} width={142}/></div>
                </div>
            </Box>

            <Box boxTitle=" ">
                <ProductTableLoader />
            </Box>
        </>
    );
}

export default DiscountDetailLoader;
