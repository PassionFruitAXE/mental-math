import useUserInfo from "@/hooks/userInfo";
import { FC } from "react";
import { Layout, LoginHeader, LogoutHeader, Main } from "@/layout";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useMemo } from "react";

const HomePage: FC = () => {
  const { userInfo, dispatch } = useUserInfo();
  const isLogin = useMemo(() => !!userInfo, [userInfo]);
  const logout = useCallback(dispatch, [userInfo]);
  return (
    <Layout className="h-screen">
      {isLogin ? (
        <LogoutHeader
          onClick={() => {
            logout();
          }}
        />
      ) : (
        <LoginHeader />
      )}
      <Main>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              天才第一步, 加减和乘除
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              由专业团队打造口算练习平台, 帮助小孩提高口算速度和准确率
              <br />
              让您的小孩在起跑线上快人一步
              <br />
              学校里快人十步
              <br />
              社会中快人百步
              <br />
              人生中快人千步,下辈子快人万万步
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {isLogin ? (
                <Link
                  to="/workBook"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  开始练习
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  登录/注册
                </Link>
              )}
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
};

export default HomePage;
