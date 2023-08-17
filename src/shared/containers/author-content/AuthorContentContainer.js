import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actionsAuthor from 'redux/author-content/action';
import Box from 'shared/components/common/box/Box';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import CustomFormProvider from 'shared/components/common/custom-form/CustomFormProvider'
import FormEditor from 'shared/components/common/custom-form/FormEditor';
import { FooterManage } from 'shared/components/common/footer';
import PopupName from 'shared/components/common/popup/PopupName';
import TextLabel from 'shared/components/common/text/TextLabel';
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import Permission from 'utils/Permission';
import Validator from 'utils/Validator';

export default function AuthorContentContainer() {
    const dispatch = useDispatch();
    const [editorReady, setEditorReady] = useState(false)
    const [loading, setLoading] = useState(false)
    const data = useSelector((state) => state?.AuthorContent);
    const methods = useForm();
    const onSubmit = (_data) => {
        setLoading(true);
        const message = "Bạn có chắc chắn muốn lưu dữ liệu này không ?";
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: PopupName.SAVE_POPUP,
            open: true,
            payload: {
                data,
                message,
                handleSave: () => {
                    dispatch({
                        type: actionsAuthor.PUT_AUTHOR_CONTENT,
                        payload: { callback : {
                            success: () =>{
                                dispatch({
                                    type: actionsAuthor.GET_AUTHOR_CONTENT,
                                });
                                setLoading(false)
                            },
                            failed: () => {
                                setLoading(false)
                            }
                        }, Content: _data?.Content },
                    });
                },
                handleCancel: () => {
                    setLoading(false)
                },
                backdropCallback: () => {
                    setLoading(false)
                },
            },
        });
    }

    useEffect(() => {
        if (data?.Content) {
            methods.setValue('Content', data?.Content);
        }
    }, [data]);


    useEffect(() => {
        dispatch({
            type: actionsAuthor.GET_AUTHOR_CONTENT,
        });
    }, []);


    return (
        <CustomFormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(onSubmit)} style={{ paddingBottom: '30px' }}>
                <Box className="bases__padding-bottom--0">
                    <div
                        className=""
                        height={window.innerHeight - 360}
                    >
                        <TextLabel className="mb-3">Quản lý nội dung </TextLabel>
                        <FormEditor
                            fieldName="Content"
                            validate={[Validator.required]}
                            placeholder="Nhập nội dung ..."
                            setCanSubmit={(val)=>{
                                setEditorReady(!val)
                            }}
                        />
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
                                Permission.IsEnabledFunction(Permission.FUNCTIONS.SAVE_ABOUT_US) && <LoadingButton
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
            </form>
        </CustomFormProvider>
    )
}
