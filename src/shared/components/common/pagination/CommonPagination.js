import Pagination from '@mui/material/Pagination';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './custom-pagination.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Constants from 'utils/Constants';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .Mui-selected': {
            backgroundColor: '#138300',
            color: '#FFF',
            borderColor:'#138300',
            '&:hover':{
                backgroundColor: '#138300',
                color: '#FFF',
                borderColor:'#138300'
            }
        },
    },
}));
function CommonPagination(props) {
    const {
        Total,
        Limit = Constants.PRODUCT_LIST_PAGINATION.LIMIT,
        Offset = 0,
    } = props;
    const handleChangePage = (event, newPage) => {
        props.handleChangePage(newPage);
    };
    function defaultLabelDisplayedRows({ from, to, count }) {
        return `${`Hiển thị từ ${from}`}–${to} trên tổng ${
            count !== -1 ? count : `${to}`
        }`;
    }

    const handleChangeRowsPerPage = (event) => {
        props.handleChangeRowsPerPage(parseInt(event.target.value, 10));
    };
    const classes = useStyles();

    return (
        <>
            <div
                className={`${styles.customPagination}`}
                style={{ display: 'flex', justifyContent: 'end' }}
            >
                <TablePagination
                    component="div"
                    count={Total}
                    page={Limit > 0 ? Math.ceil(Offset / Limit) : 1}
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    labelRowsPerPage="Hiển thị"
                    labelDisplayedRows={defaultLabelDisplayedRows}
                    onPageChange={handleChangePage}
                    rowsPerPage={Limit || 0}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    className="mr-1"
                />
                <Pagination
                    onChange={handleChangePage}
                    color="success"
                    count={Math.ceil(Total / Limit)}
                    variant="outlined"
                    shape="rounded"
                    // page={Offset}
                    page={Limit > 0 ? Math.floor(Offset / Limit) + 1 : 1}
                    sx={{ display: 'flex' }}
                    className={classes.root}
                />
            </div>
        </>
    );
}

CommonPagination.propTypes = {
    Total: PropTypes.number,
};
export default CommonPagination;
