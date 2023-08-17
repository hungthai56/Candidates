import {
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import React from 'react';
import LoadingSkeleton from '../../LoadingSkeleton';
import styles from './TableSettingDiscount.module.scss';

const StyledTableCell = styled(TableCell)(({}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F2F2F2',
        height: 38,
        padding: '0 16px',
        fontWeight: 'bold',
    },
    [`&.${tableCellClasses.body}`]: {
        height: 50,
        padding: '6px 10px',
    },
}));

function SettingDiscountLoader(props) {
    return (
        <div className={styles.TableSettingDiscount}>
            <div style={{ marginBottom: '5px' }}>
                <LoadingSkeleton height={45} />
            </div>
            <div>
                <TableContainer
                    component={Paper}
                    sx={{
                        borderRadius: 0,
                        boxShadow: 'none',
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
                                "& .MuiTableCell-root": {
                                    padding: 0
                                }
                            }}
                        >
                            <TableCell align="center" colSpan={4}>
                                <LoadingSkeleton height={53}/>
                            </TableCell>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <StyledTableCell
                                    style={{ padding: '6px 10px' }}
                                >
                                    <LoadingSkeleton />
                                </StyledTableCell>
                                <StyledTableCell
                                    style={{ padding: '6px 10px' }}
                                >
                                    <LoadingSkeleton />
                                </StyledTableCell>
                                <StyledTableCell
                                    style={{ padding: '6px 10px' }}
                                >
                                    <LoadingSkeleton />
                                </StyledTableCell>
                                <StyledTableCell
                                    style={{ padding: '6px 10px' }}
                                >
                                    <LoadingSkeleton />
                                </StyledTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default SettingDiscountLoader;
