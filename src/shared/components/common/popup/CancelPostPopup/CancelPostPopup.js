import React from 'react'
import styles from './styles.module.scss'
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from '../../custom-form/FormInput';
import Button from '@mui/material/Button';
import Validator from './../../../../../utils/Validator';
import HeadCommonPopup from '../component/HeadCommonPopup';
import TextLabelCommon from '../../label/TextLabel';
import FormGroupSearch from '../../form/form-search/FormGroupSearch';
import FormItem from '../../form/FormItem';
import LoadingButton from '../../button-loading/ButtonLoading';

export default function CancelPostPopup(props) {
    const { payload, showVisible, config } = props;
    const methods = useForm()
    const handleClick = () => {
        if (typeof payload.callback == 'function') {
            // payload.callback()
        }
        showVisible(false)
    }

    const onSubmit = (data) => {
        payload.callback(data?.Reason ?? '')
        showVisible(false)
    }
    return (
        <div className={styles['container']}>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className={styles.CancelPostPopup}>
                    <HeadCommonPopup onHandleRight={() => {
                        showVisible(false)
                    }} content={payload?.title ?? "Nội dung"} />
                    <div className={styles['main']}>
                        <FormGroupSearch className="w-100">
                            <FormItem className="w-100">
                                <TextLabelCommon className="mb-2" require>Lý do không phê duyệt</TextLabelCommon>
                                <FormInput
                                    errors={methods.errors}
                                    fieldName="Reason"
                                    validate={[Validator.required]}
                                    placeholder="Nhập lý do không phê duyệt"
                                />
                            </FormItem>
                        </FormGroupSearch>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                marginTop: 30,
                            }}>
                            <div >
                                <LoadingButton onClick={handleClick} typeColor='background-gray' variant="outlined">Thoát</LoadingButton>
                            </div>
                            <div className='ml-3'>
                                <LoadingButton type='submit' typeColor='background-green' variant="contained">Lưu</LoadingButton>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
