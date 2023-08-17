import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';
import Constants from 'utils/Constants';

const AppFactory = {
    dataMasterBanner: () =>
        ApiOperation.request({
            url: ApiConstants.GET_BANNER_MASTER,
            method: 'GET',
        }),
    fetchBannerList: (data) =>{
        let param = {};
        if (data[Constants.QueryParam.Limit.VALUE]) {
            param['PageSize'] = data[Constants.QueryParam.Limit.VALUE];
        } else {
            param['PageSize'] = Constants.PRODUCT_LIST_PAGINATION.LIMIT;
        }
        if (
            data[Constants.QueryParam.Page.VALUE] &&
            data[Constants.QueryParam.Page.VALUE] != -1
        ) {
            param['CurrentPage'] = data[Constants.QueryParam.Page.VALUE];
        } else {
            param['CurrentPage'] = Constants.PRODUCT_LIST_PAGINATION.OFFSET;
        }

        if (
            data[Constants.QueryParam.Position.VALUE]
        ) {
            param['Position'] = data[Constants.QueryParam.Position.VALUE];
        } 

        if (
            data[Constants.QueryParam.Status.VALUE]
        ) {
            param['Status'] = data[Constants.QueryParam.Status.VALUE];
        } 

        if (
            data[Constants.QueryParam.Gender.VALUE]
        ) {
            if(data[Constants.QueryParam.Gender.VALUE] == "100"){
                param['Gender'] = '0'
            }else{
                param['Gender'] = data[Constants.QueryParam.Gender.VALUE];
            }
        } 
        if (
            data[Constants.QueryParam.ShowIn.VALUE]
        ) {
            if(data[Constants.QueryParam.ShowIn.VALUE] == Constants.BANNER_SHOW.ALL.VALUE){
                // param['ShowIn'] = '0'
            }else{
                param['ShowIn'] = data[Constants.QueryParam.ShowIn.VALUE];
            }
        } 
        if (
            data[Constants.QueryParam.Code.VALUE]
        ) {
            param['Code'] = data[Constants.QueryParam.Code.VALUE];
        } 
        return ApiOperation.request({
            url: ApiConstants.GET_BANNER,
            method: 'GET',
            params: param,
        })
    },
    createBanner: (data) =>
        ApiOperation.request({
            url: ApiConstants.CREATE_BANNER,
            method: 'POST',
            data,
        }),
    deleteBanner: (data) =>
        ApiOperation.request({
            url: ApiConstants.DELETE_BANNER,
            method: 'DELETE',
            data: [...data],
        }),
    updateBanner: (data) =>
        ApiOperation.request({
            url: ApiConstants.UPDATE_BANNER,
            method: 'PUT',
            data,
        }),
};

export default AppFactory;
