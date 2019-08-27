import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Fab,
  View
} from "native-base";
import { ImageBackground } from "react-native";
import PropTypes from "prop-types";
import { ScrollView } from "react-native-gesture-handler";

export default class HospitalList extends Component {
  static propTypes = {
    Hospitals: PropTypes.array.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
    
            {this.props.Hospitals.map((hospital, index) => {
              return (
       
                <ListItem thumbnail style={styles.itemContain}>
                  <Left>
                    <Thumbnail
                      square
                      source={require("../images/Asset1.png")}
                    />
                  </Left>
                  <Body>
                    <Text>{hospital.HospitalName}</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 14,
                          marginRight: 8,
                          color: "#0D649F"
                        }}
                      >
                        Existing: {hospital.Existing}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginRight: 8,
                          color: "#0C8749"
                        }}
                      >
                        Released: {hospital.Release}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginRight: 8,
                          color: "#C20000"
                        }}
                      >
                        Dead: {hospital.Dead}
                      </Text>
                    </View>
                  </Body>
                </ListItem>
              );
            })}
          
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = {
  itemContain: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginRight: 10,
    paddingLeft: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    opacity: 0.95
  }
};
