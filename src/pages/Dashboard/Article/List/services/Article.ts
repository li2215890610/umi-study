import { requestHttp, Req } from '@/utils/request';
import { Article, Status } from '../entities/Article';

export enum BackendStatusFilter {
  ALL = '',
  SUCCESS = '0',
  REJECT = '1',
  PENDING = '2',
}

export enum ArticleStatusFilter {
  ALL,
  SUCCESS,
  REJECT,
  PENDING,
}

/**
 * 获取 文章列表
 */
export type ArticleFetchParams = {
  pageNum: number;
  pageSize: number;
  statusFilter: ArticleStatusFilter;
  keyword?: string;
};
export type ArticleFetchResult = {
  page: number;
  totalPage: number;
  pageSize: number;
  list: Article[];
};
export async function fetchArticle(params: ArticleFetchParams) {
  enum BackendStatus {
    SUCCESS = '0',
    REJECT = '1',
    PENDING = '2',
  }

  type ReqData = {
    page: number;
    page_size: number;
    search: string;
    state: BackendStatusFilter;
  };

  type ResDataInner = {
    list: {
      title: string;
      id: number;
      pv: number;
      status: BackendStatus;
      createTime: Date;
    }[];
    page: number;
    totalPage: number;
    pageSize: number;
  };

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'GET',
      url: '@articleApi/list',
      params: {
        page: params.pageNum,
        page_size: params.pageSize,
        search: params.keyword || '',
        state: {
          [ArticleStatusFilter.ALL]: BackendStatusFilter.ALL,
          [ArticleStatusFilter.SUCCESS]: BackendStatusFilter.SUCCESS,
          [ArticleStatusFilter.PENDING]: BackendStatusFilter.PENDING,
          [ArticleStatusFilter.REJECT]: BackendStatusFilter.REJECT,
        }[params.statusFilter],
      },
    };
  };

  const resTransfer = (res: ResDataInner): ArticleFetchResult | null => {
    return {
      page: res.page,
      totalPage: res.totalPage,
      pageSize: res.pageSize,
      list: res.list.map(e => {
        return {
          id: e.id.toString(),
          article: {
            name: e.title,
            pv: e.pv,
            status: {
              [BackendStatus.SUCCESS]: Status.SUCCESS,
              [BackendStatus.PENDING]: Status.PENDING,
              [BackendStatus.REJECT]: Status.REJECT,
            }[e.status],
            createTime: e.createTime,
          },
        };
      }),
    };
  };

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(res =>
    resTransfer(res),
  );
}

/**
 * 删除文章
 */
export type ArticleDeleteParams = Pick<Article, 'id'>;
export type ArticleDeleteResult = void;
export async function deleteArticle(params: ArticleDeleteParams) {
  type ReqData = {
    id: number;
  };

  type ResDataInner = {};

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'POST',
      url: '@articleApi/delete',
      // requestType: 'form',
      data: {
        id: parseInt(params.id),
      },
      auth: true,
    };
  };

  const resTransfer = (): ArticleDeleteResult | void => {};

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(resTransfer);
}

//上下架文章
export type ArticleBatchUpDownShelfParams = {
  ids: Article['id'][];
  status: Status;
};
export type ArticleBatchUpDownShelfResult = void;
export async function batchUpDownShelfArticle(
  params: ArticleBatchUpDownShelfParams,
) {
  enum BackendStatus {
    ON_SHELF = 1, //上架
    OFF_SHELF = 0, // 下架
  }

  type ReqData = {
    ids: string;
    state: BackendStatus;
  };

  type ResDataInner = void;

  const reqTransfer = (): Req<ReqData> => {
    return {
      method: 'POST',
      url: `@articleApi/batch/up_down_shelf`,
      auth: true,
      requestType: 'form',
      data: {
        ids: params.ids.join(','),
        state: {
          [Status.SUCCESS]: BackendStatus.ON_SHELF,
          [Status.PENDING]: BackendStatus.ON_SHELF, // 进行中的状态，也可以上架
          [Status.REJECT]: BackendStatus.OFF_SHELF,
        }[params.status],
      },
    };
  };

  const resTransfer = (
    res: ResDataInner,
  ): ArticleBatchUpDownShelfResult | void => {};

  return requestHttp<ReqData, ResDataInner>(reqTransfer()).then(resTransfer);
}
