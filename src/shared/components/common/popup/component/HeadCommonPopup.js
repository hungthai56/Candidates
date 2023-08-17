import React from 'react';
import PropTypes from 'prop-types';
import IconClose from './../../../icons/icon-close';
import styles from './HeadCommonPopup.module.scss';

function HeadCommonPopup(props) {
    const { content = '', onHandleLeft, onHandleRight } = props;
    return (
        <div
            style={{ backgroundColor: '#FAF9F3' }}
            className={`${styles.HeadCommonPopup} d-flex justify-content-between align-items-center flex-row`}
        >
            <div className={styles.iconLeft} onClick={onHandleLeft}></div>
            <div>
                <p className={styles.titlePopup}>{content}</p>
            </div>
            <div onClick={onHandleRight} className={styles.iconRight}>
                <IconClose width={24} />
            </div>
        </div>
    );
}

HeadCommonPopup.propTypes = {
    content: PropTypes.string,
    onHandleLeft: PropTypes.func,
    onHandleRight: PropTypes.func,
};
export default HeadCommonPopup;
