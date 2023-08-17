import React, { useState } from 'react';
import { styled } from '@mui/system';
import HeadCommonPopup from '../component/HeadCommonPopup';
import LoadingButton from '../../button-loading/ButtonLoading';

const FormWrapper = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '30px 30px 20px 30px',
    maxWidth: '368px',
    textAlign: 'center',
    maxHeight: '198px',
    lineHeight: '22px',
});

const FormItemWrapper = styled('div')({
    textAlign: 'center',
});

const FormButtonWrapper = styled('div')({
    textAlign: 'center',
    padding: '10px',
});

export default function SaveConfirmPopup(props) {
    const { showVisible, payload } = props;
    const [loading , setLoading] = useState(false);
    const onClickCancelButton = () => {
        if (payload?.handleCancel) {
            payload?.handleCancel();
        }
        if (payload?.callback?.failed) {
            payload?.callback?.failed();
        }
        showVisible(true);
    };

    const SubmitNotLoadingPopup = () => {
        if (payload?.handleSave) {
            payload?.handleSave();
        }
        showVisible();
    };


    const onClickSaveButton = () => {
        payload.isLoading ? closePopupIsloading() : SubmitNotLoadingPopup()
    };

    const closePopupIsloading=()=>{
        setLoading(true);
        payload?.callback?.success({
            closeLoading
        })
    }

    const closeLoading=()=>{
        setLoading(false);
        showVisible(false);
    }
    return (
        <div>
            <HeadCommonPopup onHandleRight={() => {
                payload?.handleCancel();
                showVisible()
            }} content="Xác nhận" />
            <FormWrapper>
                <FormItemWrapper>
                    <div style={{ textAlign: 'center' }}>{payload?.message}</div>
                </FormItemWrapper>

                <FormButtonWrapper>
                    <div style={{columnGap: 10}} className='d-flex flex-row justify-content-center'>
                        <LoadingButton
                            loading={loading}
                            onClick={() => onClickCancelButton()}
                            typeColor='background-gray'
                        >
                            Đóng
                        </LoadingButton>
                        <LoadingButton
                            loading={loading}
                            onClick={() => onClickSaveButton()}
                        >
                            Đồng ý
                        </LoadingButton>
                    </div>
                </FormButtonWrapper>
            </FormWrapper>
        </div>
    );
}
