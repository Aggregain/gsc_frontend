import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    userForm: {},
    profileInfo: {},
    userAttachments: [],
    loading: false,
    ready: true,
};

const mutations = {
    SET_FORM(state, setData) {
        state.userForm = setData;
        state.profileInfo = { ...setData };
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_READY(state, ready) {
        state.ready = ready;
    },
    SET_USER_ATTACHMENTS(state, setData) {
        state.userAttachments = setData;
    },
};

const actions = {
    async GET_USER_INFO({ state, commit }, { force = false } = {}) {
        if (!force && (state.loading || Object.keys(state.profileInfo).length > 0)) return;

        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            const { data } = await DefaultAPIInstance({ url: "/accounts/profile/", method: "GET" });
            commit("SET_FORM", data);
            commit("SET_READY", true);
        } catch (error) {
            console.log('User Error:', error);
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
        commit("SET_READY", false);
        try {
            const response = await DefaultAPIInstance({ url: "/accounts/profile/", method: "PATCH", data: state.userForm });
            ElNotification({
                title: "Успех",
                message: "Данные обновлены!",
                type: "success"
            });

            commit("SET_FORM", response.data);

            return { success: true, data: response.data };
        } catch (error) {
            console.log('User Error:', error);
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
    },

    async UPLOAD_USER_AVATAR({ commit, dispatch }, formData) {
        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            await DefaultAPIInstance({ url: "/accounts/avatar/", method: "PATCH", data: formData, headers: {'Content-Type': 'multipart/form-data'} });
            ElNotification({
                title: "Успех",
                message: "Аватар успешно обновлен!",
                type: "success"
            });

            await dispatch("GET_USER_INFO", { force: true });
        } catch (error) {
            console.log('User Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при отправке.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
            commit("SET_READY", true);
        }
    },

    async GET_USER_ATTACHMENTS({ commit }) {
        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            const { data } = await DefaultAPIInstance({ url: "/accounts/attachments/", method: "GET" });
            commit("SET_USER_ATTACHMENTS", data);
            commit("SET_READY", true);
        } catch (error) {
            console.log('UserAttachments Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Не удалось загрузить данные.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    }

};

const getters = {
    userForm: (state) => state.userForm,
    profileInfo: (state) => state.profileInfo,
    isLoading: (state) => state.loading,
    isReady: (state) => state.ready,
    userAttachments: (state) => state.userAttachments,
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
