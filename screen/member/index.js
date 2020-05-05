import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import avatarImage from "../../assets/images/avatar.png";

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
});

export default class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          name: "我的订单",
          leftIcon: <Icon name="profile" size={14} />,
          navigate: "Order",
        },
        {
          name: "优惠券",
          leftIcon: <Icon name="pay-circle-o1" size={14} />,
          navigate: "Coupon",
        },
        {
          name: "客服",
          leftIcon: <Icon name="phone" size={14} />,
          navigate: "Kefu",
        },
        {
          name: "收货地址",
          leftIcon: <Icon name="enviromento" size={14} />,
          navigate: "Address",
        },
        {
          name: "个人信息",
          leftIcon: <Icon name="user" size={14} />,
          navigate: "UserInfo",
        },
      ],
    };
  }
  render() {
    let { listItem } = this.state;
    let { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "Top" }}>
        <ScrollView>
          <View>
            <ListItem
              title="小元宝"
              chevron
              leftAvatar={{ source: avatarImage, rounded: true, size: "large" }}
              containerStyle={{ borderColor: "#e3e3e3" }}
              onPress={() => {
                navigation.navigate("UserInfo");
              }}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            {listItem.map((l, i) => (
              <ListItem
                key={i}
                leftIcon={l.leftIcon}
                title={l.name}
                subtitle={l.subtitle}
                topDivider={i == 0}
                bottomDivider
                chevron
                containerStyle={{ borderColor: "#e3e3e3" }}
                onPress={() => {
                  l.navigate && navigation.navigate(l.navigate);
                }}
              />
            ))}
          </View>
          <ListItem
            style={{ marginTop: 10 }}
            title="设置"
            leftIcon={<Icon name="setting" size={14} />}
            chevron
            bottomDivider
            topDivider
            containerStyle={{ borderColor: "#e3e3e3" }}
            onPress={() => {
              navigation.navigate("Setting");
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
