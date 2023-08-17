import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
// import actionAboutUs from 'redux/about_us/action';
import Box from 'shared/components/common/box/Box';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import CustomFormProvider from 'shared/components/common/custom-form/CustomFormProvider'
import FormEditor from 'shared/components/common/custom-form/FormEditor';
import { FooterManage } from 'shared/components/common/footer';
import PopupName from 'shared/components/common/popup/PopupName';
import TextLabel from 'shared/components/common/text/TextLabel';
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import { GetMsg } from 'utils/Message';
import Permission from 'utils/Permission';
import Validator from 'utils/Validator';

export default function TestContainer() {
    const dispatch = useDispatch();
    const [editorReady, setEditorReady] = useState(false)
    const [loading, setLoading] = useState(false)

    // const getAboutUs = useSelector((state) => state?.aboutUs?.infFM);
    const methods = useForm();
    const onSubmit = (data) => {
    //     setLoading(true)
    //     const message = GetMsg('C007');
    //     EventRegister.emit(EVENT_SHOW_POPUP, {
    //         type: PopupName.SAVE_POPUP,
    //         open: true,
    //         payload: {
    //             data,
    //             message,
    //             handleSave: () => {
    //                 dispatch({
    //                     type: actionAboutUs.ADD_ABOUT_US,
    //                     payload: { callback : {
    //                         success: () => {
    //                             setLoading(false);
    //                             dispatch({
    //                                 type: actionAboutUs.GET_ABOUT_US,
    //                             });
    //                         },
    //                         failed: ( ) => {
    //                             setLoading(false)
    //                         }
    //                     }, data },
    //                 });
    //             },
    //             handleCancel: () => {
    //                 setLoading(false)
    //             },
    //             backdropCallback: () => {
    //                 setLoading(false)
    //             },
    //         },
    //     });
    }

    // useEffect(() => {
    //     if (getAboutUs) {
    //         methods.setValue('AboutUs', getAboutUs);
    //     }
    // }, [getAboutUs]);


    // useEffect(() => {
    //     dispatch({
    //         type: actionAboutUs.GET_ABOUT_US,
    //     });
    // }, []);


    return (
        <CustomFormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} style={{ paddingBottom: '30px' }}>
                <Box className="mb-2">
                    <div
                        className=""
                        height={window.innerHeight - 360}
                    >
                        <TextLabel className="mb-3">GIỚI THIỆU FM PLUS </TextLabel>
                        <FormEditor
                            fieldName="AboutUs"
                            validate={[Validator.required]}
                            placeholder="Nhập giới thiệu ..."
                            // setCanSubmit={(val)=>{
                            //     setEditorReady(!val)
                            // }}
                        />
                        {/* <Controller
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Vui lòng nhập chi tiết hướng dẫn mua hàng',
                                },
                            }}
                            render={({ field }) => <TextNote {...field} errors={errors} />}
                            name="shopping"
                        /> */}
                    </div>
                </Box>
                <FooterManage>
                    <div className="d-flex justify-content-end align-items-center">
                        <div
                            className="d-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'auto auto auto',
                            }}
                        >
                            {
                               <LoadingButton
                                    type="submit"
                                    disabled={editorReady}
                                    loading={loading}
                                >
                                    Lưu
                                </LoadingButton>
                            }
                        </div>
                    </div>
                </FooterManage>
                {/* <div className="office-bottom">
                <div className="btn-submit-container">
                    <div className='w-25 back-btn tab_content-left' onClick={()=>{history.goBack()}}>
                        <IcLeft/>
                        <TextLabel className='ml-2 text-back pointer'>Quay lại danh sách điều khoản</TextLabel>
                    </div>
                    <div
                        className="d-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'auto auto auto',
                        }}
                    >
                        <Button className="btn-product btn background-green">Lưu</Button>
                    </div>

                </div>

            </div> */}
            </form>
        </CustomFormProvider>
    )
}
