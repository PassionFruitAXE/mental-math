import { createAxiosByInterceptors } from "@/utils/request";
import { QuestionListState } from "@/constant/enum";
import { TBaseResponse } from "@/types/axios";

const request = createAxiosByInterceptors({
  baseURL: `${import.meta.env.VITE_BASE_URL}/qs`,
});

type TCreateQuestionListProps = {
  grade: string;
  num: number;
  name: string;
};

type TCreateQuestionListResponse = TBaseResponse<{
  id: string;
  name: string;
  grade: string;
  size: number;
  state: number;
  answerRecordVOList: Array<{ id: string; question: string }>;
}>;

export function createQuestionList(data: TCreateQuestionListProps) {
  return request.post<unknown, TCreateQuestionListResponse>("/create", data);
}

type TSubmitQuestionProps = {
  id: string;
  answer: string;
};

export function submitQuestion(data: TSubmitQuestionProps) {
  return request.post("submit", data);
}

export function submitQuestionList(id: string) {
  return request.put(`submit/${id}`);
}

export type TQuestionList = {
  id: number;
  name: string;
  grade: string;
  size: number;
  state: QuestionListState;
  score: number;
  rights: number;
  date: string;
};

export function getHistoryQuestionList() {
  return request.get<unknown, TBaseResponse<TQuestionList[]>>("/list");
}

export type TQuestion = {
  id: string;
  question: string;
  currentAnswer: string;
  right: number;
  answerTime: string;
};

export function getQuestionListDetails(id: string) {
  return request.get<
    unknown,
    TBaseResponse<{ answerRecordVOList: TQuestion[] }>
  >(`/detail/${id}`);
}
