import React from 'react';
import PropTypes from 'prop-types';

function Box(props) {
    const {
        className,
        style,
        children,
        boxTitle,
        isHaveBorderTitle,
        iconTitleLeft,
        iconTitleRight,
    } = props

    const renderHeaderBox = (param) => {
        const { pTitle = '', isBorder = false } = param
        return (
            <div className={`d-flex justify-content-between align-items-center box-title ${isBorder ? 'border-title' : ''}`}>
                <div className="d-flex align-items-center">
                    {iconTitleLeft && iconTitleLeft}
                    <p className={`${iconTitleLeft ? 'bases__margin-left--15' : ''} font-weight-bold`}>{pTitle}</p>
                </div>
                <div>
                    {iconTitleRight && iconTitleRight}
                </div>
            </div>
        )
    }

    return (
        <div
            className={`findx-box ${className}`}
            style={style}
        >
            {
                boxTitle && renderHeaderBox({ pTitle: boxTitle, isBorder: isHaveBorderTitle })
            }
            <div className="box-content">
                {children}
            </div>
        </div>
    );
}

Box.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
    boxTitle: PropTypes.string,
    isHaveBorderTitle: PropTypes.bool,
    iconTitleLeft: PropTypes.element,
    iconTitleRight: PropTypes.element,
}

Box.defaultProps = {
    className: '',
    style: {},
    children: null,
    boxTitle: '',
    isHaveBorderTitle: false,
    iconTitleLeft: null,
    iconTitleRight: null,
}

export default Box;
