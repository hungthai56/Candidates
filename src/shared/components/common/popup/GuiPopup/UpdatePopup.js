import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import useRouter from 'hooks/use-router';
import mapKeys from 'lodash/mapKeys';
import Constants from 'utils/Constants';
import { TextLabel } from '@findxdn/erp-theme';
import EventRegister, { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP2 } from 'utils/EventRegister';
import guiActions from 'redux/gui/action';
import CommonInput from 'shared/components/form';
import { GetMsg } from 'utils/Message';
import HeadCommonPopup from '../component/HeadCommonPopup';
import PopupName from '../PopupName';
import FormGroup from '../../form/FormGroup';
import FormItem from '../../form/FormItem';
import TextLabelCommon from '../../label/TextLabel';
import FormImage from '../../custom-form/FormImage';
import Validator from 'utils/Validator';
import CustomFormProvider from '../../custom-form/CustomFormProvider';
import classes from './DetailPopup.module.scss';
import LoadingButton from '../../button-loading/ButtonLoading';
import FormCheckBox from '../../custom-form/FormCheckBox';
import FormInput from '../../custom-form/FormInput';
import FormGroupSearch from '../../form/form-search/FormGroupSearch';
import FormDateTimePicker from '../../custom-form/FormDateTimePicker';
import moment from 'moment';
import FormColor from '../../custom-form/FormColor';

const FormButtonWrapper = styled('div')({
    display: 'flex',
    gap: '15px',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
});

