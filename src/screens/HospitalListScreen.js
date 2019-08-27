import React, { Component } from "react";

import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import HospitalList from "../components/HospitalList";
import { Tooltip } from "react-native-elements";

import { db } from "../config";
import { ScrollView } from "react-native-gesture-handler";

let HospitalsRef = db.ref("/hopitals");

export default class NewHospitalListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hospitals: [],
      active: false
    };
  }
  componentDidMount() {
    HospitalsRef.on("value", snapshot => {
      let data = snapshot.val();
      let Hospitals = Object.values(data);
      this.setState({ Hospitals });
    });
  }

  render() {
    return (
      <View>
        
        {/* <Header /> */}
        <HeaderComponent
          title="Hospital List"
          leftButton={() => this.props.navigation.toggleLeftDrawer()}
        />
        <ScrollView>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset2.png")}
        >
          {this.state.Hospitals.length > 0 ? (
            <HospitalList Hospitals={this.state.Hospitals} />
          ) : (
            <Text>No Hospitals</Text>
          )}
        </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}
