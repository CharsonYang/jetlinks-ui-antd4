declare namespace API {
  export interface CurrentUser {
    code: string;
    result: {
      attributes: any;
      dimensions: {
        id: string;
        name: string;
        type: string;
      }[];
      permissions: {
        actions: string[];
        dataAccesses: [];
        id: string;
        name: string;
      }[];
      user: {
        id: string;
        name: string;
        type: string;
        username: string;
        avatar?: string
      }
    };
    status: number;
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }
}
