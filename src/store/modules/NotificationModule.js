import { DefaultAPIInstance } from "@/plugins/axios";

const state = {
    notificationsData: [],
    loading: false
};

const mutations = {
    SET_NOTIFICATIONS(state, setData) {
        state.notificationsData = setData;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_NOTIFICATIONS({ commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/notifications/", method: "GET" });
            commit("SET_NOTIFICATIONS", data);
        } catch (error) {
            console.log('Notifications Error:', error);
        } finally {
            commit("SET_LOADING", false);
        }
    },

    async READ_NOTIFICATIONS({ commit, dispatch }) {
        commit("SET_LOADING", true);
        try {
            await DefaultAPIInstance({ url: "/notifications-read/", method: "GET" });
            await dispatch("GET_NOTIFICATIONS");
        } catch (error) {
            console.log('Notifications Error:', error);
        } finally {
            commit("SET_LOADING", false);
        }
    },
};

const getters = {
    notificationsData: (state) => state.notificationsData,
    notificationsLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
