import React, { useEffect } from 'react'
import { LoadingButton as LoadingBtn } from '@mui/lab';
import PropTypes from 'prop-types';
import styles from './LoadingButton.module.scss';
function LoadingButton(props) {
    const {
        loading = false,
        type = "button",
        onClick,
        title,
        isOutlined = false,
        className,
        typeColor = "border-green",
        disabled = false
    } = props;
    const [loadingButton, setLoading] = React.useState(false);
    const [disableButton, setDisable] = React.useState(false);
    const [clickButton, setClickButton] = React.useState(false);

    useEffect(() => {
        if(!loading){
            setLoading(false)
            setDisable(false);
            setClickButton(false);
        }else{
            clickButton ? setLoading(true) : setLoading(false);
            clickButton ? setDisable(false) : setDisable(true);
        }
    }, [loading])

    const onHandleClick=(e)=>{
        onClick && onClick(e);
        setClickButton(true);
    }


    const switchButton=(typeColor)=>{
        switch (typeColor) {
            case 'background-red':
                return styles.ButtonLoadingRed;
            case 'background-green':
                return styles.ButtonLoading;
            case 'background-gray':
                return styles.ButtonLoadingGray;
            default:
                return styles.ButtonLoading;
        }
    }

    return (
        <div className={switchButton(typeColor)}>
            <LoadingBtn
                onClick={onHandleClick}
                loading={loadingButton}
                variant={isOutlined ? "outlined" : "contained"}
                type={type}
                className={`${className}`}
                color="success"
                loadingPosition="start"
                startIcon={loadingButton ? <span className='mr-3' /> : <></>}
                disabled={disableButton || disabled}
                
            >
                {title != undefined ? title : props.children}
            </LoadingBtn>
        </div>
    )
}
LoadingButton.propTypes = {
    loading: PropTypes.bool,
    isOutlined: PropTypes.bool,
    disabled: PropTypes.bool,
    typeColor: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}
export default LoadingButton;