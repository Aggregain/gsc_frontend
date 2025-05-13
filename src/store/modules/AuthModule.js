import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    credentials: {
        access_token: localStorage.getItem('access_token') || null,
        refresh_token: localStorage.getItem('refresh_token') || null,
        is_staff: localStorage.getItem('is_staff') || null,
    },
    authForm: {},
    loading: false
};

const mutations = {
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_TOKENS(state, data) {
        state.credentials.access_token = data.access;
        state.credentials.refresh_token = data.refresh;
        state.credentials.is_staff = data.is_staff;
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('is_staff', data.is_staff);
    },
    DELETE_TOKENS(state) {
        state.credentials.access_token = null;
        state.credentials.refresh_token = null;
        state.credentials.is_staff = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('is_staff');
    }
};

const actions = {
    async ON_LOGIN({ state, commit }) {
        commit("SET_LOADING", true);
        try {
            const response = await DefaultAPIInstance({ url: "/accounts/token/", method: "POST", data: state.authForm });
            ElNotification({
                title: "Успех",
                message: "Данные обновлены!",
                type: "success"
            });

            return { success: true, data: response.data };
        } catch (error) {
            console.log('Auth Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при отправке.",
                type: "error"
            });

            return { success: false, error };
        } finally {
            commit("SET_LOADING", false);
        }
    },
    async ON_REGISTER({ state, commit }) {
        commit("SET_LOADING", true);
        try {
            const response = await DefaultAPIInstance({ url: "/accounts/register/", method: "POST", data: state.authForm });
            ElNotification({
                title: "Успех",
                message: "Данные обновлены!",
                type: "success"
            });

            return { success: true, data: response.data };
        } catch (error) {
            console.log('Auth Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при отправке.",
                type: "error"
            });

            return { success: false, error };
        } finally {
            commit("SET_LOADING", false);
        }
    },
    async ON_LOGOUT({ commit }) {
        commit("DELETE_TOKENS");
        delete DefaultAPIInstance.defaults.headers['authorization'];
        window.location = '/login';
    }
};

const getters = {
    authForm: (state) => state.authForm,
    isStaff: (state) => state.credentials.is_staff,
    isLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
