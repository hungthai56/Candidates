
import TextLabel from 'shared/components/common/text/TextLabel'
import FormInput from 'shared/components/common/custom-form/FormInput'
import React, { forwardRef, useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Box from 'shared/components/common/box/Box'
import { useHistory } from 'react-router';
import useQuery from '../../../../hooks/use-query';
import Constants from '../../../../utils/Constants';
import FormDatePicker from './../../common/custom-form/FormDatePicker';
import Validator from './../../../../utils/Validator';
import FormActionSearch from 'shared/components/common/form/form-search/FormActionSearch'
import ButtonCommon from 'shared/components/common/button/ButtonCommon'
import FormItem from 'antd/es/form/FormItem'
import FormGroupSearch from 'shared/components/common/form/form-search/FormGroupSearch'
import FormGroupSearchRow from 'shared/components/common/form/form-search/FormGroupSearchRow'
import ButtonSearch from 'shared/components/common/button/ButtonSearch'
import { IcSearch } from 'library/components/assets/icons'
import useRouterV2 from 'hooks/use-router-v2'
import { convertParamsToArray } from 'utils/Utils'

const CustomSearch = forwardRef((props) => {
    const { CommentStatus } = props;
    const methods = useForm()
    const history = useHistory();
    const query = useQuery()
    const router = useRouterV2();
    const [open, setOpen] = useState(false);
    const onSubmit = (data) => {
        let params = `${Constants.ROUTER_URL.PAGE}=1`;
        if (data?.Search?.trim()) {
            params += `&${Constants.ROUTER_URL.SEARCH_ALL}=${data?.Search}`
        } else {
            query.delete(`${Constants.ROUTER_URL.SEARCH_ALL}`)
        }
        if (data?.TimeFrom) {
            params += `&${Constants.ROUTER_URL.TIME_FROM}=${new Date(data?.TimeFrom).toLocaleDateString('en-CA')}`
        } else {
            query.delete(`${Constants.ROUTER_URL.TIME_FROM}`)
        }
        if (data?.TimeTo) {
            params += `&${Constants.ROUTER_URL.TIME_TO}=${new Date(data?.TimeTo).toLocaleDateString('en-CA')}`
        } else {
            query.delete(`${Constants.ROUTER_URL.TIME_TO}`)
        }
        if (data?.Type) {
            if (data?.Type != Constants.STATUS_COMMENT.ALL) {
                params += `&${Constants.ROUTER_URL.TYPE}=${data?.Type}`
            } else {
                query.delete(`${Constants.ROUTER_URL.TYPE}`)
            }
        } else {
            query.delete(`${Constants.ROUTER_URL.TYPE}`)
        }
        if (data?.UserName) {
            params += `&${Constants.ROUTER_URL.USERNAME}=${data?.UserName}`
        } else {
            query.delete(`${Constants.ROUTER_URL.USERNAME}`)
        }
        if (query.get(Constants.ROUTER_URL.OFFSET)) {
            params += `&${Constants.ROUTER_URL.OFFSET}=${query.get(Constants.ROUTER_URL.OFFSET)}`
        }
        if (query.get(Constants.ROUTER_URL.TAB)) {
            params += `&${Constants.ROUTER_URL.TAB}=${query.get(Constants.ROUTER_URL.TAB)}`
        }
        history.replace({
            search: params
        })
    }
    const { t } = useTranslation()
    const handleResetFilter = () => {
        let params = `${Constants.ROUTER_URL.PAGE}=1`;
        if (query.get(Constants.ROUTER_URL.TAB)) {
            params += `&${Constants.ROUTER_URL.TAB}=${query.get(Constants.ROUTER_URL.TAB)}`
        }
        history.replace({
            search: params
        })

        props.reset()
    }

    useEffect(() => {
        if (query.get(Constants.ROUTER_URL.TYPE)) {
            methods.setValue('Type', query.get(Constants.ROUTER_URL.TYPE));
        } else {
            methods.setValue('Type', '')
        }
        if (query.get(Constants.ROUTER_URL.TIME_FROM)) {
            methods.setValue('TimeFrom', query.get(Constants.ROUTER_URL.TIME_FROM));
        } else {
            methods.setValue('TimeFrom', '')
        }
        if (query.get(Constants.ROUTER_URL.TIME_TO)) {
            methods.setValue('TimeTo', query.get(Constants.ROUTER_URL.TIME_TO));
        } else {
            methods.setValue('TimeTo', '')
        }
        if (query.get(Constants.ROUTER_URL.USERNAME)) {
            methods.setValue('UserName', query.get(Constants.ROUTER_URL.USERNAME));
        } else {
            methods.setValue('UserName', '')
        }
        if (query.get(Constants.ROUTER_URL.SEARCH_ALL)) {
            methods.setValue('Search', query.get(Constants.ROUTER_URL.SEARCH_ALL));
        } else {
            methods.setValue('Search', '')
        }
    }, [query])
    let paramsUrl = {...router.getAll()};
    delete paramsUrl[Constants.ROUTER_URL.PAGE];
    delete paramsUrl[Constants.ROUTER_URL.TAB];
    let pramsArray = convertParamsToArray(paramsUrl);
    
    return (
        <div className="stock-container">
            <Box >
                <FormProvider {...methods} >
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormGroupSearchRow
                            isRequest={false}
                            componentLeft={
                                <FormGroupSearch isWrap={false}>
                                    <FormItem style={{ flex: 2 }}>
                                        <FormInput
                                            fieldName="UserName"
                                            validate={[]}
                                            placeholder={t('enter_name_account')}
                                            icon={<IcSearch />}
                                        />
                                    </FormItem>
                                    <FormItem style={{ flex: 1 }}>
                                        <FormDatePicker
                                            fieldName="TimeFrom"
                                            validate={[Validator.maxDate, Validator.CheckedDate(methods.getValues('TimeTo'), 1)]}
                                            placeholder="Ngày bình luận từ"
                                        />
                                    </FormItem>
                                    <FormItem style={{ flex: 1 }}>
                                        <FormDatePicker
                                            fieldName="TimeTo"
                                            validate={[Validator.maxDate, Validator.CheckedDate(methods.getValues('TimeFrom'), 2)]}
                                            placeholder="Ngày bình luận đến"
                                        />
                                    </FormItem>
                                </FormGroupSearch>
                            }
                            componentRight={
                                <FormActionSearch>
                                    <ButtonCommon
                                        type="button"
                                        onClick={() => {
                                            handleResetFilter()
                                        }}
                                        typeColor="border-green"
                                        disabled={!methods?.formState?.isDirty && pramsArray.length == 0 ? true : false}
                                    >
                                        Thiết lập lại
                                    </ButtonCommon>
                                    <ButtonSearch
                                        type="submit"
                                        typeColor="background-green"
                                        onClickSelect={() => {
                                            setOpen(!open);
                                        }}
                                    >
                                        Tìm kiếm
                                    </ButtonSearch>
                                </FormActionSearch>
                            }
                        />
                        {
                            open && <FormGroupSearchRow
                                isRequest={false}
                                componentLeft={
                                    <FormGroupSearch isWrap={false}>
                                        <FormItem style={{ flex: 1 }}>
                                            <FormInput
                                                fieldName="Search"
                                                validate={[]}
                                                placeholder={t('enter_content_comment')}
                                            />
                                        </FormItem>
                                        <FormItem style={{ flex: 1 }}>

                                        </FormItem>
                                        <FormItem style={{ flex: 1 }}>

                                        </FormItem>
                                    </FormGroupSearch>
                                }

                            />
                        }
                    </form>
                </FormProvider>
            </Box>
        </div>
    )
})

export default CustomSearch
