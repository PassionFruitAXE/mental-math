import useLocalStorage from "@/hooks/localStorage";
import { createContext, FC, ReactNode } from "react";
import { Storage } from "@/utils/storage";
import { TUserInfo } from "@/types/userInfo";

type TProps = {
  children?: ReactNode;
};

const UserInfoContext = createContext<{
  userInfo: TUserInfo | undefined;
  dispatch: (newValue?: TUserInfo | undefined) => void;
}>({ userInfo: void 0, dispatch: () => void 0 });

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
