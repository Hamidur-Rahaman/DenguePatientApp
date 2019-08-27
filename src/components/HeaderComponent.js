import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Header, Icon, Badge } from "react-native-elements";

const HeaderComponent = props => {
  return (
    <Header
      leftComponent={{
        // onPress: () => this.props.navigation.toggleLeftDrawer(),
        onPress: props.leftButton,
        icon: "menu",
        color: "#fff",
        size: 35
      }}
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontSize: 24, fontWeight: "bold" }
      }}
      containerStyle={{
        backgroundColor: "#046DAD"
        // justifyContent: "space-around"
      }}
    />
  );
};

export default HeaderComponent;
