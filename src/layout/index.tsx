import Header from "./Header";
import Main from "./Main";
import { FC } from "react";
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
export { Layout, Header, Main };
