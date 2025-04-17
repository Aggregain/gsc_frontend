import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    wishlistData: [
        {name: 'University of Utah'},
        {name: 'University of Utah 2'},
        {name: 'University of Utah'}
    ],
    loading: false
};

const mutations = {
    SET_WISHLIST(state, setData) {
        state.wishlistData = setData;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_WISHLIST({ commit }) {
        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/get-wishlist", method: "GET" });
            commit("SET_WISHLIST", data);
        } catch (error) {
            console.log('Wishlist Error:', error);
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
    wishlistData: (state) => state.wishlistData,
    isLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
