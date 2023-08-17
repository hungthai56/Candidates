import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';
import axios from 'axios';
import Constants from 'utils/Constants';

const Factories = {
    getHeadTable: async (payload) => {
        return ApiOperation.request({
            url: `${ApiConstants.TABLE}/sort-table/${payload}`,
            method: 'GET',
        });
    },
    updateHeadTable: async (payload) => {
        return ApiOperation.request({
            url: `${ApiConstants.TABLE}/update-sort-table`,
            method: 'POST',
            params: {
                Id: payload?.Id,
                OrderString: payload?.OrderString,
            }
        });
    },
}

export default Factories;