export default function GuiUpdatePopup(props) {
    const { showVisible } = props;
    const {
        gui
    } = useSelector(state => state.gui)
    const dispatch = useDispatch();
    const router = useRouter();
    let defaultValues = {
        Name: null,
        From: null,
        To: null,
        StartTime: null,
        EndTime: null,
        LoginImage: null,
        Logo: null,
        SplashImage: null,
        TopHeaderImage: null,
        TopHeaderImageMobile: null,
        BranchImage: null,
    }
    const methods = useForm({
        defaultValues: defaultValues,
    });
    const {
        reset,
        handleSubmit,
    } = methods;

    useEffect(() => {
        if (gui?.Id) {
            const guiDataFromCancel = {
                Name: gui?.Name,
                // From: moment(gui?.From).format('YYYY/MM/DD'),
                From: gui?.From,
                To: gui?.To,
                // To: moment(gui?.To).format('YYYY/MM/DD'),
                LogoImage: [{ dataUrl: gui?.LogoImage }],
                BranchImage: [{ dataUrl: gui?.BranchImage }],
                Logo: [{ dataUrl: gui?.Logo }],
                TopHeaderImage: [{ dataUrl: gui?.TopHeaderImage }],
                SplashImage: [{ dataUrl: gui?.SplashImage }],
                LoginImage: [{ dataUrl: gui?.LoginImage }],
                IsLoopingByYear: gui?.IsLoopingByYeaer,
                HeaderBgColor: gui?.HeaderBgColor,
                HeaderTextColor: gui?.HeaderTextColor,
                CartBadgeTextColor: gui?.CartBadgeTextColor,
                HeaderTextHoverColor: gui?.HeaderTextHoverColor,
                CartBadgeBgColor: gui?.CartBadgeBgColor,
            };
            reset(guiDataFromCancel);
        } else {
            reset(defaultValues)
        }
    }, [gui]);

    const handleSubmitCategoryUpdatePopup = (data) => {
        let params = {
            SplashImage: data?.SplashImage?.[0]?.file ? gui?.SplashImage : data?.SplashImage?.[0]?.dataUrl,
            Name: data?.Name,
            Logo: data?.Logo?.[0]?.file ? gui?.Logo : data?.Logo?.[0]?.dataUrl,
            HeaderBgColor: data?.HeaderBgColor,
            HeaderTextColor: data?.HeaderTextColor,
            CartBadgeBgColor: data?.CartBadgeBgColor,
            HeaderTextHoverColor: data?.HeaderTextHoverColor,
            CartBadgeTextColor: data?.CartBadgeTextColor,
            TopHeaderImage: data?.TopHeaderImage?.[0]?.file ? gui?.TopHeaderImage : data?.TopHeaderImage?.[0]?.dataUrl,
            TopHeaderImageMobile: data?.TopHeaderImageMobile?.[0]?.file ? gui?.TopHeaderImageMobile : data?.TopHeaderImageMobile?.[0]?.dataUrl,
            LoginImage: data?.LoginImage?.[0]?.file ? gui?.LoginImage : data?.LoginImage?.[0]?.dataUrl,
            BranchImage: data?.BranchImage?.[0]?.file ? gui?.BranchImage : data?.BranchImage?.[0]?.dataUrl,
            BranchImageMobile: data?.BranchImageMobile?.[0]?.file ? gui?.BranchImageMobile : data?.BranchImageMobile?.[0]?.dataUrl,
            IsLoopingByYeaer: data?.IsLoopingByYear ? true : false,
            From: gui?.Id == 1 ? null : data?.From ? moment(data?.From || '').format("YYYY-MM-DD hh:mm:ss") : null,
            To: gui?.Id == 1 ? null : data?.To ? moment(data?.To || '').format("YYYY-MM-DD hh:mm:ss") : null,
            FileImage: data?.Logo?.[0]?.file ? data?.Logo[0]?.file : null,
            FileTopHeaderImage: data?.TopHeaderImage?.[0]?.file ? data?.TopHeaderImage[0]?.file : null,
            FileTopHeaderImageMobile: data?.TopHeaderImageMobile?.[0]?.file ? data?.TopHeaderImageMobile[0]?.file : null,
            FileSplashImage: data?.SplashImage?.[0]?.file ? data?.SplashImage[0]?.file : null,
            FileLoginImage: data?.LoginImage?.[0]?.file ? data?.LoginImage[0]?.file : null,
            FileBranchImage: data?.BranchImage?.[0]?.file ? data?.BranchImage[0]?.file : null,
            FileBranchImageMobile: data?.BranchImageMobile?.[0]?.file ? data?.BranchImageMobile[0]?.file : null,
            IsChange: data?.IsChange ?? true,
        };

        if (gui.Id) {
            params['Id'] = gui?.Id;
        }
        const message = "Bạn có chắc chắn thay đổi không ?";
        EventRegister.emit(EVENT_SHOW_POPUP2, {
            type: PopupName.SAVE_POPUP,
            open: true,
            payload: {
                data,
                message,
                isLoading: true,
                callback:{
                    success:(_props)=>{
                        const queryParamsToObject = mapKeys(
                            router.query,
                            (value, key) => Constants.URL_PARAMS[key],
                        );
                        const callback = () => {
                            _props.closeLoading()
                            showVisible();
                            dispatch({
                                type: guiActions.FETCH_GUI_LIST,
                                payload: queryParamsToObject,
                            });
                        };
                        dispatch({
                            type: guiActions.UPDATE_GUI,
                            payload: { params, callback },
                            callback: {
                                failed: ()=>{
                                    _props.closeLoading()
                                }
                            }
                        });
                    }
                }
                // handleCancel: () => {
                //     EventRegister.emit(EVENT_SHOW_POPUP, {
                //         type: PopupName.UPDATE_GUI,
                //         open: true,
                //         payload: {
                //             type: 'cancel',
                //             data,
                //         },
                //     });
                // },
            },
        });
    };

    useEffect(() => {
        return () => {
            methods.reset(defaultValues)
        }
    }, [])

    let validate = [Validator.required];
    if(gui?.IsDefault){
        validate = [];
    }
    return (
        <div>
            <HeadCommonPopup
                onHandleRight={showVisible}
                content="Cập nhật giao diện"
            />
            <div className={classes['container-update']}>
                <CustomFormProvider {...methods}>
                    <form onSubmit={handleSubmit(handleSubmitCategoryUpdatePopup)}>
                        <div className={classes['main-update']}>
                            <FormGroup>
                                <FormItem className="flex-1 w-100">
                                    <TextLabelCommon require>
                                        Tên giao diện
                                    </TextLabelCommon>
                                    <FormInput
                                        fieldName="Name"
                                        placeholder="Nhập tên giao diện"
                                        validate={[Validator.required]}
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup>
                                <FormItem style={{
                                    flex: 1
                                }}>
                                    <TextLabelCommon>
                                        Màu nền header
                                    </TextLabelCommon>
                                    <FormColor
                                        fieldName={'HeaderBgColor'}
                                        validate={[]}
                                        placeholder='Màu nền header'
                                    />
                                </FormItem>
                                <FormItem style={{
                                    flex: 1
                                }}>
                                    <TextLabelCommon>
                                        Màu chữ header
                                    </TextLabelCommon>
                                    <FormColor
                                        fieldName={'HeaderTextColor'}
                                        validate={[]}
                                        placeholder='Màu chữ header'
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup>
                                <FormItem style={{
                                    flex: 1
                                }}>
                                    <TextLabelCommon >
                                        Màu hover chữ ở header
                                    </TextLabelCommon>
                                    <FormColor
                                        fieldName={'HeaderTextHoverColor'}
                                        validate={[]}
                                        placeholder='Màu hover chữ ở header'
                                    />
                                </FormItem>
                                <FormItem style={{
                                    flex: 1
                                }}>
                                    <TextLabelCommon >
                                        Màu nền giỏ hàng
                                    </TextLabelCommon>
                                    <FormColor
                                        fieldName={'CartBadgeBgColor'}
                                        validate={[]}
                                        placeholder='Màu nền giỏ hàng'
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup>
                                <FormItem style={{
                                    flex: 1
                                }}>
                                    <TextLabelCommon >
                                        Màu chữ giỏ hàng
                                    </TextLabelCommon>
                                    <FormColor
                                        fieldName={'CartBadgeTextColor'}
                                        validate={[]}
                                        placeholder="Màu chữ giỏ hàng"
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup isWrap={false}>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require={validate.length > 0 ? true : false}> Thời bắt đầu áp dụng</TextLabelCommon>
                                    {/* <div className="d-flex rounded double-input mt-2 w-100">
                                        <CommonInput
                                            type="date"
                                            fieldName="From"
                                            placeholder="dd/mm/yyyy"
                                        />
                                        <p />
                                        <CommonInput fieldName="startTime" type="time" />
                                    </div> */}
                                    <FormDateTimePicker
                                        fieldName="From"
                                        validate={validate}
                                        placeholder={('dd/mm/yyyy - hh:mm')}
                                        inputFormat='dd/MM/yyyy hh:mm aa'
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require={validate.length > 0 ? true : false}> Thời gian kết thúc áp dụng</TextLabelCommon>
                                    {/* <div className="d-flex rounded double-input mt-2 w-100">
                                        <CommonInput
                                            type="date"
                                            fieldName="To"
                                            placeholder="dd/mm/yyyy"
                                        />
                                        <p />
                                        <CommonInput fieldName="endTime" type="time" />
                                    </div> */}
                                    <FormDateTimePicker
                                        fieldName="To"
                                        validate={validate}
                                        placeholder={('dd/mm/yyyy - hh:mm')}
                                        inputFormat='dd/MM/yyyy hh:mm aa'
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup>
                                <div className={classes['form-check-box']}>
                                    <FormCheckBox validate={[]} fieldName="IsLoopingByYear" /></div>
                                <div className={classes['title-item']}>Lặp qua các năm</div>
                            </FormGroup>
                            <FormGroup title={() => {
                                return <p
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Ảnh Logo
                                </p>
                            }}>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require>Logo (60 * 30)</TextLabelCommon>
                                    <FormImage
                                        validate={[Validator.required]}
                                        fieldName="Logo"
                                        size={{}}
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}></FormItem>
                            </FormGroup>
                            <FormGroup title={() => {
                                return <p
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    ẢNH web
                                </p>
                            }}>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon>Ảnh đầu hệ thống cửa hàng (1920 * 616) </TextLabelCommon>
                                    <FormImage
                                        validate={[]}
                                        fieldName="BranchImage"
                                        size={{}}
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}>

                                </FormItem>
                            </FormGroup>
                            <FormGroup title={() => {
                                return <p
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Ảnh di động
                                </p>
                            }}>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require>Màn hình chờ (390 * 844)</TextLabelCommon>
                                    <FormImage
                                        validate={[Validator.required]}
                                        fieldName="SplashImage"
                                        size={{ width: 490, height: 1040 }}
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require>Ảnh đăng kí/đăng nhập (480 * 170)</TextLabelCommon>
                                    <FormImage
                                        validate={[Validator.required]}
                                        fieldName="LoginImage"
                                        size={{ width: 480, height: 170 }}
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon>Ảnh đầu trang chủ di động(390 * 844)</TextLabelCommon>
                                    <FormImage
                                        validate={[]}
                                        fieldName="TopHeaderImage"
                                        size={{ width: 768, height: 304 }}
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}>

                                </FormItem>
                            </FormGroup>

                            <FormButtonWrapper>
                                <div className={classes['action-bottom']}>
                                    <LoadingButton
                                        onClick={showVisible}
                                        typeColor="background-gray"
                                    >
                                        Đóng
                                    </LoadingButton>
                                    <LoadingButton
                                        type="submit"
                                    >
                                        Lưu
                                    </LoadingButton>
                                </div>
                            </FormButtonWrapper>
                        </div>
                    </form>
                </CustomFormProvider>
            </div>
        </div>
    );
}
