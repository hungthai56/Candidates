import axios from 'axios';
import ApiOperation from './../../adapter/ApiOperation';
import ApiConstants from './../../adapter/ApiConstants';

const url = process.env.REACT_APP_API_URL;
const factories = {
    requestUser: (data, token) => {
        return ApiOperation.request({
            url: ApiConstants.GET_USER,
            method: 'GET',
        });
    },
    requestLogoutUser: () => {
        return ApiOperation.request({
            url: ApiConstants.LOGOUT,
            method: 'GET',
        });
    },
};

export default factories;
