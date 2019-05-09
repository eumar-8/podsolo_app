import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { AudioCard } from "../../Components";
import styles from "./PodcastItemScreenStyle"
import {getTopPodcastForCountry, getEpisodes} from "../../Ducks/podcast";

import {connect} from "react-redux";

 class PodcastItemScreen extends React.Component {
  state = {
    episodePlaying: null
  };

  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam("data", { artistName: "" });
    return {
      title: data.artistName,
      headerStyle: {
        backgroundColor: "#30343f"
      },
      headerTintColor: "#fff"
    };
  };

  renderContent = () => {
      return (
      <View>
        <LinearGradient
          colors={["#3a6186", "#89253e"]}
          style={{ height: "100%" }}
        >
          {this.props.episodes &&
            this.props.episodes.length > 0 &&
            this.renderEpisodeList()}
          <AudioCard
            episode={this.state.episodePlaying || this.props.episodes[0]}
          />
        </LinearGradient>
      </View>
    );
  };

  renderPodcastTitle = () => {
    const data = this.props.selectedPodcast;
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: data.artworkUrl100 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text  style={styles.infoName}>{data.name}</Text>
          {this.props.episodes && this.props.episodes.length > 0 && (
            <Text style={styles.infoEpisodes}>{`${
              this.props.episodes.length
            } Episodes`}</Text>
          )}
        </View>
      </View>
    );
  };

  renderEpisodeList = () => {
    return (
      <FlatList
        ListHeaderComponent={this.renderPodcastTitle()}
        style={{ marginBottom: 100 }}
        data={this.props.episodes.map((item, i) => ({
          ...item,
          key: "key" + i
        }))}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                padding: 20,
                justifyContent: "center",
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
                borderTopColor: index === 0 && "#ccc",
                borderTopWidth: index === 0 && 1
              }}
            >
              <TouchableOpacity onPress={this.playEpisode.bind(this, item)}>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };

  playEpisode = episode => {
    this.setState({ episodePlaying: episode });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
    topPodcasts: state.podcast.topPodcasts,
    episodes:state.podcast.episodes,
    selectedPodcast: state.podcast.selectedPodcast
});

const mapDispatchToProps = dispatch => ({
    getTopPodcastForCountry:(country)=> dispatch(getTopPodcastForCountry(country)),
    getEpisodes: (podcastId)=> dispatch(getEpisodes(podcastId))

});

export default connect(mapStateToProps,mapDispatchToProps)(PodcastItemScreen)


