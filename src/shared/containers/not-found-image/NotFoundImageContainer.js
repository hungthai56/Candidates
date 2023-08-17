import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { Box } from '@findxdn/erp-theme';
import Grid from '@mui/material/Grid';
import actionNotFoundImage from 'redux/not-found-image/action';
import Constants from 'utils/Constants';
import WrapLoading from 'shared/components/common/wrap-loading/WrapLoading';
import ProductTableLoader from 'shared/components/common/loading-skeleton/product-table-loader/ProductTableLoader';
import Image from 'shared/components/common/image/Image';
import FormInput from 'shared/components/common/custom-form/FormInput';
import FormImageV2 from 'shared/components/common/custom-form/FormImageV2';
import FormImage from 'shared/components/common/custom-form/FormImage';
import IconButton from '@mui/material/IconButton';
import EventRegister, { EVENT_SHOW_POPUP, EVENT_SHOW_POPUP2 } from 'utils/EventRegister';
import Validator from 'utils/Validator';
import PopupName from 'shared/components/common/popup/PopupName';
import useRouterV2 from 'hooks/use-router-v2';
import ConfigButton from 'shared/components/common/config-button/ConfigButton';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import TextLabelCommon from 'shared/components/common/label/TextLabel';
import IconImageUpload from 'assets/images/icons/IconImageUpload';
import classes from './NotFoundImageContainer.module.scss';
import useTrans from 'hooks/use-trans';
import useCustomState from 'hooks/UseCustomState';
import FooterManage from 'shared/components/footer/FooterManage';

