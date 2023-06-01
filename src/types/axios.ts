export type TBaseResponse<T = unknown> = {
  code: number;
  msg: string | null;
  data: T;
};
