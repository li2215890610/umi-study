export enum Status {
  SUCCESS,
  REJECT,
  PENDING,
}

export type Article = {
  id: string;
  article: {
    name: string;
    pv: number;
    status: Status;
    createTime: Date;
  };
};
