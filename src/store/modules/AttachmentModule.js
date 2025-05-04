import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {};

const mutations = {};

const actions = {
    async ADD_ATTACHMENT(attachment_data) {
        try {
            await DefaultAPIInstance({ url: "/accounts/attachments/", method: "POST", data: attachment_data });
        } catch (error) {
            console.log('Attachments Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "При добавлении возникла ошибка.",
                type: "error"
            });
        }
    },

    async DELETE_ATTACHMENT(attachment_id) {
        try {
            await DefaultAPIInstance({ url: "/accounts/attachments/"+attachment_id, method: "DELETE" });
        } catch (error) {
            console.log('Attachments Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "При удалении возникла ошибка.",
                type: "error"
            });
        }
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
