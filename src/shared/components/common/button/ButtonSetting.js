import IcFilterSetting from 'assets/icon/ic-filter-setting';
import React from 'react';

function ButtonSetting(props) {
    return (
        <div
            style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#E5F1E3',
                borderRadius: '3px',
                cursor: 'pointer',
            }}
            className="d-flex justify-content-center align-items-center"
        >
            <IcFilterSetting />
        </div>
    );
}

export default ButtonSetting;
