import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Camera } from "expo-camera";
export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CameraType: Camera.Constants.Type.back,
    };
  }
  UNSAFE_componentWillMount() {
    this.props.navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }
  componentWillUnmount() {
    // console.log(this.props);
    if (this.props.route.params && this.props.route.params.callback) {
      this.props.route.params.callback();
    }
  }

  //切换前后摄像头
  switchCamera() {
    var state = this.state;
    if (state.cameraType === Camera.constants.Type.back) {
      state.cameraType = Camera.constants.Type.front;
    } else {
      state.cameraType = Camera.constants.Type.back;
    }
    this.setState(state);
  }

  //拍摄照片
  takePicture() {
    Camera.capture()
      .then(function (data) {
        alert("拍照成功！图片保存地址：\n" + data.path);
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera style={styles.preview} type={this.state.CameraType}>
          {/* <Text style={styles.button} onPress={this.switchCamera.bind(this)}>
            [切换摄像头]
          </Text>
          <Text style={styles.button} onPress={this.takePicture.bind(this)}>
            [拍照]
          </Text> */}
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  preview: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  toolBar: {
    width: 200,
    margin: 40,
    backgroundColor: "#000000",
    justifyContent: "space-between",
  },
  button: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
    padding: 10,
    margin: 40,
  },
});
