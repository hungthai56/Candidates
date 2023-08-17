import React from 'react'
import { TableCell } from '@mui/material';
import PropTypes from 'prop-types';
import Utils from './../../utils/Utils';
import IcDelete from './../../assets/images/icons/ic-delete';
import Constants from './../../utils/Constants';

function TableCel(props) {
    const {labelId,children,align,handleClickDelete,row,fieldId='PostId',type}=props;
    const handleDelete=(e,item)=>{
        e.preventDefault();
        e.stopPropagation();
        handleClickDelete(event, item)
    }
    return (
        <>
            {type == Constants.TYPE_RENDER_TABLE.DATE &&  <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
                align={align}
                style={{ height: '50px' }}
            >
                {new Date(children).toLocaleDateString()}
            </TableCell>}
            {type==Constants.TYPE_RENDER_TABLE.TEXT && <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
                align={align}
                style={{ height: '50px' }}
            >
                {children?.toString()}
            </TableCell>}
            {type==Constants.TYPE_RENDER_TABLE.CHOOSE && <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
                align={align}
                style={{ height: '50px' }}
            >
                {Utils.ConvertType(children)}
            </TableCell>}
            {type==Constants.TYPE_RENDER_TABLE.OPTION && <TableCell
                component="th"
                id={labelId}
                scope="row"
                padding="none"
                align={align}
                style={{ height: '50px' }}
                onClick={(event) =>
                    handleDelete(event, row[fieldId])
                }
            >
                <IcDelete />
            </TableCell>}
        </>
    )
}
TableCel.propTypes={
    labelId:PropTypes.string,
    children:PropTypes.string,
    align:PropTypes.string,
    handleClickDelete:PropTypes.func,
    row:PropTypes.object,
    fieldId:PropTypes.string,
    type:PropTypes.string
}
export default TableCel;