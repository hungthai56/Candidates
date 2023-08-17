import moment from "moment";
import ReadMoreContent from "shared/components/common/read-more-content/ReadMoreContent";
import Constants from "utils/Constants";
import Utils from "utils/Utils";
import WaringPost from "shared/components/social/WaringPost/WaringPost";
import CodeTextLink from "shared/components/common/label/CodeTextLink";
import RouterPath from "router/RouterPath";
import ButtonDropdown from "shared/components/commonV2/buttondropdown/ButtonDropdown";
import IconDropdown from "assets/images/icons/ic-dropdownn";
import styles from "./HeadCell.module.scss";
import { useDispatch } from "react-redux";
import action from "redux/recruitment-proposal/action";
import useRouterV2 from "hooks/use-router-v2";
import ButtonDropdownV2 from "shared/components/commonV2/buttondropdown/ButtonDropdownV2";

const getStatusText = (status) => {
  if (status === Constants.TEXT_STATUS.STATUS_WAIT_APPROVE.VALUE) {
    return Constants.TEXT_STATUS.STATUS_WAIT_APPROVE.NAME;
  } else if (status === Constants.TEXT_STATUS.STATUS_APPROVE.VALUE) {
    return Constants.TEXT_STATUS.STATUS_APPROVE.NAME;
  } else if (status === Constants.TEXT_STATUS.STATUS_NOT_APPROVE.VALUE) {
    return Constants.TEXT_STATUS.STATUS_NOT_APPROVE.NAME;
  }
};
export const HeadCellPost = [
  {
    id: "CreatedByName",
    numeric: "1",
    disablePadding: false,
    label: "Người tạo",
    minWidth: 100,
    code: "1",
    field: "CreatedByName",
    type: Constants.TYPE_RENDER_TABLE.TEXT,
    align: "left",
    sort: false,
  },
  {
    id: "Code",
    numeric: "1",
    disablePadding: false,
    minWidth: 190,
    label: "Mã đề xuất",
    code: "2",
    field: "Code",
    type: Constants.TYPE_RENDER_TABLE.TEXT,
    align: "left",
    sort: false,
    component: (props) => {
      return (
        <CodeTextLink
          path={RouterPath.RECRUITMENT_PROPOSAL_DETAIL}
          Id={props.data?.Id}
          {...props}
        />
      );
    },
    unEnabled: true,
    isOnclick: true,
  },
  {
    id: "Title",
    numeric: "1",
    disablePadding: false,
    minWidth: 250,
    label: "Tên đề xuất",
    code: "3",
    field: "Title",
    type: Constants.TYPE_RENDER_TABLE.TEXT,
    align: "left",
    sort: false,
  },
  {
    id: "Status",
    numeric: "1",
    disablePadding: false,
    label: "Trạng thái",
    minWidth: 150,
    code: "4",
    field: "Status",
    type: Constants.TYPE_RENDER_TABLE.CHOOSE,
    align: "center",
    component: (props, text, record, index) => {
      let backgroundColor;
      let Options = [];
      if (
        props.data.Status === Constants.TEXT_STATUS.STATUS_WAIT_APPROVE.VALUE
      ) {
        backgroundColor = "#FF8246";
        Options = [
          {
            value: Constants.TEXT_STATUS.STATUS_APPROVE.VALUE,
            label: "Duyệt",
          },
          {
            value: Constants.TEXT_STATUS.STATUS_NOT_APPROVE.VALUE,
            label: Constants.TEXT_STATUS.STATUS_NOT_APPROVE.NAME,
          },
        ];
      } else if (
        props.data.Status === Constants.TEXT_STATUS.STATUS_APPROVE.VALUE
      ) {
        backgroundColor = "#008A5A";
      } else if (
        props.data.Status === Constants.TEXT_STATUS.STATUS_NOT_APPROVE.VALUE
      ) {
        backgroundColor = "#D72F2F";
        Options = [
          {
            value: Constants.TEXT_STATUS.STATUS_WAIT_APPROVE.VALUE,
            label: "Hoàn duyệt",
          },
        ];
      }
      const dispatch = useDispatch();
      const router = useRouterV2();
      const onchangeStatus = (e, data) => {
        let params = {
          Id: Number(data.Id),
          Status: String(e),
        };
        dispatch({
          type: action.CHANGE_STATUS_PROPOSE,
          payload: params,
          callback: () => {
            dispatch({
              type: action.FETCH_PROPOSED_LOCATION_LIST,
              payload: { ...router.getAll() },
            });
          },
        });
      };

      return (
        <ButtonDropdownV2
          disable={
            props.data.Status === Constants.TEXT_STATUS.STATUS_APPROVE.VALUE
              ? true
              : false
          }
          className={`${styles["_select_input"]} ${styles["inputs_item"]}`}
          placeholder={"Trạng thái "}
          id="status"
          name="status"
          Options={Options}
          onChange={(e) => {
            onchangeStatus(e, props.data);
          }}
          value={props.data.Status}
          style={{
            backgroundColor: backgroundColor,
          }}
          icon={<IconDropdown />}
          isHover={false}
        >
          <button className={`${styles["reset_btn"]}`}>
            {getStatusText(props.data.Status)}
          </button>
        </ButtonDropdownV2>
      );
    },
    sort: false,
  },
  {
    id: "Position",
    numeric: "1",
    disablePadding: false,
    minWidth: 250,
    label: "Vị trí đề xuất",
    code: "4",
    field: "Position",
    type: Constants.TYPE_RENDER_TABLE.TEXT,
    align: "left",
    component: (props) => {
      return <>{Utils.ConvertTypePosition(props.children)}</>;
    },
    sort: false,
  },
  {
    id: "WorkType",
    numeric: "1",
    disablePadding: false,
    minWidth: 140,
    label: "Hình thức",
    code: "5",
    field: "WorkType",
    type: Constants.TYPE_RENDER_TABLE.TEXT,
    component: (props) => {
      return <>{Utils.ConvertTypeWorkType(props.children)}</>;
    },
    align: "left",
    sort: false,
  },

  {
    id: "DateTo",
    numeric: "1",
    disablePadding: false,
    label: "Hạn tuyển",
    minWidth: 100,
    code: "6",
    field: "DateTo",
    type: Constants.TYPE_RENDER_TABLE.DATE,
    align: "center",
    component: (props) => {
      return <>{moment(props.children).format("DD/MM/YYYY")}</>;
    },
    sort: false,
  },

  {
    id: "WorkQuantityType",
    numeric: "1",
    disablePadding: false,
    minWidth: 100,
    label: "Số lượng",
    code: "7",
    field: "Quantity",
    type: Constants.TYPE_RENDER_TABLE.TEXT,
    align: "right",
    sort: false,
  },
];
