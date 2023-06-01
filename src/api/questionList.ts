import { createAxiosByInterceptors } from "@/utils/request";

const request = createAxiosByInterceptors({ baseURL: "/qs" });

type TCreateQuestionListProps = {
  grade: string;
  num: number;
  name: string;
};

export function createQuestionList(data: TCreateQuestionListProps) {
  return request.post("/create", data);
}

type TSubmitQuestionProps = {
  id: string;
  answer: string;
};

export function submitQuestion(data: TSubmitQuestionProps) {
  return request.post("submit", data);
}

type TSubmitQuestionListProps = {
  id: string;
};

export function submitQuestionList(data: TSubmitQuestionListProps) {
  return request.put("submit", data);
}

export function getHistoryQuestionList() {
  return request.get("/list");
}

export function getQuestionListDetails(id: string) {
  return request.get(`/details/${id}`);
}
