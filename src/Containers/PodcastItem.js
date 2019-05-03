import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { getEpisodes } from "../api";
import { AudioCard } from "../Components";

export default class PodcastItem extends React.Component {
  state = {
    episodes: false,
    episodePlaying: null
  };

  data = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    return data;
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

  componentDidMount = () => {
    const { navigation } = this.props;
    const data = navigation.getParam("data", {});
    this.setState({ data });
    getEpisodes(data.id).then(episodes => {
      this.setState({ episodes });
    });
  };

  renderContent = () => {
    const { navigation } = this.props;

    return (
      <View>
        <LinearGradient
          colors={["#3a6186", "#89253e"]}
          style={{ height: "100%" }}
        >
          {this.state.episodes &&
            this.state.episodes.length > 0 &&
            this.renderEpisodeList()}
          <AudioCard
            episode={this.state.episodePlaying || this.state.episodes[0]}
          />
        </LinearGradient>
      </View>
    );
  };

  renderPodcastTitle = () => {
    const data = this.props.navigation.getParam("data", {});
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
          <Text style={styles.infoName}>{data.name}</Text>
          {this.state.episodes && this.state.episodes.length > 0 && (
            <Text style={styles.infoEpisodes}>{`${
              this.state.episodes.length
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
        data={this.state.episodes.map((item, i) => ({
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
        {/* <Text>{data.name}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: 192,
    marginTop: 20,
    borderRadius: 4,
    overflow: "hidden"
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 88
  },
  playContainer: {
    height: 100
  },
  infoName: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  infoArtistName: {
    color: "#ffffff",
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "bold"
  },
  infoEpisodes: {
    fontSize: 17,
    color: "#ffff99"
  }
  // playContainer: {
  //   flex: 1,
  //   flexDirection: "row"
  // }
});
