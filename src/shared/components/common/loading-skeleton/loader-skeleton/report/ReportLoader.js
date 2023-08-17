import React from 'react';
import styles from './Report.module.scss';
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

function ReportLoader() {
    return (
        <div className={styles.table}>
            <TableContainer
                component={Paper}
                sx={{
                    borderRadius: 0,
                    boxShadow: 'none',
                    maxWidth: 'calc(100vw - 300px)',
                }}
            >
                <Table
                    style={{ overflowX: 'auto', width: '100%' }}
                    stickyHeader
                    aria-label="collapse table"
                    size="small"
                >
                    <TableHead
                        sx={{
                            '& .MuiTableCell-root': {
                                padding: 0,
                            },
                        }}
                    >
                        <StyledTableCell
                            align="center"
                            colSpan={6}
                            style={{
                                padding: '0px 0px',
                            }}
                        >
                            <LoadingSkeleton height={82} />
                        </StyledTableCell>
                    </TableHead>
                    <TableBody>
                        {Array(20)
                            .fill(null)
                            .map((item, key) => {
                                return (
                                    <TableRow key={key}>
                                        <StyledTableCell
                                            style={{
                                                padding: '6px 10px',
                                                textAlign: 'left',
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
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ReportLoader;
