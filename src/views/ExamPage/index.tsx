import { FC } from "react";
import { Layout, Main, ReturnHeader as Header } from "@/layout";

const ExamPage: FC = () => {
  return (
    <Layout>
      <Header />
      <Main className="flex justify-around items-center">
        <div className="w-5/6 bg-white p-24 relative sm:py-32 rounded-3xl glass-xl shadow-sm lg:w-2/3">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                1/20
              </h3>
              <p className="mt-2 text-lg leading-8 text-gray-600">题目</p>
            </div>
            <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-20 sm:mt-4 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"></div>
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              123
            </h3>
          </div>
          <button className="absolute left-12">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
            >
              <path
                d="M369.728 512l384.768-384.704a48.64 48.64 0 0 0 0.896-68.8 48.64 48.64 0 0 0-68.736 0.96L269.44 476.736a48.704 48.704 0 0 0-11.136 17.344c-1.024 2.304-1.024 4.736-1.472 7.04-0.896 3.648-2.048 7.168-2.048 10.88 0 3.712 1.152 7.232 1.984 10.88 0.512 2.368 0.512 4.8 1.472 7.04a48.704 48.704 0 0 0 11.136 17.344l417.216 417.28a48.576 48.576 0 0 0 68.736 0.96 48.576 48.576 0 0 0-0.896-68.736L369.728 512z"
                fill="#030000"
              ></path>
            </svg>
          </button>
          <button className="absolute right-12">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
            >
              <path
                d="M324.3 960.1l-72.8-72.8L626.9 512 251.5 136.7l72.8-72.8L772.5 512z"
                fill="#333333"
              ></path>
            </svg>
          </button>
        </div>
      </Main>
    </Layout>
  );
};

export default ExamPage;
