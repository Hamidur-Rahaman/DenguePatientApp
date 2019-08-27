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
import { ImageBackground, TouchableOpacity } from "react-native";
import { Tooltip } from "react-native-elements";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

export default class DeadList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../images/Asset1.png")}
        >
          <Content>
            <List>
              <ListItem thumbnail style={styles.itemContain}>
                <Left>
                  {/* source={{ uri: "../images/Asset1.png" }} */}
                  <Thumbnail circle source={require("../images/Asset1.png")} />
                </Left>
                <Body>
                  <Text>Id: 01</Text>
                  <Text>jone</Text>
                  <Text>Father Name: Janina</Text>
                </Body>
                <Right>
                  {/* <TouchableOpacity onPress={this.showMenu}>
                    <Icon type="FontAwesome" name="ellipsis-v" color="black" />
                  </TouchableOpacity> */}
                  <Menu
                    ref={this.setMenuRef}
                    button={
                      <Icon
                        onPress={this.showMenu}
                        type="FontAwesome"
                        name="ellipsis-v"
                        style={{
                          padding: 10
                        }}
                      />
                    }
                  >
                    <MenuItem onPress={this.hideMenu}>Release</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>Dead</MenuItem>
                    <MenuDivider />
                    <MenuItem onPress={this.hideMenu}>Details</MenuItem>
                  </Menu>
                </Right>
              </ListItem>
            </List>
          </Content>
        </ImageBackground>
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
