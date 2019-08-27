import React, { Component, Fragment, TableHTMLAttributes } from "react";
import { Input, Icon, Button } from "react-native-elements";
import { Table, TableWrapper, Row, Cell } from "react-native-table-component";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from "react-native";
import { AppDrawerNav } from "../../App";
import HospitalDataTable from "../components/HospitalsDataTable";
import HeaderComponent from "../components/HeaderComponent";
import { db } from "../config";

let HospitalsRef = db.ref("/hopitals");

export default class HospitalListD extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    Hospitals: []
  };

  componentDidMount() {
    HospitalsRef.on("value", snapshot => {
      let data = snapshot.val();
      let Hospitals = Object.values(data);
      this.setState({ Hospitals });
    });
  }

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("HospitalDetails")}
      >
        <View>
          <Text style={{ padding: 9 }}>{data}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View>
        <StatusBar barStyle="light-content" backgroundColor="#2E6363" />
        <HeaderComponent
          title="Hospital List"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <ScrollView>
          <View style={styles.body}>
            <View style={{ alignItems: "center" }}>
              {/* <Text style={styles.title}>Hospital List</Text> */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  // flexWrap: "wrap",
                  width: "100%",
                  marginBottom: 5,
                  marginRight: 10,
                  marginTop: 30
                }}
              >
                <Input
                  placeholder="Search by name"
                  inputStyle={{
                    color: "#000000"
                  }}
                  inputContainerStyle={styles.customInputStyle}
                />
                <Button
                  icon={<Icon name="search" size={24} color="white" />}
                  buttonStyle={{ backgroundColor: "#000000" }}
                  onPress={() => this.props.navigation.AppDrawerNav()}
                  // onPress={() => this.props.navigation.navigate("Drawer")}
                />
              </View>
            </View>
            <View>
              {this.state.Hospitals.length > 0 ? (
                <HospitalDataTable Hospitals={this.state.Hospitals} />
              ) : (
                <Text>No Hospitals</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 28,
    marginTop: 50,
    marginBottom: 30,
    alignContent: "center"
  },
  body: {
    // flex: 6,

    backgroundColor: "#3F8585",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    minHeight: 700
  },
  customInputStyle: {
    width: "95%",
    height: 40,
    backgroundColor: "#ffffff"
  },
  container: { flex: 1, padding: 16, paddingTop: 30 },
  tableHeader: { height: 40, backgroundColor: "#B4B4B4" },
  text: { margin: 6, padding: 5 },
  row: { flexDirection: "row", backgroundColor: "#ffffff" }
});
