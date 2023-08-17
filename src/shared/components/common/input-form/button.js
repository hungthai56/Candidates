import React from 'react';
import * as Themes from '@findxdn/erp-theme';

function Button (props) {
    return (
        <Themes.Button
            type="submit"
            className="btn search-btn background-green bases__font--14"
            style={{ marginRight: 10 }}
        >
            {props?.children}
        </Themes.Button>
    )
}
export default Button;