import React, { useEffect, useState } from 'react'
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import styles from './custom-pagination.module.scss';
import PropTypes from 'prop-types';
import EventRegister from 'utils/EventRegister';
import { makeStyles } from '@material-ui/core/styles';
import useRouterV2 from 'hooks/use-router-v2';
import Constants from 'utils/Constants';
import useQuery from 'hooks/use-query';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '3px',
        '& .Mui-selected': {
            backgroundColor: '#138300',
            color: '#FFF',
            borderColor: '#138300',
            borderRadius: '3px',
        },
    },
}));

function CustomPagination (props) {
    const classes = useStyles();
    const { Total ,marginTop = true} = props;
    const [rowsPerPage, setRowsPerPage] = React.useState(Constants.PRODUCT_LIST_PAGINATION.LIMIT);
    const [page, setPage] = useState(1);
    const query = useQuery();
    const router = useRouterV2();
    const 
            handleChangePage = (event, newPage) => {

                EventRegister.emit("DemoScrollTable")
                let params = { ...router.getAll() };
                router.replace({
                    params: {
                        ...params,
                        [`${Constants.QueryParam.Page.VALUE}`]: newPage
                    }
                })
            };
    function defaultLabelDisplayedRows ({ from, to, count }) { return `${`Hiển thị từ ${from}`}–${to} trên tổng ${count !== -1 ? count : `${to}`}`; }

    useEffect(() => {
        if (query.get(Constants.QueryParam.Page.VALUE)) {
            setPage(Number(query.get(Constants.QueryParam.Page.VALUE)))
        } else {
            setPage(1)
        }
        if (query.get(Constants.QueryParam.Limit.VALUE)) {
            setRowsPerPage(query.get(Constants.QueryParam.Limit.VALUE))
        } else {
            setRowsPerPage(Constants.PRODUCT_LIST_PAGINATION.LIMIT)
        }
    }, [query])

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        let params = { ...router.getAll() };
        router.replace({
            params: {
                ...params,
                [`${Constants.QueryParam.Limit.VALUE}`]: parseInt(event.target.value, 10),
                [`${Constants.QueryParam.Page.VALUE}`]: 1,
            }
        })
    };
    return <div
        className={`${marginTop ? "mt-2" : ''} pr-3 ${styles.customPagination}`}
        style={{ display: 'flex', justifyContent: 'end' }}
    >
        <TablePagination
            component="div"
            count={Total}
            page={(Number(page - 1))}
            rowsPerPageOptions={[10, 20, 50, 100]}
            labelRowsPerPage="Hiển thị"
            labelDisplayedRows={defaultLabelDisplayedRows}
            onPageChange={handleChangePage}
            rowsPerPage={Number(rowsPerPage) || 0}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="mr-1"
        />
        <Pagination
            onChange={handleChangePage}
            color="success"
            count={Math.ceil(
                Total / rowsPerPage,
            )}
            variant="outlined"
            shape="rounded"
            page={Number(page)}
            sx={{
                display: 'flex'
            }}
            className={classes.root}
        />

    </div>
}


CustomPagination.propTypes = {
    Total: PropTypes.number,
    marginTop: PropTypes.bool
}
export default CustomPagination;