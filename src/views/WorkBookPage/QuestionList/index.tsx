import { FC, useEffect, useState } from "react";
import { Grade } from "@/constant/enum";
import { questionList } from "@/api";
import { TQuestionList } from "@/api/questionList";
import { useNavigate } from "react-router-dom";

const FinishedQuestionList: FC<{ question: TQuestionList }> = ({
  question,
}) => {
  const navigate = useNavigate();

  return (
    <article
      key={question.id}
      className="flex p-6 rounded-3xl max-w-xl flex-col items-start justify-between shadow cursor-pointer"
      onClick={() => {
        navigate(`/exam/${question.id}`);
      }}
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={question.date} className="text-gray-500">
          {question.date}
        </time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          已完成
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span>
            <span className="absolute inset-0" />
            {question.name}
          </span>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          得分: {question.score}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span>{Grade[question.grade as unknown as number]}</span>
          </p>
          <p className="text-gray-600">
            正确率 {question.rights} / {question.size}
          </p>
        </div>
      </div>
    </article>
  );
};

const UnderwayQuestionList: FC<{ question: TQuestionList }> = ({
  question,
}) => {
  const navigate = useNavigate();

  return (
    <article
      key={question.id}
      className="flex p-6 rounded-3xl max-w-xl flex-col items-start justify-between shadow cursor-pointer"
      onClick={() => {
        navigate(`/exam/${question.id}`);
      }}
    >
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={question.date} className="text-gray-500">
          {question.date}
        </time>
        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          进行中
        </span>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <span>
            <span className="absolute inset-0" />
            {question.name}
          </span>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          得分: [完成后查看]
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span>{Grade[question.grade as unknown as number]}</span>
          </p>
          <p className="text-gray-600">正确率 [完成后查看] / {question.size}</p>
        </div>
      </div>
    </article>
  );
};

const QuestionList: FC = () => {
  const [questions, setQuestions] = useState<TQuestionList[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await questionList.getHistoryQuestionList();
      setQuestions(data);
    })();
  }, []);
  return (
    <>
      {questions.map(question =>
        !question.state ? (
          <UnderwayQuestionList key={question.id} question={question} />
        ) : (
          <FinishedQuestionList key={question.id} question={question} />
        )
      )}
    </>
  );
};

export default QuestionList;
