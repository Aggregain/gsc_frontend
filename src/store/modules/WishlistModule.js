import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    wishlistFilter: {
        ordering: 'name'
    },
    wishlistData: [],
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
    async GET_WISHLIST({ state, commit }, { force = false } = {}) {
        if (!force && (state.loading || Object.keys(state.wishlistData).length > 0)) return;

        commit("SET_LOADING", true);
        try {
            const { data } = await DefaultAPIInstance({ url: "/wishlist/", method: "GET", params: state.wishlistFilter });
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

    async ADD_WISHLIST({ commit, dispatch }, id) {
        commit("SET_LOADING", true);
        try {
            await DefaultAPIInstance({ url: "/wishlist/", method: "POST", data: {"education_place": id} });
            await dispatch("GET_WISHLIST", { force: true });
        } catch (error) {
            console.log('Wishlist Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "При добавлении возникла ошибка.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    },

    async DELETE_WISHLIST({ commit, dispatch }, id) {
        commit("SET_LOADING", true);
        try {
            await DefaultAPIInstance({ url: "/wishlist/"+id, method: "DELETE" });
            await dispatch("GET_WISHLIST", { force: true });
        } catch (error) {
            console.log('Wishlist Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "При удалении возникла ошибка.",
                type: "error"
            });
        } finally {
            commit("SET_LOADING", false);
        }
    },
};

const getters = {
    wishlistData: (state) => state.wishlistData,
    wishlistLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
