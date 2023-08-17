import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { Button } from '@findxdn/erp-theme';
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import { Checkbox } from '@mui/material';
import guiActions from 'redux/gui/action';
import useRouter from 'hooks/use-router';
import mapKeys from 'lodash/mapKeys';
import Constants from 'utils/Constants';
import moment from 'moment';
import { GetMsg } from 'utils/Message';
import PopupName from '../PopupName';
import HeadCommonPopup from '../component/HeadCommonPopup';
import LoadingButton from '../../button-loading/ButtonLoading';
import Image from '../../image/Image';
import classes from './DetailPopup.module.scss';
import FormGroup from '../../form/FormGroup';
import FormItem from '../../form/FormItem';
import TextLabelCommon from '../../label/TextLabel';
import ImageBox from '../../image/ImageBox';

const DetailWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px',
    minWidth: '770px',
    maxHeight: '600px',
    overflowY: 'scroll',
});
const FormItemWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '50%',
});

const FormInputWrapper = styled('div')({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
});

const DetailItemWrapper = styled('div')({
    display: 'flex',
    gap: '8px',
    width: '48%',
});

const FormButtonWrapper = styled('div')({
    display: 'flex',
    gap: '15px',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%'
});

const DetailLabel = styled('p')({
    width: '200px',
    color: '#707070',
});

