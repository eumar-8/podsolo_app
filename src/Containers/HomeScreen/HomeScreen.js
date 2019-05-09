import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {  View, ScrollView } from "react-native";
import { DropdownCountries, Navbar, PodcastCard } from "../../Components";
import styles from "./HomeScreenStyle"

import { getCountries } from "../../Ducks/app"
import {getEpisodes, getTopPodcastForCountry,getDataSelectedPodcast} from "../../Ducks/podcast"

import {connect} from "react-redux";

class HomeScreen extends React.Component {

  static navigationOptions = {
    header: (
      <View style={styles.header}>
        <Navbar />
      </View>
    ),
    headerBackTitle: null
  };


  render() {
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
            <DropdownCountries
                countries={this.props.countries}
                getTopPodcastForCountry={this.props.getTopPodcastForCountry}
                getCountries={ this.props.getCountries}
                selectedCountry={this.props.selectedCountry}
                onChange={this.onCountryChange}
            />

            <ScrollView>
              <View style={styles.wrapper}>
                {this.props.topPodcasts && this.props.topPodcasts.map((podcast, i) => (

                  <View key={i} style={styles.item}>
                    <PodcastCard
                        episodes={this.props.episodes}
                        getEpisodes = {this.props.getEpisodes}
                        data={podcast}
                        getDataSelectedPodcast={this.props.getDataSelectedPodcast}
                        selectedPodcast={this.props.selectedPodcast}
                    />
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

const mapStateToProps = state => ({
  topPodcasts: state.podcast.topPodcasts,
  selectedCountry:state.app.selectedCountry,
  countries: state.app.countries,
  episodes:state.podcast.episodes,
  selectedPodcast:state.podcast.selectedPodcast

});

const mapDispatchToProps = dispatch => ({
  getTopPodcastForCountry:(country)=> dispatch(getTopPodcastForCountry(country)),
  getCountries:()=> dispatch(getCountries()),
  getEpisodes: (podcastId)=> dispatch(getEpisodes(podcastId)),
  getDataSelectedPodcast:(data)=>dispatch(getDataSelectedPodcast(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

