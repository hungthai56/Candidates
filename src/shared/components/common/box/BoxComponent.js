import React from 'react';
import styles from './BoxComponent.module.scss';
import PropTypes from 'prop-types';
function BoxComponent(props) {
    const {
        ChildrenRight,
        boxTitle,
        className,
        mainBox = true
    } = props;
    return <div className={`${styles.BoxComponent} ${props.className}`}>
        <div className={styles.BoxComponentHeader}>
            <div className={styles.titleLeft}>{boxTitle}</div>
            <div >
                {ChildrenRight}
            </div>
        </div>
        <div className={`${mainBox ? styles.mainBox : ''}`}>
            {props.children}
        </div>
    </div>;
}

BoxComponent.propTypes={
    ChildrenRight: PropTypes.element,
    boxTitle: PropTypes.string,
    className: PropTypes.string,
}
export default BoxComponent;
