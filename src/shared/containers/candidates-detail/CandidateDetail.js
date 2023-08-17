import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouterV2 from 'hooks/use-router-v2';
import styles from './CandidateDetail.module.scss'
import CustomDetail from '../../components/candidate-detail/CustomDetail'
import CustomTableDetail from '../../components/candidate-detail/CustomTableDetail'
import CustomFieldDetail from '../../components/candidate-detail/CustomFieldDetail'
import CustomFieldTaleDetail from '../../components/candidate-detail/CustomFieldTaleDetail'
import { FooterManage } from 'shared/components/common/footer';
import ButtonCommon from 'shared/components/common/button/ButtonCommon';
import LoadingButton from 'shared/components/common/button-loading/ButtonLoading';
import RouterPath from 'router/RouterPath';
import action from '../../../redux/candidate-manager/action';
import moment from 'moment';
import Utils from "utils/Utils";
import ChangeStatusDetail from '../../components/candidate-detail/ChangeStatusDetail'
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import PopupName from 'shared/components/common/popup/PopupName';
import Constants from 'utils/Constants'
import TabTable from 'shared/components/common/tab-table/TabTable';

function CandidateDetail(props) {

  const { CandidateId } = props
  const router = useRouterV2();
  const dispatch = useDispatch()
  const [canSubmit, setCanSubmit] = useState(true);
  const [item, setItem] = useState([])
  const [itemCheck, setItemCheck] = useState(false)
  const [statusChange, setstatusChange] = useState()
  const [value, setValue] = React.useState(0);

  const handleEdit = () => {
    router.push({ pathname: RouterPath.UPDATE_CANDIDATES.replace(":id", CandidateId) })
  }
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
  const proposeDetail = useSelector(state => state.AppCandidates?.CandidateDetail);
  const testla = useSelector(state => state.AppCandidates?.Status);
  const { Blocks, Branches, Type, EducationLevel, Status, Genders, Recruiments, listCandidate, MaritalStatus, Employees, TakeRecruitmentInfoBy, Collaborators, isLoading, WorkTypes, ModeOfStudy } = useSelector(
    (state) => state.AppCandidates, WorkTypes
  );

  useEffect(() => {
    if (proposeDetail) {
      setItem(proposeDetail)
    } else {
      setItem([])
    }
  }, [proposeDetail], [testla?.Id])
  const handleDeletePropose = (data) => {
    const message = "Bạn có chắc chắn muốn xoá dữ liệu này không ?"
    EventRegister.emit(EVENT_SHOW_POPUP, {
      type: PopupName.DELETE_POPUP,
      open: true,
      payload: {
        data: data,
        message,
        isLoading: true,
        callback: {
          success: (_props) => {
            const callback = () => {
              _props?.closeLoading()
              router.push({
                pathname: RouterPath.getRouteWithId(RouterPath.CANDIDATES)
              })
            };
            dispatch({
              type: action.DELETE_CANDIDATES,
              payload: { callback, data: [Number(CandidateId)] },
              callback: (id) => {
                router.push({
                  pathname: RouterPath.getRouteWithId(RouterPath.CANDIDATES)
                })
              }
            });
          }
        }
      },
    });
  }

  let Employee = ''
  let Collaborator = ''
  Employees.forEach(em => {
    if (em.EmployeeId == item.IntroducerId) {
      Employee = em.FullName
    }

    if (em.EmployeeId == Number(item.Collaborators)){
      Collaborator = em.FullName
    }
  });
  useEffect(() => {
    if (item.Status != Constants.STATUS_POST.STATUS_WAIT_APPROVE) {
      setItemCheck(true)
    } else {
      setItemCheck(false)
    }
    setstatusChange(item.Status)
    setValueData(Status, statusChange)
  }, [item.Status])

  let dataReturn = ''
  const setValueData = (folder, data) => {
    const st = Object.entries(folder)
    st.forEach(set => {
      if (set[0] == data) {
        dataReturn = set[1]
      }
    });
    return dataReturn
  }
  let colorSet = ''
  Constants.STATUS_HANDLE.forEach(colr => {
    if (colr.value == statusChange) {
      colorSet = colr.color
    }
  });
  const valueChangeButton = (e) => {
    setstatusChange(e)
  }

  const handleChangeList = (newValue) => {
    if (newValue != -1) {
      setValue(Number(newValue));
      let params = { ...router.getAll() };
      params[Constants.ROUTER_URL.PAGE] = 1;
      params[Constants.QueryParam.Status.VALUE] = newValue;
      router.replace({
        params: params,
      });
    }
  };
  const TabScreen = [
    {
      id: Constants.TEXT_CANDIDATES_DETAIL.STATUS_DETAIL.VALUE,
      type: Constants.TEXT_CANDIDATES_DETAIL.STATUS_DETAIL.VALUE,
      text: Constants.TEXT_CANDIDATES_DETAIL.STATUS_DETAIL.NAME,
    },
    {
      id: Constants.TEXT_CANDIDATES_DETAIL.STATUS_ATTACH.VALUE,
      type: Constants.TEXT_CANDIDATES_DETAIL.STATUS_ATTACH.VALUE,
      text: Constants.TEXT_CANDIDATES_DETAIL.STATUS_ATTACH.NAME,
    },
  ]
  return (
    <>
      <div className={styles['recruitment__detail']} style={{ paddingBottom: '100px' }}>
        <ChangeStatusDetail marginTop={false} handleChangeList={handleChangeList} value={Number(10)} tabTable={TabScreen} 
        titleCheck='Trạng thái' itemCheck={itemCheck} statusId={item.Status} statusList={Status} id={CandidateId} valueChangeButton={valueChangeButton} />
        <CustomDetail title='Thông tin cá nhân' imageTag={item.Avatar}>
          <CustomFieldDetail textTitle='Họ và tên' valueForm={item.Name} />
          <CustomFieldDetail textTitle='Tình trạng hôn nhân' valueForm={item.MaritalStatus} />
          <CustomFieldDetail textTitle='Giới tính' valueForm={item.Gender} />
          <CustomFieldDetail textTitle='CMND/CCCD' valueForm={item.IDCard} />
          <CustomFieldDetail textTitle='Ngày sinh' valueForm={moment(item.Birthday).format('DD/MM/YYYY')} />
        </CustomDetail>
        <CustomDetail title='Thông tin liên hệ'>
          <CustomFieldDetail textTitle='Số điện thoại' valueForm={item.Phone} />
          <CustomFieldDetail textTitle='Mạng xã hội' valueForm={item.LinkFacebook} />
          <CustomFieldDetail textTitle='Email' valueForm={item.Email} />
        </CustomDetail>
        <CustomDetail title='Thông tin ứng tuyển'>
          <CustomFieldDetail textTitle='Mã ứng viên' valueForm={item.Code} />
          <CustomFieldDetail textTitle='Sẵn sàng đi công tác' valueForm={item.IsOnBusinessTrip ? "Có" : "Không"} />
          <CustomFieldDetail textTitle='Tuyển dụng' valueForm={setValueData(Recruiments, item.RecruitmentId)} />
          <CustomFieldDetail textTitle='Chiều cao' valueForm={item.Height} />
          <CustomFieldDetail textTitle='Khối ứng tuyển' valueForm={item.BlockName} />
          <CustomFieldDetail textTitle='Cân nặng' valueForm={item.Weight + "kg"} />
          <CustomFieldDetail textTitle='Vị trí tuyển' valueForm={item.PositionName} />
          <CustomFieldDetail textTitle='Nhân sự thu hút' valueForm={Employee} />
          <CustomFieldDetail textTitle='Chi nhánh ứng tuyển' valueForm={item.BranchName} />
          <CustomFieldDetail textTitle='Cộng tác viên' valueForm={Collaborator} />
          <CustomFieldDetail textTitle='Nguồn ứng tuyển' valueForm={item.TakeRecruitmentInfoBy} />
          <CustomFieldDetail textTitle='Trạng thái' valueForm={<span style={{ fontWeight: 700, color: colorSet }}>{setValueData(Status, statusChange)}</span>} />
        </CustomDetail>
        <CustomTableDetail table='table' title='Trình độ học vấn'>
          <CustomFieldTaleDetail setValueData={setValueData} School={ModeOfStudy} Type={Type} titleHead={['Trình độ học vấn', 'Hình thức đào tạo', 'Nơi đào tạo', 'Chuyên ngành']} textContent={item.CandidateEducations} />
        </CustomTableDetail>
        <CustomTableDetail table='table' title='Kinh nghiệm làm việc'>
          <CustomFieldTaleDetail titleHead={['Từ tháng', 'Đến tháng', 'Công ty', 'Vị trí']} expContent={item.CandidateExperiences} />
        </CustomTableDetail>
        <FooterManage titleBack={'Quay lại '} back={true}>
          <div className="d-flex justify-content-end align-items-center">
            <ButtonCommon
              // loading={isLoading}
              disabled={!canSubmit}
              className='mr-3'
              type='button' onClick={() => handleDeletePropose(item)}
              typeColor='border-red'>
              Xóa
            </ButtonCommon>
            <LoadingButton
              // loading={isLoading}
              disabled={!canSubmit}
              type='button' onClick={() => handleEdit()}>
              Sửa
            </LoadingButton>
          </div>
        </FooterManage>
      </div>
    </>
  )
}
export default CandidateDetail