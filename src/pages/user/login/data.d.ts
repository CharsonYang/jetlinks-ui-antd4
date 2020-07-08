declare namespace LOGIN {
    export interface LoginStateType {
        code?: 'success' | 'error';
        result?: {
            currentAuthority: string[],
            expires: number,
            permissions: any[],
            roles: any[],
            token: string,
            user: any,
            userId: string,
        };
        status?: number
    }
    export interface LoginParamsType {
        password: string,
        type: string,
        username: string,
    }
}