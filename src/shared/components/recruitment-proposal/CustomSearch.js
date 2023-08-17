import FormInput from "shared/components/common/custom-form/FormInput";
import React, { forwardRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Constants from "../../../utils/Constants";
import { useHistory } from "react-router";
import useQuery from "../../../hooks/use-query";
import Validator from "../../../utils/Validator";
import FormDatePicker from "../common/custom-form/FormDatePicker";
import CustomFormProvider from "../common/custom-form/CustomFormProvider";
import FormActionSearch from "../common/form/form-search/FormActionSearch";
import FormItem from "../common/form/FormItem";
import FormSelect from "shared/components/common/custom-form/FormSelect";
import FormGroupSearch from "../common/form/form-search/FormGroupSearch";
import FormGroupSearchV2 from "../common/form/form-search/FormGroupSearchV2";
import FormGroupSearchRow from "../common/form/form-search/FormGroupSearchRow";
import IconSearch from "assets/images/icons/icon-search";
import ButtonCommon from "../common/button/ButtonCommon";
import ButtonSearch from "../common/button/ButtonSearch";
import useRouterV2 from "hooks/use-router-v2";
import { convertParamsToArray } from "utils/Utils";
import Permission from "utils/Permission";
import FormInputV2 from "shared/components/common/custom-form/FormInputV2";
import FormGroupSearchRowRecruitment from "../common/form/form-search/FormGroupSearchRowRecruitment";
export default function CustomSearch(props) {
  const { NameTable, Positions, Status, WorkType } = props;

  let PositionsCustom = [];
  const resultPositions = Object.entries(Positions);
  resultPositions.forEach((key) => {
    let valuer = { value: key[0], label: key[1] };
    PositionsCustom.push(valuer);
  });

  let workTypeCustom = [];
  const result = Object.entries(WorkType);
  result.forEach((key) => {
    let valuer = { value: key[0], label: key[1] };
    workTypeCustom.push(valuer);
  });

  let StatusCustom = [];
  const resultStatus = Object.entries(Status);
  resultStatus.forEach((key) => {
    let valuer = { value: key[0], label: key[1] };
    StatusCustom.push(valuer);
  });

  let defaultValues = {
    Search: "",
    Status: null,
    Position: null,
    ShowIn: null,
    WorkType: null,
    DateTo: null,
  };
  const methods = useForm({
    defaultValues: defaultValues,
  });
  const { reset } = methods;
  const query = useQuery();
  const router = useRouterV2();
  const [open, setOpen] = useState(false);

  const onSubmit = (data) => {
    let paramsNew = {
      [`${Constants.QueryParam.Status.VALUE}`]: data?.Status,
      [`${Constants.QueryParam.Positions.VALUE}`]: data?.Positions,
      [`${Constants.QueryParam.WorkType.VALUE}`]: data?.WorkType,
      [`${Constants.QueryParam.DateTo.VALUE}`]: data?.DateTo,
      [Constants.QueryParam.Page.VALUE]:
        Constants.PRODUCT_LIST_PAGINATION.OFFSET,
      [Constants.QueryParam.Limit.VALUE]:
        Constants.PRODUCT_LIST_PAGINATION.LIMIT,
      [Constants.QueryParam.Search.VALUE]: data?.Search,
    };
    router.replace({
      params: paramsNew,
    });
  };

  const handleResetButton = () => {
    reset(defaultValues);
    router.replace({
      params: {},
    });
  };

  useEffect(() => {
    const fieldsToProcess = [
      {
        name: "Search",
        queryParam: Constants.QueryParam.Search.VALUE,
      },
      {
        name: "Status",
        queryParam: Constants.QueryParam.Status.VALUE,
      },
      {
        name: "Positions",
        queryParam: Constants.QueryParam.Positions.VALUE,
      },
      {
        name: "WorkType",
        queryParam: Constants.QueryParam.WorkType.VALUE,
      },
      {
        name: "DateTo",
        queryParam: Constants.QueryParam.DateTo.VALUE,
      },
    ];

    fieldsToProcess.forEach((field) => {
      const queryValue = router.get(field.queryParam);
      methods.setValue(field.name, queryValue !== null ? queryValue : null);
    });
  }, [query]);

  let paramsUrl = { ...router.getAll() };
  delete paramsUrl[Constants.QueryParam.Page.VALUE];
  delete paramsUrl[Constants.QueryParam.Offset.VALUE];
  delete paramsUrl[Constants.QueryParam.Limit.VALUE];
  let pramsArray = convertParamsToArray(paramsUrl);

  const checkDisableButton = () => {
    let queryParams = router.getAll();
    delete queryParams[Constants.QueryParam.Page.VALUE];
    delete queryParams[Constants.QueryParam.Limit.VALUE];
    delete queryParams[Constants.QueryParam.Offset.VALUE];
    const paramsArray = convertParamsToArray(queryParams);
    if (paramsArray.length == 0) {
      return true;
    }
    return false;
  };

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

  return (
    <div className="stock-container">
      <div>
        <CustomFormProvider {...methods}>
          <form
            className="quick-submit"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormGroupSearchRowRecruitment
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
                      placeholder={"Tìm kiếm mã đề xuất, tên đề xuất..."}
                      icon={<IconSearch />}
                      onBlur={onBlurSearch}
                    />
                  </FormItem>
                  <FormItem style={{ flex: 1 }}>
                    <FormSelect
                      validate={[]}
                      options={PositionsCustom}
                      fieldName="Positions"
                      placeholder={"Vị trí đề xuất"}
                    />
                  </FormItem>
                  <FormItem style={{ flex: 1 }}>
                    <FormSelect
                      validate={[]}
                      options={StatusCustom}
                      fieldName="Status"
                      placeholder={"Trạng thái"}
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
                    disabled={checkDisableButton()}
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
            {open && (
              <FormGroupSearchRow
                isShowFilter
                type={NameTable}
                isRequest={false}
                isShowFilterColumnTable
                componentLeft={
                  <FormGroupSearchV2>
                    <FormItem>
                      <FormSelect
                        validate={[]}
                        options={workTypeCustom}
                        fieldName="WorkType"
                        placeholder={"Hình thức"}
                      />
                    </FormItem>
                    <FormItem>
                      <FormDatePicker
                        fieldName="DateTo"
                        validate={[]}
                        placeholder="Hạn tuyển"
                      />
                    </FormItem>
                  </FormGroupSearchV2>
                }
              />
            )}
          </form>
        </CustomFormProvider>
      </div>
    </div>
  );
}
