import Header from "@/layout/Header";
import Main from "@/layout/Main";
import { FC } from "react";
import { Layout } from "@/layout";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage: FC = () => {
  const navigator = useNavigate();
  return (
    <Layout>
      <Header>
        <Link
          to="/login"
          className="text-sm font-semibold leading-6 text-gray-900 z-50"
        >
          <span aria-hidden="true">&larr;</span> Return Login
        </Link>
      </Header>
      <Main className="flex">
        <div className="mx-auto p-12 rounded-3xl glass-xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              注册账号
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              请在此完成用户个人信息填写, 然后点击注册按钮完成账号注册
            </p>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  姓名
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  性别
                </label>
                <div className="mt-2.5">
                  <select
                    id="sex"
                    name="sex"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>男</option>
                    <option>女</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  ></svg>
                </div>
              </div>
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
              <div className="sm:col-span-2">
                <label
                  htmlFor="grade"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  年级
                </label>
                <div className="mt-2.5">
                  <select
                    id="grade"
                    name="grade"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>一年级</option>
                    <option>二年级</option>
                    <option>三年级</option>
                    <option>四年级</option>
                    <option>五年级</option>
                    <option>六年级</option>
                    <option>&gt;六年级</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  ></svg>
                </div>
              </div>
              <div className="flex gap-x-4 sm:col-span-2">
                <label
                  className="text-sm leading-6 text-gray-600"
                  id="switch-1-label"
                >
                  点击注册代表您已同意我们的
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
                onClick={() => {
                  navigator("/login");
                }}
              >
                注册账号
              </button>
            </div>
          </form>
        </div>
      </Main>
    </Layout>
  );
};

export default RegisterPage;
