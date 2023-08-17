import ApiOperation from '../../adapter/ApiOperation';
import ApiConstants from '../../adapter/ApiConstants';

const factories = {
    fetchProduct: (data) => {

        return ApiOperation.request({
            url: ApiConstants.GET_MENU,
            method: 'GET',
            params: data,
        });
    },
    getMaster: () => {

        return ApiOperation.request({
            url: 'wa/menu-home/data/master',
            method: 'GET',
        });
    },
    getMasterProduct: () => {

        return ApiOperation.request({
            url: 'prd/products-management/data/master',
            method: 'GET',
        });
    },
    updateMenu: (payload) => {
        const formData = new FormData();
        payload?.forEach((item, index) => {
            Object.keys(item).forEach((key) => {
                // if (typeof item[key] != 'number' || typeof item[key] != 'boolean') {
                //     formData.append(
                //         `[${index}].${key}`,
                //         item[key] || '',
                //     );
                // }
                if (typeof item[key] == 'number') {
                    formData.append(
                        `[${index}].${key}`,
                        item[key] || 0,
                    );
                } else if (typeof item[key] == 'boolean') {
                    formData.append(
                        `[${index}].${key}`,
                        item[key],
                    );
                } else {
                    formData.append(
                        `[${index}].${key}`,
                        item[key] || '',
                    );
                }

            });
        });
        return ApiOperation.request({
            url: 'wa/menu-home',
            method: 'POST',
            data: formData
        });
    },


};
export default factories;
