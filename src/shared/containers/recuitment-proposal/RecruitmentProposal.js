import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { Box } from "@findxdn/erp-theme";
import WrapLoading from "shared/components/common/wrap-loading/WrapLoading";
import BoxCommon from "shared/components/common/box/BoxV2";
import CustomSearch from "shared/components/recruitment-proposal/CustomSearch";
import Constants from "../../../utils/Constants";
import action from "./../../../redux/recruitment-proposal/action";
import { useDispatch, useSelector } from "react-redux";
import EventRegister, { EVENT_SHOW_POPUP } from "utils/EventRegister";
import CustomPagination from "shared/components/common/pagination/custom-pagination";
import useRouterV2 from "hooks/use-router-v2";
import CustomTable from "shared/components/common/custom-table/CustomTable";
import ActionDelete from "shared/components/common/table/HeaderTable/ActionDelete";
import PopupName from "shared/components/common/popup/PopupName";
import ConfigButton from "shared/components/common/config-button/ConfigButton";
import IcEdit from "assets/icon/IcEdit";
import Permission from "utils/Permission";
import { useHistory } from "react-router";
import ProductTableLoader from "../../components/common/loading-skeleton/product-table-loader/ProductTableLoader";
import Constant from "utils/Constants";
import moment from "moment";
import IcRemove from "assets/icon/IcRemove";
import RouterPath from "router/RouterPath";
import CustomTableV2 from "shared/components/common/custom-table/CustomTableV2";

const BannerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});
const PaginationWrapper = styled("div")({
  padding: "0 10px",
  backgroundColor: "white",
  borderRadius: " 3px",
});
function RecruitmentProposal() {
  const router = useRouterV2();
  const dispatch = useDispatch();
  const history = useHistory();
  let [headCellsData, setHeadCellsData] = useState([]);
  let [select, setSelect] = useState([]);

  const NameTable = Constants.TABLE_SCREEN.POST.VALUE;

  const SettingTable = useSelector((state) => state.TableConfig);
  useEffect(() => {
    if (SettingTable?.template) {
      let data = SettingTable?.template?.find((x) => x?.Key == NameTable);
      if (data) {
        let actionArr = [...data.HeadCell];
        setHeadCellsData(actionArr);
      }
    }
  }, [SettingTable]);
  useEffect(() => {
    dispatch({
      type: action.FETCH_PROPOSED_MASTER,
      payload: {},
    });
  }, []);
  useEffect(() => {
    dispatch({
      type: action.FETCH_PROPOSED_LOCATION_LIST,
      payload: { ...router.getAll() },
    });
  }, [
    router.get(Constants.QueryParam.Status.VALUE),
    router.get(Constants.QueryParam.Search.VALUE),
    router.get(Constants.QueryParam.Positions.VALUE),
    router.get(Constants.QueryParam.WorkType.VALUE),
    router.get(Constants.QueryParam.Limit.VALUE),
    router.get(Constants.QueryParam.Offset.VALUE),
    router.get(Constants.QueryParam.Page.VALUE),
    router.get(Constants.QueryParam.DateTo.VALUE),
  ]);

  const {
    Positions,
    Provinces,
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
  const handleClickDetail = (event, value) => {
    history.push(
      RouterPath.getRouteWithId(
        RouterPath.RECRUITMENT_PROPOSAL_DETAIL,
        value?.Id
      )
    );
  };
  const handleDeleteAll = () => {
    const message = "Bạn có chắn chắc xoá dữ liệu này không ?";
    EventRegister.emit(EVENT_SHOW_POPUP, {
      type: PopupName.DELETE_POPUP,
      open: true,
      payload: {
        data: {
          Id: select?.join(","),
        },
        message,
        handleSave: () => {
          const callback = () => {
            setSelect([]);
            dispatch({
              type: action.FETCH_PROPOSED_LOCATION_LIST,
              payload: { ...router.getAll() },
            });
          };
          dispatch({
            type: action.DELETE_PROPOSED_LOCATION,
            payload: { callback, data: select?.map((x) => x) },
          });
        },
      },
    });
  };

  useEffect(() => {
    if (SettingTable) {
      let data = SettingTable.template[0].HeadCell;
      // let data = SettingTable;
      if (data) {
        let actionArr = [...data];
        actionArr.push({
          id: "Action",
          numeric: "2",
          disablePadding: false,
          label: "Tác vụ",
          minWidth: 80,
          code: "10",
          field: "Edit",
          align: "center",
          sort: false,
          cursorPointer: true,
          component: (props) => {
            let menuAction = [];

            menuAction.push({
              title: <span style={{ color: "#138300" }}>Sửa</span>,
              icon: <IcEdit />,
              onClick: () => {
                handleClickEdit(props?.data);
              },
              isDisabled:
                props?.data?.Status !==
                Constants.STATUS_POST.STATUS_WAIT_APPROVE,
            });
            menuAction.push({
              title: <span style={{ color: "#FF3434" }}>Xoá</span>,
              icon: <IcRemove />,
              onClick: () => {
                handleDeletePropose(props?.data);
              },
              isDisabled:
                props?.data?.Status !==
                Constants.STATUS_POST.STATUS_WAIT_APPROVE,
            });

            return <ConfigButton menuList={menuAction} />;
          },
        });
        setHeadCellsData(actionArr);
      }
    }
  }, [SettingTable]);
  const handleDeletePropose = (data) => {
    const message = "Bạn có chắc chắn muốn xoá dữ liệu này không ?";
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
              _props?.closeLoading();
              dispatch({
                type: action.FETCH_PROPOSED_LOCATION_LIST,
                payload: { ...router.getAll() },
              });
            };
            dispatch({
              type: action.DELETE_PROPOSED_LOCATION,
              payload: { callback, data: [data?.Id] },
              callback: {
                failed: () => {
                  _props?.closeLoading();
                },
              },
            });
          },
        },
      },
    });
  };
  const handleClickEdit = (data) => {
    history.push(
      RouterPath.getRouteWithId(RouterPath.UPDATE_PROPOSAL, data?.Id)
    );
  };
  return (
    <BannerWrapper>
      <Box>
        <CustomSearch
          NameTable={NameTable}
          Positions={Positions}
          Provinces={Provinces}
          Status={Status}
          WorkType={WorkType}
        />
      </Box>
      <WrapLoading
        Loader={() => {
          return <ProductTableLoader />;
        }}
        loading={isLoading && listProposal?.length == 0}
      >
        <Box>
          <CustomTableV2
            headerColumn={headCellsData}
            data={listProposal ?? []}
            isShowCheckBox
            selectedCheckBox={select}
            handleOnCheckBox={(data) => {
              setSelect(data);
            }}
            componentHeadCell={
              <div
                style={{
                  pointerEvents: "fill",
                  cursor: "pointer",
                }}
              >
                <ActionDelete onClick={handleDeleteAll} />
              </div>
            }
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
  );
}
export default RecruitmentProposal;
