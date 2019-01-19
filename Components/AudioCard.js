import React from "react";
import SeekBar from "./ SeekBar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Video from "react-native-video";

export default class AudioCard extends React.Component {
  state = {
    paused: true,
    duration: null
  };

  player = null;

  setDuration = duration => {
    console.log(duration);
    this.setState({ duration });
  };
  setTime = () => {};

  render() {
    //console.log(this.state.topPodcasts);
    return (
      <View style={styles.container}>
        {this.props.episode &&
          this.props.episode.enclosures[0] &&
          this.props.episode.enclosures[0].url && (
            <Video
              source={{ uri: this.props.episode.enclosures[0].url }} // Can be a URL or a local file.
              ref={ref => {
                this.player = ref;
              }}
              paused={this.state.paused} // Pauses playback entirely.
              onLoad={this.setDuration.bind(this)} // Callback when video loads
              onProgress={this.setTime.bind(this)} // Callback every ~250ms with currentTime
              style={{}}
            />
          )}
        <TouchableOpacity
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          {this.state.paused && (
            <Image
              style={styles.button}
              source={require("../assets/baseline_play_arrow_black_18dp.png")}
            />
          )}
          {!this.state.paused && (
            <Image
              style={styles.button}
              source={require("../assets/baseline_pause_black_18dp.png")}
            />
          )}
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          {this.props.episode && (
            <Text style={styles.title}>{this.props.episode.title}</Text>
          )}
          <View>
            <SeekBar />
          </View>

          {/* <Text style={styles.artist}>{this.state.duration}</Text> */}
        </View>
        <TouchableOpacity>
          <View style={styles.moreButton}>
            <Image
              style={styles.moreButtonIcon}
              source={require("../assets/baseline_info_black_18dp.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: 100,
    width: "100%"
  },
  detailsWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
  artist: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    marginTop: 4
  },
  button: {
    width: 40,
    height: 40
  },
  moreButton: {
    alignItems: "center",
    justifyContent: "center"
  },
  moreButtonIcon: {
    height: 25,
    width: 25
  }
});
