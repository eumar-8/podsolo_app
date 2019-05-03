import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {  View, ScrollView } from "react-native";
import { DropdownCountries, Navbar, PodcastCard } from "../../Components";
import styles from "./HomeScreenStyle"

import { getTopPodcastsForCountry } from "../../api";



export default class HomeScreen extends React.Component {
  state = {
    topPodcasts: []
  };
  static navigationOptions = {
    header: (
      <View style={styles.header}>
        <Navbar />
      </View>
    ),
    headerBackTitle: null
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