export default function NotFoundImageContainer(props) {
    const dispatch = useDispatch();
    const router = useRouterV2();
    const { trans } = useTrans();
    const {
        listNotFoundImage,
        firstNotFoundImage,
        secondNotFoundImage,
        lastNotFoundImage,
        isLoading,
    } = useSelector((state) => state.NotFoundImage);
    const [loading, setLoading] = useCustomState(false);
    const methods = useForm();
    const { reset, handleSubmit, watch } = methods;

    useEffect(() => {
        dispatch({
            type: actionNotFoundImage.FETCH_NOT_FOUND_IMAGE_LIST,
            payload: {
                ...router.getAll(),
            },
        });
    }, []);

    useEffect(() => {
        let NotFoundImageDataFormEdit = {
            LinkImage_1: firstNotFoundImage?.Other ?? '',
            FileImage_1: null,
            LinkImage_2: secondNotFoundImage?.Other ?? '',
            FileImage_2: null,
            LinkImage_3: lastNotFoundImage?.Other ?? '',
            FileImage_3: null,
        };

        if (
            firstNotFoundImage?.NameEn &&
            firstNotFoundImage?.NameEn != 'null'
        ) {
            NotFoundImageDataFormEdit['FileImage_1'] = [
                {
                    data_url: firstNotFoundImage?.NameEn ?? [],
                },
            ];
        } else {
            NotFoundImageDataFormEdit['FileImage_1'] = [];
        }

        if (
            secondNotFoundImage?.NameEn &&
            secondNotFoundImage?.NameEn != 'null'
        ) {
            NotFoundImageDataFormEdit['FileImage_2'] = [
                {
                    data_url: secondNotFoundImage?.NameEn ?? [],
                },
            ];
        } else {
            NotFoundImageDataFormEdit['FileImage_2'] = [];
        }

        if (lastNotFoundImage?.NameEn && lastNotFoundImage?.NameEn != 'null') {
            NotFoundImageDataFormEdit['FileImage_3'] = [
                {
                    data_url: lastNotFoundImage?.NameEn ?? [],
                },
            ];
        } else {
            NotFoundImageDataFormEdit['FileImage_3'] = [];
        }

        reset(NotFoundImageDataFormEdit);
    }, [listNotFoundImage]);

    const handleSubmitNotFoundImage = (data) => {
        let params = {
            FirstImage: {
                Id: firstNotFoundImage?.Id,
                Val: firstNotFoundImage?.Val ?? 0,
                Name: firstNotFoundImage?.Name,
                NameEn: firstNotFoundImage?.NameEn,
                Other: data?.LinkImage_1 ?? firstNotFoundImage?.Other,
                FileImage: data?.FileImage_1?.[0]?.FileImage
                    ? data?.FileImage_1?.[0]?.FileImage
                    : null,
            },
            SecondImage: {
                Id: secondNotFoundImage?.Id,
                Val: secondNotFoundImage?.Val ?? 0,
                Name: secondNotFoundImage?.Name,
                NameEn: secondNotFoundImage?.NameEn,
                Other: data?.LinkImage_2 ?? secondNotFoundImage?.Other,
                FileImage: data?.FileImage_2?.[0]?.FileImage
                    ? data?.FileImage_2?.[0]?.FileImage
                    : null,
            },
            LastImage: {
                Id: lastNotFoundImage?.Id,
                Val: lastNotFoundImage?.Val ?? 0,
                Name: lastNotFoundImage?.Name,
                NameEn: lastNotFoundImage?.NameEn,
                Other: data?.LinkImage_3 ?? lastNotFoundImage?.Other,
                FileImage: data?.FileImage_3?.[0]?.FileImage
                    ? data?.FileImage_3?.[0]?.FileImage
                    : null,
            },
        };
        const message = trans('save_message');
        EventRegister.emit(EVENT_SHOW_POPUP, {
            type: PopupName.SAVE_POPUP,
            open: true,
            payload: {
                data,
                message,
                handleSave: () => {
                    const success = () => {
                        dispatch({
                            type: actionNotFoundImage.FETCH_NOT_FOUND_IMAGE_LIST,
                            payload: {
                                ...router.getAll(),
                            },
                        });
                        setLoading(false);
                    };
                    const failed = () => {
                        setLoading(false);
                    };
                    dispatch({
                        type: actionNotFoundImage.UPDATE_NOT_FOUND_IMAGE,
                        payload: {
                            data: {
                                ...params,
                            },
                            success,
                            failed,
                        },
                    });
                },
                handleCancel: () => {
                    setLoading(false);
                },
            },
        });
    };

    return (
        <div className={classes['NotFoundImageWrapper']}>
            <WrapLoading
                Loader={() => {
                    return <ProductTableLoader />;
                }}
                loading={isLoading && listNotFoundImage?.length == 0}
            >
                <Box>
                    <div className={classes['container']}>
                        <FormProvider {...methods}>
                            <form
                                className={classes['FormWrapper']}
                                onSubmit={handleSubmit(handleSubmitNotFoundImage)}
                            >
                                <Grid container spacing={4} rowSpacing={4}>
                                    <Grid item xs={4}>
                                        <div
                                            className={classes['InputWrapper']}
                                        >
                                            <TextLabelCommon require>{trans('first_image')}</TextLabelCommon>
                                            <FormImageV2
                                                width={'100%'}
                                                height={140}
                                                fieldName={`FileImage_1`}
                                                validate={[Validator.required]}
                                                iconNull={
                                                    <div className={classes['custom-icon-upload']}>
                                                        <IconImageUpload />
                                                        <p>{trans('upload_image')}</p>
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes['InputWrapper']}>
                                            <TextLabelCommon require>{trans('second_image')}</TextLabelCommon>
                                            <FormImageV2
                                                width={'100%'}
                                                height={140}
                                                fieldName={`FileImage_2`}
                                                validate={[Validator.required]}
                                                iconNull={
                                                    <div className={classes['custom-icon-upload']}>
                                                        <IconImageUpload />
                                                        <p>{trans('upload_image')}</p>
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div
                                            className={classes['InputWrapper']}
                                        >
                                            <TextLabelCommon require>{trans('third_image')}</TextLabelCommon>
                                            <FormImageV2
                                                width={'100%'}
                                                height={140}
                                                fieldName={`FileImage_3`}
                                                validate={[Validator.required]}
                                                iconNull={
                                                    <div className={classes['custom-icon-upload']}>
                                                        <IconImageUpload />
                                                        <p>{trans('upload_image')}</p>
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes['InputWrapper']}>
                                            <TextLabelCommon require>{trans('first_link')}</TextLabelCommon>
                                            <FormInput
                                                fieldName="LinkImage_1"
                                                placeholder={trans('first_link')}
                                                validate={[Validator.required, Validator.url]}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes['InputWrapper']}>
                                            <TextLabelCommon require>{trans('second_link')}</TextLabelCommon>
                                            <FormInput
                                                fieldName="LinkImage_2"
                                                placeholder={trans('second_link')}
                                                validate={[Validator.required, Validator.url]}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div className={classes['InputWrapper']}>
                                            <TextLabelCommon require>{trans('third_link')}</TextLabelCommon>
                                            <FormInput
                                                fieldName="LinkImage_3"
                                                placeholder={trans('third_link')}
                                                validate={[Validator.required, Validator.url]}
                                            />
                                        </div>
                                    </Grid>
                                </Grid>
                                <FooterManage
                                    titleBack={trans('back')}
                                    back={true}
                                >
                                    <div className={classes['FormButtonWrapper']}>
                                        <LoadingButton
                                            type="submit"
                                            loading={loading}
                                        >
                                            {trans('save')}
                                        </LoadingButton>
                                    </div>
                                </FooterManage>
                            </form>
                        </FormProvider>
                    </div>
                </Box>
            </WrapLoading>
        </div>
    );
}
