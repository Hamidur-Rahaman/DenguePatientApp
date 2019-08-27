import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
//import ItemComponent from "../components/ItemCompont";
import HospitalsComponent from "../components/HospitalsComponent";

import { db } from "../config";

let HospitalsRef = db.ref("/hopitals");

export default class List extends Component {
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
    return (
      <View style={styles.container}>
        {this.state.Hospitals.length > 0 ? (
          <HospitalsComponent Hospitals={this.state.Hospitals} />
        ) : (
          <Text>No Hospitals</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ebebeb"
  }
});