const ImageWrapper = styled('div')({
    width: '31,5%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
});
export default function GuiCreatePopup(props) {
    const { showVisible, payload } = props;
    const dispatch = useDispatch();
    const {
        gui
    } = useSelector(state => state.gui)
    const router = useRouter();
    const handleEditButton = (gui) => {
        showVisible();
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: PopupName.UPDATE_GUI,
            open: true,
            payload: {
                data: gui?.Id,
            },
        });
    };
    const openGuiDeletePopup = (gui) => {
        const message = "Bạn có chắc chắn muốn xoá giao diện này không ?"
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: PopupName.DELETE_POPUP,
            open: true,
            payload: {
                data: gui,
                message,
                handleSave: () => {
                    const queryParamsToObject = mapKeys(
                        router.query,
                        (value, key) => Constants.URL_PARAMS[key],
                    );
                    const callback = () => {
                        dispatch({
                            type: guiActions.FETCH_GUI_LIST,
                            payload: queryParamsToObject,
                        });
                    };
                    dispatch({
                        type: guiActions.DELETE_GUI,
                        payload: { callback, data: gui?.Id },
                    });
                },
                // handleCancel: () => {
                //     EventRegister.emit(EVENT_SHOW_POPUP, {
                //         type: PopupName.DETAIL_GUI,
                //         open: true,
                //         payload: {
                //             type: 'cancel',
                //             data: gui,
                //         },
                //     });
                // },
            },
        });
    };

    return (
        <div >
            <HeadCommonPopup
                onHandleRight={showVisible}
                content="Chi tiết giao diện"
            />
            <div className={classes['container']}>
                <DetailWrapper>
                    <div className={classes['main']}>
                        <p style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
                            Thông tin chung
                        </p>
                        <FormInputWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Tên giao diện</DetailLabel>
                                <p>: {gui?.Name}</p>
                            </DetailItemWrapper>
                            <DetailItemWrapper />
                            <DetailItemWrapper>
                                <DetailLabel>Ngày bắt đầu</DetailLabel>
                                <p>: {moment(gui?.From).format('DD/MM/YYYY hh:mm')}</p>
                            </DetailItemWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Thời gian kết thúc</DetailLabel>
                                <p>: {moment(gui?.To).format('DD/MM/YYYY hh:mm')}</p>
                            </DetailItemWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Màu nền header</DetailLabel>
                                <div className={classes['box-color']} style={{
                                    background: gui?.HeaderBgColor
                                }}></div>
                            </DetailItemWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Màu chữ header</DetailLabel>
                                <div className={classes['box-color']} style={{
                                    background: gui?.HeaderTextColor
                                }}></div>
                            </DetailItemWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Màu hover chữ ở header</DetailLabel>
                                <div className={classes['box-color']} style={{
                                    background: gui?.HeaderTextHoverColor
                                }}></div>
                            </DetailItemWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Màu nền giỏ hàng</DetailLabel>
                                <div className={classes['box-color']} style={{
                                    background: gui?.CartBadgeBgColor
                                }}></div>
                            </DetailItemWrapper>
                            <DetailItemWrapper>
                                <DetailLabel>Màu chữ giỏ hàng</DetailLabel>
                                <div className={classes['box-color']} style={{
                                    background: gui?.CartBadgeTextColor
                                }}></div>
                            </DetailItemWrapper>
                        </FormInputWrapper>
                    </div>
                    {gui?.IsLoopingByYeaer && <div className={classes['main']}><FormItemWrapper>
                        <div>
                            Lặp lại qua các năm
                        </div>
                    </FormItemWrapper></div>}
                    <div className={classes['main']}>
                        <FormItemWrapper>
                            <div
                                style={{
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Logo (60 * 30)
                                <span style={{ color: '#FF2C00', marginLeft: '3px' }}>*</span>
                            </div>
                        </FormItemWrapper>
                        <FormGroup>
                            <FormItem style={{
                                flex: 1
                            }}>
                                <ImageBox>
                                    <Image
                                        cover
                                        style={{ paddingTop: 0, minWidth: 124 }}
                                        imageStyle={{
                                            width: '150px',
                                            height: '130px',
                                            position: 'unset',
                                            borderRadius: '5px',
                                        }}
                                        width={'auto'}
                                        height={124}
                                        src={gui?.Logo}
                                    />
                                </ImageBox>
                            </FormItem>
                            <FormItem style={{
                                flex: 1
                            }}></FormItem>
                        </FormGroup>
                        <FormItemWrapper>
                            <div
                                style={{
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                }}
                            >
                                ẢNH WEB
                            </div>
                        </FormItemWrapper>
                        <FormGroup>
                            <FormItem style={{
                                flex: 1
                            }}>
                                <TextLabelCommon require>Ảnh đầu hệ thống cửa hàng - web  (1920 * 616)</TextLabelCommon>
                                <ImageBox>
                                    <Image
                                        cover
                                        style={{ paddingTop: 0, minWidth: 124 }}
                                        imageStyle={{
                                            width: '150px',
                                            height: '130px',
                                            position: 'unset',
                                            borderRadius: '5px',
                                        }}
                                        width={'auto'}
                                        height={124}
                                        src={gui?.BranchImage}
                                    />
                                </ImageBox>

                            </FormItem>
                        </FormGroup>
                        <FormItemWrapper>
                            <div
                                style={{
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                }}
                            >
                                ẢNH DI ĐỘNG
                            </div>
                        </FormItemWrapper>
                        <FormGroup>
                            <FormItem style={{
                                flex: 1
                            }}>
                                <TextLabelCommon require>Màn hình chờ (390 * 844)</TextLabelCommon>
                                <ImageBox>
                                    <Image
                                        cover
                                        style={{ paddingTop: 0, minWidth: 124 }}
                                        imageStyle={{
                                            width: '150px',
                                            height: '130px',
                                            position: 'unset',
                                            borderRadius: '5px',
                                        }}
                                        width={'auto'}
                                        height={124}
                                        src={gui?.SplashImage}
                                    />
                                </ImageBox>

                            </FormItem>
                            <FormItem style={{
                                flex: 1
                            }}>
                                <TextLabelCommon require>Ảnh đăng kí/đăng nhập (480 * 170)</TextLabelCommon>
                                <ImageBox>
                                    <Image
                                        cover
                                        style={{ paddingTop: 0, minWidth: 124 }}
                                        imageStyle={{
                                            width: '150px',
                                            height: '130px',
                                            borderRadius: '5px',
                                            position: 'unset',
                                        }}
                                        width={'auto'}
                                        height={124}
                                        src={gui?.LoginImage}
                                    />
                                </ImageBox>
                            </FormItem>
                        </FormGroup>
                        <FormGroup>
                            <FormItem style={{
                                flex: 1
                            }}>
                                <TextLabelCommon>Ảnh đầu trang chủ di động (390 * 844)</TextLabelCommon>
                                <ImageBox>
                                    <Image
                                        cover
                                        style={{ paddingTop: 0, minWidth: 124 }}
                                        imageStyle={{
                                            width: '150px',
                                            height: '130px',
                                            borderRadius: '5px',
                                            position: 'unset',
                                        }}
                                        width={'auto'}
                                        height={124}
                                        src={gui?.TopHeaderImage}
                                    />
                                </ImageBox>
                            </FormItem>
                            <FormItem style={{
                                flex: 1
                            }}>
                            </FormItem>
                        </FormGroup>
                    </div>

                    <FormButtonWrapper>
                        <div className={classes['action-bottom']}>
                            <LoadingButton
                                onClick={showVisible}
                                typeColor="background-gray"
                            >
                                Đóng
                            </LoadingButton>
                            <LoadingButton
                                onClick={() => openGuiDeletePopup(gui)}
                                typeColor="background-red"
                                isOutlined
                            >
                                Xóa
                            </LoadingButton>

                            <LoadingButton
                                onClick={() => handleEditButton(gui)}
                            >
                                Sửa
                            </LoadingButton>
                        </div>
                    </FormButtonWrapper>
                </DetailWrapper>
            </div>
        </div>
    );
}
