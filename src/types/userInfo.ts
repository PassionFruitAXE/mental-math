import { Grade, Sex } from "@/constant/enum";

export type TUserInfo = {
  user: {
    username: string;
    realName: string;
    sex: Sex;
    grade: Grade;
  };
  token: string;
};
