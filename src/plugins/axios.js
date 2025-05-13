import axios from 'axios';

const BASE_URL = process.env.VUE_APP_BACKEND_API;

const loginConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
};
export const LoginAPIInstance = axios.create(loginConfig);

const defaultConfig = {
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
};
export const DefaultAPIInstance = axios.create(defaultConfig);

DefaultAPIInstance.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('access_token')
        if (accessToken) {
            // eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config
    },
    error => Promise.reject(error),
)

DefaultAPIInstance.interceptors.response.use(
    response => response,
    async error => {
        const originalConfig = error.config;
        if (error.response) {

            if(error.response.status === 401 && !originalConfig._retry){
                originalConfig._retry = true;
                try {
                  const refreshToken = localStorage.getItem('refresh_token');
                  const rs = await LoginAPIInstance.post("/accounts/token/refresh/", {"refresh":refreshToken});
                  localStorage.setItem('access_token', rs.data.access);
                  localStorage.setItem('refresh_token', rs.data.refresh);
                  localStorage.setItem('is_staff', rs.data.is_staff);
                  return DefaultAPIInstance(originalConfig);
                } catch (_error) {
                  localStorage.removeItem('access_token');
                  localStorage.removeItem('refresh_token');
                  localStorage.removeItem('is_staff');
                  delete DefaultAPIInstance.defaults.headers['authorization'];
                  console.log(_error);
                  window.location = '/login';
                  // return Promise.reject(_error);
                }
            }

        }
        return Promise.reject(error);
    }
)
