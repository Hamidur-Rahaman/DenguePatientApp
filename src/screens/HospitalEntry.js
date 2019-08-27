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
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <View style={styles.body}>
          <Text style={styles.title}>Hospital Information</Text>
          <View>
            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="Hospital Name"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
              inputContainerStyle={styles.customInputStyle}
              onChangeText={HospitalName => this.setState({ HospitalName })}
              ref={"HospitalNameClear"}
            />

            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="License Number"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
              inputContainerStyle={styles.customInputStyle}
              onChangeText={Licensenumber => this.setState({ Licensenumber })}
              ref={"LicensenumberClear"}
            />

            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="Address"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
              inputContainerStyle={styles.customInputStyle}
              onChangeText={Address => this.setState({ Address })}
              ref={"AddressClear"}
            />
            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="Email"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
              inputContainerStyle={styles.customInputStyle}
              onChangeText={Email => this.setState({ Email })}
              ref={"EmailClear"}
            />
            <Input
              inputStyle={{
                color: "#000000"
              }}
              label="Password"
              labelStyle={{ color: "#ffffff", paddingBottom: 5 }}
              inputContainerStyle={styles.customInputStyle}
              onChangeText={Password => this.setState({ Password })}
              ref={"PasswordClear"}
            />

            <View style={styles.buttonStyle}>
              <Button
                title="Submit"
                buttonStyle={{
                  backgroundColor: "#25323D",
                  width: "20%",
                  marginTop: 10,
                  borderRadius: 10,
                  alignContent: "center"
                }}
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
                // onPress={() => this.props.navigation.navigate("LogIn")}
              />
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
    alignItems: "flex-end"
  }
});
