
import FormInput from 'shared/components/common/custom-form/FormInput'
import React, { forwardRef, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Constants from '../../../utils/Constants';
import { useHistory } from 'react-router';
import useQuery from '../../../hooks/use-query';
import Validator from '../../../utils/Validator';
import FormDatePicker from '../common/custom-form/FormDatePicker';
import CustomFormProvider from '../common/custom-form/CustomFormProvider'
import FormActionSearch from '../common/form/form-search/FormActionSearch'
import FormItem from '../common/form/FormItem'
import FormSelect from 'shared/components/common/custom-form/FormSelect';
import FormGroupSearch from '../common/form/form-search/FormGroupSearch'
import FormGroupSearchRow from '../common/form/form-search/FormGroupSearchRow'
import IconSearch from 'assets/images/icons/icon-search'
import ButtonCommon from '../common/button/ButtonCommon'
import ButtonSearch from '../common/button/ButtonSearch'
import useRouterV2 from 'hooks/use-router-v2'
import { convertParamsToArray } from 'utils/Utils'
import Permission from 'utils/Permission';
import FormInputV2 from "shared/components/common/custom-form/FormInputV2";
export default function CustomSearch(props) {
  const {
    NameTable, Recruiments, Status
  } = props;

  const onBlurSearch = () => {
    if (methods.getValues("Search") !== null) {
      const searchValue = methods.watch("Search").trim();
      const queryParams = {
        ...router.getAll(),
        [Constants.QueryParam.Page.VALUE]:
          Constants.PRODUCT_LIST_PAGINATION.OFFSET,
        [Constants.QueryParam.Limit.VALUE]:
          Constants.PRODUCT_LIST_PAGINATION.LIMIT,
      };

      if (searchValue) {
        queryParams[Constants.QueryParam.Search.VALUE] = searchValue;
      }

      router.replace({
        params: queryParams,
      });
    }
  };

  let StatusCustom = []
  const resultStatus = Object.entries(Status);
  resultStatus.forEach(element => {
    let valuer = { value: element[0], label: element[1] };
    StatusCustom.push(valuer)
  });

  let Recruiment = []
  const resultRecruiments = Object.entries(Recruiments);
  resultRecruiments.forEach(element => {
    let valuer = { value: element[0], label: element[1] };
    Recruiment.push(valuer)
  });
  let defaultValues = { Search: '', Status: null, Position: null, ShowIn: null, RecruitmentId: null, DateTo: null }
  const methods = useForm({
    defaultValues: defaultValues,
  });
  const {
    reset,
  } = methods;
  const query = useQuery()
  const router = useRouterV2();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    let paramsNew = {
      [`${Constants.QueryParam.Status.VALUE}`]: data?.Status,
      [`${Constants.QueryParam.RecruitmentId.VALUE}`]:
        data?.RecruitmentId,
      [`${Constants.QueryParam.DateTo.VALUE}`]:
        data?.DateTo,
      [Constants.QueryParam.Page.VALUE]:
        Constants.PRODUCT_LIST_PAGINATION.OFFSET,
      [Constants.QueryParam.Limit.VALUE]:
        Constants.PRODUCT_LIST_PAGINATION.LIMIT,
      [Constants.QueryParam.Search.VALUE]: data?.Search,
    };

    router.replace({
      params: paramsNew
    })
  };

  const handleResetButton = () => {
    reset(defaultValues);
    router.replace({
      params: {

      }
    })
  };

  useEffect(() => {
    if (router.get(Constants.QueryParam.Search.VALUE)) {
      methods.setValue('Search', query.get(Constants.QueryParam.Search.VALUE));
    } else {
      methods.setValue('Search', '')
    }
    if (router.get(Constants.QueryParam.Status.VALUE)) {
      methods.setValue('Status', query.get(Constants.QueryParam.Status.VALUE), { shouldDirty: true });
    } else {
      methods.setValue('Status', null, { shouldDirty: false })
    }
    if (router.get(Constants.QueryParam.RecruitmentId.VALUE)) {
      methods.setValue('RecruitmentId', query.get(Constants.QueryParam.RecruitmentId.VALUE));
    } else {
      methods.setValue('RecruitmentId', null)
    }
    if (router.get(Constants.QueryParam.DateTo.VALUE)) {
      methods.setValue('DateTo', query.get(Constants.QueryParam.DateTo.VALUE));
    } else {
      methods.setValue('DateTo', null)
    }
  }, [
    router.get(Constants.QueryParam.Search.VALUE),
    router.get(Constants.QueryParam.Status.VALUE),
    router.get(Constants.QueryParam.RecruitmentId.VALUE),
    router.get(Constants.QueryParam.DateTo.VALUE)
  ])

  React.useEffect(() => {
    let queryParams = router.getAll();
    delete queryParams[Constants.QueryParam.Page.VALUE];
    delete queryParams[Constants.QueryParam.Limit.VALUE];
    delete queryParams[Constants.QueryParam.Offset.VALUE];
    const paramsArray = convertParamsToArray(queryParams);
    if (paramsArray.length == 0) {
      const values = methods.getValues()
      methods.reset(values)
    }
  }, [methods.isSubmitted, methods.getValues, methods.reset, router.get(Constants.ROUTER_URL.TYPE), query])
  return (
    <div className="stock-container">
      <div>
        <CustomFormProvider {...methods} >
          <form className='quick-submit' onSubmit={methods.handleSubmit(onSubmit)}>
            <FormGroupSearchRow
              isShowFilter
              type={NameTable}
              isRequest={false}
              isShowFilterColumnTable
              componentLeft={
                <FormGroupSearch isWrap={false}>
                  <FormItem style={{ flex: 2 }}>
                    <FormInputV2
                      fieldName="Search"
                      validate={[]}
                      placeholder={"Tìm kiếm mã ứng viên, tên ứng viên"}
                      icon={<IconSearch />}
                      onBlur={onBlurSearch}
                    />
                  </FormItem>
                  <FormItem style={{ flex: 1 }}>
                    <FormDatePicker
                      fieldName="DateTo"
                      validate={[Validator.CheckedDate(methods.getValues('DateTo'), 2)]}
                      placeholder="Ngày nộp"
                    />
                  </FormItem>
                  <FormItem style={{ flex: 1 }}>
                    <FormSelect
                      validate={[]}
                      options={StatusCustom ?? []}
                      fieldName="Status"
                      placeholder={'Trạng thái'}
                    />
                  </FormItem>
                </FormGroupSearch>
              }
              componentRight={
                <FormActionSearch>
                  <ButtonCommon
                    type="button"
                    onClick={() => {
                      handleResetButton();
                    }}
                    typeColor="border-green"
                    disabled={!methods?.formState?.isDirty ? true : false}
                  >
                    Thiết lập lại
                  </ButtonCommon>
                  {
                    <ButtonSearch
                      onClickSelect={() => setOpen(!open)}
                      type="submit"
                      typeColor="background-green"
                    >
                      Tìm kiếm
                    </ButtonSearch>
                  }
                </FormActionSearch>
              }
            />
            {
              open && <FormGroupSearchRow
                isShowFilter
                type={NameTable}
                isRequest={false}
                isShowFilterColumnTable
                componentLeft={
                  <FormGroupSearch isWrap={false}>
                    <FormItem style={{ flex: 1 }}>
                      <FormSelect
                        validate={[]}
                        options={Recruiment ?? []}
                        fieldName="RecruitmentId"
                        placeholder={'Tuyển dụng'}
                      />
                    </FormItem>
                    <FormItem style={{ flex: 1 }}></FormItem>
                    <FormItem style={{ flex: 1 }}></FormItem>
                  </FormGroupSearch>
                }
              />
            }
          </form>
        </CustomFormProvider>
      </div>
    </div>
  )
}

