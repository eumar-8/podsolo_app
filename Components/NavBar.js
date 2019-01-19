import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
export default class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.navBarContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
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

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: "#30343f",
    flex: 1,
    flexDirection: "row",
    height: 80
  },

  logo: {
    flex: 1,
    width: 30,
    height: 30,
    marginTop: 40,
    resizeMode: "contain",
    paddingBottom: 30
  }
});
