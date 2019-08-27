import React, { Component, Fragment } from "react";
import { Input, Icon, Button } from "react-native-elements";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground
} from "react-native";
export default class Test extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <View style={styles.body}>
          <View style={{ width: "100%", height: 200 }}>
            <ImageBackground
              style={{ width: "100%", height: "100%" }}
              source={require("./Pic/chatback.png")}
            >
              <Image
                style={{ width: "100%", height: 300, opacity: 0.33 }}
                source={require("./Pic/latestcurve.png")}
              />
              {/* <Text> Chat app</Text> */}
            </ImageBackground>
          </View>
          <View>
            <Text> Chat app</Text>
          </View>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    // flex: 6,
    backgroundColor: "#fff"
    // alignItems: "center",
    // textAlign: "center",
    // padding: 10
  }
});
