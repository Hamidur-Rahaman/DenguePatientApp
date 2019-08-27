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
      FathersName:"",
      MothersName:"",
      MobileNumber: "",
      EmergencyContactName:'',
      EmergencyMobileNumber: "",
      Adress: "",
      Age: "",
      BloodGroup: "",
      Date:"",
      isSubmitted: false
    };
  }
  static navigationOptions = {
    header: null
  };

  postPatient = (
    PatientId,
    PatientName,
    FathersName,
    MothersName,
    MobileNumber,
    EmergencyContactName,
    EmergencyMobileNumber,
    Address,
    Age,
    BloodGroup,
    Date,
    PatientIdClear,
    PatientNameClear,
    FathersNameClear,
    MothersNameClear,
    MobileNumberClear,
    EmergencyContactNameClear,
    EmergencyMobileNumberClear,
    AddressClear,
    AgeClear,
    BloodGroupClear,
    DateClear
  ) => {
    if (this.state.PatientId != null) {
      fetch(
        "https://denguesurvey.firebaseio.com/hopitals/-LlkzqZ0TZUjViIu2bCU/ExistingPatient.json",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            PatientId: PatientId,
            PatientName: PatientName,
            FathersName: FathersName,
            MothersName: MothersName,
            MobileNumber: MobileNumber,
            EmergencyContactName:EmergencyContactName,
            EmergencyMobileNumber: EmergencyMobileNumber,
            Address: Address,
            Age: Age,
            BloodGroup: BloodGroup,
            Date:Date,
          })
        }
      )
        .then(response => response.json())
        .then(responseData => {
          if (responseData.name != null) {
            this.refs[PatientIdClear].setNativeProps({ text: "" });
            this.refs[PatientNameClear].setNativeProps({ text: "" });
            this.refs[FathersNameClear].setNativeProps({ text: "" });
            this.refs[MothersNameClear].setNativeProps({ text: "" });
            this.refs[MobileNumberClear].setNativeProps({ text: "" });
            this.refs[EmergencyContactNameClear].setNativeProps({ text: "" });
            this.refs[EmergencyMobileNumberClear].setNativeProps({ text: "" });
            this.refs[AddressClear].setNativeProps({ text: "" });
            this.refs[AgeClear].setNativeProps({ text: "" });
            this.refs[BloodGroupClear].setNativeProps({ text: "" });
            this.refs[DateClear].setNativeProps({ text: "" });
            this.setState({
              PatientId: null,
              PatientName: null,
              FathersName:null,
              MothersName:null,
              MobileNumber: null,
              EmergencyContactName:null,
              EmergencyMobileNumber: null,
              Address: null,
              Age: null,
              BloodGroup: null,
              Date:null,
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
        <StatusBar barStyle="light-content" backgroundColor="#00789F" />
        <HeaderComponent
          title="Patient Entry"
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
                <Text style={styles.title}>Patient information</Text>
              </View>
              <View>
                <Input
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Patient Id"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={PatientId => this.setState({ PatientId })}
                  ref={"PatientIdClear"}
                />

                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Patient Name"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={PatientName => this.setState({ PatientName })}
                  ref={"PatientNameClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Father's Name"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={FathersName => this.setState({ FathersName })}
                  ref={"FathersNameClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Mother's Name"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={MothersName => this.setState({ MothersName })}
                  ref={"MothersNameClear"}
                />
                
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Mobile Number"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={MobileNumber => this.setState({ MobileNumber })}
                  ref={"MobileNumberClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Emergency contact Name"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={EmergencyContactName =>
                    this.setState({ EmergencyContactName })
                  }
                  ref={"EmergencyContactNameClear"}
                />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Emergency contact Number"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={EmergencyMobileNumber =>
                    this.setState({ EmergencyMobileNumber })
                  }
                  ref={"EmergencyMobileNumberClear"}
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
                  placeholder="Age"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Age => this.setState({ Age })}
                  ref={"AgeClear"}
               />
                <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="BloodGroup"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={BloodGroup => this.setState({ BloodGroup })}
                  ref={"BloodGroupClear"}
               />
               <Input
                  shake={true}
                  inputStyle={{
                    color: "#000000",
                    paddingLeft: 10
                  }}
                  placeholder="Date"
                  placeholderTextColor="gray"
                  inputContainerStyle={styles.customInputStyle}
                  onChangeText={Date => this.setState({ Date })}
                  ref={"DateClear"}
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
                        this.state.FathersName,
                        this.state.MothersName,
                        this.state.MobileNumber,
                        this.state.EmergencyContactName,
                        this.state.EmergencyMobileNumber,
                        this.state.Address,
                        this.state.Age,
                        this.state.BloodGroup,
                        this.state.Date,
                        "PatientIdClear",
                        "PatientNameClear",
                        "FathersNameClear",
                        "MothersNameClear",
                        "MobileNumberClear",
                        "EmergencyContactNameClear",
                        "EmergencyMobileNumberClear",
                        "AddressClear",
                        "AgeClear",
                        "BloodGroupClear",
                        "DateClear"
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
          </View>
        </ImageBackground>
      </Fragment>
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
    //backgroundColor: "#70B4E0",
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
