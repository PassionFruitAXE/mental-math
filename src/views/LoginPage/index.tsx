import Header from "@/layout/Header";
import Main from "@/layout/Main";
import { FC } from "react";
import { Layout } from "@/layout";
import { Link } from "react-router-dom";

const LoginPage: FC = () => {
  return (
    <Layout>
      <Header>
        <Link
          to="/"
          className="text-sm font-semibold leading-6 text-gray-900 z-50"
        >
          <span aria-hidden="true">&larr;</span> Return Home
        </Link>
      </Header>
      <Main>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            登录账号
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 text-auto">
            请在此填写您的账号以及密码, 然后点击登录按钮登陆账号 <br />
            如果您还没有账号请点击此处
            <Link to="/register" className="font-semibold text-indigo-600">
              注册
            </Link>
          </p>
        </div>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="username"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                用户名
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                密码
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <label
                className="text-sm leading-6 text-gray-600"
                id="switch-1-label"
              >
                点击登录代表您已同意我们的
                <a href="#" className="font-semibold text-indigo-600">
                  用户使用协议
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              登录
            </button>
          </div>
        </form>
      </Main>
    </Layout>
  );
};

export default LoginPage;
