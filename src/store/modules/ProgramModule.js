import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    programsList: [],
    filterForm: {},
    loading: false
};

const mutations = {
    SET_PROGRAMS(state, setData) {
        state.programsList = setData;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_PROGRAMS({ state, commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/common/programs/", method: "GET", params: state.filterForm });
            commit("SET_PROGRAMS", data);
        } catch (error) {
            console.log('Program Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "Не удалось загрузить данные.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    },
};

const getters = {
    programsList: (state) => state.programsList,
    filterForm: (state) => state.filterForm,
    isLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
