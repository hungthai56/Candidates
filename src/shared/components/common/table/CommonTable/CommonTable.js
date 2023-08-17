import React ,{useState ,useEffect, useMemo} from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import IcDelete from 'assets/images/icons/ic-delete'; 
import { getComparator, stableSort } from 'utils/Constants'
import Constants from '../../../../../utils/Constants';
import Utils from '../../../../../utils/Utils';
import CommonTableHead from '../HeaderTable/HeaderTable'
import Empty from '../../empty/empty';
import PropTypes from 'prop-types';
import TableCelCommon from './TableCel'
import LoaderLayer from 'shared/components/common/loader/LoaderLayer';
import $ from 'jquery'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    customTableContainer: {
        overflowX: "initial"
    }
});
function PersonalTable(props) {
    const classes = useStyles();
    const   {
        fieldName, // giá trị cần render ở head ['name]
        fieldValue, // ko cần 
        fieldKey, // field xác định giá trị mỗi item dùng để xác nhận item cần ở và hiện thị ['code']
        fieldBody, // field render data config head file
        fieldId, // id onclick
        list,
        loading,
        handleClickRow,
        headCells,
        selectedProps,
        total,
        isShowFilterColumn,
        isShowCheckBox,
        EmptyPops,
        isShowDoubleScroll,
        handleSortType,
        maxHeight
    }=props;
    const [selected, setSelected] = useState([]);
    const [orderBy, setOrderBy] = useState('CustomerId')
    const [order, setOrder] = useState('asc')
    const [dataHead, setDataHead] = useState([]);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)

        handleSortType(property,isAsc ? 'desc' : 'asc')
    }
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            setSelected([])
            let data =  list?.map(v=>v[fieldId])
            setSelected(data);
            props.setSelected(data)
        }else{
            setSelected([])
            props.setSelected([])
        }
    }

    const handleClickCheckBox = (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedIndex = selected.findIndex(v=> v == id);
        let newSelected = [...selected]
        if(selectedIndex == -1 ){
            newSelected.push(id)
        }else{
            newSelected.splice(selectedIndex,1);
        }
        setSelected(newSelected)
        props.setSelected(newSelected)
    }

    const isSelected = (id) => selected?.findIndex(v=> v== id) !== -1;

    useMemo(() => {
        if(headCells&&dataHead.length == 0){
            let dataNew=[];
            dataNew=headCells?.map((v,index)=>{
                return {
                    ...v,
                    checked:true
                }
            })
            setDataHead(dataNew);
        }
    }, [headCells])


    const onHandleChangeHead=(e)=>{
        let newData=[...dataHead];
        let index=newData.findIndex(v=>v[fieldKey] == e[fieldKey]);
        if(index != -1){
            newData[index]={
                ...newData[index],
                checked:!newData[index]?.checked
            }
        }
        setDataHead(newData);
    }

    useEffect(() => {
        setSelected(selectedProps)
    }, [selectedProps])

    useEffect(() => {
        $(function(){
            $(".wrapper-box-scroll-top").scroll(function(){
                $(".MuiTableContainer-root")
                    .scrollLeft($(".wrapper-box-scroll-top").scrollLeft());
            });
            $(".MuiTableContainer-root").scroll(function(){
                $(".wrapper-box-scroll-top")
                    .scrollLeft($(".MuiTableContainer-root").scrollLeft());
            });
        });
    }, []);

    const handleChangeDataCell=(data)=>{
        setDataHead(data)
    }
    return (
        <>
            <Box sx={{ width: '100%' }} style={{ padding: 0 }}>
                <Box className='box-width rounded position-relative'style={{backgroundColor:'#FFFFFF'}}>
                    {
                        loading && <LoaderLayer size="small" style={{top:50, alignItems: 'flex-start'}} />
                    }
                    {
                        isShowDoubleScroll && <div style={{minWidth:$('.box-width').width()-20}} className="wrapper-box-scroll-top">
                            <div style={{width:$('.MuiTable-root').width()}} className="wrapper-box-scroll">
                            </div>
                        </div>
                    }
                    <TableContainer
                        style={{maxHeight: maxHeight ?? $('DropdownFilter').height() }}
                        className="table-common-container"
                    >
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                            stickyHeader
                        >
                            <CommonTableHead
                                numSelected={selected?.length ?? 0}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={list?.length}
                                style={{ backgroundColor: '#D8D7D7' }}
                                data={dataHead}
                                onRequestSort={handleRequestSort}
                                order={order}
                                orderBy={orderBy}
                                fieldName={fieldName}
                                fieldKey={fieldKey}
                                fieldValue={fieldValue}
                                onHandleChangeHead={onHandleChangeHead}
                                isShowFilterColumn={isShowFilterColumn}
                                isShowCheckBox={isShowCheckBox}
                                handleChangeDataCell={handleChangeDataCell}
                                dataDefault={headCells}
                            />
                            <TableBody>
                                {list?.map((row, index) => {
                                    const isItemSelected = isSelected(row[fieldId])
                                    const labelId = `enhanced-table-checkbox-${index}`
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={index}
                                            onClick={(event) => handleClickRow(event, row[fieldId])}
                                            selected={isItemSelected}
                                            className="cursor_pointer"
                                            style={{padding:0}}
                                        >
                                            {isShowFilterColumn && <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                            </TableCell>}
                                            {
                                                isShowCheckBox && <TableCell padding="checkbox">
                                                    <Checkbox
                                                        onClick={(event) => handleClickCheckBox(event, row[fieldId])}
                                                        color="success"
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                            }
                                            {
                                                dataHead?.map((item,index2)=>{
                                                    return item?.checked && <TableCelCommon
                                                        align={item?.align}
                                                        fieldId={fieldId}
                                                        key={index2}
                                                        labelId={labelId}
                                                        row={row}
                                                        children={row[item[fieldBody]]}
                                                        type={item?.type}
                                                        Item={item}
                                                        stt={index}
                                                    />
                                                })
                                            }
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                        {
                            total == 0 && !loading ? <div className='d-flex justify-content-center align-item-center py-3'>
                                {EmptyPops ? EmptyPops : <Empty title="Chưa có dữ liệu nào" />}
                            </div> : <></>
                        }
                        {/* {
                            total == 0 && loading ? <div 
                            >
                                <Loader />
                            </div> : <></>
                        } */}
                    </TableContainer>
                </Box>
            </Box>
        </>
    )
}
PersonalTable.defaultProps={
    fieldName:'label',
    fieldValue:'id',
    fieldKey:'code',
    fieldBody:'field',
    fieldId:'PostId',
    list:[],
    loading:false,
    headCells:[],
    setSelected:(e)=>{},
    handleClickRow:(e)=>{},
    total:0,
    isShowFilterColumn:true,
    isShowCheckBox:true,
    isShowDoubleScroll:false,
}
PersonalTable.propTypes={
    fieldName:PropTypes.string,
    fieldValue:PropTypes.string,
    fieldKey:PropTypes.string,
    fieldBody:PropTypes.string,
    fieldId:PropTypes.string,
    list:PropTypes.array,
    loading:PropTypes.bool,
    onHandleDelete:PropTypes.func,
    handleClickRow:PropTypes.func,
    setSelected:PropTypes.func,
    headCells:PropTypes.array,
    selectedProps:PropTypes.array,
    total:PropTypes.number,
    isShowFilterColumn:PropTypes.bool,
    isShowCheckBox:PropTypes.bool,
    EmptyPops:PropTypes.element,
    isShowDoubleScroll:PropTypes.bool,
    handleSortType:PropTypes.func,
    maxHeight:PropTypes.number
}
export default PersonalTable;