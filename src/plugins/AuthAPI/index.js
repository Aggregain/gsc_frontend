import { LoginAPIInstance, DefaultAPIInstance } from "@/plugins/axios";

export const AuthAPI = {
    login(data){
        const url = '/auth/login/';
        return LoginAPIInstance.post(url, data);
    },

    logout(){
        const url = '/logout';
        return DefaultAPIInstance.post(url);
    }
}