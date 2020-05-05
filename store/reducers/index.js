import { combineReducers } from 'redux'

import {
  ADDHTTP,
  MINUSHTTP,
  MODIFYSTORE,
  MODIFYINFO,
  CHANGETABBAR,
  GLOBALDATA,
  INITIAL_STATE_LOADING,
  INITIAL_STATE_STORE,
  INITIAL_STATE_SYSINFO,
  INITIAL_STATE_TABBAR,
  INITIAL_STATE_GLOBALDATA
} from '../constants'

function loading(state = INITIAL_STATE_LOADING, action) {
  switch (action.type) {
    case ADDHTTP:
      return {
        ...state,
        ishttp: state.ishttp + 1
      }
    case MINUSHTTP:
      return {
        ...state,
        ishttp: state.ishttp - 1
      }
    default:
      return state
  }
}

function store(state = INITIAL_STATE_STORE, action) {
  switch (action.type) {
    case MODIFYSTORE:
      return {
        ...state,
        ...action.store
      }
    default:
      return state
  }
}

function systemInfo(state = INITIAL_STATE_SYSINFO, action) {
  switch (action.type) {
    case MODIFYINFO:
      return {
        ...state,
        ...action.info
      }
    default:
      return state
  }
}

function tabbar(state = INITIAL_STATE_TABBAR, action) {
  switch (action.type) {
    case CHANGETABBAR:
      return {
        ...state,
        ...{ index: action.index }
      }
    default:
      return state
  }
}

function storeData(state = INITIAL_STATE_GLOBALDATA, action) {
  switch (action.type) {
    case GLOBALDATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default combineReducers({
  store,
  loading,
  systemInfo,
  tabbar,
  storeData
})
