import React ,{ useState } from 'react'
import Constants from './../../../utils/Constants';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import styles from './custom-pagination.module.scss';
import PropTypes from 'prop-types';

function CustomPaginationPopup(props) {
    const {Total}=props;
    const [rowsPerPage, setRowsPerPage] = React.useState(Constants.PRODUCT_LIST_PAGINATION.LIMIT);
    const [page, setPage] = useState(1);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        props.onChangePage(newPage);
    };
    function defaultLabelDisplayedRows({ from, to, count }) { return `${`Hiển thị từ ${from}`}–${to} trên tổng ${count !== -1 ? count : `${to}`}`; }


    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        props.onChangePageRow(parseInt(event.target.value, 10))
    };
    return (
        <>
            <div
                className={`mt-2 ${styles.customPaginationPopup}`}
                style={{ display: 'flex', justifyContent: 'end' }}
            >
                <Pagination
                    onChange={handleChangePage}
                    color="success"
                    count={Math.ceil(
                        Total /  rowsPerPage,
                    )}
                    variant="outlined"
                    shape="rounded"
                    page={Number(page)}
                    className="d-flex align-items-center"
                />
                <TablePagination
                    component="div"
                    count={Total}
                    page={(Number(page-1))}
                    rowsPerPageOptions={[5, 10, 20, { label: 'All', value: Total ?? 0 }]}
                    labelRowsPerPage="Hiển thị"
                    labelDisplayedRows={defaultLabelDisplayedRows}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage ||0}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </>
    )
}


CustomPaginationPopup.propTypes={
    Total:PropTypes.number
}
export default CustomPaginationPopup;