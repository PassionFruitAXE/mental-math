import AppRouter from "@/routes";
import { FC } from "react";
import { UserInfoProvider } from "@/store/userInfo";

const App: FC = () => {
  return (
    <UserInfoProvider>
      <AppRouter />
    </UserInfoProvider>
  );
};

export default App;
