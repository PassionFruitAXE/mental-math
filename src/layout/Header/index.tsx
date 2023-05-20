import { FC } from "react";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  className?: string;
};

const Header: FC<TProps> = ({ children, className }) => {
  return (
    <header className={`inset-x-0 top-0 z-50 ${className}`}>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 z-50">
          <Link to="/" className="flex -m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
            <strong className="ml-2 leading-8">天才口算平台</strong>
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">{children}</div>
      </nav>
    </header>
  );
};

export default Header;
