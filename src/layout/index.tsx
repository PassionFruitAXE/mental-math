import Main from "./Main";
import { FC } from "react";
import { LoginHeader, LogoutHeader, ReturnHeader } from "./Header";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className?: string;
};

const Layout: FC<TProps> = ({ children, className }) => {
  return (
    <div className={` placeholder:bg-white  ${className}`}>{children}</div>
  );
};
// h-screen overflow-hidden
export { Layout, LoginHeader, LogoutHeader, ReturnHeader, Main };
