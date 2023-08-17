import React from 'react'
import styles from './OptionBottom.module.scss';
import IconDelete from 'shared/components/icons/icon-delete';
import IconCommentHidden from 'shared/components/icons/icon-comment-hidden';
import IconCommentShow from 'shared/components/icons/icon-comment-show';
import PropTypes from 'prop-types';
import IconHiddenCm from 'assets/icon/IconHiddenCm';
import IconShowCm from 'assets/icon/IconShowCm';
import Permission from 'utils/Permission';
function OptionBottom(props) {
    const {handleDelete,handleHidden,handleShow,isShowDelete , isShowShow ,isShowHidden}=props;
    return (
        <>
            <div className={`d-flex flex-row justify-content-start align-items-center cursor-pointer rounded ${styles.OptionBottom}`}>
                {
                    isShowDelete &&  <div onClick={handleDelete} className={`${styles.cursorPointer} d-flex flex-column justify-content-center align-items-center`}>
                        <IconDelete />
                        {/* <p className={styles.TextIconOption}>Xoá tất cả</p> */}
                    </div>
                }
                {
                    Permission.IsEnabledFunction(Permission.FUNCTIONS.HIDDEN_COMMENT_SOCIAL) && isShowHidden && <div onClick={handleHidden} className={`${styles.cursorPointer} d-flex flex-column justify-content-center align-items-center ml-3`}>
                        <IconHiddenCm fill="#707070" />
                        {/* <p className={styles.TextIconOption}>Ẩn tất cả</p> */}
                    </div>
                }
                {
                    Permission.IsEnabledFunction(Permission.FUNCTIONS.HIDDEN_COMMENT_SOCIAL) &&  isShowShow && <div onClick={handleShow} className={`${styles.cursorPointer} d-flex flex-column justify-content-center align-items-center ml-3`}>
                        <IconShowCm fill="#707070" />
                        {/* <p className={styles.TextIconOption}>Hiện tất cả</p> */}
                    </div>
                }
            </div>
        </>
    )
}

OptionBottom.defaultProps={
    isShowShow:true,
    isShowDelete:true,
    isShowHidden:true,
}
OptionBottom.propTypes={
    handleDelete:PropTypes.func,
    handleHidden:PropTypes.func,
    handleShow:PropTypes.func,
    isShowHidden:PropTypes.bool,
    isShowDelete:PropTypes.bool,
    isShowShow:PropTypes.bool,

}
export default OptionBottom;