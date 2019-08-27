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
import PropTypes from "prop-types";
import { AppDrawerNav } from "../../App";

export default class HospitalDataTable extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    Hospitals: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    var ar1 = [];
    var ar2 = [];
    this.props.Hospitals.map(function(i) {
      //   return i.HospitalName;
      ar1 = [];
      ar1.push(i.HospitalName);
      ar1.push(i.Release);
      ar1.push(i.Dead);
      ar1.push(i.Existing);
      ar2.push(ar1);
    });
    this.state = {
      tableHead: ["Name", "Release", "Dead", "Existing"],
      tableData: ar2
    };

    // this.props.Hospitals.map((hospital, index) => {
    //   this.state.tableData.push(hospital.HospitalName);
    // });
  }

  render() {
    // var tt = this.props.Hospitals.map(function(i) {
    //   return i.HospitalName;
    // });
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity
        onPress={() => props.navigation.navigate("HospitalDetails")}
      >
        <View>
          <Text style={{ padding: 9 }}>{data}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Table>
                <Row
                  data={state.tableHead}
                  style={styles.tableHeader}
                  textStyle={styles.text}
                  // widthArr={state.widthArr}
                />
                {state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={styles.row}>
                    {rowData.map((cellData, cellIndex) => (
                      <Cell
                        key={cellIndex}
                        data={
                          cellIndex === 0 ? element(cellData, index) : cellData
                        }
                        textStyle={styles.text}
                      />
                    ))}
                  </TableWrapper>
                ))}
              </Table>
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
