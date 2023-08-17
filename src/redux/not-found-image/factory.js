import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';
import Constants from 'utils/Constants';

const AppFactory = {
    fetchNotFoundImageList: (data) => {
        return ApiOperation.request({
            url: ApiConstants.GET_NOT_FOUND_IMAGE,
            method: 'GET',
        });
    },
    updateNotFoundImage: async (data) => {
        const formData = new FormData();
        data.forEach((item, index) => {
            // Object.entries(item).forEach(([key, value]) => {
            //     formData.append(`data[${index}].${key}`, value);
            // });
            Object.keys(item).forEach((key) => {
                if (typeof item[key] == 'number') {
                    formData.append(`data[${index}].${key}`, item[key] || 0);
                } else if (typeof item[key] == 'boolean') {
                    formData.append(`data[${index}].${key}`, item[key]);
                } else {
                    formData.append(`data[${index}].${key}`, item[key] || '');
                }
            });
        });
        return ApiOperation.request({
            url: ApiConstants.UPDATE_NOT_FOUND_IMAGE,
            method: 'PUT',
            data: formData,
        });
    },
};

export default AppFactory;
