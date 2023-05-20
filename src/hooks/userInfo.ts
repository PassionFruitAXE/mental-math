import useLocalStorage from "@hooks/localStorage";
import { Storage } from "@utils/storage";

type TUserInfo = { name: string };

export default function useUserInfo() {
  const { value: userInfo, dispatch } = useLocalStorage<TUserInfo>(
    Storage.USER_INFO
  );
  return { userInfo, dispatch };
}
