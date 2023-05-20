import useLocalStorage from "./localStorage";
import { Storage } from "@utils/storage";

export default function useUserInfo() {
  const [userInfo, dispatch] = useLocalStorage<{ name: string }>(
    Storage.USER_INFO
  );
  return [userInfo, dispatch];
}
