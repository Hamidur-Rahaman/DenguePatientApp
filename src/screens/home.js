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
  Image
} from "react-native";
export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <View style={styles.body}>
          <Text style={styles.title}>Dengue Patient Management </Text>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
                Admin
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => this.props.navigation.navigate("UserLogin")}
            >
              <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
                User
              </Text>
            </TouchableOpacity>
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
    textAlign: "center",
    padding: 10
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
