import { Box } from '@findxdn/erp-theme';
import React from 'react';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import { TableBody } from '@mui/material';
import LoadingSkeleton from '../../LoadingSkeleton';

const StyledTableCell = styled(TableCell)(({}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F2F2F2',
        height: 38,
        padding: '6px 10px',
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        height: 50,
        padding: '6px 10px',
    },
}));

function RankConfigurationLoader() {
    return (
        <Box boxTitle="Cấu hình xếp hạng">
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: 0,
                    boxShadow: 'none',
                    maxWidth: 'calc(100vw - 300px)',
                }}
            >
                <Table
                    style={{
                        overflowX: 'auto',
                        width: '100%',
                        borderRight: '1px  solid #D7D8D8',
                        borderLeft: '1px  solid #D7D8D8',
                    }}
                    stickyHeader
                    aria-label="collapse table"
                    size="small"
                >
                    <StyledTableCell
                        align="center"
                        colSpan={6}
                        style={{
                            padding: '0px 0px',
                        }}
                    >
                        <LoadingSkeleton height={45} />
                    </StyledTableCell>
                    <TableBody>
                        {Array(2)
                            .fill(null)
                            .map((item, key) => {
                                return (
                                    <TableRow>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'left',
                                                width: '400px',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>
                                    </TableRow>
                                );
                            })}

                        {Array(2)
                            .fill(null)
                            .map((item, key) => {
                                return (
                                    <TableRow>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'right',
                                            }}
                                        >
                                            <LoadingSkeleton />
                                        </StyledTableCell>

                                        {Array(5)
                                            .fill(null)
                                            .map((item, key) => {
                                                return (
                                                    <StyledTableCell
                                                        style={{
                                                            padding: '6px 10px',
                                                            textAlign: 'right',
                                                        }}
                                                    >
                                                        <LoadingSkeleton className="mb-2" />
                                                        <LoadingSkeleton className="mb-2" />
                                                        <LoadingSkeleton className="mb-2" />
                                                        <LoadingSkeleton className="mb-2" />
                                                    </StyledTableCell>
                                                );
                                            })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default RankConfigurationLoader;
