import httpAxios from "./http";
import httpApis from "./api";
const $http = {};

/**
 *
 * @param {*} res  http返回参数
 */
const thenFn = (res) => {
  if (res.code == 0) {
    return res;
  } else {
    return Promise.reject(res);
  }
};
/**
 *
 * @param {*} res  http返回参数
 */

// let timestamp = new Date().getTime();
// let load_timestamp = timestamp;
const catchFn = (res, data, v) => {
  console.log(res, "--");
  if (!res.code) {
    res = { code: "99999999999", msg: "网络不稳定，请稍后再试" };
  }
  // if (res.code == "40009") {
  //   let now = new Date().getTime();
  //   if (load_timestamp != timestamp) {
  //     // let { channel, code = "", currentRoute } = store.state;
  //     let Authorize = new Auth(channel, code, currentRoute);
  //     Authorize.authTip();
  //     return Promise.reject(res);
  //   } else {
  //     timestamp = now;
  //   }
  //   // 重新拿   auth/token
  //   let { channel, code = "", currentRoute } = store.state;
  //   let Authorize = new Auth(channel, code, currentRoute);
  //   return Authorize.token().then(() => {
  //     load_timestamp = timestamp;
  //     return $http[v](data);
  //   });
  // } else if (!data.hideToast) {
  //   // hideToast:true 表示为不显示错误信息
  //   Vue.$vux.toast.text(res.msg, "middle");
  // }
  return Promise.reject(res);
};

/**
 * 构造api函数
 */
let apis = Object.assign({}, httpApis);

function allHttpApi(store) {
  let http = httpAxios(store);
  Object.keys(apis).map((v) => {
    let api = apis[v];
    api.method = api.method || "get";
    $http[v] = (data) => {
      data = Object.assign({}, data);
      if (api.method == "get") {
        return http
          .get(api.url, { params: data })
          .then(thenFn)
          .catch((res) => {
            return catchFn(res, data, v);
          });
      } else {
        return http
          .post(api.url, data)
          .then(thenFn)
          .catch((res) => {
            return catchFn(res, data, v);
          });
      }
    };
  });
  return $http;
}

export default allHttpApi;
