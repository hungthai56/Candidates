import React from 'react'
import styles from './HeaderTable.module.scss';
import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import $ from 'jquery'

function DropdownFilter(props) {
    const {data,fieldName,onHandleChangeHead,fieldValue,fieldKey,className}=props;
    return (
        <div style={{maxHeight:$('.table-common-container').height()-65}} className={`${styles.DropdownFilter} ${className}`}>
            {
                data?.map((value,index)=>{
                    return <div onClick={()=>onHandleChangeHead(value)} key={index} className={`${styles.DropdownFilterItem}`}>
                        <Checkbox color="success" size="small" checked={value?.checked} />
                        <p className='ml-2'>{value[fieldName]}</p>
                    </div>
                })
            }
        </div>
    )
}
DropdownFilter.defaultProps={
    data:[]
}
DropdownFilter.propTypes={
    data:PropTypes.array,
    fieldName:PropTypes.string,
    fieldValue:PropTypes.string,
    fieldKey:PropTypes.string,
    onHandleChangeHead:PropTypes.func
}
export default DropdownFilter;