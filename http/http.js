import axios from "axios";
import { addHttp, minusHttp } from "../store/actions";
axios.defaults.withCredentials = true;

function httpAxios(store) {
  const http = axios.create({
    timeout: 20000, // 请求超时时间
    baseURL: "https://t-ec.wangcaio2o.com/",
  });

  http.interceptors.request.use(
    (config) => {
      // if (store.state.access_token) {
      //   config.headers["Authorization"] = "text";
      // }
      // config.data = Object.assign({}, config.data, {
      //   channel: (store.state.channel || '').toString()
      // })
      config.data && delete config.data.hideToast;
      store.dispatch(addHttp());
      return config;
    },
    (error) => {
      store.dispatch(minusHttp());
      return Promise.reject(error);
    }
  );

  //http response 拦截器
  http.interceptors.response.use(
    (res) => {
      store.dispatch(minusHttp());
      return res.data;
    },
    (error) => {
      store.dispatch(minusHttp());
      return Promise.reject(error);
    }
  );
  return http;
}

export default httpAxios;
