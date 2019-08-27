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
  Alert,
  ImageBackground
} from "react-native";
import { db } from "../config";
let HospitalUserRef = db.ref();
export default class UserLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleLogin = () => {
    if (this.state.email != "") {
      // TODO: Firebase stuff...
      // console.log('handleLogin');
      HospitalUserRef.child("hopitals")
        .orderByChild("Email")
        .equalTo(this.state.email)
        .once("value", snapshot => {
          if (snapshot.exists()) {
            // const userData = snapshot.val();
            // console.log("exists!", userData);
            // Alert.alert('Hello');
            this.props.navigation.navigate("UserDashboard");
          } else {
            Alert.alert("Invalid login");
          }
        });
    } else {
      Alert.alert("Please input email & password");
    }
  };
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#00789F" />
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset1.png")}
        >
          <View style={styles.body}>
            <View>
              <Text style={styles.title}>Sign In as User </Text>
            </View>
            <View>
              <Input
                shake={true}
                leftIcon={
                  <Icon
                    type="font-awesome"
                    name="envelope-o"
                    size={20}
                    color="#fff"
                  />
                }
                inputStyle={{
                  color: "#000000",
                  paddingLeft: 10
                }}
                placeholder="Email"
                placeholderTextColor="#ffffff"
                inputContainerStyle={styles.customInputStyle}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />

              <Input
                shake={true}
                leftIcon={<Icon type="octicon" name="lock" color="#fff" />}
                inputStyle={{
                  color: "#000000",
                  paddingLeft: 10
                }}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#ffffff"
                inputContainerStyle={styles.customInputStyle}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />

              <View style={{ alignItems: "center" }}>
                {/* <Button
                title="Login"
                buttonStyle={{
                  backgroundColor: "#25323D",
                  width: "30%",
                  marginTop: 10,
                  borderRadius: 10,
                  //   paddingRight: 10
                }}
                // onPress={() => this.props.navigation.navigate("LogIn")}
              /> */}

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={this.handleLogin}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                  <Text style={{ color: "#000",  }}>
                    Forget password?
                  </Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </ImageBackground>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: "#00789F",
    fontSize: 28,
    fontWeight: "bold",
    // marginTop: 50,
    marginBottom: 30,
    textAlign: "left",
    marginLeft: 15
  },
  body: {
    flex: 6,
    // backgroundColor: "#3F8585",
    // alignItems: "center",
    // alignContent: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  customInputStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "#70B4E0",
    marginBottom: 12,
    opacity: 0.6,
    borderRadius: 20,
    borderBottomWidth: 0
    // paddingTop: 5
  },
  buttonStyle: {
    backgroundColor: "#00789F",
    width: "95%",
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 12,
    marginTop: 10
  }
});
