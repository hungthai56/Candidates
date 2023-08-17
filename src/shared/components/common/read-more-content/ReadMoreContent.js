import IconEye from 'assets/icon/IcEye'
import React from 'react'
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister'
import PopupName from '../popup/PopupName'
import styles from './ReadMoreContent.module.scss'

function ReadMoreContent(props) {
    const {className,titleButton,contentPopup,titlePopup} = props
    const readMore = (value,header) =>{
        if(contentPopup){
            EventRegister.emit(EVENT_SHOW_POPUP, {
                open: true,
                type: PopupName.EVENT_SHOW_POPUP_CONTENT,
                payload: {
                    data: {
                        content: value,
                        ReadMore: true,
                        isRender: true,
                    },
                    title:header
                },
            });
        }
    }
    return (
        <>
            <div 
                className={`${contentPopup ? styles.buttonContent : styles.buttonDisabled} ${className}`} 
                onClick={ (e) => {
                    readMore(contentPopup,titlePopup);
                    e.stopPropagation()
                }}
            >
                <IconEye className={styles.icon}/>{' '}
                <p className={styles.readContent}>{titleButton}</p>
            </div>
        </>
    )
}

export default ReadMoreContent