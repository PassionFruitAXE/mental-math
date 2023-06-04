import { createAxiosByInterceptors } from "@/utils/request";

const request = createAxiosByInterceptors({
  baseURL: `${import.meta.env.VITE_BASE_URL}/mistake`,
});

type TGetMistakeQuestionListProps = {
  num: number;
  name: string;
};

export function getMistakeQuestionList(data: TGetMistakeQuestionListProps) {
  return request.post("", data);
}
