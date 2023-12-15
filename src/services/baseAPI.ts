import axios from "axios";

// const baseURL = "https://digitalinstitute-amazon.azurewebsites.net";
const baseURL = "https://ngglobalwebapi20231210182820.azurewebsites.net";

export const baseAPI = axios.create({
  baseURL,
});
