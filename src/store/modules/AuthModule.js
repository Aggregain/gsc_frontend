import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    credentials: {
        token: localStorage.getItem('access_token') || null,
        refresh_token: localStorage.getItem('refresh_token') || null,
    },
    authForm: {},
    formError: null,
    loading: false
};

const mutations = {
    SET_ERROR(state, error) {
        state.formError = error;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
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
            commit("SET_ERROR", error.message);
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
            commit("SET_ERROR", error.message);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при отправке.",
                type: "error"
            });

            return { success: false, error };
        } finally {
            commit("SET_LOADING", false);
        }
    }
};

const getters = {
    authForm: (state) => state.authForm,
    formError: (state) => state.formError,
    isLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
