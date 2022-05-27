import axios from "axios";
import { apiURL } from "@utils/apiURL";

const instanceSettings = {
  baseURL: apiURL,
  timeout: 300000,
};

function formatResponseError() {
  let formatedError = {};
  return Promise.reject(formatedError);
}
let publicInstanceAxios = axios.create(instanceSettings);

publicInstanceAxios.interceptors.response.use(null, formatResponseError);

export { publicInstanceAxios };
