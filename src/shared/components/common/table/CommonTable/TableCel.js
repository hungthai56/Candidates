import React from 'react'
import { TableCell } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

function TableCel(props) {
    const {labelId,children,align,row,fieldId='PostId',Item,stt}=props;
    return (
        <>
            {Item?.component ? <TableCell 
                padding="none"
                align={align}
                style={{ height: '50px' ,padding : 0 ,paddingRight : align =='right' ? 20 : 0}} >
                <Item.component
                    data={row}
                    dataId={row[fieldId]}
                    children={children}
                    itemHead={Item}
                    stt={stt}
                    fieldId="fieldId"  /> </TableCell>
                :
                <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="none"
                    align={align}
                    style={{ height: '50px' ,
                        paddingRight : align =='right' ? 20 : 0,
                        display:'flex',
                        alignItems:'center'
                    }}
                    className={styles.TextRowTable}
                >
                    {children}
                </TableCell>}
        </>
    )
}
TableCel.propTypes={
    labelId:PropTypes.string,
    align:PropTypes.string,
    handleClickDelete:PropTypes.func,
    row:PropTypes.object,
    fieldId:PropTypes.string,
    type:PropTypes.string,
    Item:PropTypes.object
}
export default TableCel;