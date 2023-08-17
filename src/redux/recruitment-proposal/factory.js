import ApiConstants from "adapter/ApiConstants";
import ApiOperation from "adapter/ApiOperation";
import Constants from "utils/Constants";
import Constant from "utils/Constants";
const AppFactory = {
  dataMasterPropose: () =>
    ApiOperation.request({
      url: ApiConstants.GET_PROPOSAL_MASTER,
      method: "GET",
    }),
  fetchProposeList: (data) => {
    let param = {};
    if (data[Constants.QueryParam.Limit.VALUE]) {
      param["PageSize"] = data[Constants.QueryParam.Limit.VALUE];
    } else {
      param["PageSize"] = Constants.PRODUCT_LIST_PAGINATION.LIMIT;
    }

    if (data[Constants.QueryParam.Page.VALUE]) {
      param["CurrentPage"] = data[Constants.QueryParam.Page.VALUE];
    }

    if (data[Constants.QueryParam.Positions.VALUE]) {
      param["Position"] = data[Constants.QueryParam.Positions.VALUE];
    }
    if (data[Constants.QueryParam.Status.VALUE]) {
      param["Status"] = data[Constants.QueryParam.Status.VALUE];
    }
    if (data[Constants.QueryParam.WorkType.VALUE]) {
      param["WorkType"] = data[Constants.QueryParam.WorkType.VALUE];
    }
    if (data[Constants.QueryParam.Search.VALUE]) {
      param["Search"] = data[Constants.QueryParam.Search.VALUE];
    }
    if (data[Constants.QueryParam.DateTo.VALUE]) {
      param["ExpirationDate"] = data[Constants.QueryParam.DateTo.VALUE];
    }
    return ApiOperation.request({
      url: ApiConstants.GET_RECRUITMENT_PROPOSAL,
      method: "GET",
      params: param,
    });
  },
  createProsose: (data) => {
    return ApiOperation.request({
      url: ApiConstants.CREATE_RECRUITMENT_PROPOSAL,
      method: "POST",
      data,
    });
  },
  changeStatusPropose: (data) => {
    return ApiOperation.request({
      url: ApiConstants.CHANGE_STATUS,
      method: "POST",
      data,
    });
  },
  updatePropose: (data) => {
    return ApiOperation.request({
      url: ApiConstants.UPDATE_RECRUITMENT_PROPOSAL,
      method: "PUT",
      data,
    });
  },
  requestProposeDetail: (payload) => {
    return ApiOperation.request({
      url: `${ApiConstants.GET_PROPOSAL_DETAIL}/${payload}`,
      method: "GET",
      data: payload,
    });
  },
  requestProposeMaster: (data) => {
    let param = {};
    if (data[Constants.QueryParam.Limit.VALUE]) {
      param["PageSize"] = data[Constant.QueryParam.Limit.VALUE];
    } else {
      param["PageSize"] = Constants.PRODUCT_LIST_PAGINATION.LIMIT;
    }

    return ApiOperation.request({
      url: ApiConstants.GET_PROPOSAL_MASTER,
      method: "GET",
      data: param,
    });
  },
  deletePro: (data) => {
    return ApiOperation.request({
      url: ApiConstants.DELETE_RECRUITMENT_PROPOSAL,
      method: "POST",
      data,
    });
  },
};
export default AppFactory;
