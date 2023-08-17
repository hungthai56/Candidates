import React from 'react';
import { TextLabel } from '@findxdn/erp-theme';
import PropTypes from 'prop-types';
import styles from './TextLabel.module.scss';
function TextLabelCommon(props) {
    const { require = false } = props;
    return (
        <TextLabel
            className={`m-0 ${props.className}`}
        >
            {props.title ?? props.children} {require ? <span className={styles['text-red-priority']}>*</span> : <></>}
        </TextLabel>
    );
}

TextLabelCommon.propTypes = {
    title: PropTypes.string,
    require: PropTypes.bool,
};
export default TextLabelCommon;
