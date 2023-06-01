import { createAxiosByInterceptors } from "@/utils/request";
import { Grade, Sex } from "@/constant/enum";
import { TBaseResponse } from "@/types/axios";

const request = createAxiosByInterceptors();

type TLoginProps = {
  username: string;
  password: string;
};

type TLoginResponse = TBaseResponse<{ token: string }>;

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
  return request.post("/register", data);
}
