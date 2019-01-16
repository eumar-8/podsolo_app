import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Text, View, ScrollView, Picker } from "react-native";
import Navbar from "../Components/NavBar";
import DropdownCountries from "../Components/DropdownCountries";
import { getTopPodcastsForCountry } from "../api";
import PodcastCard from "../Components/PodcastCard";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e1e8ee"
  },
  wrapper: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start" // if you want to fill rows left to right
  },
  item: {
    width: "50%" // is 50% of container width
  }
});
export default class HomeScreen extends React.Component {
  state = {
    topPodcasts: []
  };
  static navigationOptions = {
    header: (
      <View style={styles.header}>
        <Navbar />
      </View>
    )
  };

  onCountryChange = country => {
    getTopPodcastsForCountry(country).then(topPodcasts => {
      this.setState({ topPodcasts });
    });
  };

  render() {
    //console.log(this.state.topPodcasts);
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <LinearGradient
          colors={["#048a81", "#007276", "#005b68", "#004455", "#022f40"]}
          style={{ flex: 1, width: "100%" }}
        >
          <View>
            <DropdownCountries onChange={this.onCountryChange} />

            <ScrollView>
              <View style={styles.wrapper}>
                {this.state.topPodcasts.map((podcast, i) => (
                  <View key={i} style={styles.item}>
                    <PodcastCard data={podcast} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
