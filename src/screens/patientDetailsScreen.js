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
export default class PatientDetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PatientId: "1",
      PatientName: "Momenul",
      FathersName: "Janina",
      MothersName:"Janina",
      MobileNumber: "0283472",
      EmergencyContactName:"6567385",
      EmergencyMobileNumber: "73674",
      Adress: "Dhaka",
      Age: "24",
      BloodGroup: "A+",
      Date: "2-4-2019"
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View >
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <HeaderComponent
          title="Patient details"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset2.png")}
        >
          <ScrollView>
            <View style={styles.body}>
              <Text style={styles.title}>
                {this.state.PatientName}'s Information
              </Text>
              <Text style={styles.text}>Id: {this.state.PatientId}</Text>
              <Text style={styles.text}>Name: {this.state.PatientName}</Text>
              <Text style={styles.text}>Father: {this.state.FathersName}</Text>
              <Text style={styles.text}>Mother: {this.state.MothersName}</Text>
              <Text style={styles.text}>Mobile: {this.state.MobileNumber}</Text>
              <Text style={styles.text}>Emargency Contact Name: {this.state.EmergencyContactName}</Text>
              <Text style={styles.text}>
                Emergency Contact: {this.state.EmergencyMobileNumber}
              </Text>
              <Text style={styles.text}>Address: {this.state.Adress}</Text>
              <Text style={styles.text}>Age: {this.state.Age}</Text>
              <Text style={styles.text}>
                Blood Group: {this.state.BloodGroup}
              </Text>
              <Text style={styles.text}>Date: {this.state.Date}</Text>
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
    fontFamily: 'Montserrat',
    fontStyle: 'italic',
    fontWeight: 'bold',
  }
});
