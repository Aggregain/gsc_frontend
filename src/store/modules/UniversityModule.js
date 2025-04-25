import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    universityInfo: {},
    loading: false
};

const mutations = {
    SET_INFO(state, setData) {
        state.universityInfo = setData;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_UNIVERSITY_INFO({ commit }, university_id) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/common/university/"+university_id, method: "GET" });
            commit("SET_INFO", data);
        } catch (error) {
            console.log('University Error:', error);
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
    isLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
