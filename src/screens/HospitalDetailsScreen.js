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
import HeaderComponent from "../components/HeaderComponent"
export default class HospitalDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HospitalName: "Dhaka Medical",
      Licensenumber: "DMC123",
      Address: "Dhaka",
      Email: "DMC@gmail.com",
      Existing: "10",
      Dead: "2",
      Released: "5",
      Password: "",
      isSubmitted: false
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <HeaderComponent
          title="Hospital Details"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset2.png")}
        >
          <ScrollView>
            <View style={styles.body}>
              <Text style={styles.title}>
                {""}
                {this.state.HospitalName} information
              </Text>

              <Text style={styles.text}>
                Hospital Name: {this.state.HospitalName}
              </Text>
              <Text style={styles.text}>
                License Number: {this.state.Licensenumber}
              </Text>
              <Text style={styles.text}>Adderess: {this.state.Address}</Text>
              <Text style={styles.text}>Email: {this.state.Email}</Text>
              <Text style={styles.text}>
                Existing Patient: {this.state.Existing}
              </Text>
              <Text style={styles.text}>Dead Patient: {this.state.Dead}</Text>
              <Text style={styles.text}>
                Released Patient: {this.state.Released}
              </Text>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: "#00789F",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30
  },
  body: {
    alignItems: "center",
    backgroundColor:"#FFFFFF90",
    opacity:50,
    margin:15,
    paddingBottom:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,

  },
  text: {
    fontSize: 20,
    color: "#00789F",
    margin: 10,
    fontFamily: 'Cochin',
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});
