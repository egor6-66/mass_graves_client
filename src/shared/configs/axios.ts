import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';



const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:5000/api',
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(async (config: any) => {

    return config;
});

axiosClient.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        // const originalRequest = error.config;
        // const currentTokens = tokensService.get();
        //
        // if (error.response.status === 401 && error.config && currentTokens && !error.config._isRetry) {
        //     error.config._isRetry = true;
        //     try {
        //         const additional = { grant_type: 'refresh_token', ...auth };
        //         const res: any = await axiosClient.post('api/v2/authorization/refresh', currentTokens);
        //         if (res.data.data) {
        //             const { access_token, refresh_token } = res.data.data;
        //             await tokensService.save({ access_token, refresh_token });
        //             return axiosClient.request(originalRequest);
        //         }
        //         await tokensService.remove();
        //         window.location.reload();
        //         return null;
        //     } catch (err) {
        //         await tokensService.remove();
        //         window.location.reload();
        //         return null;
        //     }
        // }

        return Promise.reject(error.response.data);
    }
);
export type { AxiosError };
export default axiosClient;
