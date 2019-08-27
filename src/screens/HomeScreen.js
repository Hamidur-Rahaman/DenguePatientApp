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
export default class NewHomeScreen extends Component {
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
          <View style={{ width: "100%", height: "100%", backgroundColor:"#2579FC30" }}>
          <View style={styles.body}>
            <View>
              <Text style={styles.title}>Dengue Patient Management App </Text>
            </View>
            <View>
              
            <View style={{ alignItems: "center" }}>
                

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}
                  >
                    Admin
                  </Text>
                </TouchableOpacity>
              </View>
             

              <View style={{ alignItems: "center" }}>
                

                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => this.props.navigation.navigate("UserLogin")}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}
                  >
                    User
                  </Text>
                </TouchableOpacity>
              </View>
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
      marginBottom: 150,
      textAlign: "center",
      marginLeft: 15
    },
    body: {
      flex: 6,
      marginTop:100,
      flexDirection:"column",
      justifyContent: "flex-start",
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10
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