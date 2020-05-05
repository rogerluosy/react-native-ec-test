import * as React from "react";
import { View, ScrollView } from "react-native";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "Top" }}>
        <ScrollView></ScrollView>
      </View>
    );
  }
}
