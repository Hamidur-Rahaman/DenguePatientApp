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
export default class PatientEntryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PatientId: "",
      PatientName: "",
      MobileNumber: "",
      EmergencyMobileNumber: "",
      Adress: "",
      Age: "",
      BloodGroup: "",
      isSubmitted: false
    };
  }
  static navigationOptions = {
    header: null
  };

  postPatient = (
    PatientId,
    PatientName,
    MobileNumber,
    EmergencyMobileNumber,
    Address,
    Age,
    BloodGroup,
    PatientIdClear,
    PatientNameClear,
    MobileNumberClear,
    EmergencyMobileNumberClear,
    AddressClear,
    AgeClear,
    BloodGroupClear
  ) => {
    if (this.state.PatientId != null) {
      fetch(
        "https://denguesurvey.firebaseio.com/hopitals/-LlkzqZ0TZUjViIu2bCU/patient.json",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            PatientId: PatientId,
            PatientName: PatientName,
            MobileNumber: MobileNumber,
            EmergencyMobileNumber: EmergencyMobileNumber,
            Address: Address,
            Age: Age,
            BloodGroup: BloodGroup
          })
        }
      )
        .then(response => response.json())
        .then(responseData => {
          if (responseData.name != null) {
            this.refs[PatientIdClear].setNativeProps({ text: "" });
            this.refs[PatientNameClear].setNativeProps({ text: "" });
            this.refs[MobileNumberClear].setNativeProps({ text: "" });
            this.refs[EmergencyMobileNumberClear].setNativeProps({ text: "" });
            this.refs[AddressClear].setNativeProps({ text: "" });
            this.refs[AgeClear].setNativeProps({ text: "" });
            this.refs[BloodGroupClear].setNativeProps({ text: "" });
            this.setState({
              PatientId: null,
              PatientName: null,
              MobileNumber: null,
              EmergencyMobileNumber: null,
              Address: null,
              Age: null,
              BloodGroup: null,
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
          title="Patient Entry"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />

        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset1.png")}
        >
          <ScrollView>
            <View style={styles.body}>
              <View>
                <Text style={styles.title}>Input Patient information</Text>
              </View>
              <View>
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Patient Id"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={PatientId => this.setState({ PatientId })}
                />

                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Patient Name"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={PatientName => this.setState({ PatientName })}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Mobile Number"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={MobileNumber => this.setState({ MobileNumber })}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Emergency contact Number"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={EmergencyMobileNumber =>
                    this.setState({ EmergencyMobileNumber })
                  }
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Address"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Address => this.setState({ Address })}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Age"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Age => this.setState({ Age })}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="BloodGroup"
                  placeholderTextColor="#ffffff"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={BloodGroup => this.setState({ BloodGroup })}
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
                    onPress={() =>
                      this.postPatient(
                        this.state.PatientId,
                        this.state.PatientName,
                        this.state.MobileNumber,
                        this.state.EmergencyMobileNumber,
                        this.state.Address,
                        this.state.Age,
                        this.state.BloodGroup,
                        "PatientIdClear",
                        "PatientNameClear",
                        "MobileNumberClear",
                        "EmergencyMobileNumberClear",
                        "AddressClear",
                        "AgeClear",
                        "BloodGroupClear"
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
                  {/* <TouchableOpacity>
                  <Text style={{ color: "#000",  }}>
                    Forget password?
                  </Text>
                </TouchableOpacity> */}
                </View>
              </View>
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
