import React, { useEffect } from 'react';
import styles from './Loader.module.scss';
import { handleScroll } from './../../../../utils/Helper';
import LoaderIcon from './LoaderIcon';

function Loader(props) {
    const { loading } = props;
    useEffect(() => {
        handleScroll(loading, 'no-scroll');
    }, []);
    return (
        <div className={styles.wrapLoader}>
            <LoaderIcon />
        </div>
    );
}
export default Loader;
