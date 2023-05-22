import { FC } from "react";
import { QuestionListState } from "@/constant/enum";
import { useNavigate } from "react-router-dom";

type TQuestionList = {
  id: number;
  userId: string;
  grade: string;
  size: number;
  state: QuestionListState;
  score: number;
  rights: number;
  title: string;
  date: string;
};

const FinishedQuestionList: FC<{ questionList: TQuestionList }> = ({
  questionList,
}) => {
  const navigate = useNavigate();

  return (
    <article
      key={questionList.id}
      className="flex p-6 rounded-3xl max-w-xl flex-col items-start justify-between shadow cursor-pointer"
      onClick={() => {
        navigate(`/exam/${questionList.id}`);
      }}
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={questionList.date} className="text-gray-500">
          {questionList.date}
        </time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          已完成
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span>
            <span className="absolute inset-0" />
            {questionList.title}
          </span>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          得分: {questionList.score}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span>{questionList.grade}</span>
          </p>
          <p className="text-gray-600">
            正确率 {questionList.rights} / {questionList.size}
          </p>
        </div>
      </div>
    </article>
  );
};

const UnderwayQuestionList: FC<{ questionList: TQuestionList }> = ({
  questionList,
}) => {
  const navigate = useNavigate();

  return (
    <article
      key={questionList.id}
      className="flex p-6 rounded-3xl max-w-xl flex-col items-start justify-between shadow cursor-pointer"
      onClick={() => {
        navigate(`/exam/${questionList.id}`);
      }}
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={questionList.date} className="text-gray-500">
          {questionList.date}
        </time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          进行中
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span>
            <span className="absolute inset-0" />
            {questionList.title}
          </span>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          得分: [完成后查看]
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span>{questionList.grade}</span>
          </p>
          <p className="text-gray-600">
            正确率 [完成后查看] / {questionList.size}
          </p>
        </div>
      </div>
    </article>
  );
};

const QuestionList: FC = () => {
  const questionLists: TQuestionList[] = [
    {
      id: 1,
      userId: "luowei",
      grade: "题目难度 中等",
      size: 20,
      state: QuestionListState.FINISHED,
      score: 50,
      rights: 10,
      title: "我是小学生114514",
      date: "Mar 16, 2020",
    },
  ];
  return (
    <>
      {questionLists.map(questionList =>
        !questionList.state ? (
          <UnderwayQuestionList
            key={questionList.id}
            questionList={questionList}
          />
        ) : (
          <FinishedQuestionList
            key={questionList.id}
            questionList={questionList}
          />
        )
      )}
    </>
  );
};

export default QuestionList;
