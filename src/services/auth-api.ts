import { post } from ".";
import { RegisterFormType } from "../components/Register";

export function registerApi(params?: RegisterFormType) {
  return post({
    url: "/auth/register",
    data: params,
  });
}

export function login(params: {
    email: string;
    password: string;
}) {
    return post<{
        access_token: string;
        email: string;
  }>({
    url: "/auth/login",
    data: params,
  });
}