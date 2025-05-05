import { DefaultAPIInstance } from "@/plugins/axios";
import { ElNotification } from "element-plus";

const state = {};

const mutations = {};

const actions = {
    async ADD_ATTACHMENT(_, formData) {
        try {
            await DefaultAPIInstance({ url: "/accounts/attachments/", method: "POST", data: formData, headers: {'Content-Type': 'multipart/form-data'} });

            ElNotification({
                title: "Успех",
                message: "Файл успешно загружен!",
                type: "success"
            });

            return { success: true };

        } catch (error) {
            console.log('Attachments Error:', error);
            ElNotification({
                title: "Ошибка",
                message: "При добавлении возникла ошибка.",
                type: "error"
            });
        }
    },

    async DELETE_ATTACHMENT(_, attachment_id) {
        try {
            await DefaultAPIInstance({ url: "/accounts/attachments/"+attachment_id, method: "DELETE" });

            ElNotification({
                title: "Успех",
                message: "Файл успешно удален!",
                type: "success"
            });

            return { success: true };

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
