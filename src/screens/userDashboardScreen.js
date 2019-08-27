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
  ImageBackground
} from "react-native";
import HeaderComponent from "../components/HeaderComponent";
export default class UserDashboardScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#046DAD" />
        <HeaderComponent
          title="Dashboard"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset1.png")}
        >
          <View style={{ width: "100%", height: "100%", backgroundColor:"#2579FC50" }}>
          <View style={styles.body}>
            <View style={styles.cartContainer}>
              <View style={styles.cartstyle}>
                <Icon
                  name="users"
                  type="font-awesome"
                  color="#000"
                  iconStyle={{ fontSize: 35 }}
                />
                <Text>Total Patient</Text>
                <Text style={{ fontSize: 35 }}>43</Text>
              </View>

              <View style={styles.cartstyle} backgroundColor="#7A9214">
                <Icon
                  name="bed"
                  type="font-awesome"
                  color="#000"
                  iconStyle={{ fontSize: 35 }}
                />
                <Text>Existing Patient</Text>
                <Text style={{ fontSize: 35 }}>12</Text>
              </View>

              <View style={styles.cartstyle} backgroundColor="#F69090">
                <Icon
                  name="account-off-outline"
                  type="material-community"
                  color="#000"
                  iconStyle={{ fontSize: 35 }}
                />
                <Text>Total Dead</Text>
                <Text style={{ fontSize: 35 }}>2</Text>
              </View>

              <View style={styles.cartstyle} backgroundColor="#20ADD9">
                <Icon
                  name="account-check-outline"
                  type="material-community"
                  color="#000"
                  iconStyle={{ fontSize: 35 }}
                />
                <Text>Total Release </Text>
                <Text style={{ fontSize: 35 }}>29</Text>
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
  body: {
    flex: 6,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  cartContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 50
  },
  cartstyle: {
    backgroundColor: "#229CA5",
    padding: 15,
    width: "40%",
    alignItems: "center",
    // marginRight: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.99,
    shadowRadius: 8.3,

    elevation: 13
  }
});
