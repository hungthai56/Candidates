import React from 'react';
import PropTypes from 'prop-types';
import styles from './FooterManage.module.scss';
import IconLeftArrow from './../../../../assets/images/icons/ic-left-arrow';
import { useHistory } from 'react-router'

function FooterManage(props) {
    const {
        className,
        children,
        isShowBack,
        routerPath = '',
        back,
        isShareScreen,
    } = props;

    const history = useHistory();
    
    const handleBack = () => {
        if (back){
            window.history.back();
        } else {
            if (routerPath == ''){
                history.goBack();
            } else {
                history.push(routerPath);
            }
        }
    }

    return (
        <>
            {
                isShowBack &&
                <div onClick={handleBack} className={styles.containerGoBackCommon}>
                    <div className={styles.iconGoBack}>
                        <IconLeftArrow />
                    </div>
                    <p className={`${styles.titleGoBack}`}><a>{props.titleBack}</a></p>
                </div>
            }
            <div className={`${styles.findXFooter} ${className} ${!isShareScreen && styles.positionFix}`}>
                <div className="w-100 d-flex align-items-center justify-content-end">                    
                    {/* <div
                        onClick={handleBack}
                        className={`d-flex align-items-center justify-content-start flex-row ${styles.buttonBack}`}
                    >
                        <IconLeftArrow />
                        <a className="ml-2">Quay lại danh sách sản phẩm</a>
                    </div> */}
                    <div>{children}</div>
                </div>
            </div>
        </>
    );
}

FooterManage.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.element,
    isShowBack: PropTypes.bool,
    titleBack: PropTypes.string,
    routerPath: PropTypes.string,
    back: PropTypes.bool,
    isShareScreen: PropTypes.bool,
};

FooterManage.defaultProps = {
    className: '',
    style: {},
    children: null,
    isShowBack: true,
    titleBack: "Quay lại",
    routerPath: '',
    back: false,
    isShareScreen: false,
};
export default FooterManage;
