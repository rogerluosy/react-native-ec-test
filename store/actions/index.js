import {
  ADDHTTP,
  MINUSHTTP,
  MODIFYSTORE,
  MODIFYINFO,
  CHANGETABBAR,
  GLOBALDATA,
} from "../constants";

const addHttp = () => {
  return {
    type: ADDHTTP,
  };
};
const minusHttp = () => {
  return {
    type: MINUSHTTP,
  };
};

const modifyShop = (store) => {
  return {
    type: MODIFYSTORE,
    store,
  };
};

const modifySystemConfigInfo = (info) => {
  return {
    type: MODIFYINFO,
    info,
  };
};

const changeTabbar = (index) => {
  return {
    type: CHANGETABBAR,
    index,
  };
};
const setStoreData = (data) => {
  return {
    type: GLOBALDATA,
    data,
  };
};

export {
  addHttp,
  minusHttp,
  modifyShop,
  modifySystemConfigInfo,
  changeTabbar,
  setStoreData,
};
