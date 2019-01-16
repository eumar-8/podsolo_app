import React from "react";
import { Text, View } from "react-native";
import { SearchBar } from "react-native-elements";
import Styles from "./Styles/navBarStyle";
export default class NavBar extends React.Component {
  render() {
    return (
      <View style={Styles.navBar}>
        <SearchBar
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
        />
      </View>
    );
  }
}
