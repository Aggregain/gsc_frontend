import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    applicationForm: {},
    formError: null,
    loading: false,
    ready: true,
};

const mutations = {
    SET_FORM(state, setData) {
        state.applicationForm = setData;
        state.formError = null;
    },
    SET_ERROR(state, error) {
        state.formError = error;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_READY(state, ready) {
        state.ready = ready;
    }
};

const actions = {
    async GET_APPLICATION_INFO({ commit }) {
        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            const { data } = await DefaultAPIInstance({ url: "/application/info/", method: "GET" });
            commit("SET_FORM", data);
            commit("SET_READY", true);
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

    async UPDATE_APPLICATION_INFO({ state, commit }) {
        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            const response = await DefaultAPIInstance({ url: "/submit-application/", method: "POST", data: state.applicationForm });
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
            commit("SET_READY", true);
        }
    }
};

const getters = {
    applicationForm: (state) => state.applicationForm,
    formError: (state) => state.formError,
    isLoading: (state) => state.loading,
    isReady: (state) => state.ready,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
