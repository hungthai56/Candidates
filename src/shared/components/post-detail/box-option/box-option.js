import React from 'react'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
import Constants from './../../../../utils/Constants';
import { useDispatch } from 'react-redux';
import actionPost from './../../../../redux/post/action';
import Utils from './../../../../utils/Utils';
import { EVENT_SHOW_POPUP_ACCEPT, EVENT_SHOW_POPUP_CANCEL_POST } from 'utils/EventRegister';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import Permission from 'utils/Permission';

export default function BoxOption(props) {
    const { isShowOptionStatus } = props;
    const history = useHistory()
    const handleBack = () => {
        history.goBack()
    }
    const dispatch = useDispatch();
    const handleTypePost = (type) => {
        if (type == Constants.STATUS_POST.STATUS_NOT_APPROVE) {
            Utils.alertPopup(Constants.TITLE_POPUP.APPROVE_NOT_POST, EVENT_SHOW_POPUP_CANCEL_POST, (res) => {
                dispatch({
                    type: actionPost.CHANGE_TYPE_POST_DETAIL_START,
                    payload: {
                        PostId: props?.item?.Id,
                        Type: type,
                        Reason: res
                    }
                })
            })
        } else {
            Utils.alertPopup(Constants.TITLE_POPUP.APPROVE_POST, EVENT_SHOW_POPUP_ACCEPT, () => {
                dispatch({
                    type: actionPost.CHANGE_TYPE_POST_DETAIL_START,
                    payload: {
                        PostId: props?.item?.Id,
                        Type: type
                    }
                })
            })
        }
    }
    return (
        <div className='d-flex flex-row justify-content-end align-items-center'>
            <LoadingButton isOutlined onClick={handleBack} color='success' variant="outlined">Thoát</LoadingButton>
            {/* {
                isShowOptionStatus &&  props.item?.Type == Constants.STATUS_POST.STATUS_WAIT_APPROVE  && <>
                    <Button  onClick={()=>handleTypePost(Constants.STATUS_POST.STATUS_APPROVE)} color='success' className='ml-2' variant="contained">Phê duyệt</Button>
                </>
            } */}
            {
                Permission.IsEnabledFunction(Permission.FUNCTIONS.NO_POST_APPROVAL_SOCIAL) && isShowOptionStatus && props.item?.Type == Constants.STATUS_POST.STATUS_APPROVE && <>
                    <LoadingButton typeColor='background-red' onClick={() => handleTypePost(Constants.STATUS_POST.STATUS_NOT_APPROVE)} color='error' className='ml-2' variant="contained">Không phê duyệt</LoadingButton>
                </>
            }
            {
                Permission.IsEnabledFunction(Permission.FUNCTIONS.NO_POST_APPROVAL_SOCIAL) && isShowOptionStatus && props.item?.Type == Constants.STATUS_POST.STATUS_REPORT && <>
                    <LoadingButton typeColor='background-red' onClick={() => handleTypePost(Constants.STATUS_POST.STATUS_NOT_APPROVE)} color='error' className='ml-2' variant="contained">Không phê duyệt</LoadingButton>
                </>
            }
            {
                isShowOptionStatus && props.item?.Type == Constants.STATUS_POST.STATUS_WAIT_APPROVE && <>
                    {
                        Permission.IsEnabledFunction(Permission.FUNCTIONS.NO_POST_APPROVAL_SOCIAL) && <LoadingButton typeColor='background-red' onClick={() => handleTypePost(Constants.STATUS_POST.STATUS_NOT_APPROVE)} style={{ backgroundColor: '#FF4D4D' }} className='ml-2' variant="contained">Không phê duyệt</LoadingButton>
                    }

                    {
                        Permission.IsEnabledFunction(Permission.FUNCTIONS.POST_APPROVAL_SOCIAL) && <LoadingButton onClick={() => handleTypePost(Constants.STATUS_POST.STATUS_APPROVE)} color='success' className='ml-2' variant="contained">Phê duyệt</LoadingButton>

                    }
                </>
            }
        </div>
    )
}
