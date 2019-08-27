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
import HeaderComponent from "../components/HeaderComponent";
export default class HospitalEntryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HospitalName: "",
      Licensenumber: "",
      Address: "",
      Email: "",
      Password: "",
      isSubmitted: false
    };
  }

  static navigationOptions = {
    header: null
  };

  postHospital = (
    HospitalName,
    Licensenumber,
    Address,
    Email,
    Password,
    HospitalNameClear,
    LicensenumberClear,
    AddressClear,
    EmailClear,
    PasswordClear
  ) => {
    if (this.state.HospitalName != null) {
      fetch("https://denguesurvey.firebaseio.com/hopitals.json", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          HospitalName: HospitalName,
          Licensenumber: Licensenumber,
          Address: Address,
          Email: Email,
          Password: Password
        })
      })
        .then(response => response.json())
        .then(responseData => {
          if (responseData.name != null) {
            this.refs[HospitalNameClear].setNativeProps({ text: "" });
            this.refs[LicensenumberClear].setNativeProps({ text: "" });
            this.refs[AddressClear].setNativeProps({ text: "" });
            this.refs[EmailClear].setNativeProps({ text: "" });
            this.refs[PasswordClear].setNativeProps({ text: "" });
            this.setState({
              HospitalName: null,
              Licensenumber: null,
              Address: null,
              Email: null,
              Password: null,
              isSubmited: true
            });
          } else {
            Alert.alert(
              "Oops !",
              "Something went wrong",
              [
                {
                  text: "OK",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                }
              ],
              { cancelable: false }
            );
          }
        })
        .done();
    }
  };

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#00789F" />
        <HeaderComponent
          title="Hospital Entry"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset1.png")}
        >
          <View style={{ width: "100%", height: "100%", backgroundColor:"#2579FC50" }}>
          <ScrollView>
            <View style={styles.body}>
              <View>
                <Text style={styles.title}>
                  Hospital information
                </Text>
              </View>
              <View>
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Hospital Name"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={HospitalName => this.setState({ HospitalName })}
                  ref={"HospitalNameClear"}
                />

                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="License number"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Licensenumber =>
                    this.setState({ Licensenumber })
                  }
                  ref={"LicensenumberClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Address"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Address => this.setState({ Address })}
                  ref={"AddressClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Email"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Email => this.setState({ Email })}
                  ref={"EmailClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Password"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Password => this.setState({ Password })}
                  ref={"PasswordClear"}
                />

                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() =>
                      this.postHospital(
                        this.state.HospitalName,
                        this.state.Licensenumber,
                        this.state.Address,
                        this.state.Email,
                        this.state.Password,
                        "HospitalNameClear",
                        "LicensenumberClear",
                        "AddressClear",
                        "EmailClear",
                        "PasswordClear"
                      )
                    }
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "bold"
                      }}
                    >
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: "#046DAD",
    fontSize: 28,
    fontWeight: "bold",
    // marginTop: 50,
    marginBottom: 30,
    textAlign: "left",
    marginLeft: 15
  },
  body: {
    flex: 6,
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  customInputStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    marginBottom: 12,
    opacity: 0.6,
    borderRadius: 20,
    borderBottomWidth: 0
    // paddingTop: 5
  },
  buttonStyle: {
    backgroundColor: "#046DAD",
    width: "95%",
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 12,
    marginTop: 10
  }
});
