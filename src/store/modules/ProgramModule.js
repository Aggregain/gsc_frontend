import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {
    programsList: [],
    filterForm: {},
    filterOptions: {},
    loading: false
};

const mutations = {
    SET_PROGRAMS(state, setData) {
        state.programsList = setData.programs;
        state.filterOptions = setData.filters;
    },
    UPDATE_FILTER_DATA(state, data) {
        state.filterForm = data;
    },
    SET_ORDERING_FILTER(state, order) {
        state.filterForm.ordering = order;
    },
    SET_PRICES_FILTER(state, prices) {
        state.filterForm.price_min = prices.price_min;
        state.filterForm.price_max = prices.price_max;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    }
};

const actions = {
    async GET_PROGRAMS({ state, commit }) {
        commit("SET_LOADING", true);
        try {
            const queryParams = { ...state.filterForm };

            for (const key in queryParams) {
                if (Array.isArray(queryParams[key])) {
                    if (queryParams[key].length === 0) {
                        delete queryParams[key];
                    } else {
                        queryParams[key] = queryParams[key].join(',');
                    }
                }
            }

            const { data } = await DefaultAPIInstance({ url: "/common/programs/", method: "GET", params: queryParams });
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
    filterOptions: (state) => state.filterOptions,
    isLoading: (state) => state.loading
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
