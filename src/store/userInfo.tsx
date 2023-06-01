import useLocalStorage from "@/hooks/localStorage";
import { createContext, FC, ReactNode } from "react";
import { Storage } from "@/utils/storage";
import { TUserInfo } from "@/types/userInfo";

type TProps = {
  children?: ReactNode;
};

const defaultValue = {
  userInfo: void 0,
  dispatch: () => void 0,
};

const UserInfoContext = createContext<{
  userInfo: TUserInfo | undefined;
  dispatch: (newValue?: TUserInfo | undefined) => void;
}>(defaultValue);

const UserInfoProvider: FC<TProps> = ({ children }) => {
  const { value: userInfo, dispatch } = useLocalStorage<TUserInfo>(
    Storage.USER_INFO
  );
  return (
    <UserInfoContext.Provider value={{ userInfo, dispatch }}>
      {children}
    </UserInfoContext.Provider>
  );
};

export { UserInfoContext, UserInfoProvider };
