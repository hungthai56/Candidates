import React from 'react';
import styles from './WaringPost.module.scss';
import IconWaring from './../../icons/icon-waring';
import PropTypes from 'prop-types';

function WaringPost(props) {
    const { title = 'Bài viết có bình luận bị báo cáo' } = props;
    return (
        <>
            <div className={styles.PopupTooltipWarning}>
                <IconWaring />
                <div className={styles.PopupTooltip}>
                    <p>{title}</p>
                </div>
            </div>
        </>
    );
}

WaringPost.propsType={
    title:PropTypes.string
}
export default WaringPost;
