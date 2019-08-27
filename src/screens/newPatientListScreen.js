import React, { Component } from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import ExistingList from "../components/ExistingList";
import HeaderComponent from "../components/HeaderComponent"
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
export default class NewPatientList extends Component {
  render() {
    return (
      <Container>
         <HeaderComponent 
         title="Patient List"
         leftButton={() => this.props.navigation.toggleLeftDrawer()}
         />
        <Tabs>
          <Tab heading="Exsting">
            <ExistingList />
          </Tab>
          <Tab heading="Released">
            <Text>tab 2</Text>
          </Tab>
          <Tab heading="Dead">
            <Text>tab 1</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
