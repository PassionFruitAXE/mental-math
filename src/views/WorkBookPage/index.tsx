import QuestionList from "./QuestionList";
import useUserInfo from "@/hooks/userInfo";
import { FC, useRef, useState } from "react";
import { Layout, Main, ReturnHeader as Header } from "@/layout";
import { message, Modal } from "antd";
import { mistake, questionList } from "@/api";
import { useNavigate } from "react-router-dom";

enum Type {
  NORMAL = "normal",
  MISTAKE = "MISTAKE",
}

const WorkBookPage: FC = () => {
  const { userInfo } = useUserInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const numRef = useRef<HTMLInputElement>(null);
  const gradeRef = useRef<HTMLSelectElement>(null);

  const handleOk = async () => {
    setIsModalOpen(false);
    const name = nameRef.current?.value;
    const num = numRef.current?.value;
    const grade = gradeRef.current?.value;
    if (name?.length && num?.length && grade?.length) {
      try {
        if (typeRef.current?.value === Type.NORMAL) {
          const {
            data: { id },
          } = await questionList.createQuestionList({
            name,
            num: Number(num),
            grade,
          });
          navigate(`/exam/${id}`);
        } else if (typeRef.current?.value === Type.MISTAKE) {
          const {
            data: { id },
          } = await mistake.getMistakeQuestionList({
            name,
            num: Number(num),
          });
          navigate(`/exam/${id}`);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      message.error("请填写完整信息");
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const addNewQuestionList = () => {
    setIsModalOpen(true);
  };
  return (
    <Layout>
      <Header />
      <Main className="flex justify-around items-center">
        <div className="bg-white py-24 sm:py-32 rounded-3xl glass-xl shadow-sm">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                欢迎你, {userInfo?.user.realName ?? "无名氏"}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                准备好开启你的天才算数旅行了吗? 点击下方加号, 开始新的算数练习
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
              <article
                className="flex p-6 rounded-3xl max-w-xl flex-col justify-center items-center shadow cursor-pointer"
                onClick={addNewQuestionList}
              >
                <svg
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M995.84 483.84H540.16V28.16a28.16 28.16 0 1 0-56.32 0v455.68H28.16a28.16 28.16 0 0 0 0 56.32h455.68v455.68a28.16 28.16 0 1 0 56.32 0V540.16h455.68a28.16 28.16 0 1 0 0-56.32z"></path>
                </svg>
              </article>
              <QuestionList />
            </div>
          </div>
        </div>
        <Modal
          title="新建题单"
          open={isModalOpen}
          okType="default"
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form className="mx-auto max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  题单名
                </label>
                <div className="mt-2.5">
                  <input
                    ref={nameRef}
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  题单类型
                </label>
                <div className="mt-2.5">
                  <select
                    ref={typeRef}
                    id="type"
                    name="type"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={Type.NORMAL}>题单</option>
                    <option value={Type.MISTAKE}>错题单</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="num"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  题目数
                </label>
                <div className="mt-2.5">
                  <input
                    ref={numRef}
                    type="text"
                    name="num"
                    id="num"
                    autoComplete="num"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="grade"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  难度
                </label>
                <div className="mt-2.5">
                  <select
                    ref={gradeRef}
                    id="grade"
                    name="grade"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={"A"}>A</option>
                    <option value={"B"}>B</option>
                    <option value={"C"}>C</option>
                    <option value={"D"}>D</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  ></svg>
                </div>
              </div>
            </div>
          </form>
        </Modal>
      </Main>
    </Layout>
  );
};

export default WorkBookPage;
