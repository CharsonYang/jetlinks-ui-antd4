import { request } from "umi";

export async function list(params?: any) {
    console.log(params, 'prer');
    return request(`/jetlinks/user/_query`, {
        method: 'GET',
        params: params,
    }).then(response => ({
        data: response.result.data,
        total: response.total,
        success: response.status === 200,
        pageSize: response.result.pageSize,
        current: response.result.pageIndex + 1,
    }));
}

export async function listNoPaging(params?: any) {
    return request(`/jetlinks/user/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: USER.UserItem) {
    return request(`/jetlinks/user/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function info(id: string) {
    return request(`/jetlinks/user/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/jetlinks/user/${id}`, {
        method: 'DELETE',
    });
}


//=================================
export async function queryById(id: string) {
    return request(`/hsweb/user/${id}`, {
        method: 'GET',
    });
}


export async function add(params: USER.UserItem) {
    return request(`/hsweb/user`, {
        method: 'POST',
        data: params,
    });
}

export async function update(params: USER.UserItem) {
    return request(`/hsweb/user/${params.id}`, {
        method: 'PUT',
        data: params,
    });
}
