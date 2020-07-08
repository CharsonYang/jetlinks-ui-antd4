export const routes = [
    {
        path: '/user',
        layout: false,
        routes: [
            {
                name: 'login',
                path: '/user/login',
                component: './user/login',
            },
        ],
    },
    {
        name: '统计分析',
        path: '/analysis',
        icon: 'dashboard',
        component: './analysis',
    },
    {
        path: 'system',
        name: '系统设置',
        icon: 'setting',
        routes: [
            {
                path: '/system/user',
                name: '用户管理',
                icon: 'user',
                component: './system/user',
            },
            {
                path: '/system/permission',
                name: '权限管理',
                icon: 'key',
                component: './system/permission',
            },
            {
                path: '/system/open-api',
                name: 'OpenApi客户端',
                icon: 'share-alt',
                version: 'pro',
                component: './system/open-api',
            },
            {
                path: '/system/org',
                name: '机构管理',
                icon: 'apartment',
                component: './system/org',
            },
            {
                path: '/system/role',
                name: '角色管理',
                icon: 'usergroup-add',
                component: './system/role',
            },
            {
                path: '/system/config',
                name: '系统配置',
                icon: 'tool',
                component: './system/config',
            },
            {
                path: 'system/tenant',
                name: '租户管理',
                icon: 'team',
                version: 'pro',
                component: './system/tenant'
            },
        ],
    },
    {
        path: '/admin',
        name: 'admin',
        icon: 'crown',
        access: 'canAdmin',
        component: './Admin',
        routes: [
            {
                path: '/admin/sub-page',
                name: 'sub-page',
                icon: 'smile',
                component: './Welcome',
            },
        ],
    },
    {
        name: 'list.table-list',
        icon: 'table',
        path: '/list',
        component: './ListTableList',
    },
    {
        path: '/',
        redirect: '/analysis',
    },
    {
        component: './404',
    },
]