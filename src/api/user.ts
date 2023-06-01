import { createAxiosByInterceptors } from "@/utils/request";
import { Grade, Sex } from "@/constant/enum";
import { TBaseResponse } from "@/types/axios";
import { TUserInfo } from "@/types/userInfo";

const request = createAxiosByInterceptors({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

type TLoginProps = {
  username: string;
  password: string;
};

type TLoginResponse = TBaseResponse<TUserInfo>;

export function login(data: TLoginProps) {
  return request.post<unknown, TLoginResponse>("/login", data);
}

type TRegisterProps = {
  username: string;
  password: string;
  realName: string;
  sex: Sex;
  grade: Grade;
};

export function register(data: TRegisterProps) {
  return request.post<unknown, TBaseResponse<null>>("/register", data);
}
