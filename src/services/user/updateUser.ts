import { baseAPI } from "../baseAPI";
const token = localStorage.getItem("token");

export const updateUser = async (updatesObj: Record<string, string>) => {
  const resp = await baseAPI.put("/api/User/updateuserdata", updatesObj, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return resp;
};
