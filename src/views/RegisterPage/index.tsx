import { FC, useRef } from "react";
import { Grade, Sex } from "@/constant/enum";
import { Layout, Main, ReturnHeader as Header } from "@/layout";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { user } from "@/api";

const RegisterPage: FC = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const realNameRef = useRef<HTMLInputElement>(null);
  const sexRef = useRef<HTMLSelectElement>(null);
  const gradeRef = useRef<HTMLSelectElement>(null);
  const navigator = useNavigate();
  const registerHandleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const realName = realNameRef.current?.value;
    const sex = sexRef.current?.value;
    const grade = gradeRef.current?.value;
    if (
      username?.length &&
      password?.length &&
      realName?.length &&
      sex?.length &&
      grade?.length
    ) {
      await user.register({
        username,
        password,
        realName,
        sex: Number(sex),
        grade: Number(grade),
      });
      navigator("/login");
    } else {
      message.error("请填写完整信息");
    }
  };
  return (
    <Layout>
      <Header />
      <Main className="flex justify-around items-center">
        <img src="/math-1.png" alt="" className="h-64" />
        <div className=" p-12 rounded-3xl glass-xl shadow-sm">
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
                    ref={realNameRef}
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
                  htmlFor="sex"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  性别
                </label>
                <div className="mt-2.5">
                  <select
                    ref={sexRef}
                    id="sex"
                    name="sex"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={Sex.MAN}>男</option>
                    <option value={Sex.WOMEN}>女</option>
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
                    ref={usernameRef}
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
                    ref={passwordRef}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
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
                    ref={gradeRef}
                    id="grade"
                    name="grade"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={Grade.FIRST}>一年级</option>
                    <option value={Grade.SECOND}>二年级</option>
                    <option value={Grade.THIRD}>三年级</option>
                    <option value={Grade.FOURTH}>四年级</option>
                    <option value={Grade.FIFTH}>五年级</option>
                    <option value={Grade.SIXTH}>六年级</option>
                    <option value={Grade.ELSE}>更高年级</option>
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
                onClick={registerHandleClick}
              >
                注册账号
              </button>
            </div>
          </form>
        </div>
        <img src="/math-2.png" alt="" className="h-64" />
      </Main>
    </Layout>
  );
};

export default RegisterPage;
