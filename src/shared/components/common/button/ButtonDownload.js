import * as React from 'react';

function ButtonDownload(props) {
    return (
        <button 
            style={{width:'32px',height:'32px',backgroundColor: '#138300',border:'none',borderRadius:'3px'}} type="button"
            className={props?.className}
            onClick={props.onClick}
        >
            {props?.children}
        </button>
    )
}
export default ButtonDownload
