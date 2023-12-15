import { AxiosResponse } from "axios";
import { baseAPI } from "../baseAPI";

export const userRegistr = (registrObj: {
  userName: string;
  email: string;
  password: string;
}): Promise<AxiosResponse<{ jwt: string }>> =>
  baseAPI.post("/api/user/registerUser", registrObj);
