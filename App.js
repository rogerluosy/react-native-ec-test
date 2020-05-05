import React, { Component } from "react";
import NavScreen from "./navigation/index";
import configStore from "./store";
import allHttpApi from "./http";
import { Provider } from "react-redux";
import Loading from "./components/loading";
const store = configStore();
// store挂载到axios上
Component.prototype.$http = allHttpApi(store);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true,
    };
  }
  render() {
    return (
      <Provider store={store}>
        <Loading />
        <NavScreen />
      </Provider>
    );
  }
}
