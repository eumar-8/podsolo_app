import React from "react";
import {  View, Image } from "react-native";
import  styles from "./NavbarStyle"

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navBarContainer}>
        <Image
          style={styles.logo}
          source={require("../../../assets/logo.png")}
          // resizeMode="contain"
        />

        {/* <SearchBar
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder="Search"
        /> */}
      </View>
    );
  }
}


