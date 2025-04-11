import {DefaultAPIInstance, LoginAPIInstance} from "@/plugins/axios";
export const ON_LOGIN = "ON_LOGIN";
export const ON_GOOGLE_OAUTH = "ON_GOOGLE_OAUTH";
export const ON_WALLET_AUTH = "ON_WALLET_AUTH";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const ON_REGISTER = "ON_REGISTER";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const SET_PASSWORD = "SET_PASSWORD";
export const ON_LOGOUT = "ON_LOGOUT";
export const GET_USER_INFO = "GET_USER_INFO";
export const SET_TOKEN = "SET_TOKEN";
export const SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const TOKEN_VERIFICATION = "TOKEN_VERIFICATION";

const state = {
    credentials: {
        token: localStorage.getItem('token') || null,
        refresh_token: localStorage.getItem('refresh_token') || null,
    },
    auth_user_info:'',
}

const actions = {
    [ON_LOGIN]: async (store, form) => {
        const { data }  = await LoginAPIInstance({url:'/auth/token/',method:'POST', data:form});
        return data;
    },
    [ON_GOOGLE_OAUTH]: async (store, form) => {
        const { data }  = await LoginAPIInstance({url:'/social_auth/google/',method:'POST', data:form});
        return data;
    },
    [ON_WALLET_AUTH]: async (store, form) => {
        const { data }  = await LoginAPIInstance({url:'/wallet_auth/login/',method:'POST', data:form});
        return data;
    },
    [REFRESH_TOKEN]: async (store, refresh_token) => {
        const { data }  = await LoginAPIInstance({url:'/auth/token/refresh/',method:'POST', data: {"refresh":refresh_token}});
        return data;
    },
    [GET_USER_INFO]:async (store)=>{
        const { data }  = await DefaultAPIInstance({url:'/users/user/info/',method:'GET'});
        store.commit('SET_USER_DETAILS',data)
    },
    [TOKEN_VERIFICATION]:async (store, token)=>{
        const { data }  = await LoginAPIInstance({url:'/auth/confirm_email/?token='+token,method:'GET'});
        return data;
    },
    [ON_REGISTER]:async (store, form)=>{
        const { data }  = await LoginAPIInstance({url:'/auth/register/',method:'POST', data:form});
        return data;
    },
    [FORGOT_PASSWORD]:async (store, form)=>{
        const { data }  = await LoginAPIInstance({url:'/auth/reset_password/',method:'POST', data:form});
        return data;
    },
    [CHANGE_PASSWORD]:async (store, form)=>{
        const { data }  = await DefaultAPIInstance({url:'/user/change-password/',method:'POST', data:form});
        return data;
    },
    [SET_PASSWORD]:async (store, form)=>{
        const { data }  = await LoginAPIInstance({url:'/auth/set_password/',method:'POST', data:form});
        return data;
    },
    [ON_LOGOUT]: async (store) => {
        store.commit(DELETE_TOKEN);
        delete DefaultAPIInstance.defaults.headers['authorization'];
        // router.push({name: 'Login'});
        window.location = '/';
    }
}

const mutations = {
    [SET_TOKEN](state, token) {
        state.credentials.token = token;
        localStorage.setItem('token', token);
    },
    [SET_REFRESH_TOKEN]: (state, token) => {
        state.credentials.refresh_token = token;
        localStorage.setItem('refresh_token', token);
    },
    [SET_USER_DETAILS]: (state, userDetails) => {
        state.auth_user_info = userDetails
    },
    [DELETE_TOKEN]: (state) => {
        state.credentials.token = null;
        localStorage.removeItem('token');
        state.credentials.refresh_token = null;
        localStorage.removeItem('refresh_token');
    }
}

const getters = {
    get_user_info: (state) => state.auth_user_info,
}
export default {
    state,
    actions,
    mutations,
    getters
}
