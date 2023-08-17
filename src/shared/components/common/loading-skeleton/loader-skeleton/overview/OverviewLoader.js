import { Box } from '@findxdn/erp-theme';
import React from 'react';
import LoadingSkeleton from '../../LoadingSkeleton';

function OverviewLoader() {
    return (
        <div style={{width: "100%"}}>
            <Box>
                <div>
                    <LoadingSkeleton className="mb-2" />
                </div>
                <div className="d-flex justify-content-between">
                    <LoadingSkeleton
                        height={140}
                        width={300}
                        className="mr-2"
                    />
                    <LoadingSkeleton
                        height={140}
                        width={300}
                        className="mr-2"
                    />
                    <LoadingSkeleton
                        height={140}
                        width={300}
                        className="mr-2"
                    />
                    <LoadingSkeleton
                        height={140}
                        width={300}
                    />
                </div>
            </Box>
            <div className="d-flex mt-2 justify-content-between">
                <Box style={{flex: '1', margin: '4px'}}><LoadingSkeleton height={253} /></Box>
                <Box style={{flex: '1', margin: '4px'}}><LoadingSkeleton height={253} /></Box>
            </div>
            <div className="d-flex mt-2 justify-content-between">
                <Box style={{width: '50%'}}><LoadingSkeleton height={253} /></Box>
            </div>
        </div>
    );
}

export default OverviewLoader;
