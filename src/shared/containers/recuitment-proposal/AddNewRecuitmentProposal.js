import React, { useEffect, useState } from "react";
import styles from "./AddNewRecuitmentProposal.module.scss";
import { Box } from "@findxdn/erp-theme";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { FooterManage } from "shared/components/common/footer";
import CustomFormProvider from "shared/components/common/custom-form/CustomFormProvider";
import LoadingButton from "shared/components/common/button-loading/ButtonLoading";
import FormGroupSearchRow from "shared/components/common/form/form-search/FormGroupSearchRow";
import FormGroupSearch from "shared/components/common/form/form-search/FormGroupSearch";
import FormItem from "shared/components/common/form/FormItem";
import TextLabelCommon from "shared/components/common/label/TextLabel";
import FormSelect from "shared/components/common/custom-form/FormSelect";
import FormInput from "shared/components/common/custom-form/FormInput";
import FormEditor from "shared/components/common/custom-form/FormEditor";
import Constant from "utils/Constants";
import Validator from "utils/Validator";
import FormDatePicker from "../../components/common/custom-form/FormDatePicker";
import actionProposal from "../../../redux/recruitment-proposal/action";
import ButtonCommon from "shared/components/common/button/ButtonCommon";
import RouterPath from "router/RouterPath";
import useRouter from "hooks/use-router";
import action from "../../../redux/recruitment-proposal/action";
import FormInputV2 from "shared/components/common/custom-form/FormInputV2";
import FormTextArea from "shared/components/common/custom-form/FormTextArea";

