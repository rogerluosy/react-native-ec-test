import * as React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  RefreshControl,
  Alert,
  Modal,
  Text,
  TouchableHighlight,
} from "react-native";
import Swiper from "react-native-swiper";
import { Image, SearchBar, ListItem } from "react-native-elements";
// import http from "../../http";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
// import global from "../../global";
import { connect } from "react-redux";
// import { addHttp } from "../../store/actions";
let { width: D_WIDTH } = Dimensions.get("window");

@connect((state) => ({ loading: state.loading }))
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      swiperImages: [banner3, banner1, banner2],
      listItem: [
        {
          name: "全部分类",
          avatar_url:
            "https://img12.360buyimg.com/n7/jfs/t1/109174/9/14186/294464/5ea794f4Ecdb56d8d/5af3aae687e9356a.jpg!q90",
          subtitle: "为爱定制",
        },
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
      isRefreshing: false,
      modalVisible: true,
    };
  }
  UNSAFE_componentWillMount() {
    this.getIndexPage();
  }
  UNSAFE_componentWillReceiveProps(nextProps) {}
  componentDidMount() {}
  componentWillUnmount() {}
  getIndexPage(refresh) {
    refresh && this.setState({ isRefreshing: true });
    this.$http
      .getIndexPage({ node_id: "10000000" })
      .then((res) => {
        this.setState({ isRefreshing: false });
      })
      .catch((res) => {
        this.setState({ isRefreshing: false });
      });
  }
  render() {
    let { search, swiperImages, listItem, isRefreshing } = this.state;
    let { navigation, loading } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "Top" }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              // 是否刷新
              refreshing={isRefreshing}
              onRefresh={this.getIndexPage.bind(this, "refresh")}
              tintColor={"#ff6600"}
              title={"下拉刷新"}
            />
          }
        >
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

          <View style={{ width: D_WIDTH, height: 300 }}>
            <Swiper
              style={styles.wrapper}
              showsButtons={true}
              height={300}
              showsButtons={false}
              activeDotColor="rgb(255, 45, 85)"
            >
              {swiperImages.map((v, i) => {
                return (
                  <TouchableWithoutFeedback
                    key={String(i)}
                    onPress={() => {
                      navigation.navigate("Class");
                    }}
                  >
                    <View style={styles.slide1} key={String(v)}>
                      <Image
                        source={v}
                        style={{ width: D_WIDTH, height: 300 }}
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
              paddingBottom: 0,
            }}
          >
            {this.state.proList.map((v, i) => {
              return (
                <Image
                  key={String(i)}
                  source={{
                    uri: v,
                  }}
                  style={{
                    width: D_WIDTH / 2 - 7.5,
                    height: D_WIDTH / 2 - 7.5,
                    marginBottom: 5,
                  }}
                ></Image>
              );
            })}
          </View>
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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              padding: 5,
              paddingBottom: 0,
            }}
          >
            {this.state.proList.map((v, i) => {
              return (
                <Image
                  key={String(i)}
                  source={{
                    uri: v,
                  }}
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
        {/* <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              marginTop: 22,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible,
                  });
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal> */}
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

// export default connect(({ loading }) => ({ loading }))(Home);
