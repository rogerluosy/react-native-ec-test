import * as React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { modifySystemConfigInfo } from "../../store/actions";

@connect(
  (state) => ({ systemInfo: state.systemInfo }),
  (dispatch) => ({
    onModifySystemConfigInfo: (data) => {
      dispatch(modifySystemConfigInfo(data));
    },
  })
)
export default class BuycartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  UNSAFE_componentWillMount() {
    this.$http.systemAddress().then((res) => {
      this.props.onModifySystemConfigInfo(res.data);
    });
  }
  UNSAFE_componentWillReceiveProps(nextProps) {}
  componentDidMount() {
    console.log("buycart.didmount");
  }
  componentWillUnmount() {}
  render() {
    let { systemInfo } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "Top" }}>
        <ScrollView>
          {/* <Text>{JSON.stringify(systemInfo)}</Text> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
});
