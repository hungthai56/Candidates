import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const AppFactory = {
    listGui: (data) =>
        ApiOperation.request({
            url: ApiConstants.GET_GUI,
            method: 'GET',
            params: data,
        }),
    GuiDetail: (data) => {
        return ApiOperation.request({
            url: `${ApiConstants.GET_GUI}/${data}`,
            method: 'GET'
        });
    },
    createGUI: (payload) => {
        const formData = new FormData();
        Object.keys(payload).forEach((key) => {
            if (typeof payload[key] == 'number') {
                formData.append(
                    `${key}`,
                    payload[key] || 0,
                );
            } else if (typeof payload[key] == 'boolean') {
                formData.append(
                    `${key}`,
                    payload[key],
                );
            } else {
                formData.append(
                    `${key}`,
                    payload[key] || '',
                );
            }

        });

        return ApiOperation.request({
            url: ApiConstants.CREATE_GUI,
            method: 'POST',
            data: formData,
        });
    },

    updateGui: (payload) => {
        const formData = new FormData();
        Object.keys(payload).forEach((key) => {
            if (typeof payload[key] == 'number') {
                formData.append(
                    `${key}`,
                    payload[key] || 0,
                );
            } else if (typeof payload[key] == 'boolean') {
                formData.append(
                    `${key}`,
                    payload[key],
                );
            } else {
                formData.append(
                    `${key}`,
                    payload[key] || '',
                );
            }

        });
        return ApiOperation.request({
            url: ApiConstants.CREATE_GUI,
            method: 'PUT',
            data: formData
        });
    },
    deleteGUI: (data) =>
        ApiOperation.request({
            url: ApiConstants.DELETE_GUI,
            method: 'DELETE',
            data: [data.toString()],
        }),
};

export default AppFactory;
