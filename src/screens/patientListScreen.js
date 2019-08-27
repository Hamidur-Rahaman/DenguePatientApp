import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import ExistingList from "../components/ExistingList";
import ReleasedList from "../components/ReleasedList";
import DeadList from "../components/DeadList";
import HeaderComponent from "../components/HeaderComponent";
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

import { db } from "../config";

let ExistingPatientsRef = db.ref(
  "/hopitals/-LlkzqZ0TZUjViIu2bCU/ExistingPatient"
);

let ReleasedPatientsRef = db.ref(
  "/hopitals/-LlkzqZ0TZUjViIu2bCU/ReleasedPatient"
);
// let PatientsRef = db
//   .child("patient")
//   .orderByChild("Status")
//   .equalTo("Existing");
export default class NewPatientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patients: [],
      Released:[]
    };
  }
  componentDidMount() {
    ExistingPatientsRef.on("value", snapshot => {
      let data = snapshot.val();
      let Patients = Object.values(data);
      this.setState({ Patients });
    });
    ReleasedPatientsRef.on("value", snapshot => {
      let data = snapshot.val();
      let Released = Object.values(data);
      this.setState({ Released });
    });
  }
  render() {
    return (
      <Container>
        <HeaderComponent
          title="Patient List"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <Tabs>
          <Tab
            tabStyle={{ backgroundColor: "#046DAD" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#046DAD" }}
            activeTextStyle={{ color: "#fff", fontWeight: "bold" }}
            heading="Exsting"
          >
            {this.state.Patients.length > 0 ? (
              <ExistingList Patients={this.state.Patients} />
            ) : (
              <Text>No Patients</Text>
            )}
          </Tab>
          <Tab
            heading="Released"
            tabStyle={{ backgroundColor: "#046DAD" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#046DAD" }}
            activeTextStyle={{ color: "#fff", fontWeight: "bold" }}
          >
            {this.state.Released.length > 0 ? (
              <ReleasedList Released={this.state.Released} />
            ) : (
              <Text>No Patients</Text>
            )}
          </Tab>
          <Tab
            heading="Dead"
            tabStyle={{ backgroundColor: "#046DAD" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "#046DAD" }}
            activeTextStyle={{ color: "#fff", fontWeight: "bold" }}
          >
            <DeadList></DeadList>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
