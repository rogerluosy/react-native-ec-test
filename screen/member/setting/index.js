import * as React from "react";
import { View, ScrollView, Button } from "react-native";

export default class Setting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button
          title="退出登录"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </View>
    );
  }
}
