import React from 'react'

function Input({ placeholder, isBorderBottom, iconLeft, iconRight, ...props }) {
    return (
        <>
            <div
                className={`input-default 
                ${isBorderBottom ? 'border-bottom' : ''} ${false ? 'input-error' : ''}
                `}
            >
                {iconLeft ? <span>{!!iconLeft && iconLeft}</span> : <></>}
                <input
                    type={props.type}
                    placeholder={placeholder}
                    {...props}
                />
                {iconRight ? <span>{!!iconRight && iconRight}</span> : <></>}
            </div>
        </>
    )
}
export default Input
