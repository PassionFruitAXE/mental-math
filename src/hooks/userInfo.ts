import { useContext } from "react";
import { UserInfoContext } from "@/store/userInfo";

export default function useUserInfo() {
  const { userInfo, dispatch } = useContext(UserInfoContext);
  return { userInfo, dispatch };
}
