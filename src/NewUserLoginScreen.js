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
  Alert
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
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <View style={styles.body}>
          <Text style={styles.title}>Login as an user </Text>
          <View>
            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="Email"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
              inputContainerStyle={styles.customInputStyle}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />

            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="Password"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
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
                  Login
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{ color: "#fff" }}>Forget password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 28,
    marginTop: 50,
    marginBottom: 30
  },
  body: {
    flex: 6,
    backgroundColor: "#3F8585",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  customInputStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "#ffffff",
    marginBottom: 12
  },
  buttonStyle: {
    backgroundColor: "#25323D",
    width: "30%",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 12,
    marginTop: 10
  }
});
