import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    programsList: [
        {name: 'University of Utah'},
        {name: 'University of Utah 2'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'},
        {name: 'University of Utah'}
    ],
    filterForm: {},
    formError: null,
    loading: false
};

const mutations = {
    SET_PROGRAMS(state, setData) {
        state.programsList = setData;
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
    async GET_PROGRAMS({ state, commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/get-programs", method: "GET", params: state.filterForm });
            commit("SET_PROGRAMS", data);
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
};

const getters = {
    programsList: (state) => state.programsList,
    filterForm: (state) => state.filterForm,
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
