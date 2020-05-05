import * as React from "react";
import { View, ScrollView } from "react-native";
import { ListItem, Input, Avatar } from "react-native-elements";

import avatarImage from "../../../assets/images/avatar.png";
export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: [
        {
          name: "昵称",
          rightTitle: "小乖娃",
          rightTitleInput: <Input placeholder="请输入姓名" />,
          chevron: true,
        },
        {
          name: "姓名",
          rightTitle: "小元宝",
          chevron: true,
        },
        {
          name: "性别",
          rightTitle: "男",
          chevron: true,
        },
        {
          name: "生日",
          rightTitle: "2019-01-09",
          chevron: true,
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
          <ListItem
            rightTitle="修改头像"
            leftAvatar={{ source: avatarImage, rounded: true, size: "large" }}
            bottomDivider
            onPress={() => {
              navigation.navigate("Camera");
            }}
            chevron
          />
          {listItem.map((l, i) => (
            <ListItem
              key={i}
              rightTitle={l.rightTitle}
              title={l.name}
              chevron={!!l.chevron}
              bottomDivider
              onPress={() => {
                l.navigate && navigation.navigate(l.navigate);
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
