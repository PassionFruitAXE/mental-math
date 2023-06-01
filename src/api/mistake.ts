import { createAxiosByInterceptors } from "@/utils/request";

const request = createAxiosByInterceptors({
  baseURL: `${import.meta.env.VITE_BASE_URL}/mistake`,
});

type TGetMistakeQuestionListProps = {
  pageNo: string;
  pageSize: string;
};

export function getMistakeQuestionList(data: TGetMistakeQuestionListProps) {
  return request.post("/list", data);
}

type TSubmitMistakeQuestion = {
  id: string;
  answer: string;
};

export function submitMistakeQuestion(data: TSubmitMistakeQuestion) {
  return request.post("/submit", data);
}

type TGetHistoryMistakeQuestionList = {
  pageNo: string;
  pageSize: string;
};

export function getHistoryMistakeQuestionList(
  data: TGetHistoryMistakeQuestionList
) {
  return request.post("/history", data);
}
