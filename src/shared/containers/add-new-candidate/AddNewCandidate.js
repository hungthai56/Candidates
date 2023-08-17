import React, { useEffect, useState,useRef } from 'react';
import styles from "./AddNewCandidate.module.scss";
import { Box } from '@findxdn/erp-theme';
import { useForm, useFieldArray, useFormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { FooterManage } from 'shared/components/common/footer';
import CustomFormProvider from 'shared/components/common/custom-form/CustomFormProvider';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import FormGroupSearchRow from 'shared/components/common/form/form-search/FormGroupSearchRow';
import FormGroupSearch from 'shared/components/common/form/form-search/FormGroupSearch';
import FormItem from 'shared/components/common/form/FormItem';
import TextLabelCommon from 'shared/components/common/label/TextLabel';
import FormSelect from 'shared/components/common/custom-form/FormSelect';
import FormInput from 'shared/components/common/custom-form/FormInput';
import Constant from 'utils/Constants'
import Validator from 'utils/Validator';
import Validate from 'utils/Validate';
import FormDatePicker from '../../components/common/custom-form/FormDatePicker';
import actionProposal from '../../../redux/candidate-manager/action';
import ButtonCommon from 'shared/components/common/button/ButtonCommon';
import RouterPath from 'router/RouterPath';
import useRouter from 'hooks/use-router';
import action from '../../../redux/candidate-manager/action';
import FormImageV2 from '../../components/common/custom-form/FormImageV2';
import FormInputUpload from '../../components/common/custom-form/FormInputUpload';
import IconImageUpload from 'assets/images/icons/IconImageUpload';
import IcAdd from '../../../assets/images/icons/icon-add'
import IcClose from '../../../assets/images/icons/icon-close'
import CommonInput from 'shared/components/form';

function AddNewCandidate(props) {
    const { CandidateId } = props
    const router = useRouter();
    const methods = useForm()
    const [valueTab, setValueTab] = useState(1);
    const [canSubmit, setCanSubmit] = useState(true);
    const [valueFileCV, setValueFileCV] = useState([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: action.FETCH_CANDIDATES_MASTER,
            payload: {},
        });

        dispatch({
            type: action.FETCH_EMPLOYEES,
            payload: {},
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: action.GET_CANDIDATE_DETAIL,
            payload: CandidateId ?? 0
        })
    }, [CandidateId])
    const onSubmit = (data) => {
        let params = {
            "Id": 0,
            "Name": data?.Name ?? "",
            "FileImage": data?.FileImage,
            "Birthday": data?.Birthday,
            "Gender": data?.Gender ?? "",
            "IDCard": data?.IDCard,
            "Phone": data?.Phone ? Number(data?.Phone) : 0,
            "Email": data.Email ?? "",
            "LinkFacebook": data?.LinkFacebook ?? "",
            "RecruitmentId": data?.RecruitmentId ? Number(data?.RecruitmentId) : 0,
            "Block": data?.Block ? Number(data?.Block) : 0,
            "TakeRecruitmentinfoby": data?.TakeRecruitmentinfoby ? Number(data?.TakeRecruitmentinfoby) : 0,
            "CandidateReferences": data?.CandidateEducations ?? fields,
            "CandidateExperiences": data?.CandidateExperiences ?? exprow,
            "IsOnBusinessTrip": data?.IsOnBusinessTrip ? String(data?.IsOnBusinessTrip) : "false",
            "Height": data?.Height ? Number(data?.Height) : 0,
            "Weight": data?.Weight ? Number(data?.Weight) : 0,
            "IntroducerId": data?.IntroducerId ?? 0,
            "collaborators": data?.collaborators ? String(data?.collaborators) : 0,
            "MaritalStatus": data?.MaritalStatus ? Number(data?.MaritalStatus) : 0,
            "BranchId": data?.BranchId ?? 0,
            "FileCv": data?.FileCv,
            "DateOfIDCard": data?.DateOfIDCard,
        }
        if (CandidateId) {
            params['Id'] = Number(CandidateId);
            dispatch({
                type: actionProposal.UPDATE_CANDIDATES,
                payload: params,
                callback: (id) => {
                    router.push({
                        pathname: RouterPath.getRouteWithId(RouterPath.CANDIDATE_DETAILS, id)
                    })
                }
            });
        } else {
            dispatch({
                type: actionProposal.CREATE_CANDIDATES,
                payload: params,
                callback: (id) => {
                    router.push({
                        pathname: RouterPath.getRouteWithId(RouterPath.CANDIDATE_DETAILS, id)
                    })
                }
            })
        }
    }
    const handleCancel = () => {
        router.push({ pathname: RouterPath.CANDIDATES })
    }
    const { Blocks, Branches, CandidateDetail, BranchesId, Type, Genders, Recruitment, Recruiments, Employees, Positions, MaritalStatus, TakeRecruitmentInfoBy, ModeOfStudy, WorkTypes } = useSelector(
        (state) => state.AppCandidates, WorkTypes
    );
    let proposeDetail = CandidateDetail
    let Employee = []
    Employees.forEach(em => {
        Employee.push({ value: em.EmployeeId, label: em.FullName })
    });
    const ConvertStringData = (data) => {
        let textLabel = []
        const objReturn = Object.entries(data);
        for (let i = 0; i < objReturn.length; i++) {
            let element = objReturn[i]
            textLabel.push({ value: element[0], label: element[1] })
        }
        return (
            { textLabel }
        )
    }
    let Gender = ConvertStringData(Genders).textLabel
    let Branche = ConvertStringData(Branches).textLabel
    let TakeRecruiinfoby = ConvertStringData(TakeRecruitmentInfoBy).textLabel
    let WorkType = ConvertStringData(WorkTypes).textLabel
    let EducationLv = ConvertStringData(Type).textLabel
    let MaritalSt = ConvertStringData(MaritalStatus).textLabel
    let Position = ConvertStringData(Positions).textLabel
    let Recruiment = ConvertStringData(Recruiments).textLabel
    let Block = ConvertStringData(Blocks).textLabel
    let ModeOfStudys = ConvertStringData(ModeOfStudy).textLabel
    useEffect(() => {
        if (Recruitment) {
            BranchesId && BranchesId.forEach(element => {
                methods.setValue("BranchId", element.Id)
            });
            methods.setValue("appliedPosition", Recruitment.Position)
            methods.setValue("WorkType", Recruitment.WorkType)
        } else {
            methods.setValue(""), ""
        }
    }, [Recruitment])
    
    useEffect(() => {
        if (proposeDetail && CandidateId) {
            setValueFileCV([{ "FileName": proposeDetail?.FileNameCv, "Id": Number(CandidateId) }])
            methods.setValue("Name", proposeDetail?.Name)
            methods.setValue("FileImage", [{ data_url: proposeDetail?.Avatar }])
            methods.setValue("Birthday", proposeDetail?.Birthday)
            methods.setValue("Gender", proposeDetail?.GenderId)
            methods.setValue("IDCard", proposeDetail?.IDCard)
            methods.setValue("Phone", proposeDetail?.Phone)
            methods.setValue("Email", proposeDetail?.Email)
            methods.setValue("LinkFacebook", proposeDetail?.LinkFacebook)
            methods.setValue("RecruitmentId", proposeDetail?.RecruitmentId)
            dispatch({
                type: action.GET_RECRUITMENT_BY_ID,
                payload: proposeDetail?.RecruitmentId,
            });
            methods.setValue("Block", proposeDetail?.BlockId)
            methods.setValue("TakeRecruitmentinfoby", proposeDetail?.TakeRecruitmentInfoById)
            proposeDetail?.CandidateEducations && proposeDetail?.CandidateEducations.forEach((value, index, array) => {
                methods.setValue("CandidateEducations[" + index + "].Major", proposeDetail?.CandidateEducations[index].Major)
                methods.setValue("CandidateEducations[" + index + "].School", proposeDetail?.CandidateEducations[index].School)
                methods.setValue("CandidateEducations[" + index + "].Type", proposeDetail?.CandidateEducations[index].Type)
                methods.setValue("CandidateEducations[" + index + "].ModeOfStudy", proposeDetail?.CandidateEducations[index].ModeOfStudy)
            });
            proposeDetail?.CandidateExperiences && proposeDetail?.CandidateExperiences.forEach((value, index, array) => {
                methods.setValue("CandidateExperiences[" + index + "].TimeStart", proposeDetail?.CandidateExperiences[index].TimeStart)
                methods.setValue("CandidateExperiences[" + index + "].TimeEnd", proposeDetail?.CandidateExperiences[index].TimeEnd)
                methods.setValue("CandidateExperiences[" + index + "].Position", proposeDetail?.CandidateExperiences[index].Position)
                methods.setValue("CandidateExperiences[" + index + "].CompanyName", proposeDetail?.CandidateExperiences[index].CompanyName)
            });
            methods.setValue("IsOnBusinessTrip", proposeDetail?.IsOnBusinessTrip)
            methods.setValue("Height", proposeDetail?.Height)
            methods.setValue("Weight", proposeDetail?.Weight)
            methods.setValue("IntroducerId", proposeDetail?.IntroducerId)
            methods.setValue("collaborators", Number(proposeDetail?.Collaborators))
            methods.setValue("MaritalStatus", proposeDetail?.MaritalStatusId)
            methods.setValue("BranchId", proposeDetail?.BranchId)
            methods.setValue("DateOfIDCard", proposeDetail?.DateOfIDCard)
            methods.setValue("FileCV", proposeDetail?.DateOfIDCard)
        } else {
            methods.setValue(""), ""
            setValueFileCV([])
        }
    }, [proposeDetail])

    const { register, control, reset } = useForm({
        defaultValues: {
            CandidateEducations: [{ Type: 0, ModeOfStudy: 0, Major: "", School: "" }],
            CandidateExperiences: [{ TimeStart: "", TimeEnd: "", Position: "", CompanyName: "" }]
        }
    });
    const { fields, move, remove, update, prepend } = useFieldArray({
        control,
        name: 'CandidateEducations',
    });

    useEffect(() => {
        reset({ CandidateEducations: proposeDetail?.CandidateEducations });
    }, [proposeDetail?.CandidateEducations]);

    const handleAaddEdu = () => {
        prepend({ Type: 0, ModeOfStudy: 0, Major: "", School: "" });
    };
    const {
        fields: exprow,
        prepend: handleAaddExp,
        remove: handleDeleteExp
    } = useFieldArray({ control, name: "CandidateExperiences" });

    useEffect(() => {
        reset({ CandidateExperiences: proposeDetail?.CandidateExperiences });
    }, [proposeDetail?.CandidateExperiences]);

    const onChangeSelect = (e) => {
        dispatch({
            type: action.GET_RECRUITMENT_BY_ID,
            payload: e,
        });
    }
    return (
        <CustomFormProvider {...methods}>
            <form id="hook-form" onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={styles['box-container']}>
                    {
                        valueTab == 1 && <>
                            <Box boxTitle='Thông tin cá nhân'>
                                <FormGroupSearchRow
                                    componentLeft={
                                        <div style={{ display: 'flex', alignItems: 'start' }}>
                                            <div className={styles['custom-form-upload']}>
                                                <FormItem>
                                                    <FormImageV2
                                                        width={112}
                                                        height={140}
                                                        align={'center'}
                                                        fieldName={`FileImage`}
                                                        validate={[Validator.required]}
                                                        iconNull={<div className={styles['custom-icon-upload']}>
                                                            <IconImageUpload />
                                                            <p>Tải hình ảnh lên từ thiết bị</p>
                                                        </div>}
                                                    />
                                                </FormItem>
                                            </div>
                                            <div className={styles['custom-form-input']}>
                                                <FormGroupSearch>
                                                    <FormItem className="form-item">
                                                        <TextLabelCommon className="form-proposal" require>Họ và tên</TextLabelCommon>
                                                        <FormInput
                                                            fieldName="Name"
                                                            validate={[Validator.required, Validator.minLength(5), Validator.maxLength(50)]}
                                                            placeholder={"Nhập tên đề xuất"}
                                                        />
                                                    </FormItem>
                                                    <FormItem className="form-item">
                                                        <TextLabelCommon className="form-proposal" require>Ngày sinh</TextLabelCommon>
                                                        <FormDatePicker
                                                            fieldName="Birthday"
                                                            validate={[Validator.required, Validator.CheckedDate(methods.getValues('TimeFrom'), 2)]}
                                                            placeholder="Hạn tuyển"
                                                        />
                                                    </FormItem>
                                                    <FormItem className="form-item">
                                                        <TextLabelCommon className="form-proposal" require>Giới tính</TextLabelCommon>
                                                        <FormSelect
                                                            options={Gender ?? []}
                                                            fieldName="Gender"
                                                            validate={[Validator.required]}
                                                            placeholder={"Chọn nhiều"}
                                                        />
                                                    </FormItem>
                                                </FormGroupSearch>
                                                <FormGroupSearch style={{ marginTop: "10px" }}>
                                                    <FormItem className="form-item">
                                                        <TextLabelCommon className="form-proposal" require>Tình trạng hôn nhân</TextLabelCommon>
                                                        <FormSelect
                                                            options={MaritalSt ?? []}
                                                            fieldName="MaritalStatus"
                                                            validate={[Validator.required]}
                                                            placeholder={"Chọn tình trạng hôn nhân"}
                                                        />
                                                    </FormItem>
                                                    <FormItem className="form-item">
                                                        <TextLabelCommon className="form-proposal" require>CMND/CCCD</TextLabelCommon>
                                                        <CommonInput
                                                            fieldName="IDCard"
                                                            placeholder={"0123456789"}
                                                            rules={[Validate.required(), Validate.minLength(13), Validate.maxLength(50),Validate.number()]}
                                                        />
                                                    </FormItem>
                                                    <FormItem className="form-item">
                                                        <TextLabelCommon className="form-proposal" require>Ngày cấp</TextLabelCommon>
                                                        <FormDatePicker
                                                            fieldName="DateOfIDCard"
                                                            validate={[Validator.required, Validator.CheckedDate(methods.getValues('TimeFrom'), 2)]}
                                                            placeholder="Hạn tuyển"
                                                        />
                                                    </FormItem>
                                                </FormGroupSearch>
                                            </div>
                                        </div>
                                    }
                                />
                            </Box>
                            <Box boxTitle='Thông tin liên hệ'>
                                <FormGroupSearchRow
                                    componentLeft={
                                        <FormGroupSearch>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Số điện thoại</TextLabelCommon>
                                                <CommonInput
                                                    fieldName="Phone"
                                                    placeholder={"+84123456789"}
                                                    rules={[Validate.required() ,Validate.number()]}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Email</TextLabelCommon>
                                                <CommonInput
                                                    fieldName="Email"
                                                    placeholder={"abc123@gmail.com"}
                                                    rules={[Validate.required() ,Validate.email()]}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal">Link facebook(Không điền tên)</TextLabelCommon>
                                                <CommonInput
                                                    fieldName="LinkFacebook"
                                                    placeholder={"Nhập liên kết MXH"}
                                                    rules={[Validate.url()]}
                                                />
                                            </FormItem>
                                        </FormGroupSearch>
                                    }
                                />

                            </Box>
                            <Box boxTitle='Thông tin ứng tuyển'>
                                <FormGroupSearchRow
                                    componentLeft={
                                        <FormGroupSearch>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Tuyển dụng</TextLabelCommon>
                                                <FormSelect
                                                    options={Recruiment ?? []}
                                                    fieldName="RecruitmentId"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn tuyển dụng ứng viên apply"}
                                                    onChangeSelect={onChangeSelect}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Khối</TextLabelCommon>
                                                <FormSelect
                                                    options={Block ?? []}
                                                    fieldName="Block"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn khối"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Vị trí ứng tuyển</TextLabelCommon>
                                                <FormSelect
                                                    options={Position ?? []}
                                                    fieldName="appliedPosition"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn vị trí ứng tuyển"}
                                                    disabled={true}
                                                />
                                            </FormItem>
                                        </FormGroupSearch>
                                    }
                                />
                                <FormGroupSearchRow
                                    componentLeft={
                                        <FormGroupSearch>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Chi nhánh ứng tuyển</TextLabelCommon>
                                                <FormSelect
                                                    options={Branche ?? []}
                                                    fieldName="BranchId"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn chi nhánh"}
                                                    disabled={true}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Hình thức làm việc</TextLabelCommon>
                                                <FormSelect
                                                    options={WorkType ?? []}
                                                    fieldName="WorkType"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn hình thức"}
                                                    disabled={true}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Nguồn tuyển dụng</TextLabelCommon>
                                                <FormSelect
                                                    options={TakeRecruiinfoby ?? []}
                                                    fieldName="TakeRecruitmentinfoby"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn nguồn ứng viên apply"}
                                                />
                                            </FormItem>
                                        </FormGroupSearch>
                                    }
                                />
                                <FormGroupSearchRow
                                    componentLeft={
                                        <FormGroupSearch>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Sẵn sàng đi công tác</TextLabelCommon>
                                                <FormSelect
                                                    options={Constant.ISONBUSiIESSTRIP ?? []}
                                                    fieldName="IsOnBusinessTrip"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn hình thức"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Chiều cao (cm)</TextLabelCommon>
                                                <FormInput
                                                    fieldName="Height"
                                                    validate={[Validator.required]}
                                                    placeholder={"Nhập chiều cao"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Cân nặng</TextLabelCommon>
                                                <FormInput
                                                    fieldName="Weight"
                                                    validate={[Validator.required]}
                                                    placeholder={"Nhập cân nặng"}
                                                />
                                            </FormItem>
                                        </FormGroupSearch>
                                    }
                                />
                                <FormGroupSearchRow
                                    componentLeft={
                                        <FormGroupSearch>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal" require>Nhân sự thu hút</TextLabelCommon>
                                                <FormSelect
                                                    options={Employee ?? []}
                                                    fieldName="IntroducerId"
                                                    validate={[Validator.required]}
                                                    placeholder={"Chọn nhân sự thu hút"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal">Cộng tác viên</TextLabelCommon>
                                                <FormSelect
                                                    options={Employee ?? []}
                                                    fieldName="collaborators"
                                                    validate={[]}
                                                    placeholder={"Chọn cộng tác viên"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                <TextLabelCommon className="form-proposal">CV ứng viên</TextLabelCommon>
                                                <FormInputUpload
                                                    fieldName="FileCv"
                                                    validate={[]}
                                                    placeholder={"Chọn CV"}
                                                    listFile={valueFileCV}
                                                />
                                            </FormItem>
                                        </FormGroupSearch>
                                    }
                                />
                            </Box>
                            <Box iconTitleLeft boxTitle='Trình độ học vấn'>
                                <FormGroupSearchRow>
                                    {fields.map((row, index) => (
                                        <FormGroupSearch key={index} style={{ marginBottom: index == 0 ? "10px" : "10px" }}>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Trình độ học vấn</TextLabelCommon> : ""}
                                                <FormSelect
                                                    ref={register}
                                                    options={EducationLv ?? []}
                                                    fieldName={`CandidateEducations[${index}].Type`}
                                                    validate={[]}
                                                    placeholder={"Chọn tuyển dụng ứng viên apply"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Hình thức đào tạo</TextLabelCommon> : ""}
                                                <FormSelect
                                                    ref={register}
                                                    options={ModeOfStudys ?? []}
                                                    fieldName={`CandidateEducations[${index}].ModeOfStudy`}
                                                    validate={[]}
                                                    placeholder={"Hình thức"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Chuyên ngành</TextLabelCommon> : ""}
                                                <FormInput
                                                    ref={register}
                                                    fieldName={`CandidateEducations[${index}].Major`}
                                                    validate={[Validator.maxLength(50)]}
                                                    placeholder={"Nhập chuyên ngành"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Nơi đào tạo</TextLabelCommon> : ""}
                                                <FormInput
                                                    ref={register}
                                                    fieldName={`CandidateEducations[${index}].School`}
                                                    validate={[Validator.maxLength(50)]}
                                                    placeholder={"Nhập nơi đào tạo"}
                                                />
                                            </FormItem>
                                            <div className={styles['flex_button']} style={{ marginBottom: "0px;" }}>
                                                <div className={"dep_U6nqO6JNIZqBNx6c6EkB"} onClick={() => remove(index)} >
                                                    <div style={{ paddingTop: index == 0 ? "26px" : "7px", marginLeft: "3px", cursor: "pointer" }}>
                                                        <IcClose />
                                                    </div>
                                                </div>
                                            </div>
                                        </FormGroupSearch>
                                    ))}
                                </FormGroupSearchRow>
                                <div className={"avc"} style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        handleAaddEdu();
                                    }}>
                                    <IcAdd />
                                </div>
                            </Box>
                            <Box style={{ alignItems: "center" }} iconTitleLeft boxTitle='Kinh nghiệm làm việc'>
                                <FormGroupSearchRow>
                                    {exprow.map((row, index) => (
                                        <FormGroupSearch key={index} style={{ marginBottom: index == 0 ? "10px" : "10px" }}>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Từ ngày</TextLabelCommon> : ""}
                                                <FormDatePicker

                                                    fieldName={`CandidateExperiences[${index}].TimeStart`}
                                                    validate={[Validator.CheckedDate(methods.getValues('TimeFrom'), 2)]}
                                                    placeholder="Hạn tuyển"
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Đến ngày</TextLabelCommon> : ""}
                                                <FormDatePicker
                                                    fieldName={`CandidateExperiences[${index}].TimeEnd`}
                                                    validate={[Validator.CheckedDate(methods.getValues('TimeFrom'), 2)]}
                                                    placeholder="Hạn tuyển"
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Công ty</TextLabelCommon> : ""}
                                                <FormInput
                                                    fieldName={`CandidateExperiences[${index}].CompanyName`}
                                                    validate={[Validator.maxLength(50)]}
                                                    placeholder={"Nhập nơi đào tạo"}
                                                />
                                            </FormItem>
                                            <FormItem className="form-item">
                                                {index == 0 ? <TextLabelCommon className="form-proposal">Vị trí</TextLabelCommon> : ""}
                                                <FormInput
                                                    fieldName={`CandidateExperiences[${index}].Position`}
                                                    validate={[Validator.maxLength(50)]}
                                                    placeholder={"Nhập chuyên ngành"}
                                                />
                                            </FormItem>
                                            <div className={styles['flex_button']} style={{ marginBottom: "0px;" }}>
                                                <div className={"dep_U6nqO6JNIZqBNx6c6EkB"} onClick={() => handleDeleteExp(index)} >
                                                    <div style={{ paddingTop: index == 0 ? "26px" : "7px", marginLeft: "3px", cursor: "pointer" }}>
                                                        <IcClose />
                                                    </div>
                                                </div>
                                            </div>
                                        </FormGroupSearch>
                                    ))}
                                </FormGroupSearchRow>
                                <div className={"avc"} style={{ cursor: "pointer" }}
                                    onClick={() => {
                                        handleAaddExp({ TimeStart: "", TimeEnd: "", Position: "", CompanyName: "" });
                                    }}
                                >
                                    <IcAdd />
                                </div>
                            </Box>
                        </>
                    }
                    <FooterManage titleBack={'Quay lại '} back={true}>
                        <div className="d-flex justify-content-end align-items-center">
                            <ButtonCommon
                                // loading={isLoading}
                                disabled={!canSubmit}
                                className='mr-3'
                                type='button' onClick={() => handleCancel()}
                                typeColor='border-red'>
                                Hủy bỏ
                            </ButtonCommon>
                            <LoadingButton
                                // loading={isLoading}
                                disabled={!canSubmit}
                                type='submit'>
                                Lưu
                            </LoadingButton>
                        </div>
                    </FooterManage>
                </div>
            </form>
        </CustomFormProvider >
    )
}
export default AddNewCandidate