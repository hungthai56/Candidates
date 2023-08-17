import React, { useEffect, useState } from 'react';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import queryString from 'query-string';
import useRouter from 'hooks/use-router';
import pick from 'lodash/pick';
import styles from './custom-pagination.module.scss';

export default function CustomPagination(props) {
    const { total } = props;
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(1);

    const router = useRouter();

    const handleChangePage = (event, newPage) => {
        const queryParams = {
            ...router.query,
            page: newPage,
        };
        router.replace({
            search: queryString.stringify(queryParams),
        });
    };

    const handleChangeRowsPerPage = (event) => {
        const queryParams = {
            ...router.query,
            offset: parseInt(event.target.value, 10),
        };
        router.replace({
            search: queryString.stringify(queryParams),
        });
    };

    const defaultLabelDisplayedRows = ({ from, to, count }) =>
        `${`Hiển thị từ ${from}`}–${to} trên tổng ${count !== -1 ? count : `${to}`
        }`;

    useEffect(() => {
        const queryParams = pick(router.query, ['page', 'offset']);
        if (Object.keys(queryParams).length === 0) {
            setPage(1);
            return;
        }
        if (Object.prototype.hasOwnProperty.call(queryParams, 'page')) {
            setPage(parseInt(queryParams.page, 10));
        }
        if (Object.prototype.hasOwnProperty.call(queryParams, 'offset')) {
            setRowsPerPage(parseInt(queryParams.offset, 10));
        }
    }, [router.query]);

    return (
        <div
            className={`${styles.customPagination}`}
            style={{ display: 'flex', justifyContent: 'end' }}
        >
            <TablePagination
                component="div"
                count={total}
                page={Number(page - 1)}
                rowsPerPageOptions={[10, 20, 50, 100]}
                labelRowsPerPage="Hiển thị"
                labelDisplayedRows={defaultLabelDisplayedRows}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage || 0}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Pagination
                onChange={handleChangePage}
                color="success"
                shape="rounded"
                variant="outlined"
                sx={{
                    '.MuiPagination-ul': {
                        flexWrap: 'nowrap',
                        '.Mui-selected': {
                            color: '#fff',
                            backgroundColor: '#138300',
                            '&:hover': {
                                backgroundColor: '#138300',
                            },
                        },
                        '.MuiPagination-text': {
                            padding: '0 4px',
                        },
                    },
                }}
                count={Math.ceil(total / rowsPerPage)}
                page={Number(page)}
            />
        </div>
    );
}
