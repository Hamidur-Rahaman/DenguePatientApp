import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class HospitalsComponent extends Component {
  static propTypes = {
    Hospitals: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.itemsList}>
        {this.props.Hospitals.map((hospital, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{hospital.HospitalName}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around"
  },
  itemtext: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  }
});
