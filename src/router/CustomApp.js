import React from 'react';
import MainLayout from 'shared/components/layout/MainLayout';
import RouterPath from './RouterPath';

function CustomApp (props) {
    RouterPath.LAYOUT = props.Layout || MainLayout;
    return (
        <>
            {props.children}
        </>
    )
}

export default CustomApp
