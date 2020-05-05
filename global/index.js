let globalData = {
  ym_timestamp: new Date().getTime(),
};
const set = (key, val) => {
  globalData["ym_" + key] = val;
};
const get = (key) => {
  return globalData["ym_" + key] || "";
};
const del = (key) => {
  delete globalData["ym_" + key];
};

export default {
  set,
  get,
  del,
};
