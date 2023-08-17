import FormInput from 'shared/components/common/custom-form/FormInput'
import React, { forwardRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Constants from './../../../utils/Constants';
import { useHistory } from 'react-router';
import useQuery from './../../../hooks/use-query';
import Validator from './../../../utils/Validator';
import FormDatePicker from './../common/custom-form/FormDatePicker';
import CustomFormProvider from '../common/custom-form/CustomFormProvider'
import FormActionSearch from '../common/form/form-search/FormActionSearch'
import FormItem from '../common/form/FormItem'
import FormGroupSearch from '../common/form/form-search/FormGroupSearch'
import FormGroupSearchRow from '../common/form/form-search/FormGroupSearchRow'
import IconSearch from 'assets/images/icons/icon-search'
import ButtonCommon from '../common/button/ButtonCommon'
import useRouterV2 from 'hooks/use-router-v2'
import { convertParamsToArray } from 'utils/Utils'
import Permission from 'utils/Permission';

const CustomSearch = forwardRef((props) => {
    const {
        NameTable
    } = props;
    let defaultValue = {
        Search: '',
        TimeFrom: null,
        TimeTo: null
    }
    const methods = useForm({
        defaultValues: defaultValue
    });
    const query = useQuery()
    const router = useRouterV2();
    const onSubmit = (data) => {
        router.replace({
            params: {
                [`${Constants.QueryParam.FromDate.VALUE}`]: data?.TimeFrom,
                [`${Constants.QueryParam.ToDate.VALUE}`]: data?.TimeTo,
                [`${Constants.QueryParam.Search.VALUE}`]:
                    data?.Search,
                [Constants.QueryParam.Page.VALUE]:
                    Constants.PRODUCT_LIST_PAGINATION.OFFSET,
                [Constants.QueryParam.Limit.VALUE]:
                    Constants.PRODUCT_LIST_PAGINATION.LIMIT,
            },
        });
        // let params = `${Constants.ROUTER_URL.PAGE}=1`;
        // if (data?.CustomerId) {
        //     params += `&${Constants.ROUTER_URL.CUSTOMER_ID}=${data?.CustomerId}`
        // } else {
        //     query.delete(`${Constants.ROUTER_URL.CUSTOMER_ID}`)
        // }
        // if (data?.Search?.trim()) {
        //     params += `&${Constants.ROUTER_URL.SEARCH_ALL}=${data?.Search}`
        // } else {
        //     query.delete(`${Constants.ROUTER_URL.SEARCH_ALL}`)
        // }
        // if (data?.TimeFrom) {
        //     params += `&${Constants.ROUTER_URL.TIME_FROM}=${new Date(data?.TimeFrom).toLocaleDateString('en-CA')}`
        // } else {
        //     query.delete(`${Constants.ROUTER_URL.TIME_FROM}`)
        // }
        // if (data?.TimeTo) {
        //     params += `&${Constants.ROUTER_URL.TIME_TO}=${new Date(data?.TimeTo).toLocaleDateString('en-CA')}`
        // } else {
        //     query.delete(`${Constants.ROUTER_URL.TIME_TO}`)
        // }
        // if (data?.Type) {
        //     params += `&${Constants.ROUTER_URL.TYPE}=${data?.Type}`
        // } else {
        //     query.delete(`${Constants.ROUTER_URL.TYPE}`)
        // }
        // if (data?.UserName) {
        //     params += `&${Constants.ROUTER_URL.USERNAME}=${data?.UserName}`
        // } else {
        //     query.delete(`${Constants.ROUTER_URL.USERNAME}`)
        // }
        // if (query.get(Constants.ROUTER_URL.OFFSET)) {
        //     params += `&${Constants.ROUTER_URL.OFFSET}=${query.get(Constants.ROUTER_URL.OFFSET)}`
        // }
        // history.replace({
        //     search: params
        // })


    }

    useEffect(() => {
        // if (query.get(Constants.ROUTER_URL.CUSTOMER_ID)) {
        //     methods.setValue('CustomerId', query.get(Constants.ROUTER_URL.CUSTOMER_ID));
        // } else {
        //     methods.setValue('CustomerId', '')
        // }
        // if (query.get(Constants.ROUTER_URL.TYPE)) {
        //     methods.setValue('Type', query.get(Constants.ROUTER_URL.TYPE));
        // } else {
        //     methods.setValue('Type', '')
        // }
        // if (query.get(Constants.ROUTER_URL.TIME_FROM)) {
        //     methods.setValue('TimeFrom', query.get(Constants.ROUTER_URL.TIME_FROM));
        // } else {
        //     methods.setValue('TimeFrom', '')
        // }
        // if (query.get(Constants.ROUTER_URL.TIME_TO)) {
        //     methods.setValue('TimeTo', query.get(Constants.ROUTER_URL.TIME_TO));
        // } else {
        //     methods.setValue('TimeTo', '')
        // }
        // if (query.get(Constants.ROUTER_URL.USERNAME)) {
        //     methods.setValue('UserName', query.get(Constants.ROUTER_URL.USERNAME));
        // } else {
        //     methods.setValue('UserName', '')
        // }
        if (router.get(Constants.QueryParam.Search.VALUE)) {
            methods.setValue('Search', query.get(Constants.QueryParam.Search.VALUE));
        } else {
            methods.setValue('Search', '')
        }
        if (router.get(Constants.QueryParam.FromDate.VALUE)) {
            methods.setValue('TimeFrom', query.get(Constants.QueryParam.FromDate.VALUE));
        } else {
            methods.setValue('TimeFrom', null)
        }
        if (router.get(Constants.QueryParam.ToDate.VALUE)) {
            methods.setValue('TimeTo', query.get(Constants.QueryParam.ToDate.VALUE));
        } else {
            methods.setValue('TimeTo', null)
        }
    }, [
        router.get(Constants.QueryParam.Search.VALUE),
        router.get(Constants.QueryParam.ToDate.VALUE),
        router.get(Constants.QueryParam.FromDate.VALUE),
    ])

    let paramsUrl = { ...router.getAll() };
    delete paramsUrl[Constants.QueryParam.Type.VALUE];
    delete paramsUrl[Constants.QueryParam.Page.VALUE];
    delete paramsUrl[Constants.QueryParam.Offset.VALUE];
    delete paramsUrl[Constants.QueryParam.Limit.VALUE];
    let pramsArray = convertParamsToArray(paramsUrl);

    const handleReset = () => {
        methods.reset(defaultValue);
        router.replace({
            params: {},
        });
    }
    return (
        <div className="stock-container">
            <div>
                <CustomFormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormGroupSearchRow
                            isShowFilter
                            type={NameTable}
                            isRequest={false}
                            isShowFilterColumnTable
                            componentLeft={
                                <FormGroupSearch isWrap={false}>
                                    <FormItem style={{ flex: 2 }}>
                                        <FormInput
                                            fieldName="Search"
                                            validate={[]}
                                            placeholder={"Tìm kiếm mã tài khoản, tên tài khoản, nội dung..."}
                                            icon={<IconSearch />}
                                        />
                                    </FormItem>
                                    <FormItem style={{ flex: 1 }}>
                                        <FormDatePicker
                                            fieldName="TimeFrom"
                                            validate={[Validator.maxDate, Validator.CheckedDate(methods.getValues('TimeTo'), 1)]}
                                            // placeholder={"dd/mm/yyyy"}
                                            placeholder="Ngày đăng từ"
                                        />
                                    </FormItem>
                                    <FormItem style={{ flex: 1 }}>
                                        <FormDatePicker
                                            fieldName="TimeTo"
                                            validate={[Validator.maxDate, Validator.CheckedDate(methods.getValues('TimeFrom'), 2)]}
                                            // placeholder={"dd/mm/yyyy"}
                                            placeholder="Ngày đăng đến"
                                        />
                                    </FormItem>
                                </FormGroupSearch>
                            }
                            componentRight={
                                <FormActionSearch>
                                    <ButtonCommon
                                        type="button"
                                        onClick={() => {
                                            handleReset();
                                        }}
                                        typeColor="border-green"
                                        disabled={!methods?.formState?.isDirty && pramsArray.length == 0 ? true : false}
                                    >
                                        Thiết lập lại
                                    </ButtonCommon>
                                    {
                                        Permission.IsEnabledFunction(Permission.FUNCTIONS.SEARCH_SOCIAL) && <ButtonCommon
                                            type="submit"
                                            typeColor="background-green"
                                        >
                                            Tìm kiếm
                                        </ButtonCommon>
                                    }
                                </FormActionSearch>
                            }
                        />
                    </form>
                </CustomFormProvider>
            </div>
        </div>
    )
})

export default CustomSearch
