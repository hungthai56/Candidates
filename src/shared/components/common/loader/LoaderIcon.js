import IcFm from 'assets/images/icons/ic-fm';
import React, { useEffect } from 'react';
import styles from './Loader.module.scss';
import { handleScroll } from 'utils/Helper';

function LoaderIcon(props) {
    const { loading } = props;
    useEffect(() => {
        handleScroll(loading, 'no-scroll');
    }, []);
    return (
        <div className={`${styles.loaderIcon} ${styles[props.size]}`}>
            <div className={styles.loader}></div>
            <div className={styles.image}>
                <IcFm className="style-iconFm" />
            </div>
        </div>
    );
}
export default LoaderIcon;
