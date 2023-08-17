import React,{ useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Checkbox from '@mui/material/Checkbox'
import { visuallyHidden } from '@mui/utils'
import IconSettingFilter from 'shared/components/icons/icon-setting-filter'
import styles from './HeaderTable.module.scss';
import { IconButton, Popover, Typography } from '@mui/material'
import DropdownFilter from './DropdownFilter'
import useOnClickOutside from 'hooks/use-onclick-outside'
import EventRegister, { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER } from './../../../../../utils/EventRegister';

function CommonTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
        data,
        fieldName,
        fieldValue,
        fieldKey,
        onHandleChangeHead,
        isShowFilterColumn,
        isShowCheckBox,
        handleChangeDataCell,
        dataDefault,
    } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const ref=useRef(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        showPopupChangeColumn()
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    useOnClickOutside(ref,handleClose);

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property)
    }

    const showPopupChangeColumn=()=>{
        EventRegister.emit(EVENT_SHOW_POPUP,{
            type:EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER,
            open: true,
            payload: {
                title: '',
                callback:{
                    setDataHeader:(res)=>{
                        handleChangeDataCell(res)
                    },
                },
                data: {
                    className:'popup-history-report',
                    dataCell:data,
                    fieldName:fieldName ,
                    fieldKey:fieldKey,
                    dataDefault
                }
            }
        })
    }


    return (
        <TableHead style={{backgroundColor:'#D8D7D7',height:'38px'}} className={`${styles.TableHead} w-100`}>
            <TableRow style={{backgroundColor:'#D8D7D7'}} className={`${styles.TableHeadRow} w-100`}>
                {isShowFilterColumn && <TableCell  ref={ref} onClick={handleClick} className={`${styles.FilterColumn} mr-0 pr-0`}>
                    <IconSettingFilter />
                    {/* {open && <div><DropdownFilter className="dropdown-filter" onHandleChangeHead={onHandleChangeHead} fieldValue={fieldValue} fieldKey={fieldKey} fieldName={props.fieldName} data={data} {...ref} /></div>} */}
                </TableCell>}
                {isShowCheckBox && <TableCell padding="checkbox">
                    <Checkbox
                        color="success"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected == rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>}
                {( data )?.map((headCell,index) => headCell?.checked && (
                    <TableCell
                        key={index}
                        align={headCell.numeric == '1' ? 'left' : headCell.numeric == '2' ? 'center' : 'right'}
                        padding="none"
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{ minHeight:38,minWidth: headCell.minWidth ,fontWeight:600 ,paddingRight:headCell.numeric == '3' ? 20 : 0}}
                        size="small"
                    >
                        {
                            headCell?.sort ? 
                                <TableSortLabel
                                    active={orderBy === headCell.id }
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                    style={{ minHeight:38,}}
                                >
                                    {headCell[fieldName]}
                                    {orderBy === headCell.id ? (
                                        <Box
                                            component="span"
                                            sx={visuallyHidden}
                                            style={{minHeight:38,}}
                                        >
                                            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                                : headCell[fieldName]
                        }
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

CommonTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    fieldName: PropTypes.string,
    fieldValue: PropTypes.string,
    fieldKey: PropTypes.string,
    onHandleChangeHead: PropTypes.func,
    isShowFilterColumn:PropTypes.bool,
    isShowCheckBox:PropTypes.bool,
    dataDefault:PropTypes.array
}

export default CommonTableHead;