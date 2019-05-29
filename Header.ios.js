import React, { Component } from "react";

import { Text } from "react-native";

import HeaderStyle from "./src/styles/HeaderStyle";

export default class Header extends Component {
  render() {
    return <Text style={HeaderStyle.iOSHeader}>Chop Life</Text>;
  }
}
