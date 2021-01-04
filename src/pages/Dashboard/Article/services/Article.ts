import { requestHttp, Req } from '@/utils/request';
import { Article, Status } from '../entities/Article';

enum BackEndStatus {
  SUCCESS = 'SUCCESS',
  REJECT = 'REJECT',
  PENDING = 'PENDING',
}

/**
 * 获取 文章列表
 */
export type ArticleFetchParams = void;
export type ArticleFetchResult = {
  page: number;
  totalPage: number;
  pageSize: number;
  list: Article[];
};
export async function fetchArticle(params: ArticleFetchParams) {
  type ReqData = {};

  type ResDataInner = {
    list: {
      title: string;
      id: number;
      pv: number;
      status: BackEndStatus;
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
              [BackEndStatus.PENDING]: Status.PENDING,
              [BackEndStatus.REJECT]: Status.REJECT,
              [BackEndStatus.SUCCESS]: Status.SUCCESS,
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
