import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/system';
import { useForm } from 'react-hook-form';
import EventRegister, { EVENT_SHOW_POPUP2 } from 'utils/EventRegister';
import guiActions from 'redux/gui/action';
import useRouter from 'hooks/use-router';
import mapKeys from 'lodash/mapKeys';
import Constants from 'utils/Constants';
import { GetMsg } from 'utils/Message';
import PopupName from '../PopupName';
import HeadCommonPopup from '../component/HeadCommonPopup';
import LoadingButton from '../../button-loading/ButtonLoading';
import TextLabelCommon from '../../label/TextLabel';
import FormItem from '../../form/FormItem';
import Validator from 'utils/Validator';
import FormGroup from '../../form/FormGroup';
import FormCheckBox from '../../custom-form/FormCheckBox';
import FormDateTimePicker from '../../custom-form/FormDateTimePicker';
import FormColor from '../../custom-form/FormColor';
import CustomFormProvider from '../../custom-form/CustomFormProvider';
import classes from './DetailPopup.module.scss';
import FormImage from '../../custom-form/FormImage';
import FormInput from '../../custom-form/FormInput';
import moment from 'moment';


const FormButtonWrapper = styled('div')({
    display: 'flex',
    gap: '15px',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
});


export default function GuiCreatePopup(props) {
    const { showVisible } = props;
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

    useEffect(() => {
        methods.setValue("HeaderBgColor", '#FFFFFF')
        methods.setValue("CartBadgeTextColor", '#FFFFFF')
        methods.setValue("HeaderTextColor", '#333333')
        methods.setValue("CartBadgeBgColor", '#D92626')
        methods.setValue("HeaderTextHoverColor", '#FF0000')
        methods.setValue("From", null)
        methods.setValue("To", null)
    }, [])

    const handleSubmitGuiCreatePopup = (data) => {
        let params = {
            SplashImage: 'string',
            Name: data?.Name,
            Logo: 'string',
            HeaderBgColor: data?.HeaderBgColor,
            HeaderTextColor: data?.HeaderTextColor,
            CartBadgeBgColor: data?.CartBadgeBgColor,
            HeaderTextHoverColor: data?.HeaderTextHoverColor,
            CartBadgeTextColor: data?.CartBadgeTextColor,
            TopHeaderImage: 'string',
            TopHeaderImageMobile: 'string',
            LoginImage: 'string',
            BranchImage: 'string',
            BranchImageMobile: 'string',
            IsLoopingByYeaer: data?.IsLoopingByYear ? data?.IsLoopingByYear : false,
            From: moment(data?.From || '').format("YYYY-MM-DD hh:mm:ss"),
            To: moment(data?.To || '').format("YYYY-MM-DD hh:mm:ss"),
            FileImage: data?.Logo?.[0]?.file ? data?.Logo[0]?.file : null,
            FileTopHeaderImage: data?.TopHeaderImage?.[0]?.file ? data?.TopHeaderImage[0]?.file : null,
            FileTopHeaderImageMobile: data?.TopHeaderImageMobile?.[0]?.file ? data?.TopHeaderImageMobile[0]?.file : null,
            FileSplashImage: data?.SplashImage?.[0]?.file ? data?.SplashImage[0]?.file : null,
            FileLoginImage: data?.LoginImage?.[0]?.file ? data?.LoginImage[0]?.file : null,
            FileBranchImage: data?.BranchImage?.[0]?.file ? data?.BranchImage[0]?.file : null,
            FileBranchImageMobile: data?.BranchImageMobile?.[0]?.file ? data?.BranchImageMobile[0]?.file : null,
            IsChange: data?.IsChange ?? true,
        };
        const message = GetMsg('C005');
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
                            type: guiActions.CREATE_GUI,
                            payload: { data: params, callback },
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
                //         type: PopupName.CREATE_GUI,
                //         open: true,
                //         payload: {
                //             data,
                //         },
                //     });
                // },
            },
        });
    };


    useEffect(() => {
        return ()=>{
            methods.reset(defaultValues)
        }
    }, [])
    return (
        <div>
            <HeadCommonPopup
                onHandleRight={showVisible}
                content="Thêm mới giao diện"
            />
            <div className={classes['container-update']}>
                <CustomFormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleSubmitGuiCreatePopup)}>
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
                                    <TextLabelCommon require> Thời bắt đầu áp dụng</TextLabelCommon>
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
                                        validate={[Validator.required]}
                                        placeholder={('dd/mm/yyyy - hh:mm')}
                                        inputFormat='dd/MM/yyyy hh:mm aa'
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require> Thời gian kết thúc áp dụng</TextLabelCommon>
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
                                        validate={[Validator.required]}
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
                                        // size={{ width: 320, height: 168 }}
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
                                        // size={{ width: 1920, height: 760 }}
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
                                    Ảnh di động
                                </p>
                            }}>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require>Màn hình chờ (390 * 844)</TextLabelCommon>
                                    <FormImage
                                        validate={[Validator.required]}
                                        fieldName="SplashImage"
                                        size={{}}
                                        // size={{ width: 490, height: 1040 }}
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon require>Ảnh đăng kí/đăng nhập (480 * 170)</TextLabelCommon>
                                    <FormImage
                                        validate={[Validator.required]}
                                        fieldName="LoginImage"
                                        size={{}}
                                        // size={{ width: 480, height: 170 }}
                                    />
                                </FormItem>
                            </FormGroup>
                            <FormGroup >
                                <FormItem style={{ flex: 1 }}>
                                    <TextLabelCommon>Ảnh đầu trang chủ di động (390 * 844)</TextLabelCommon>
                                    <FormImage
                                        validate={[]}
                                        fieldName="TopHeaderImage"
                                        size={{}}
                                        // size={{ width: 768, height: 304 }}
                                    />
                                </FormItem>
                                <FormItem style={{ flex: 1 }}></FormItem>
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
