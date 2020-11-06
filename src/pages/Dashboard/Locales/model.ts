export const NS = 'Locales';

export interface State {
  list: {
    key: string;
    value: string;
  }[];
}

export interface LocalesModelState {
  namespace: string;
  state: State;
}

const Locales: LocalesModelState = {
  namespace: NS,
  state: {
    list: [
      {
        key: 'zh-CN',
        value: '中文',
      },
      {
        key: 'ja-JP',
        value: '日文',
      },
      {
        key: 'en-US',
        value: '英文',
      },
    ],
  },
};

export default Locales;
