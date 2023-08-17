import React from 'react'
import { IcRowDownWhite, IcUp } from 'library/components/assets/icons/index'

function ButtonSelect(props) {
    const { type, sx, onClickBtnSearch, onClickBtnSelect, disabled, className, children, isDown } = props
    return (
        <div className="button-select">
            <button
                type={type ?? 'button'}
                disabled={disabled}
                style={sx}
                onClick={onClickBtnSearch}
                className={`btn-search ${className ? className : ''}`}
            >
                {children}
            </button>
            <button
                type={type ?? 'button'}
                disabled={disabled}
                style={sx}
                onClick={onClickBtnSelect}
                className={`btn-select ${className ? className : ''}`}
            >
                {isDown ? <IcRowDownWhite /> : <IcUp />}
            </button>
        </div>
    )
}

export default ButtonSelect
