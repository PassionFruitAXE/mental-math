import QuestionList from "./QuestionList";
import useUserInfo from "@/hooks/userInfo";
import { FC, useState } from "react";
import { Layout, Main, ReturnHeader as Header } from "@/layout";
import { Modal } from "antd";

const WorkBookPage: FC = () => {
  const { userInfo } = useUserInfo();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
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
                欢迎你, {userInfo?.name ?? "无名氏"}
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                准备好开启你的天才算数旅行了吗? 点击下方加号, 开始新的算数练习
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Main>
    </Layout>
  );
};

export default WorkBookPage;
