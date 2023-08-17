// import IconSuccess from '@spo/icons/icon-success';
import React from 'react';
import Button from 'shared/components/common/button/Button';

function TextPopup(props) {
    const { payload, showVisible, config } = props;
    const handleClick = () => {
        if (typeof payload.callback == 'function') {
            payload.callback();
        }
        showVisible(false);
    };
    return (
        <div className="text-popup">
            {config?.showTopTitle && (
                <div className="main-title text-center h5">
                    {config.topTitle}
                </div>
            )}
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 20,
                    fontSize: 14,
                    fontWeight: 'normal',
                }}
            >
                {payload?.title}
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30,
                }}
            >
                <div style={{ width: 140 }}>
                    <Button
                        type="main"
                        onClick={handleClick}
                        title={payload?.buttonTitle ?? 'Đóng'}
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
}
TextPopup.defaultProps = {
    config: {
        topTitle: 'Thông báo',
        showTopTitle: true,
    },
};
export default TextPopup;
