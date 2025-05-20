import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    userApplications: {},
    activeApplicationInfo: {},
    loading: false,
    ready: true,
};

const mutations = {
    SET_APPLICATIONS(state, setData) {
        state.userApplications = setData;
    },
    SET_APPLICATION_INFO(state, setData) {
        state.activeApplicationInfo = setData;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_READY(state, ready) {
        state.ready = ready;
    }
};

const actions = {
    async GET_APPLICATIONS({ commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/applications/", method: "GET" });
            commit("SET_APPLICATIONS", data);
        } catch (error) {
            console.log('Application Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Не удалось загрузить заявки.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    },

    async GET_APPLICATION_INFO({ commit }, id) {
        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            const { data } = await DefaultAPIInstance({ url: "/applications/"+id, method: "GET" });
            commit("SET_APPLICATION_INFO", data);
            commit("SET_READY", true);
            return data;
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

    async CREATE_APPLICATION({ commit }, university_id) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/applications/", method: "POST", data: {education_place: university_id} });

            return { success: true, application_id: data.id };
        } catch (error) {
            console.log('Application Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при создании заявки! Возможно уже есть активная заявка.",
                type: "error"
            });

            return { success: false, error };
        } finally {
            commit("SET_LOADING", false);
        }
    },

    async UPDATE_APPLICATION_INFO({ commit }, { id, update_data }) {
        commit("SET_LOADING", true);
        commit("SET_READY", false);
        try {
            await DefaultAPIInstance({ url: "/applications/"+id+"/", method: "PATCH", data: update_data });
            ElNotification({
                title: "Успех",
                message: "Статус заявки успешно обновлен!",
                type: "success"
            });

            return { success: true };
        } catch (error) {
            console.log('Application Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при обновлении заявки!",
                type: "error"
            });

            return { success: false, error };
        } finally {
            commit("SET_LOADING", false);
            commit("SET_READY", true);
        }
    },

    async DELETE_APPLICATION({ commit, dispatch }, id) {
        commit("SET_LOADING", true);
        try {
            await DefaultAPIInstance({ url: "/applications/"+id+"/", method: "DELETE" });
            ElNotification({
                title: "Успех",
                message: "Заявка успешно удалена!",
                type: "success"
            });

            await dispatch("GET_APPLICATIONS");

            return { success: true };
        } catch (error) {
            console.log('Application Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Ошибка при удалении.",
                type: "error"
            });

            return { success: false, error };
        } finally {
            commit("SET_LOADING", false);
        }
    }
};

const getters = {
    userApplications: (state) => state.userApplications,
    activeApplicationInfo: (state) => state.activeApplicationInfo,
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
