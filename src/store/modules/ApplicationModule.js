import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    applicationInfo: {},
    loading: false,
    ready: true,
};

const mutations = {
    SET_INFO(state, setData) {
        state.applicationInfo = setData;
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
            commit("SET_INFO", data);
            commit("SET_READY", true);
        } catch (error) {
            console.log('Application Error:', error);
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
            await DefaultAPIInstance({ url: "/submit-application/", method: "POST", data: state.applicationInfo });
            ElNotification({
                title: "Успех",
                message: "Данные обновлены!",
                type: "success"
            });

            return { success: true };
        } catch (error) {
            console.log('Application Error:', error);
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
    applicationInfo: (state) => state.applicationInfo,
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
