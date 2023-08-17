import React, { useEffect, useState } from 'react';
import Constants from './../../../utils/Constants';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import { useHistory } from 'react-router';
import useQuery from './../../../hooks/use-query';
import styles from './custom-pagination.module.scss';
import PropTypes from 'prop-types';

function CustomPagination(props) {
    const { Total } = props;
    const [rowsPerPage, setRowsPerPage] = React.useState(
        Constants.PRODUCT_LIST_PAGINATION.LIMIT,
    );
    const [page, setPage] = useState(1);
    const history = useHistory();
    const query = useQuery();
    const handleChangePage = (event, newPage) => {
        props.setSelected([]);
        let params = `${Constants.ROUTER_URL.PAGE}=${newPage}`;
        if (query.get(Constants.ROUTER_URL.CUSTOMER_ID)) {
            params += `&${Constants.ROUTER_URL.CUSTOMER_ID}=${query.get(
                Constants.ROUTER_URL.CUSTOMER_ID,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.OFFSET)) {
            params += `&${Constants.ROUTER_URL.OFFSET}=${query.get(
                Constants.ROUTER_URL.OFFSET,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.SEARCH_ALL)) {
            params += `&${Constants.ROUTER_URL.SEARCH_ALL}=${query.get(
                Constants.ROUTER_URL.SEARCH_ALL,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.USERNAME)) {
            params += `&${Constants.ROUTER_URL.USERNAME}=${query.get(
                Constants.ROUTER_URL.USERNAME,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TYPE)) {
            params += `&${Constants.ROUTER_URL.TYPE}=${query.get(
                Constants.ROUTER_URL.TYPE,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TIME_FROM)) {
            params += `&${Constants.ROUTER_URL.TIME_FROM}=${query.get(
                Constants.ROUTER_URL.TIME_FROM,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TIME_TO)) {
            params += `&${Constants.ROUTER_URL.TIME_TO}=${query.get(
                Constants.ROUTER_URL.TIME_TO,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TAB)) {
            params += `&${Constants.ROUTER_URL.TAB}=${query.get(
                Constants.ROUTER_URL.TAB,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TAB_CHILD)) {
            params += `&${Constants.ROUTER_URL.TAB_CHILD}=${query.get(
                Constants.ROUTER_URL.TAB_CHILD,
            )}`;
        }
        history.replace({
            search: params,
        });
    };
    function defaultLabelDisplayedRows({ from, to, count }) {
        return `${`Hiển thị từ ${from}`}–${to} trên tổng ${
            count !== -1 ? count : `${to}`
        }`;
    }

    useEffect(() => {
        if (query.get(Constants.ROUTER_URL.PAGE)) {
            setPage(Number(query.get(Constants.ROUTER_URL.PAGE)));
        } else {
            setPage(1);
        }
        if (query.get(Constants.ROUTER_URL.OFFSET)) {
            setRowsPerPage(query.get(Constants.ROUTER_URL.OFFSET));
        } else {
            setRowsPerPage(Constants.PRODUCT_LIST_PAGINATION.LIMIT);
        }
    }, [query]);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        props.setSelected([]);
        let params = `${Constants.ROUTER_URL.OFFSET}=${parseInt(
            event.target.value,
            10,
        )}`;
        if (query.get(Constants.ROUTER_URL.PAGE)) {
            params += `&${Constants.ROUTER_URL.PAGE}=1`;
        }
        if (query.get(Constants.ROUTER_URL.CUSTOMER_ID)) {
            params += `&${Constants.ROUTER_URL.CUSTOMER_ID}=${query.get(
                Constants.ROUTER_URL.CUSTOMER_ID,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.USERNAME)) {
            params += `&${Constants.ROUTER_URL.USERNAME}=${query.get(
                Constants.ROUTER_URL.USERNAME,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TYPE)) {
            params += `&${Constants.ROUTER_URL.TYPE}=${query.get(
                Constants.ROUTER_URL.TYPE,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.SEARCH_ALL)) {
            params += `&${Constants.ROUTER_URL.SEARCH_ALL}=${query.get(
                Constants.ROUTER_URL.SEARCH_ALL,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TIME_FROM)) {
            params += `&${Constants.ROUTER_URL.TIME_FROM}=${query.get(
                Constants.ROUTER_URL.TIME_FROM,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TIME_TO)) {
            params += `&${Constants.ROUTER_URL.TIME_TO}=${query.get(
                Constants.ROUTER_URL.TIME_TO,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TAB)) {
            params += `&${Constants.ROUTER_URL.TAB}=${query.get(
                Constants.ROUTER_URL.TAB,
            )}`;
        }
        if (query.get(Constants.ROUTER_URL.TAB_CHILD)) {
            params += `&${Constants.ROUTER_URL.TAB_CHILD}=${query.get(
                Constants.ROUTER_URL.TAB_CHILD,
            )}`;
        }
        history.replace({
            search: params,
        });
    };
    return (
        <>
            <div
                className={`${styles.customPagination}`}
                style={{ display: 'flex', justifyContent: 'end' }}
            >
                <TablePagination
                    component="div"
                    count={Total}
                    page={Number(page - 1)}
                    rowsPerPageOptions={[
                        5,
                        10,
                        20,
                        { label: 'All', value: Total ?? 0 },
                    ]}
                    labelRowsPerPage="Hiển thị"
                    labelDisplayedRows={defaultLabelDisplayedRows}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage || 0}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <Pagination
                    onChange={handleChangePage}
                    color="success"
                    count={Math.ceil(Total / rowsPerPage)}
                    variant="outlined"
                    shape="rounded"
                    page={Number(page)}
                />
            </div>
        </>
    );
}

CustomPagination.propTypes = {
    Total: PropTypes.number,
};
export default CustomPagination;
