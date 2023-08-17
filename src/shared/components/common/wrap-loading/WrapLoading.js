import React from 'react';

function WrapLoading (props) {
    const { Loader, loading, children } = props
    return (
        loading ? <Loader /> : children
    )
}
export default WrapLoading;