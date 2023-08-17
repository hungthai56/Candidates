
import AppConfig from 'utils/AppConfig'
const onRequest = (config) => {
    config.headers.Authorization = `Bearer ${AppConfig.ACCESS_TOKEN}`
    return config
}

const onRequestError = (error) => {
    Promise.reject(error)
}

const onResponse = (response) => response

const onResponseError = async (error) => {
    if (error.response) {
        // Access Token expired
        if (
            error.response.status === 401 &&
            error.response.data.message === 'jwt expired'
        ) {
            try {
                // const rs = await axios.post(
                //     `${BASE_URL}/${BASE_PREFIX}/auth/login/refresh-token`,
                //     {
                //         JwtToken: TokenService.getUser().Token,
                //         RefreshToken: TokenService.getUser().RefreshToken,
                //     },
                // )
                // console.log(rs.data)

                // const { token, user } = rs.data

                // localStorage.setItem('token', JSON.stringify(token))
                // localStorage.setItem('user', JSON.stringify(user))

                // return;
            } catch (_error) {
                return Promise.reject(_error)
            }
        }
    }
    return Promise.reject(error)
}

export const setupInterceptersTo = (axiosInstance) => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError)
    axiosInstance.interceptors.response.use(onResponse, onResponseError)
    return axiosInstance
}
