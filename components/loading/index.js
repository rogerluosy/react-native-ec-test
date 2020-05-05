import React, { Component } from "react";
import { Text, Modal, Alert, View } from "react-native";

import { connect } from "react-redux";
@connect(({ loading }) => ({ loading }))
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { loading = {} } = this.props;
    return (
      <Modal animationType="fade" transparent visible={!!loading.ishttp}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              padding: 10,
              display: "flex",
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: 5,
              color: "#fff",
            }}
            onPress={() => {
              this.setState({
                modalVisible: false,
              });
            }}
          >
            <Text style={{ color: "#fff" }}> 加载中...</Text>
          </View>
        </View>
      </Modal>
    );
  }
}
