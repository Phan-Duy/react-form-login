import { get } from ".";
import { TPagination, TRequestParamsCommon } from "./type";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TGetTodoRequestParams = TRequestParamsCommon & {
  title_like?: string;
};
export type TGetTodoResponseSuccess = {
    data: Todo[];
    pagination: TPagination
}
export function getTodoListApi(params?: TGetTodoRequestParams) {
  return get<Todo[]>({
    url: "/todos",
    params,
  });
}