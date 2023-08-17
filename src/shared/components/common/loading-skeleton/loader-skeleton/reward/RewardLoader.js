import { Box } from '@findxdn/erp-theme';
import React from 'react';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@material-ui/core';
import RankConfigurationLoader from './RankConfigurationLoader';
import RewardConfigurationLoader from './RewardConfigurationLoader';

function RewardLoader() {
    return (
        <div>
            <RankConfigurationLoader></RankConfigurationLoader>
            <RewardConfigurationLoader rows={5} title='Cấu hình nhận thưởng'/>
            <RewardConfigurationLoader rows={1} title='Nhận thưởng hằng ngày'/>
        </div>
    );
}

export default RewardLoader;
