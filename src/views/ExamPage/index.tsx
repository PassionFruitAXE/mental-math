import { FC, useEffect, useRef, useState } from "react";
import { Layout, Main, ReturnHeader as Header } from "@/layout";
import { message } from "antd";
import { questionList } from "@/api";
import { TQuestion } from "@/api/questionList";
import { useNavigate, useParams } from "react-router-dom";

const ExamPage: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [index, setIndex] = useState(1);
  const answerRef = useRef<HTMLInputElement>(null);
  const changeIndex = (newIndex: number) => {
    if (newIndex > 0 && newIndex < questions.length + 1) {
      if (answerRef.current?.value.length) {
        try {
          questionList.submitQuestion({
            id: questions.at(index)?.id ?? "",
            answer: answerRef.current?.value ?? "",
          });
        } catch (error) {
          console.error(error);
        }
      }
      setIndex(newIndex);
    } else {
      message.info("已经没有题目了");
    }
  };
  const submitHandleClick = async () => {
    try {
      await questionList.submitQuestionList({ id: id ?? "" });
      message.success("提交成功, 3s后回到题单页");
      setTimeout(navigate, 3000, "/workbook");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await questionList.getQuestionListDetails(id || "");
      setQuestions(data);
    })();
  }, []);

  return (
    <Layout>
      <Header />
      <Main className="flex justify-around items-center">
        <div className="w-5/6 bg-white p-24 relative sm:py-32 rounded-3xl glass-xl shadow-sm lg:w-2/3">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {index}/{questions.length + 1}
              </h3>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                {questions.at(index)?.question}
              </p>
            </div>
            <div className="mx-auto my-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-20 sm:mt-4 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"></div>
            <div>
              <label
                htmlFor="answer"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                作答
              </label>
              <div className="mt-2.5">
                <input
                  ref={answerRef}
                  type="text"
                  name="answer"
                  id="answer"
                  value={questions.at(index)?.currentAnswer}
                  className="glass-xl block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <button
            className="absolute left-12"
            onClick={() => {
              changeIndex(index - 1);
            }}
          >
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
          <button
            className="absolute right-12"
            onClick={() => {
              changeIndex(index + 1);
            }}
          >
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
          {index === questions.length + 1 && (
            <button
              type="submit"
              className="absolute bottom-10 right-10 inline-block w-20 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitHandleClick}
            >
              交卷
            </button>
          )}
        </div>
      </Main>
    </Layout>
  );
};

export default ExamPage;