function AddNewRecuitmentProposal(props) {
  const { ProposeId } = props;
  const router = useRouter();
  const methods = useForm();
  const [valueTab, setValueTab] = useState(1);
  const [canSubmit, setCanSubmit] = useState(true);
  const [editorReady, setEditorReady] = useState(false);
  const [listBranches, setListBranches] = useState([]);
  const proposeDetail = useSelector(
    (state) => state.AppReruitmentProposal?.ProposeDetail
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: action.FETCH_PROPOSED_MASTER,
      payload: {},
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: action.GET_PROPOSE_DETAIL_START,
      payload: ProposeId ?? 0,
    });
  }, [ProposeId]);

  const onSubmit = (data) => {
    let params = {
      Id: 0,
      Department: String(data?.Department),
      BranchId: Number(data?.Provinces),
      Position: Number(data?.Position),
      Quantity: Number(data?.Quantity) ?? 0,
      Gender: data?.Gender ?? "",
      WorkType: data?.WorkType ? Number(data?.WorkType) : 0,
      Reason: data?.Reason ? String(data?.Reason) : "",
      Title: data.Title ?? "",
      DateTo: data?.DateTo,
      SalaryFrom: data?.SalaryFrom ? Number(data?.SalaryFrom) : 0,
      SalaryTo: data?.SalaryTo ? Number(data?.SalaryTo) : 0,
      Descriptions: data?.Descriptions || "",
      AgeFrom: data?.AgeFrom ? Number(data?.AgeFrom) : 0,
      AgeTo: data?.AgeTo ? Number(data?.AgeTo) : 0,
      Level: data?.Level ? Number(data?.Level) : 0,
      Specialized: data?.Specialized ? String(data?.Specialized) : "",
      ForeignLanguage: data?.ForeignLanguage
        ? String(data?.ForeignLanguage)
        : "",
      Experience: data?.Experience ? String(data?.Experience) : "",
      Note: "",
    };
    if (proposeDetail?.Id) {
      params["Id"] = Number(proposeDetail?.Id);
      dispatch({
        type: actionProposal.UPDATE_PROPOSED_LOCATION,
        payload: params,
        callback: (id) => {
          router.push({
            pathname: RouterPath.getRouteWithId(
              RouterPath.RECRUITMENT_PROPOSAL_DETAIL,
              id
            ),
          });
        },
      });
    } else {
      dispatch({
        type: actionProposal.CREATE_PROPOSED_LOCATION,
        payload: params,
        callback: () => {
          router.push({
            pathname: RouterPath.RECRUITMENTPRO,
          });
        },
      });
    }
  };
  const handleCancel = () => {
    router.push({ pathname: RouterPath.RECRUITMENTPRO });
  };
  const {
    Positions,
    Branches,
    Gender,
    Level,
    ForeignLanguage,
    Status,
    WorkType,
    listProposal,
    isLoading,
    paging,
    Departments,
  } = useSelector((state) => state.AppReruitmentProposal);
  const ConvertStringData = (data) => {
    let textLabel = [];
    const objReturn = Object.entries(data);
    for (let i = 0; i < objReturn.length; i++) {
      let element = objReturn[i];
      textLabel.push({ value: element[0], label: element[1] });
    }
    return { textLabel };
  };
  let ForeignLanguages = ConvertStringData(ForeignLanguage).textLabel;
  let Province = ConvertStringData(Branches).textLabel;
  let Department = ConvertStringData(Departments).textLabel;
  let Position = ConvertStringData(Positions).textLabel;
  let Genders = ConvertStringData(Gender).textLabel;
  let Levels = ConvertStringData(Level).textLabel;
  let workTypeCustom = ConvertStringData(WorkType).textLabel;

  useEffect(() => {
    if (proposeDetail && ProposeId) {
      methods.setValue("Title", proposeDetail?.Title),
        methods.setValue("Department", proposeDetail?.Department),
        methods.setValue("Position", proposeDetail?.Position),
        methods.setValue("WorkType", proposeDetail?.WorkType),
        methods.setValue("Provinces", proposeDetail?.BranchId),
        methods.setValue("Quantity", proposeDetail?.Quantity),
        methods.setValue("DateTo", proposeDetail?.DateTo),
        methods.setValue("SalaryFrom", proposeDetail?.SalaryFrom),
        methods.setValue("SalaryTo", proposeDetail?.SalaryTo),
        methods.setValue("Gender", proposeDetail?.Gender),
        methods.setValue("AgeFrom", proposeDetail?.AgeFrom),
        methods.setValue("AgeTo", proposeDetail?.AgeTo),
        methods.setValue("Reason", proposeDetail?.Reason),
        methods.setValue("Level", proposeDetail?.Level),
        methods.setValue("Specialized", proposeDetail?.Specialized),
        methods.setValue("ForeignLanguage", proposeDetail?.ForeignLanguage),
        methods.setValue("Experience", proposeDetail?.Experience),
        methods.setValue("Descriptions", proposeDetail?.Descriptions);
    } else {
      methods.setValue(""), "";
    }
  }, [proposeDetail]);

  let _categoriesList = [];
  return (
    <CustomFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={styles["box-container"]}>
          {valueTab == 1 && (
            <>
              <Box boxTitle="Thông tin cơ bản">
                <FormGroupSearchRow
                  componentLeft={
                    <FormGroupSearch>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Tên đề xuất
                        </TextLabelCommon>
                        <FormInput
                          fieldName="Title"
                          validate={[Validator.required]}
                          placeholder={"Nhập tên đề xuất"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Bộ phận đề xuất
                        </TextLabelCommon>
                        <FormSelect
                          options={Department ?? []}
                          fieldName="Department"
                          validate={[Validator.required]}
                          placeholder={"Chọn bộ phận"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Vị trí đề xuất
                        </TextLabelCommon>
                        <FormSelect
                          options={Position ?? []}
                          fieldName="Position"
                          validate={[Validator.required]}
                          placeholder={"Chọn vị trí"}
                        />
                      </FormItem>
                    </FormGroupSearch>
                  }
                />
                <FormGroupSearchRow
                  componentLeft={
                    <FormGroupSearch>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Hình thức làm việc
                        </TextLabelCommon>
                        <FormSelect
                          options={workTypeCustom ?? []}
                          fieldName="WorkType"
                          validate={[Validator.required]}
                          placeholder={"Chọn nhiều"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Nơi làm việc
                        </TextLabelCommon>
                        <FormSelect
                          options={Province ?? []}
                          fieldName="Provinces"
                          validate={[Validator.required]}
                          placeholder={"Chọn nơi làm việc"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Số lượng tuyển
                        </TextLabelCommon>
                        <FormInputV2
                          isNumber={true}
                          min={1}
                          max={100}
                          fieldName="Quantity"
                          validate={[Validator.required]}
                          placeholder={"Nhập số lượng tuyển"}
                        />
                      </FormItem>
                    </FormGroupSearch>
                  }
                />
                <FormGroupSearchRow
                  componentLeft={
                    <FormGroupSearch>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal" require>
                          Hạn tuyển
                        </TextLabelCommon>
                        <FormDatePicker
                          fieldName="DateTo"
                          validate={[
                            Validator.required,
                            Validator.CheckedDate(
                              methods.getValues("TimeFrom"),
                              2
                            ),
                          ]}
                          placeholder="Hạn tuyển"
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Mức lương (từ)
                        </TextLabelCommon>
                        <FormInputV2
                          format="money"
                          fieldName="SalaryFrom"
                          validate={[
                            Validator.checkNumberFrom(
                              methods.watch("SalaryTo")
                            ),
                          ]}
                          placeholder={"1.000.0000"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Mức lương (đến)
                        </TextLabelCommon>
                        <FormInputV2
                          format="money"
                          fieldName="SalaryTo"
                          validate={[
                            Validator.checkNumberTo(
                              methods.watch("SalaryFrom")
                            ),
                          ]}
                          placeholder={"1.000.0000"}
                        />
                      </FormItem>
                    </FormGroupSearch>
                  }
                />
                <FormGroupSearchRow
                  componentLeft={
                    <FormItem className="form-item">
                      <TextLabelCommon className="form-proposal">
                        Lý do tuyển
                      </TextLabelCommon>
                      <FormTextArea
                        fieldName="Reason"
                        validate={[]}
                        placeholder={"Nhập lý do tuyển"}
                      />
                    </FormItem>
                  }
                />
              </Box>
              <Box boxTitle="Yêu cầu ứng viên">
                <FormGroupSearchRow
                  componentLeft={
                    <FormGroupSearch>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Giới tính
                        </TextLabelCommon>
                        <FormSelect
                          options={Genders ?? []}
                          fieldName="Gender"
                          validate={[]}
                          placeholder={"Chọn giới tính"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Độ tuổi từ
                        </TextLabelCommon>
                        <FormInputV2
                          isNumber={true}
                          min={1}
                          max={65}
                          fieldName="AgeFrom"
                          validate={[
                            Validator.checkNumberFrom(methods.watch("AgeTo")),
                          ]}
                          placeholder={"1"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Độ tuổi đến
                        </TextLabelCommon>
                        <FormInputV2
                          isNumber={true}
                          min={1}
                          max={65}
                          fieldName="AgeTo"
                          validate={[
                            Validator.checkNumberTo(methods.watch("AgeFrom")),
                          ]}
                          placeholder={"65"}
                        />
                      </FormItem>
                    </FormGroupSearch>
                  }
                />
                <FormGroupSearchRow
                  componentLeft={
                    <FormGroupSearch>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Trình độ
                        </TextLabelCommon>
                        <FormSelect
                          options={Levels ?? []}
                          fieldName="Level"
                          validate={[]}
                          placeholder={"Chọn nhiều"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Chuyên ngành
                        </TextLabelCommon>
                        <FormInput
                          fieldName="Specialized"
                          validate={[]}
                          placeholder={"Nhập chuyên ngành"}
                        />
                      </FormItem>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Ngoại ngữ
                        </TextLabelCommon>
                        <FormSelect
                          options={ForeignLanguages ?? []}
                          fieldName="ForeignLanguage"
                          validate={[]}
                          placeholder={"Chọn ngoại ngữ"}
                        />
                      </FormItem>
                    </FormGroupSearch>
                  }
                />
                <FormGroupSearchRow
                  componentLeft={
                    <FormGroupSearch>
                      <FormItem className="form-item">
                        <TextLabelCommon className="form-proposal">
                          Kinh nghiệm
                        </TextLabelCommon>
                        <FormSelect
                          options={Constant.INPUT_EXP ?? []}
                          fieldName="Experience"
                          validate={[]}
                          placeholder={"Chọn kinh nghiệm"}
                        />
                      </FormItem>
                    </FormGroupSearch>
                  }
                />
              </Box>
              <Box boxTitle="Mô tả công việc">
                <FormGroupSearchRow
                  componentLeft={
                    <FormItem className="w-100 form-item">
                      <div className="" height={window.innerHeight - 360}>
                        <FormEditor
                          fieldName="Descriptions"
                          validate={[]}
                          placeholder="Nhập chính sách khách hàng thành viên..."
                          setCanSubmit={setCanSubmit}
                        />
                      </div>
                    </FormItem>
                  }
                />
              </Box>
            </>
          )}
          <FooterManage titleBack={"Quay lại "} back={true}>
            <div className="d-flex justify-content-end align-items-center">
              <ButtonCommon
                // loading={isLoading}
                disabled={!canSubmit}
                className="mr-3"
                type="button"
                onClick={() => handleCancel()}
                typeColor="border-red"
              >
                Huỷ bỏ
              </ButtonCommon>
              <LoadingButton
                // loading={isLoading}
                disabled={!canSubmit}
                type="submit"
              >
                Lưu
              </LoadingButton>
            </div>
          </FooterManage>
        </div>
      </form>
    </CustomFormProvider>
  );
}
export default AddNewRecuitmentProposal;
