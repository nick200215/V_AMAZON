import { AxiosResponse } from "axios";
import { baseAPI } from "../baseAPI";

export const userSignIn = (loginObj: {
  email: string;
  password: string;
}): Promise<AxiosResponse<{ jwt: string }>> =>
  baseAPI.post("/api/User/LogIn", loginObj);
