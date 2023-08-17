import ApiConstants from 'adapter/ApiConstants';
import ApiOperation from 'adapter/ApiOperation';

const factories = {
    requestSignIn: (data) =>
        ApiOperation.request({
            url: ApiConstants.LOGIN,
            method: 'POST',
            data: data
        })
}

export default factories
