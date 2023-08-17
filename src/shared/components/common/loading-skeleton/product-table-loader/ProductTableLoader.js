import { Box } from '@findxdn/erp-theme';
import React from 'react';
import PlaceHolder from '../PlaceHolder';
import TableLoader from '../table-loader/TableLoader';

function ProductTableLoader (props) {
    return (
        <div >
            <Box>
                <div className="row">
                    <div className="col" style={{ height: 34 }}>
                        <PlaceHolder />
                    </div>
                    <div className="col" style={{ height: 34 }}>
                        <PlaceHolder />
                    </div>
                    <div className="col" style={{ height: 34 }}>
                        <PlaceHolder />
                    </div>
                </div>

            </Box>
            <TableLoader RowsCount={6} />
        </div>
    )
}
export default ProductTableLoader;