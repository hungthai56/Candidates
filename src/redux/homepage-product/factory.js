/* eslint-disable radix */
import faker from '@faker-js/faker';
import ApiOperation from '../../adapter/ApiOperation';
import ApiConstants from '../../adapter/ApiConstants';

const factories = {
    fetchProduct: (data) => {
        let url = '';
        // eslint-disable-next-line valid-typeof
        if (data.Type === 'xu-huong' || data === '') {
            url = ApiConstants.TREND_PRODUCT;
        }
        if (data.Type === 'tim-kiem-hang-dau') {
            url = ApiConstants.TOP_PRODUCT;
        }
        if (data.Type === 'san-pham-moi') {
            url = ApiConstants.NEW_PRODUCT;
        }
        return ApiOperation.request({
            url,
            method: 'GET',
        });
    },

    updateProduct: (data, type) => {
        let url = '';
        if (type === 'xu-huong' || type === '') {
            url = ApiConstants.TREND_PRODUCT;
        }
        if (type === 'tim-kiem-hang-dau') {
            url = ApiConstants.TOP_PRODUCT;
        }
        if (type === 'san-pham-moi') {
            url = ApiConstants.NEW_PRODUCT;
        }
        return ApiOperation.request({
            url,
            method: 'PUT',
            data,
        });
    },

    // search value
    getListProductMore: (searchValue) => {
        const fakeDataFromApi = [];
        const getRandomNumberBetween = (min, max) =>
            Math.floor(Math.random() * (max - min + 1) + min);
        for (let i = 0; i < 10; i++) {
            fakeDataFromApi.push({
                codeSku: faker.finance.bic(),
                productName: faker.commerce.productName(),
                productDetail: faker.finance.iban(),
                productImage: 'https://picsum.photos/200/300',
                pageDisplay: getRandomNumberBetween(1, 3),
                status: getRandomNumberBetween(1, 3),
                productPage: getRandomNumberBetween(1, 3),
            });
        }
        return fakeDataFromApi;
    },

    getReferGender: (params) =>
        ApiOperation.request({
            url: ApiConstants.REFER_GENDER,
            method: 'GET',
            params,
        }),

    getProductFromSearch: (params) =>
        ApiOperation.request({
            url: ApiConstants.GET_SUGGEST_SEARCH_PRODUCT,
            method: 'GET',
            params: { ...params, IsSelectForHome: false },
        }),
};
export default factories;
