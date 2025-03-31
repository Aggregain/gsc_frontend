import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    userForm: {},
    formError: null,
    loading: false
};

const mutations = {
    SET_FORM(state, setData) {
        state.userForm = setData;
        state.formError = null;
    },
    SET_ERROR(state, error) {
        state.formError = error;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_USER_INFO({ commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/user/info/", method: "GET" });
            commit("SET_FORM", data);
        } catch (error) {
            commit("SET_ERROR", error.message);
            ElNotification({
                title: "Ошибка",
                message: "Не удалось загрузить данные.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    },

    async UPDATE_USER_INFO({ state, commit }) {
        commit("SET_LOADING", true);
        try {
            await DefaultAPIInstance({ url: "/submit/", method: "POST", data: state.userForm });
            ElNotification({
                title: "Успех",
                message: "Данные обновлены!",
                type: "success"
            });
        } catch (error) {
            commit("SET_ERROR", error.message);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при отправке.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    }
};

const getters = {
    userForm: (state) => state.userForm,
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
