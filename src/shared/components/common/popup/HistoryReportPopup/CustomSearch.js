import FormInput from 'shared/components/common/custom-form/FormInput';
import React, { forwardRef, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Box from 'shared/components/common/box/Box';
import FormDatePicker from './../../custom-form/FormDatePicker';
import Validator from './../../../../../utils/Validator';
import FormSelect from './../../custom-form/FormSelect';
import { useSelector } from 'react-redux';
import ButtonCommon from '../../button/ButtonCommon';
import FormItem from '../../form/FormItem';
import IconSearch from 'assets/images/icons/icon-search';
import FormGroupSearch from '../../form/form-search/FormGroupSearch';
import FormGroupSearchRow from '../../form/form-search/FormGroupSearchRow';
import FormActionSearch from '../../form/form-search/FormActionSearch';
const CustomSearch = forwardRef((props) => {
    const methods = useForm();
    const onSubmit = (data) => {
        props.callback(data);
    };
    const handleResetFilter = () => {
        methods.setValue('TimeFrom', '')
        methods.setValue('TimeTo', '')
        methods.setValue('Type', '')
        methods.setValue('Reason', '')
        methods.setValue('Username', '')

        props.callback({});
    };

    useEffect(() => {
        methods.setValue('TimeFrom', '')
        methods.setValue('TimeTo', '')
        methods.setValue('Type', '')
        methods.setValue('Reason', '')
        methods.setValue('Username', '')
    }, [])

    const data = useSelector(state => state.app?.masterData);
    return (
        <>
            <div className="stock-container">
                <Box
                >
                    <div>
                        <FormProvider {...methods}>
                            {' '}
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                {/* <div className="w-100">
                                    <div className="d-flex flex-row w-100 group-form">
                                        <div className="form-item">
                                            <TextLabel>
                                                {t('create_comment_date_from')}
                                            </TextLabel>
                                            <FormDatePicker
                                                fieldName="TimeFrom"
                                                validate={[Validator.maxDate,Validator.CheckedDate(methods.getValues('TimeTo'),1)]}
                                                placeholder={t('enter_create_post_date')}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <TextLabel>
                                                {t('create_comment_date_to')}
                                            </TextLabel>
                                            <FormDatePicker
                                                fieldName="TimeTo"
                                                validate={[
                                                    Validator.maxDate,
                                                    Validator.CheckedDate(
                                                        methods.getValues(
                                                            'TimeFrom',
                                                        ),
                                                        2,
                                                    ),
                                                ]}
                                                placeholder={t(
                                                    'dd/mm/yyyy',
                                                )}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <TextLabel>{t('status')}</TextLabel>
                                            <FormSelect
                                                options={data?.ReportPostStatus}
                                                fieldName="Type"
                                                validate={[]}
                                                placeholder={t('enter_choose_status')}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <TextLabel>
                                                {t('name_account')}
                                            </TextLabel>
                                            <FormInput
                                                fieldName="Username"
                                                validate={[]}
                                                placeholder={t(
                                                    'enter_name_account',
                                                )}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <TextLabel>
                                                {t('reason')}
                                            </TextLabel>
                                            <FormInput
                                                fieldName="Reason"
                                                validate={[]}
                                                placeholder={t('enter_reason')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-end">
                                    <Button
                                        type="button"
                                        onClick={handleResetFilter}
                                        style={{ marginRight: 10 }}
                                        variant="outlined"
                                        color="error"
                                    >
                                        {t('reset_search')}
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="success"
                                        style={{ marginRight: 10 }}
                                    >
                                        {t('search')}
                                    </Button>
                                </div> */}
                                <FormGroupSearchRow
                                    isRequest={false}
                                    componentLeft={
                                        <FormGroupSearch isWrap={false}>
                                            <FormItem style={{ flex: 2 }}>
                                                <FormInput
                                                    fieldName="Username"
                                                    validate={[]}
                                                    placeholder={'Tìm kiếm tên tài khoản, số điện thoại...'}
                                                    icon={<IconSearch />}
                                                />
                                            </FormItem>
                                            <FormItem style={{ flex: 1 }}>
                                                <FormDatePicker
                                                    fieldName="TimeFrom"
                                                    validate={[Validator.maxDate, Validator.CheckedDate(methods.getValues('TimeTo'), 1)]}
                                                    placeholder={'Ngày báo cáo từ'}
                                                />
                                            </FormItem>
                                            <FormItem style={{ flex: 1 }}>
                                                <FormDatePicker
                                                    fieldName="TimeTo"
                                                    validate={[
                                                        Validator.maxDate,
                                                        Validator.CheckedDate(
                                                            methods.getValues(
                                                                'TimeFrom',
                                                            ),
                                                            2,
                                                        ),
                                                    ]}
                                                    placeholder={'Ngày báo cáo đến'}
                                                />
                                            </FormItem>
                                        </FormGroupSearch>
                                    }
                                    componentRight={
                                        <FormActionSearch>
                                            <ButtonCommon
                                                type="button"
                                                onClick={() => {
                                                    handleResetFilter();
                                                }}
                                                typeColor="border-green"
                                                disabled={!methods?.formState?.isDirty ? true : false}
                                            >
                                                Thiết lập lại
                                            </ButtonCommon>
                                            <ButtonCommon
                                                type="submit"
                                                typeColor="background-green"
                                            >
                                                Tìm kiếm
                                            </ButtonCommon>
                                        </FormActionSearch>
                                    }
                                />
                                <FormGroupSearchRow
                                    isRequest={false}
                                    isShowFilterColumnTable
                                    componentLeft={
                                        <FormGroupSearch isWrap={false}>
                                            <FormItem style={{ flex: 1 }}>
                                                <FormSelect
                                                    options={data?.ReportPostStatus}
                                                    fieldName="Type"
                                                    validate={[]}
                                                    placeholder={'Trạng thái'}
                                                    isPortal
                                                />
                                            </FormItem>
                                            <FormItem style={{ flex: 1 }}>
                                                <FormInput
                                                    fieldName="Reason"
                                                    validate={[]}
                                                    placeholder={'Lý do'}
                                                />
                                            </FormItem>
                                            <FormItem style={{ flex: 1 }}>

                                            </FormItem>
                                        </FormGroupSearch>
                                    }

                                />
                            </form>
                        </FormProvider>
                    </div>
                </Box>
            </div>
        </>
    );
})
export default CustomSearch;
