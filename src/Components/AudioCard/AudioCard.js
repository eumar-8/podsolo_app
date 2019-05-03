import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Slider
} from "react-native";
import styles from "./AudioCardStyle"
import Video from "react-native-video";
import { formatTime } from "../../utils";


export default class AudioCard extends React.Component {
  state = {
    paused: true,
    duration: undefined,
    currentTime: undefined
  };

  player = null;

  setDuration = data => {
    this.setState({ duration: data.duration });
  };

  setTime = data => {
    this.setState({ currentTime: data.currentTime });
  };

  onSlide = time => {
    this.setState({ paused: true, currentTime: time });
    // console.log("onslide");
  };

  onSlideComplete = time => {
    this.player.seek(time);
    this.setState({ paused: false });
  };

  componentWillUpdate = nextProps => {
    if (this.props.episode && nextProps.episode !== this.props.episode) {
      this.setState({
        paused: false,
        duration: undefined,
        currentTime: undefined
      });
    }
  };

  render() {
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
              onLoad={this.setDuration} // Callback when video loads
              onProgress={this.setTime} // Callback every ~250ms with currentTime
              style={{}}
            />
          )}
        <TouchableOpacity
          onPress={() => this.setState({ paused: !this.state.paused })}
        >
          {this.state.paused && (
            <Image
              style={styles.button}
              source={require("../../../assets/baseline_play_arrow_black_18dp.png")}
            />
          )}
          {!this.state.paused && (
            <Image
              style={styles.button}
              source={require("../../../assets/baseline_pause_black_18dp.png")}
            />
          )}
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          {this.props.episode && (
            <Text style={styles.title}>{this.props.episode.title}</Text>
          )}
          <View style={{ width: "100%", marginHorizontal: 20 }}>
            <Slider
              onSlidingComplete={this.onSlideComplete}
              maximumValue={this.state.duration}
              value={this.state.currentTime}
              onValueChange={this.onSlide}
            />
          </View>
          {this.state.duration && !this.state.currentTime && (
            <Text style={styles.artist}>{formatTime(this.state.duration)}</Text>
          )}
          {!!this.state.currentTime && (
            <Text style={styles.artist}>
              {formatTime(this.state.currentTime)}
            </Text>
          )}
          {!this.state.duration && <ActivityIndicator />}
        </View>
        <TouchableOpacity>
          <View style={styles.moreButton}>
            <Image
              style={styles.moreButtonIcon}
              source={require("../../../assets/baseline_info_black_18dp.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

