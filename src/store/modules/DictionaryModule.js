import { DefaultAPIInstance } from "@/plugins/axios";

const state = {
    dictionaryList: {},
    loading: false
};

const mutations = {
    SET_DICTIONARY(state, setData) {
        state.dictionaryList = setData;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_DICTIONARY({ commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/common/roster/", method: "GET" });
            commit("SET_DICTIONARY", data);
        } catch (error) {
            console.log('Dictionary Error:', error);
        } finally {
            commit("SET_LOADING", false);
        }
    },
};

const getters = {
    dictionaryList: (state) => state.dictionaryList,
    dictionaryLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
