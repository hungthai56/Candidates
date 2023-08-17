import React from 'react';
import { Box as BoxTheme } from '@findxdn/erp-theme'

function BoxCommon (props) {
    const { boxTitle } = props
    return (
        <BoxTheme
            style={{ fontWeight: '400' ,zIndex: 1,}}
            boxTitle={boxTitle}
            iconTitleRight={props.iconTitleRight ?? <></>}
            className={`global-info-container ${props.className}`}
        >
            {props.children}
        </BoxTheme>
    );
}
export default BoxCommon;