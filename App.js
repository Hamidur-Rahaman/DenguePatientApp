/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import PatientEntryScreen from "./src/screens/PatientEntryScreen";
import HospitalEntryScreen from "./src/screens/hospitalEntryScreen";
import DashboardScreen from "./src/screens/dashboard";
import UserLoginScreen from "./src/screens/userLogin";
import PatientDetailsScreen from "./src/screens/patientDetailsScreen";
import HospitalDetailsScreen from "./src/screens/HospitalDetailsScreen";
import UserDashboardScreen from "./src/screens/userDashboardScreen";
import NewHospitalListScreen from "./src/screens/HospitalListScreen"
import newLoginScreen from "./src/screens/LoginScreen";
import NewPatientList from "./src/screens/PatientListScreen";
import NewHomeScreen from "./src/screens/HomeScreen";

export const AuthStack = createStackNavigator(
  {
    HomeScreen: NewHomeScreen
  },
  {
    headerMode: null
  }
);
export const AppDrawerNav = createDrawerNavigator(
  {
    Dashboard: DashboardScreen,
    "Hospital Entry": HospitalEntryScreen,
    "Hospital List": NewHospitalListScreen,
    HospitalDetails: HospitalDetailsScreen,
    "Log out":NewHomeScreen
  },
  {
    getCustomActionCreators: (route, statekey) => {
      return {
        toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: statekey })
      };
    },
    drawerPosition: "left"
  },
  {
    headerMode: null
  }
);
export const UserDrawerNav = createDrawerNavigator(
  {
    UserDashboard: UserDashboardScreen,
    "Patient Entry": PatientEntryScreen,
    "Patient List": NewPatientList,
    PatientDetails: PatientDetailsScreen,
    "Log out":NewHomeScreen

  },
  {
    getCustomActionCreators: (route, statekey) => {
      return {
        toggleLeftDrawer: () => DrawerActions.toggleDrawer({ key: statekey })
      };
    },
    drawerPosition: "left"
  },
  {
    headerMode: null
  }
);
export const StackNav = createStackNavigator(
  {
    Drawer: AppDrawerNav,
    UserDrawer: UserDrawerNav,
    Login: newLoginScreen,
    UserLogin: UserLoginScreen,
    HospitalEntryScreen: HospitalEntryScreen,
    DashboardScreen: DashboardScreen
  },
  {
    header: null,
    headerMode: "none"
  }
);

const RootStack = createStackNavigator(
  {
    Auth: AuthStack,
    App: StackNav
    // Test: Test
  },
  { initialRouteName: "Auth", header: null, headerMode: "none" }
);
const AppContainer = createAppContainer(RootStack);
const App = () => {
  return (
    <AppContainer />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black"
  },
  engine: {
    // position: "absolute",
    // right: 0
  },
  body: {
    backgroundColor: "#3F8585",
    alignItems: "center"
  }
});

export default App;
