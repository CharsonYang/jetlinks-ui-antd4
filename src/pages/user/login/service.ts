import { request } from "umi";


export async function login(params: LOGIN.LoginParamsType) {
    return request<LOGIN.LoginStateType>('/jetlinks/authorize/login', {
        method: 'POST',
        data: params,
    });
}
export async function logout(): Promise<any> {
    return request(`/jetlinks/user-token/reset`, {
        method: 'GET',
    });
}
