import React from 'react';
import LoaderIcon from './LoaderIcon';
import styles from './Loader.module.scss'


function LoaderLayer (props) {
    const { style = {} } = props
    return (
        <div className={styles.loaderLayer} style={style}>
            <LoaderIcon size={props.size} />
        </div>
    )
}
export default LoaderLayer;