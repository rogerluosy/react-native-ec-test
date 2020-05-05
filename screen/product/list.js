import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { NavigationActions } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import { Image, SearchBar, ListItem } from "react-native-elements";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
let { width: D_WIDTH } = Dimensions.get("window");

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      swiperImages: [banner3, banner1, banner2],

      proList: [
        "https://img11.360buyimg.com//n0/jfs/t1/113656/22/3884/277563/5eaa9145Ecde0f154/061c2f4515b86249.jpg",
        "https://img12.360buyimg.com//n0/jfs/t1/108128/18/12277/185184/5e956c11Eab689bc3/c84adacd0140f105.jpg",
        "https://img10.360buyimg.com//n0/jfs/t1/107159/20/11752/105804/5e8d8746E3e2bc9a7/d31c749f4148fbd3.jpg",
        "https://img11.360buyimg.com//n0/jfs/t1/62876/1/15296/148325/5dcb7428Eb49c110b/4a75c132a4f638de.jpg",
        "https://img11.360buyimg.com//n0/jfs/t1/113656/22/3884/277563/5eaa9145Ecde0f154/061c2f4515b86249.jpg",
        "https://img12.360buyimg.com//n0/jfs/t1/108128/18/12277/185184/5e956c11Eab689bc3/c84adacd0140f105.jpg",
        "https://img10.360buyimg.com//n0/jfs/t1/107159/20/11752/105804/5e8d8746E3e2bc9a7/d31c749f4148fbd3.jpg",
        "https://img11.360buyimg.com//n0/jfs/t1/62876/1/15296/148325/5dcb7428Eb49c110b/4a75c132a4f638de.jpg",
      ],
    };

    this.props.navigation.setOptions({
      title: (props.route.params || {}).name || "",
      headerBackTitle: "返回",
    });
  }
  render() {
    let { search, swiperImages, listItem } = this.state;
    let { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "Top" }}>
        <ScrollView>
          <SearchBar
            lightTheme
            containerStyle={{
              backgroundColor: "#fff",
              borderTopWidth: 0,
            }}
            inputContainerStyle={{ backgroundColor: "#f3f3f3" }}
            round
            placeholder="输入搜索内容"
            onChangeText={this.updateSearch}
            value={search}
          />
          <View style={{ width: D_WIDTH, height: 200 }}>
            <Swiper style={styles.wrapper} showsButtons={true} height={200}>
              {swiperImages.map((v, i) => {
                return (
                  <TouchableWithoutFeedback
                    key={String(i)}
                    onPress={() => {
                      alert(1);
                      navigation.navigate("Class");
                    }}
                  >
                    <View style={styles.slide1}>
                      <Image
                        source={v}
                        style={{ width: D_WIDTH, height: 200 }}
                      ></Image>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </Swiper>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: 5,
            }}
          >
            {this.state.proList.map((v, i) => {
              return (
                <Image
                  key={String(i)}
                  source={{
                    uri: v,
                  }}
                  key={String(i)}
                  style={{
                    width: D_WIDTH / 2 - 7.5,
                    height: D_WIDTH / 2 - 7.5,
                    marginBottom: 5,
                  }}
                ></Image>
              );
            })}
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
