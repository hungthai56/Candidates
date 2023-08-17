import React, { useEffect, useState } from 'react';
import classes from "./CandidatesManager.module.scss";
import { styled } from '@mui/system';
import { Box } from '@findxdn/erp-theme';
import WrapLoading from 'shared/components/common/wrap-loading/WrapLoading';
import CustomSearch from "shared/components/candidates-manager/CustomSearch";
import Constants from '../../../utils/Constants';
import actionCandidate from '../../../redux/candidate-manager/action';
import { useDispatch, useSelector } from 'react-redux';
import EventRegister, { EVENT_SHOW_POPUP } from 'utils/EventRegister';
import CustomPagination from 'shared/components/common/pagination/custom-pagination';
import useRouterV2 from 'hooks/use-router-v2';
import CustomTable from 'shared/components/common/custom-table/CustomTable';
import ActionDelete from 'shared/components/common/table/HeaderTable/ActionDelete';
import PopupName from 'shared/components/common/popup/PopupName';
import ConfigButton from 'shared/components/common/config-button/ConfigButton';
import IcEdit from 'assets/icon/IcEdit';
import Permission from 'utils/Permission';
import { useHistory } from 'react-router';
import ProductTableLoader from '../../components/common/loading-skeleton/product-table-loader/ProductTableLoader';
import IcRemove from 'assets/icon/IcRemove';
import TabTable from 'shared/components/common/tab-table/TabTable';
import RouterPath from "router/RouterPath";
import Kanban from "shared/components/candidates-manager/Kanban"
import BoxCommon from 'shared/components/common/box/BoxV2';

const BannerWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});
const PaginationWrapper = styled('div')({
  padding: '0 10px',
  backgroundColor: 'white',
  borderRadius: ' 3px',
});
function CandidatesManager() {
  const router = useRouterV2();
  const dispatch = useDispatch()
  const history = useHistory();
  let [headCellsCandidate, setHeadCellsData] = useState([]);
  let [select, setSelect] = useState([]);
  const NameTable = Constants.TABLE_SCREEN.CANDIDATES.VALUE;
  const [value, setValue] = React.useState(0);
  const SettingTable = useSelector(state => state.TableConfig);
  useEffect(() => {
    if (SettingTable?.template) {
      let data = SettingTable?.template?.find(x => x?.Key == NameTable);
      if (data) {
        let actionCandidate = [...data.HeadCell];
        setHeadCellsData(actionCandidate);
      }

    }
  }, [SettingTable])

  useEffect(() => {
    dispatch({
      type: actionCandidate.FETCH_CANDIDATES_MASTER,
      payload: {},
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: actionCandidate.FETCH_CANDIDATES_LIST,
      payload: { ...router.getAll() },
    });
  }, [
    router.get(Constants.QueryParam.Search.VALUE),
    router.get(Constants.QueryParam.Limit.VALUE),
    router.get(Constants.QueryParam.Offset.VALUE),
    router.get(Constants.QueryParam.Page.VALUE),
    router.get(Constants.QueryParam.DateTo.VALUE),
    router.get(Constants.QueryParam.Status.VALUE),
    router.get(Constants.QueryParam.RecruitmentId.VALUE),
  ]);

  const { Status, Recruiments, listCandidate, isLoading, WorkTypes, paging, ListCountCandidateStatus, CandidateEducations } = useSelector(
    (state) => state.AppCandidates, WorkTypes
  );
  const handleClickDetail = (event, value) => {
    history.push(RouterPath.getRouteWithId(RouterPath.CANDIDATE_DETAILS, value?.CandidateId));
  };
  const handleDeleteAll = () => {
    const message = "Bạn có chắn chắc xoá dữ liệu này không ?";
    EventRegister.emit(EVENT_SHOW_POPUP, {
      type: PopupName.DELETE_POPUP,
      open: true,
      payload: {
        data: {
          Id: select?.join(",")
        },
        message,
        handleSave: () => {
          const callback = () => {
            setSelect([]);
            dispatch({
              type: actionCandidate.FETCH_CANDIDATES_LIST,
              payload: { ...router.getAll() },
            });
          };
          dispatch({
            type: actionCandidate.DELETE_CANDIDATES,
            payload: { callback, data: select?.map(x => x) },
          });
        },
      },
    });
  }

  const TabScreen = [
    {
      id: Constants.TEXT_CANDIDATES.ALL.VALUE,
      type: Constants.TEXT_CANDIDATES.ALL.VALUE,
      text: Constants.TEXT_CANDIDATES.ALL.NAME,
      number: ListCountCandidateStatus.All
    },
    {
      id: Constants.TEXT_CANDIDATES.STATUS_RECRUITMENT.VALUE,
      type: Constants.TEXT_CANDIDATES.STATUS_RECRUITMENT.VALUE,
      text: Constants.TEXT_CANDIDATES.STATUS_RECRUITMENT.NAME,
      number: ListCountCandidateStatus.Recruitment
    },
    {
      id: Constants.TEXT_CANDIDATES.STATUS_PREQUALIFICATION.VALUE,
      type: Constants.TEXT_CANDIDATES.STATUS_PREQUALIFICATION.VALUE,
      text: Constants.TEXT_CANDIDATES.STATUS_PREQUALIFICATION.NAME,
      number: ListCountCandidateStatus.Prequalification
    },
    {
      id: Constants.TEXT_CANDIDATES.STATUS_INTERVIEW.VALUE,
      type: Constants.TEXT_CANDIDATES.STATUS_INTERVIEW.VALUE,
      text: Constants.TEXT_CANDIDATES.STATUS_INTERVIEW.NAME,
      number: ListCountCandidateStatus.Interview
    },
    {
      id: Constants.TEXT_CANDIDATES.STATUS_REFUSE.VALUE,
      type: Constants.TEXT_CANDIDATES.STATUS_REFUSE.VALUE,
      text: Constants.TEXT_CANDIDATES.STATUS_REFUSE.NAME,
      number: ListCountCandidateStatus.Refuse
    },
    {
      id: Constants.TEXT_CANDIDATES.STATUS_ELECT.VALUE,
      type: Constants.TEXT_CANDIDATES.STATUS_ELECT.VALUE,
      text: Constants.TEXT_CANDIDATES.STATUS_ELECT.NAME,
      number: ListCountCandidateStatus.Elect
    },
    {
      id: Constants.TEXT_CANDIDATES.STATUS_WAIT_JOB.VALUE,
      type: Constants.TEXT_CANDIDATES.STATUS_WAIT_JOB.VALUE,
      text: Constants.TEXT_CANDIDATES.STATUS_WAIT_JOB.NAME,
      number: ListCountCandidateStatus.WaitJob
    },
  ];
  useEffect(() => {
    if (SettingTable) {
      let data = SettingTable.template[1].HeadCell;
      if (data) {
        let actionArr = [...data];
        actionArr.push({
          id: 'Action',
          numeric: '2',
          disablePadding: false,
          label: 'Tác vụ',
          minWidth: 80,
          code: '10',
          field: 'Edit',
          align: 'center',
          sort: false,
          cursorPointer: true,
          component: (props) => {
            let menuAction = [];
            menuAction.push({
              title: <span style={{ color: '#138300' }}>Sửa</span>,
              icon: <IcEdit />,
              onClick: () => {
                handleClickEdit(props?.data);
              },
              isDisabled: !Permission.IsEnabledFunction(Permission.FUNCTIONS.UPDATE_BANNER),
            },)
            menuAction.push({
              title: <span style={{ color: '#FF3434' }}>Xoá</span>,
              icon: <IcRemove />,
              onClick: () => {
                handleDeletePropose(props?.data);
              },
              isDisabled: !Permission.IsEnabledFunction(Permission.FUNCTIONS.DELETE_PROPOSE),
            })
            return (
              <ConfigButton menuList={menuAction} />
            );
          },
        });
        setHeadCellsData(actionArr);
      }
    }
  }, [SettingTable])
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
              dispatch({
                type: actionCandidate.FETCH_CANDIDATES_LIST,
                payload: { ...router.getAll() },
              });
            };
            dispatch({
              type: actionCandidate.DELETE_CANDIDATES,
              payload: { callback, data: [data?.CandidateId] },
              callback: {
                failed: () => {
                  _props?.closeLoading()
                }
              }
            });
          }
        }
      },
    });
  }
  const handleClickEdit = (data) => {
    history.push(RouterPath.getRouteWithId(RouterPath.UPDATE_CANDIDATES, data?.CandidateId));
  }

  const handleChange = (newValue) => {
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
  return (
    <BannerWrapper>
      <TabTable
        marginTop={false}
        handleChange={handleChange}
        value={Number(value)}
        tabTable={TabScreen}
        showQuantity={5}
      />
      <Box>
        <CustomSearch
          NameTable={NameTable}
          Status={Status}
          Recruiments={Recruiments}
        />
      </Box>
      <WrapLoading Loader={() => { return <ProductTableLoader /> }}
        loading={isLoading && listCandidate?.length == 0}>
        <Box style={{ pagingTop: "10px" }}>
          <Kanban title="Danh sách hồ sơ ứng viên" />
          <CustomTable
            headerColumn={headCellsCandidate}
            data={listCandidate ?? []}
            isShowCheckBox
            selectedCheckBox={select}
            handleOnCheckBox={(data) => {
              setSelect(data)
            }}
            componentHeadCell={<div style={{
              pointerEvents: 'fill',
              cursor: 'pointer'
            }}>
              <ActionDelete onClick={handleDeleteAll} />
            </div>}
            rowHeight={50}
            onClickRow={handleClickDetail}
          />
        </Box>
      </WrapLoading>
      <PaginationWrapper>
        <CustomPagination
          Total={paging?.TotalRecord}
        // handleSearch={handleSearch}
        // pagePagination={pagePagination}
        // offsetPagination={offsetPagination}
        />
      </PaginationWrapper>
    </BannerWrapper>
  )
}
export default CandidatesManager