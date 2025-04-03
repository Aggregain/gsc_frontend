import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    universityInfo: {},
    formError: null,
    loading: false
};

const mutations = {
    SET_INFO(state, setData) {
        state.universityInfo = setData;
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
    async GET_UNIVERSITY_INFO({ commit }, university_id) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/get-university/"+university_id, method: "GET" });
            commit("SET_INFO", data);
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
    universityInfo: (state) => state.universityInfo,
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
