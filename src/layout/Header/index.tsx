import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactNode } from "react";

type TProps = {
  children?: ReactNode;
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
            <img className="h-8 w-auto" src="/favicon.png" alt="" />
            <strong className="ml-2 leading-8">天才口算平台</strong>
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">{children}</div>
      </nav>
    </header>
  );
};

const ReturnHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <Header>
      <Link
        to="#"
        className="text-sm font-semibold leading-6 text-gray-900 z-50"
        onClick={e => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <span aria-hidden="true">&larr;</span> Return
      </Link>
    </Header>
  );
};

const LoginHeader: FC = () => {
  return (
    <Header>
      <Link
        to="/login"
        className="text-sm font-semibold leading-6 text-gray-900 z-50"
      >
        Log in <span aria-hidden="true">&rarr;</span>
      </Link>
    </Header>
  );
};

const LogoutHeader: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Header>
      <Link
        to="/"
        className="text-sm font-semibold leading-6 text-gray-900 z-50"
        onClick={onClick}
      >
        Log out <span aria-hidden="true">&rarr;</span>
      </Link>
    </Header>
  );
};

export { ReturnHeader, LoginHeader, LogoutHeader };
