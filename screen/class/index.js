import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { Image, SearchBar, ListItem } from "react-native-elements";
let { width: D_WIDTH } = Dimensions.get("window");

export default class ClassScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      listItem: [
        {
          name: "热卖推荐",
          avatar_url:
            "https://img12.360buyimg.com/n7/jfs/t1/99734/28/18692/169925/5e951a45E8e53ae09/8607cfe3097dca00.jpg!q90",
          subtitle: "怦然心动，自然气息",
        },
        {
          name: "女士香水",
          avatar_url:
            "https://img12.360buyimg.com/n7/jfs/t1/107159/20/11752/105804/5e8d8746E3e2bc9a7/d31c749f4148fbd3.jpg!q90",
          subtitle: "女士淡香 花果香氛 清新持久",
        },
        {
          name: "男士香水",
          avatar_url:
            "https://img10.360buyimg.com/n7/jfs/t1/117028/40/1103/125111/5e951c15Eb39640d0/19479376ca4b8011.jpg!q90",
          subtitle: "低调典雅 深沉性感",
        },
        {
          name: "水晶系列",
          avatar_url:
            "https://img10.360buyimg.com/n7/jfs/t1/97570/37/18654/85908/5e951ab0Edf4a451a/c501f4be6837dbe1.jpg!q90",
          subtitle: "自信迷人，性感诱惑",
        },

        {
          name: "金钻系列",
          avatar_url:
            "https://img10.360buyimg.com/n7/jfs/t1/107159/20/11752/105804/5e8d8746E3e2bc9a7/d31c749f4148fbd3.jpg!q90",
          subtitle: "幻影金钻淡香水，女士淡香 花果香氛",
        },
      ],
      proList: [
        "https://img11.360buyimg.com//n0/jfs/t1/113656/22/3884/277563/5eaa9145Ecde0f154/061c2f4515b86249.jpg",
        "https://img12.360buyimg.com//n0/jfs/t1/108128/18/12277/185184/5e956c11Eab689bc3/c84adacd0140f105.jpg",
        "https://img10.360buyimg.com//n0/jfs/t1/107159/20/11752/105804/5e8d8746E3e2bc9a7/d31c749f4148fbd3.jpg",
        "https://img11.360buyimg.com//n0/jfs/t1/62876/1/15296/148325/5dcb7428Eb49c110b/4a75c132a4f638de.jpg",
      ],
    };
  }
  render() {
    let { search, swiperImages, listItem } = this.state;
    let { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "Top" }}>
        <ScrollView>
          <View>
            {listItem.map((l, i) => (
              <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
                subtitleStyle={{ color: "#cecece", marginTop: 5 }}
                onPress={() => {
                  navigation.navigate("ProductList", { name: l.name });
                }}
                chevron
              />
            ))}
          </View>
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
