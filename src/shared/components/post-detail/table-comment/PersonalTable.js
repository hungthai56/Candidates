import React from 'react'
import { headCellsComment } from '../../../../utils/Constants';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import { useSelector, useDispatch } from 'react-redux';
import actionComment from './../../../../redux/comment/action';
import Utils from './../../../../utils/Utils';
import Constants from './../../../../utils/Constants';
import { EVENT_SHOW_POPUP_COMMENT, EVENT_SHOW_POPUP_DELETE } from './../../../../utils/EventRegister';
import CommonTableHead from './../../common/table/HeaderTable/HeaderTable';
import CustomPagination from './../../pagination/custom-pagination';
import Empty from './../../common/empty/empty';
import Button from '@mui/material/Button';
import useQuery from 'hooks/use-query';
import styles from './styles.module.scss';
import OptionBottom from 'shared/components/common/table/OptionBottom/OptionBottom';

function PersonalTable(props) {
    const dataComment=useSelector(state=>state.Comment?.CommentList);
    const [selected, setSelected] = React.useState([]);
    const [orderBy, setOrderBy] = React.useState('CustomerId')
    const [order, setOrder] = React.useState('asc');
    const isSelected = (id) => selected.findIndex(v=> v== id) !== -1;
    const dispatch=useDispatch();
    const handleClick=(event, id)=>{
        const selectedIndex = selected.findIndex(v=> v == id);
        let newSelected = [...selected]
        if(selectedIndex == -1 ){
            newSelected.push(id)
        }else{
            newSelected.splice(selectedIndex,1);
        }


        setSelected(newSelected)
    }

    const handleSelectAllClick=(event)=>{
        if (event.target.checked) {
            setSelected([])
            let data =  dataComment?.ListComments?.map(v=>v.Id)
            setSelected(data);
        }else{
            setSelected([])
        }
    }

    const handleDeleteComment=()=>{
        Utils.alertPopup(Constants.TITLE_POPUP.DELETE_COMMENT,EVENT_SHOW_POPUP_DELETE,()=>{
            dispatch({
                type:actionComment.DELETE_COMMENT_POST_START,
                payload:{
                    PostId:props?.postId,
                    CommentId:selected.join()
                },
                callback:()=>{
                    setSelected([])
                }
            })
        })
    }
    const handleShowComment=()=>{
        Utils.alertPopup("hiện",EVENT_SHOW_POPUP_COMMENT,()=>{
            dispatch({
                type:actionComment.SHOW_OFF_COMMENT_POST_START,
                payload:{
                    PostId:props?.postId,
                    CommentId:selected.join(),
                    Data:query,
                    Type: Constants.STATUS_COMMENT.SHOW,
                },
                callback:()=>{
                    setSelected([])
                }
            })
        })
    }
    const handleHiddenComment=()=>{
        Utils.alertPopup("ẩn",EVENT_SHOW_POPUP_COMMENT,()=>{
            dispatch({
                type:actionComment.SHOW_OFF_COMMENT_POST_START,
                payload:{
                    PostId:props?.postId,
                    CommentId:selected.join(),
                    Data:query,
                    Type: Constants.STATUS_COMMENT.HIDDEN,
                },
                callback:()=>{
                    setSelected([])
                }
            })
        })
    }

    let query=useQuery()
    const handleClickChangeStatus=(e,id,type)=>{
        dispatch({
            type:actionComment.SHOW_OFF_COMMENT_POST_START,
            payload:{
                CommentId: id,
                Type: type,
                PostId:props.postId,
                Data:query
            }
        })
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }
    return (
        <>
            <Paper sx={{ width: '100%', mb: 2 ,borderRadius: 0 ,boxShadow:'unset',backgroundColor:'white'}}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <CommonTableHead
                            numSelected={selected.length}
                            onSelectAllClick={handleSelectAllClick}
                            rowCount={dataComment?.ListComments?.length}
                            style={{ backgroundColor: '#F2F2F2' }}
                            data={headCellsComment}
                            onRequestSort={handleRequestSort}
                            order={order}
                            orderBy={orderBy}
                            fieldKey='Code'
                            fieldName='label'
                            fieldValue='id'
                        />
                        <TableBody>
                            {dataComment?.ListComments && dataComment.ListComments?.map((row, index) => {
                                const isItemSelected = isSelected(row?.Id)
                                const labelId = `enhanced-table-checkbox-${index}`
                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={index}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={(event) => handleClick(event, row.Id)}
                                                color="success"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell padding="none" align="left">
                                            {row?.Content}
                                        </TableCell>
                                        <TableCell
                                            padding="none"
                                            align="left"
                                            className="cursor_pointer"
                                        >
                                            {row.Status == Constants.STATUS_COMMENT.SHOW ? 
                                                <Button className={styles.ButtonTable} onClick={(event) =>
                                                    handleClickChangeStatus(event, row.Id , Constants.STATUS_COMMENT.HIDDEN)
                                                } color='error' variant="outlined">Ẩn</Button> 
                                                :
                                                <Button className={styles.ButtonTable} onClick={(event) =>
                                                    handleClickChangeStatus(event, row.Id ,Constants.STATUS_COMMENT.SHOW)
                                                } color='success' variant="outlined">Bỏ ẩn</Button>}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                    {
                        dataComment?.Total == 0 && <Empty title="Chưa có bình luận nào" />
                    }
                </TableContainer>
                <CustomPagination
                    setSelected={setSelected}
                    Total={dataComment?.Total || 0}
                />
            </Paper>
            {selected.length > 0  && <OptionBottom
                handleDelete={handleDeleteComment}
                handleHidden={handleHiddenComment}
                handleShow={handleShowComment}
            />}
        </>
    )
}

export default PersonalTable;