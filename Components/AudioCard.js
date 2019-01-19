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

export default class AudioCard extends React.Component {
  state = {};

  render() {
    //console.log(this.state.topPodcasts);
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.button}
            source={require("../assets/baseline_play_arrow_black_18dp.png")}
          />
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>titulo</Text>
          <View>
            <SeekBar />
          </View>
          <Text style={styles.artist}>artista</Text>
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
    paddingTop: 24,
    flexDirection: "row",
    paddingLeft: 20,
    alignItems: "center",
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
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
