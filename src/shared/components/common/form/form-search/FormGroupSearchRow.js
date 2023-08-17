import React from 'react';
import styles from './FormSearch.module.scss';
import PropTyes from 'prop-types';
import $ from 'jquery';
import IconSettingFilter from 'assets/icon/IconSettingFilter';
import EventRegister, { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER } from 'utils/EventRegister';

function FormGroupSearchRow(props) {
    const { isShowFilterColumnTable = false ,type, isRequest} = props;
    const handleTriggerPopup = () => {
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: EVENT_SHOW_POPUP_CHANGE_COLUMN_NUMBER,
            open: true,
            payload: {
                callback: {
                    // setDataHeader: (res) => {
                    //     onChangeHeader(res)
                    // },
                },
                title: 'Điều chỉnh cột hiển thị',
                data: {
                    className: 'popup-disable-padding',
                    type: type,
                    isRequest: isRequest
                    // dataDefault
                }
            }
        })
    };
    return (
        <div
            className={`${styles['group-form-search-row']} ${props?.className}`}
            style={props.style}
        >
            {props.componentLeft || props?.children ? (
                <div className={`${styles['group-input']}`} style={{
                    flex: 1
                }}>
                    {props.componentLeft ?? props?.children}
                </div>
            ) : (
                <></>
            )}
            {props.componentRight ? (
                <div style={props.styleAction} className={`${styles['group-action']}`}>
                    {props.componentRight}
                    {isShowFilterColumnTable ? (
                        <div
                            onClick={handleTriggerPopup}
                            className={styles['icon-action']}
                        >
                            <IconSettingFilter color="#138300" />
                        </div>
                    ) : (
                        <></>
                    )}
                    {
                        props.componentOption
                    }
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
FormGroupSearchRow.propTypes = {
    componentLeft: PropTyes.element,
    componentRight: PropTyes.element,
    isShowFilterColumnTable: PropTyes.bool,
    type: PropTyes.string,
    isRequest: PropTyes.bool
};
export default FormGroupSearchRow;
